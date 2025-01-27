// // src/components/hooks/useCalendar.ts

// import { useState } from "react";

// // Základný hook na správu kalendára
// export const useCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

//   // Funkcia na nastavenie vybraného dátumu
//   const selectDate = (date: Date) => {
//     setSelectedDate(date);
//   };

//   // Funkcia na zmenu mesiaca
//   const changeMonth = (increment: number) => {
//     const newMonth = new Date(currentMonth);
//     newMonth.setMonth(currentMonth.getMonth() + increment);
//     setCurrentMonth(newMonth);
//   };

//   return {
//     selectedDate,
//     currentMonth,
//     selectDate,
//     changeMonth
//   };
// };
