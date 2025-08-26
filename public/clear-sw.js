// Script to clear service worker cache - run in browser console
(async function clearServiceWorker() {
  console.log('Clearing service worker...');
  
  // Unregister all service workers
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      console.log('Unregistering service worker:', registration.scope);
      await registration.unregister();
    }
  }
  
  // Clear all caches
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    for (const cacheName of cacheNames) {
      console.log('Deleting cache:', cacheName);
      await caches.delete(cacheName);
    }
  }
  
  console.log('Service worker and caches cleared. Please reload the page.');
  
  // Reload the page
  window.location.reload();
})();