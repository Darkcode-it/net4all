import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// برای رفع خطای 404 در محیط توسعه
if (import.meta.env.DEV) {
  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/net4all/sw.js', { scope: '/net4all/' })
        .then(reg => console.log('SW registered (dev):', reg))
        .catch(err => console.log('SW registration failed (dev):', err))
    }
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)