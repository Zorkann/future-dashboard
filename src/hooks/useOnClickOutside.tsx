import { useEffect, useRef } from "react";

export function useOnClickOutside<T extends HTMLElement>(
  callback: (event: MouseEvent | TouchEvent) => void
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClick, true);
    document.addEventListener("touchstart", handleClick, true);

    return () => {
      document.removeEventListener("mousedown", handleClick, true);
      document.removeEventListener("touchstart", handleClick, true);
    };
    // TODO: CALLBACK SHOULD BE MEMOIZED
  }, [callback, ref]);

  return ref;
}
