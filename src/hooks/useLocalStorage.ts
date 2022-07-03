import React, { useEffect, useState } from 'react';

// export default function useLocalStorage<T>(
//   key: string,
//   initialvalue: T | (() => T)
// ) {}

const useLocalStorage = <T>(key: string, initialvalue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialvalue === 'function') {
      //  return (initialvalue as unknown as () => T)();
      return (initialvalue as () => T)();
    }

    return initialvalue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};

export default useLocalStorage;
