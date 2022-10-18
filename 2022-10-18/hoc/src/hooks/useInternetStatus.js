import { useState, useEffect } from 'react';

const useInternetStatus = () => {
  const [status, setStatus] = useState(true);

  const internetOn = () => {
    setStatus(true);
  }

  const internetOff = () => {
    setStatus(false);
  }

  useEffect(_ => {
    window.addEventListener('online', internetOn);
    window.addEventListener('offline', internetOff);

    return _ => {
      window.removeEventListener('online', internetOn);
      window.removeEventListener('offline', internetOff);
    }
  }, []);

  return status;
}

export default useInternetStatus;