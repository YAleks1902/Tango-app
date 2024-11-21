import { useRef, useEffect } from 'react';

export function useDebounce<A = unknown>(
  func: (args: A) => void,
  delay = 1000
) {
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (args: A) => {
    const newTimer = setTimeout(() => {
      func(args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };

  return debouncedFunction;
}
