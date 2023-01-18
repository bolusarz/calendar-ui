import {
  addDays,
  addMonths,
  format,
  getDaysInMonth,
  getWeeksInMonth,
  isSameDay,
  isToday,
  isTomorrow,
  isYesterday,
  startOfMonth,
} from "date-fns";
import {
  Component,
  createMemo,
  createSignal,
  For,
  Index,
  mergeProps,
} from "solid-js";

const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

type Prop = {
  value: Date;
  onChange: (newDate: Date) => void;
};

const CalendarRoot: Component<Prop> = (props) => {
  const merged = mergeProps({ value: new Date() }, props);

  const [yearMonth, setYearMonth] = createSignal<Date>(merged.value);
  const nextMonth = () => {
    setYearMonth((val) => addMonths(val, 1));
  };
  const prevMonth = () => {
    setYearMonth((val) => addMonths(val, -1));
  };

  const initCal = (yearMonth: Date): Array<Array<Date>> => {
    const numOfWeeks = getWeeksInMonth(yearMonth);
    const weeks = new Array(numOfWeeks);
    const startDay = new Date(yearMonth.getFullYear(), yearMonth.getMonth());
    for (let i = 0; i < weeks.length; i++) {
      weeks[i] = [null, null, null, null, null, null, null];
    }
    const startIndex = startOfMonth(yearMonth).getDay();
    for (let i = 0; i < weeks.length; i++) {
      for (let j = 0; j < 7; j++) {
        weeks[i][j] = addDays(startDay, 7 * i + j - startIndex);
      }
    }
    return weeks;
  };

  const weeks = createMemo<Array<Array<Date>>>(() => initCal(yearMonth()));

  return (
    <div class="max-w-[248px] ">
      <div class="flex justify-between items-center pl-2">
        <p>{format(yearMonth(), "MMMM yyyy")}</p>
        <div class="flex">
          <button
            onClick={prevMonth}
            class="rounded-[50%] flex p-2 text-sm hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]"
          >
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextMonth}
            class="rounded-[50%] flex p-2 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]"
          >
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div class={`grid grid-rows-${weeks().length} gap-2 cursor-pointer`}>
        <div class="grid grid-cols-7">
          <For each={dayNames}>
            {(day) => (
              <p class="text-xs w-[25px] h-[25px] font-medium text-gray-400 items-center flex justify-center">
                {day}
              </p>
            )}
          </For>
        </div>
        <Index each={weeks()}>
          {(week, index) => (
            <div class="grid grid-cols-7">
              <Index each={week()}>
                {(day) => (
                  <button
                    onClick={[props.onChange, day()]}
                    class={`rounded-[50%] w-[25px] h-[25px] flex items-center justify-center hover:bg-gray-300 text-xs ${
                      isSameDay(day(), props.value)
                        ? "bg-sky-300 hover:bg-sky-300"
                        : ""
                    } ${
                      day().getMonth() !== yearMonth().getMonth()
                        ? "font-light"
                        : "font-medium"
                    }`}
                  >
                    {day()?.getDate() || ""}
                  </button>
                )}
              </Index>
            </div>
          )}
        </Index>
      </div>
    </div>
  );
};

export default CalendarRoot;
