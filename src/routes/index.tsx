import CalendarRoot from "~/components/calendar/CalendarRoot";
import { useCalendar } from "~/calendar/useCalendar";

export default function Home() {
  const ctx = useCalendar();

  console.log(ctx.currentDate);

  return (
    <div class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <CalendarRoot value={ctx.currentDate()} onChange={ctx.setDate} />
    </div>
  );
}
