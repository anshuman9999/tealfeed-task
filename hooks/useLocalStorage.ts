import { useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, (arg: T) => void] => {
  const isBrowser = typeof window !== "undefined";
  const [value, setValue] = useState(() => {
    if (!isBrowser) return "";
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    if (!isBrowser) return;
    const handleStorageChange = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        e.newValue && setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isBrowser, key]);

  const setValueInLocalStorage = (newValue: T): void => {
    if (!isBrowser) return;
    setValue((currentValue: T) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [value, setValueInLocalStorage];
};

export default useLocalStorage;
