import React, { useState, useEffect } from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';
import './pwa.css';
import { register } from '../../serviceWorkerRegistration';
register();

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // Prevent default mini-infobar
      setDeferredPrompt(e);
      setIsVisible(true);
      // Auto-trigger the prompt immediately
      setTimeout(() => {
        e.prompt();
        e.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt (auto)');
          } else {
            console.log('User dismissed the install prompt (auto)');
          }
          setDeferredPrompt(null);
          setIsVisible(false);
        });
      }, 100); // slight delay to ensure UI is ready
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  if (!isVisible) return null;

  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

  return (
    <div className={styles.installPrompt}>
      <div className={styles.installContent}>
        <div className={styles.installIcon}>
          <FaDownload size={24} />
        </div>
        <div className={styles.installText}>
          <h3>نصب اپلیکیشن Net4All</h3>
          <p>برای تجربه بهتر و دسترسی آفلاین، اپلیکیشن ما را نصب کنید</p>
        </div>
        <div className={styles.installButtons}>
          <button 
            className={styles.installButton}
            onClick={handleInstall}
          >
            نصب
          </button>
          <button 
            className={styles.cancelButton}
            onClick={() => setIsVisible(false)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;