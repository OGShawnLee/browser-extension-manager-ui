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
          "w-12 h-6 p-0.75 flex items-center {0} rounded-full font-medium",
          { on: "bg-red-700", off: "bg-neutral-200", condition: isActive }
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
    <article className="w-full p-4 grid gap-4 bg-white border border-neutral-100 rounded-xl shadow-md" key={it.name}>
      <div className="flex items-start gap-4">
        <img className="w-12 h-12 min-h-12" src={it.logo} alt="" />
        <div>
          <h3 className="text-lg text-neutral-900 font-bold">{it.name}</h3>
          <p className="text-neutral-700">{it.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="h-8 px-4 border border-neutral-300 rounded-full font-medium"
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