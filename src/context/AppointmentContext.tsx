// app/context/AppointmentContext.tsx
import { createContext, FC, ReactNode, useContext, useState } from "react";

// Typy stavu objednávky
interface AppointmentState {
  name: string;
  email: string;
  date: string;
  message: string;
}

// Typy pre AppointmentContext
interface AppointmentContextType {
  appointment: AppointmentState;
  setAppointment: (appointment: AppointmentState) => void;
}

// Inicializácia predvoleného stavu
const defaultAppointmentState: AppointmentState = {
  name: "",
  email: "",
  date: "",
  message: ""
};

// Vytvorenie kontextu
const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

// Poskytovateľ pre AppointmentContext
export const AppointmentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [appointment, setAppointment] = useState<AppointmentState>(defaultAppointmentState);

  const updateAppointment = (newAppointment: AppointmentState) => {
    setAppointment(newAppointment);
  };

  return (
    <AppointmentContext.Provider value={{ appointment, setAppointment: updateAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Vlastný hook pre použitie AppointmentContext
export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
};
