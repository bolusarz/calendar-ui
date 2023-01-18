import {
  children,
  Component,
  createEffect,
  createSignal,
  Show,
  useTransition,
} from "solid-js";
import { Portal } from "solid-js/web";
import "animate.css";

type Prop = {
  children: any;
  value: any;
  onItemSelected: (value: any) => void;
};

const Select: Component<Prop> = (props) => {
  const [show, setShow] = createSignal<boolean>(false);
  const c = children(() => props.children);

  const handleOnClick = () => {
    setShow((s) => !s);
  };

  createEffect(() =>
    (c() as Array<any>).forEach((item) => {
      item.style.padding = "10px";
      item.addEventListener("click", (evt: Event) => {
        evt.stopPropagation();
        props.onItemSelected(evt.target?.value);
        handleOnClick();
      });
    })
  );

  return (
    <div
      onClick={handleOnClick}
      class="relative gap-3 min-w-[80px] h-[40px] cursor-pointer py-2 px-2 mr-2 text-base font-mono text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
    >
      <div class="flex w-full justify-between items-center">
        <span>{props.value}</span>
        <span class="material-symbols-outlined text-gray-900">
          arrow_drop_down
        </span>
      </div>
      <Show when={show()}>
        <div class="absolute z-[2] top-[50px] left-[0px] min-w-[150px] bg-white shadow-lg">
          {c()}
        </div>
      </Show>
    </div>
  );
};

export default Select;
