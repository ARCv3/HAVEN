import { useRef, useEffect } from 'react';

/**
 * Execute asyncronous callback only once when a condition is true after the first render.
 */
const useOnceWhen = (callback: () => Promise<unknown>, condition: boolean = true) => {
  const didInit = useRef(false);

  useEffect(() => {
    // Workaround for init() (not being idempotent + React StrictMode) in local environment
    if (didInit.current || !condition) {
      return;
    }
    didInit.current = true;

    callback().catch((error) => {
      throw error;
    });
  }, [condition]);
};

export default useOnceWhen;
