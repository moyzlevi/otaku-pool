import { useEffect } from "react";

export function useBackgroundBody(className: string) {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  });
}
