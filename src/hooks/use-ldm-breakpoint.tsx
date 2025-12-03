import * as React from "react";

const LDM_BREAKPOINT = 700;

export function useLdmBreakpoint() {
  const [isBelow700px, setIsBelow700px] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${LDM_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsBelow700px(window.innerWidth < LDM_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsBelow700px(window.innerWidth < LDM_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isBelow700px;
}