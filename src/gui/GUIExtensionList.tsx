import type { FC } from "react";
import type { ExtensionFilter } from "../db/useExtensionState";
import GUIExtension from "./GUIExtension";
import { useExtensionState } from "../db/useExtensionState";
import { c } from "./Util";

interface GUIButtonFilterProperties {
  label: string;
  isActive: boolean;
  onFilter(): void;
}

const GUIButtonFilter: FC<GUIButtonFilterProperties> = ({ label, isActive, onFilter }) => {
  return (
    <button
      className={
        c(
          "h-10 px-4 {0} border rounded-full font-medium",
          { on: "bg-red-700 text-white border-transparent", off: "bg-white border-neutral-300", condition: isActive }
        )
      }
      onClick={onFilter}
    >
      {label}
    </button>
  );
}

interface GUIExtensionFilterProperties {
  filter: ExtensionFilter;
  onFilter(kind: ExtensionFilter): void;
}

function GUIExtensionFilter({ filter, onFilter }: GUIExtensionFilterProperties) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl text-neutral-900 font-black">Extensions List</h2>
      <div className="flex flex-wrap gap-4">
        <GUIButtonFilter label="All" isActive={filter === "ALL"} onFilter={() => onFilter("ALL")} />
        <GUIButtonFilter label="Active" isActive={filter === "ACTIVE"} onFilter={() => onFilter("ACTIVE")} />
        <GUIButtonFilter label="Inactive" isActive={filter === "INACTIVE"} onFilter={() => onFilter("INACTIVE")} />
      </div>
    </div>
  );
}

export default function GUIExtensionList() {
  const { filteredList, filter, setFilter, remove, toggle } = useExtensionState();
  return (
    <section className="w-full grid gap-8">
      <GUIExtensionFilter filter={filter} onFilter={setFilter} />
      <div className="w-full grid gap-4">
        {filteredList.map((it) => (
          <GUIExtension
            key={it.name}
            it={it}
            onRemove={remove}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  );
}