// Completely unregister service workers and clear caches
(async function() {
  console.log('🔧 Cleaning up service workers and caches...');
  
  // Unregister all service workers
  if ('serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      console.log(`Found ${registrations.length} service worker(s) to unregister`);
      
      for (const registration of registrations) {
        console.log('🗑️ Unregistering service worker:', registration.scope);
        await registration.unregister();
      }
      
      console.log('✅ All service workers unregistered');
    } catch (error) {
      console.error('❌ Service worker cleanup failed:', error);
    }
  }
  
  // Clear all caches
  if ('caches' in window) {
    try {
      const cacheNames = await caches.keys();
      console.log(`Found ${cacheNames.length} cache(s) to clear`);
      
      for (const cacheName of cacheNames) {
        console.log('🗑️ Clearing cache:', cacheName);
        await caches.delete(cacheName);
      }
      
      console.log('✅ All caches cleared');
    } catch (error) {
      console.error('❌ Cache cleanup failed:', error);
    }
  }
  
  console.log('🎉 Cleanup complete! Reloading page...');
  
  // Wait a moment then reload
  setTimeout(() => {
    window.location.reload();
  }, 1000);
})();