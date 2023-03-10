import { Component, createSignal } from "solid-js";
import Select from "~/components/Select";
import { useFirebaseApp } from "~/firebase/useFirebaseApp";
import { useAuth } from "~/firebase/useAuth";
import { getAuth } from "firebase/auth";
import { useCalendar } from "~/calendar/useCalendar";

type Prop = {};

const Header: Component<Prop> = () => {
  const [value, setValue] = createSignal<string>("Day");
  const app = useFirebaseApp();
  const state = useAuth(getAuth(app));
  200;

  const ctx = useCalendar();

  return (
    <nav class="border-b p-2 flex items-center">
      <div class="flex items-center min-w-[238px] whitespace-nowrap">
        <button class="p-3 mx-1 overflow-hidden flex rounded-[50%] hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div class="flex items-center">
          <span class="inline-block">
            <img
              src="/calendar_17_2x.png"
              role="presentation"
              width="40"
              height="40"
              class="pr-2"
            />
          </span>
          <p class="text-xl font-mono">Calendar</p>
        </div>
      </div>
      <div class="flex justify-between w-full items-center">
        <div class="flex gap-4">
          <button
            onClick={[ctx.setDate, new Date()]}
            class="py-2 px-5 mr-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Today
          </button>
          <span class="flex items-center">
            <button class="rounded-[50%] flex p-2 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="rounded-[50%] flex p-2 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </span>
        </div>
        <div class="flex gap-3 items-center">
          <button class="rounded-[50%] flex p-2 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
            <span class="material-symbols-outlined">search</span>
          </button>
          <button class="rounded-[50%] flex p-2 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
            <span class="material-symbols-outlined">help</span>
          </button>
          <button class="rounded-[50%] flex p-2 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
            <span class="material-symbols-outlined">settings</span>
          </button>
          <Select value={value()} onItemSelected={setValue}>
            <option class="hover:bg-gray-200">Day</option>
            <option class="hover:bg-gray-200">Week</option>
          </Select>
        </div>
      </div>
      {state() && (
        <button class="rounded-[50%]  ml-7 mr-3 flex p-1 hover:bg-[rgba(60,64,67,.1)] active:bg-[rgba(60,64,67,.1)] focus:bg-[rgba(60,64,67,.1)]">
          <img
            src={state()?.photoURL?.replace("=s96-c", "") || ""}
            class="rounded-full"
            width={48}
            height={48}
          />
        </button>
      )}
    </nav>
  );
};

export default Header;
