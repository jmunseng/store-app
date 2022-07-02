import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
// import React, { useEffect, useState } from 'react';

// // export default function useLocalStorage<T>(
// //   key: string,
// //   initialvalue: T | (() => T)
// // ) {}

// const useLocalStorage = <T>(key: string, initialvalue: T | (() => T)) => {
//   const [value, setValue] = useState<T>(() => {
//     const jsonValue = localStorage.getItem(key);
//     if (jsonValue != null) {
//       return JSON.parse(jsonValue);
//     }
//     if (typeof initialvalue === 'function') {
//       return initialvalue as () => T;
//     } else {
//       initialvalue;
//     }
//   });

// 	@@ -23,6 +17,4 @@ const useLocalStorage = <T>(key: string, initialvalue: T | (() => T)) => {
//   }, [key, value]);

//   return [value, setValue] as [typeof value, typeof setValue];
// };

// export default useLocalStorage;
