import React, { useEffect, useState } from 'react';

// export default function useLocalStorage<T>(
//   key: string,
//   initialvalue: T | (() => T)
// ) {}

const useLocalStorage = <T>(key: string, initialvalue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialvalue === 'function') {
      return (initialvalue as () => T)();
    } else {
      initialvalue;
    }
  });

  return [value, setValue] as [typeof value, typeof setValue];
};

export default useLocalStorage;
