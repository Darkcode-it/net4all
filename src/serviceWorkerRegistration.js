export function register(config) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `/service-worker.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          // ... (کدهای مدیریت نصب و آپدیت)
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
    });
  }
}