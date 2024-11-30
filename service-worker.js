// Function to check and create the "company-event" IndexedDB
function checkAndCreateDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("company-event", 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("events")) {
        db.createObjectStore("events", { keyPath: "id", autoIncrement: true });
      }

      resolve(db);
    };

    request.onsuccess = function (event) {
      const db = event.target.result;
      resolve(db);
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };
  });
}

// Add event to IndexedDB
function saveEventToDatabase(db, eventData) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["events"], "readwrite");
    const objectStore = transaction.objectStore("events");

    const request = objectStore.add(eventData);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (error) => {
      reject(error);
    };
  });
}

// Function to query all events from IndexedDB
function queryEventsFromDatabase(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["events"], "readonly");
    const objectStore = transaction.objectStore("events");
    const request = objectStore.getAll();

    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = function (error) {
      reject(error);
    };
  });
}

// Function to delete an event from IndexedDB
function deleteEventFromDatabase(db, eventId) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["events"], "readwrite");
    const objectStore = transaction.objectStore("events");

    const request = objectStore.delete(eventId);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (error) => {
      reject(error);
    };
  });
}

// Function to check if an event is within the next 60 minutes
function isEventWithinNextHour(timestamp) {
  const eventTime = new Date(timestamp).getTime();
  const currentTime = Date.now();
  const oneHour = 60 * 60 * 1000;

  return eventTime - currentTime <= oneHour && eventTime > currentTime;
}

// Generate a notification and delete the event from the database
async function generateNotification(eventData) {
  const title = eventData.title || "Upcoming Event!";
  const options = {
    body: `Last minutes to apply in "${eventData.title}".`,
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/1200px-Netaji_Subhas_University_of_Technology.svg.png",
    badge:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/1200px-Netaji_Subhas_University_of_Technology.svg.png",
    timestamp: eventData.timestamp,
  };

  if (self.registration) {
    self.registration.showNotification(title, options);

    // Delete the event from the database
    const db = await checkAndCreateDatabase();
    await deleteEventFromDatabase(db, eventData.id);
  }
}

// Event listener for the push event
self.addEventListener("push", (event) => {
  event.waitUntil(
    (async () => {
      try {
        if (!event.data) {
          return;
        }

        const data = event.data.json();

        const options = {
          body: data.body || "You have a new notification.",
          icon:
            data.icon ||
            "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/1200px-Netaji_Subhas_University_of_Technology.svg.png",
          badge:
            data.badge ||
            "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/1200px-Netaji_Subhas_University_of_Technology.svg.png",
          actions: data.actions || [],
          data: data.url || "/",
          requireInteraction: data.requireInteraction || false,
          timestamp: data.timestamp || Date.now(),
        };

        const db = await checkAndCreateDatabase();

        let date = new Date(data?.lastDate);
        await saveEventToDatabase(db, {
          title: data.title,
          timestamp: date.getTime(), // Save timestamp in milliseconds
        });

        self.registration.showNotification(
          data.title || "New Notification",
          options
        );
      } catch (error) {
        console.error(error);
      }
    })()
  );
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        if (clientList.length > 0) {
          let client = clientList[0];
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i];
              break;
            }
          }
          return client.focus();
        }
        return clients.openWindow(event.notification.data);
      })
  );
});

// Periodic sync check
setInterval(async () => {
  try {
    const db = await checkAndCreateDatabase();
    const events = await queryEventsFromDatabase(db);

    // Check each event if it's within the next hour
    events.forEach(async (dbEvent) => {
      if (isEventWithinNextHour(dbEvent.timestamp)) {
        await generateNotification(dbEvent);
      }
    });
  } catch (error) {
    console.error(error); // Changed from reject to console.error
  }
}, 60 * 60 * 1000); // 1 hour interval

// Install event: Register Periodic Sync during the installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    self.registration.periodicSync.register("check-events", {
      minInterval: 60 * 60 * 1000, // Check every hour
    })
  );
});

// Handle the periodic sync event to check for upcoming events
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "check-events") {
    event.waitUntil(
      (async () => {
        try {
          const db = await checkAndCreateDatabase();
          const events = await queryEventsFromDatabase(db);

          // Check each event if it's within the next hour
          events.forEach(async (dbEvent) => {
            if (isEventWithinNextHour(dbEvent.timestamp)) {
              await generateNotification(dbEvent);
            }
          });
        } catch (error) {
          console.error("Error during periodic sync:", error);
        }
      })()
    );
  }
});
