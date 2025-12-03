import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLdmBreakpoint } from "@/hooks/use-ldm-breakpoint";

interface LdmContextType {
  isLdmEnabled: boolean;
  isManualToggle: boolean;
  toggleLdm: () => void;
  setManualToggle: (manual: boolean) => void;
}

const LdmContext = createContext<LdmContextType | undefined>(undefined);

interface LdmProviderProps {
  children: ReactNode;
}

export const LdmProvider: React.FC<LdmProviderProps> = ({ children }) => {
  const [isManualToggle, setIsManualToggle] = useState(false);
  const [manualLdmState, setManualLdmState] = useState(false);
  const isBelow700px = useLdmBreakpoint();

  // Determine if LDM should be enabled
  const isLdmEnabled = isManualToggle ? manualLdmState : isBelow700px;

  const toggleLdm = () => {
    if (!isManualToggle) {
      // First manual toggle - switch to manual mode
      setIsManualToggle(true);
      setManualLdmState(!isBelow700px);
    } else {
      // Already in manual mode - just toggle the state
      setManualLdmState(prev => !prev);
    }
  };

  const setManualToggle = (manual: boolean) => {
    setIsManualToggle(manual);
    if (!manual) {
      // Reset to auto mode
      setManualLdmState(false);
    }
  };

  // Reset to auto mode when screen size crosses the 700px threshold
  useEffect(() => {
    if (isManualToggle && isBelow700px) {
      // If user manually disabled LDM but screen goes below 700px, keep manual control
      // This gives users full control over their experience
    }
  }, [isBelow700px, isManualToggle]);

  return (
    <LdmContext.Provider 
      value={{ 
        isLdmEnabled, 
        isManualToggle, 
        toggleLdm, 
        setManualToggle 
      }}
    >
      {children}
    </LdmContext.Provider>
  );
};

export const useLdm = (): LdmContextType => {
  const context = useContext(LdmContext);
  if (!context) {
    throw new Error("useLdm must be used within an LdmProvider");
  }
  return context;
};