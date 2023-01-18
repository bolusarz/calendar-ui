import {
  Accessor,
  Component,
  createContext,
  createSignal,
  JSX,
} from "solid-js";

export type Calendar = {
  currentDate: Accessor<Date>;
  setDate: (date: Date) => void;
};

export const CalendarContext = createContext<Calendar>();

type Props = {
  children: JSX.Element;
};

export const CalendarProvider: Component<Props> = (props) => {
  const [currentDate, setCurrentDate] = createSignal<Date>(new Date());

  return (
    <CalendarContext.Provider value={{ currentDate, setDate: setCurrentDate }}>
      {props.children}
    </CalendarContext.Provider>
  );
};
