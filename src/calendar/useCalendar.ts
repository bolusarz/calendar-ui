import { useContext } from "solid-js";
import { CalendarContext } from "~/calendar/CalendarProvider";

export function useCalendar() {
  const ctx = useContext(CalendarContext);

  if (!ctx) {
    throw new Error(
      "useCalendar must be used within a <CalendarContext.Provider />"
    );
  }

  return ctx;
}
