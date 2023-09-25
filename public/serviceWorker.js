/* eslint-disable no-restricted-globals */

// self.addEventListener("push", (e) => {
//   const options = {
//     body: e.data.text(),
//     icon: "", // Replace with your icon path
//   };

//   e.waitUntil(
//     self.registration.showNotification("New Order Received", options)
//   );
// });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "/" })
    .then(function (registration) {
      // Registration was successful
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch(function (error) {
      // Registration failed
      console.error("Service Worker registration failed:", error);
    });
}

/* eslint-enable no-restricted-globals */
