import type { Extension } from "../business/Extension";
import type { FC } from "react";
import { c } from "./Util";

interface GUIButtonToggleProperties {
  isActive: boolean;
  onToggle(): void;
}

const GUIButtonToggle: FC<GUIButtonToggleProperties> = ({ isActive, onToggle }) => {
  return (
    <button
      className={
        c(
          "button w-12 h-6 p-0.75 flex items-center {0} rounded-full transition duration-150",
          { on: "bg-red-700 dark:bg-red-500", off: "bg-neutral-200 dark:bg-neutral-600", condition: isActive }
        )
      }
      onClick={onToggle}
    >
      <span
        className={
          c(
            "w-4.5 h-4.5 bg-white rounded-full transform {0} transition duration-150",
            { on: "translate-x-6", off: "translate-x-0", condition: isActive }
          )
        }
      />
      <span className="sr-only">
        {isActive ? "Enable" : "Disable"}
      </span>
    </button>
  );
};

interface GUIExtensionProperties {
  it: Extension,
  onRemove(it: Extension): void,
  onToggle(it: Extension): void
}

const GUIExtension: FC<GUIExtensionProperties> = ({ it, onRemove, onToggle }) => {
  return (
    <article className="w-full p-4 grid gap-6 bg-white border-2 border-neutral-200 rounded-xl shadow-md dark:(bg-neutral-800 border-neutral-700)" key={it.name}>
      <div className="flex items-start gap-4">
        <img className="w-12 h-12 min-h-12" src={it.logo} alt="" />
        <div className="grid gap-2">
          <h3 className="text-xl text-neutral-900 font-bold dark:text-white">{it.name}</h3>
          <p>{it.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="button h-10 px-4 border-2 border-neutral-300 rounded-full dark:border-neutral-600"
          onClick={() => onRemove(it)}
        >
          Remove
        </button>
        <GUIButtonToggle isActive={it.isActive} onToggle={() => onToggle(it)} />
      </div>
    </article>
  )
}

export default GUIExtension;