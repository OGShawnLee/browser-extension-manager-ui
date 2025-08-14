import type { Extension } from "../business/Extension";
import data from "./data.json";
import { useMemo, useState } from "react";

export type ExtensionFilter = "ALL" | "ACTIVE" | "INACTIVE";

export function useExtensionState() {
  const [list, setList] = useState(data as Extension[]);
  const [filter, setFilter] = useState<ExtensionFilter>("ALL");
  const filteredList = useMemo(() => {
    if (filter === "ALL") {
      return list;
    }
    
    if (filter === "ACTIVE") {
      return list.filter((it) => it.isActive);
    }

    return list.filter((it) => !it.isActive);
  }, [filter, list]);
  return {
    filter,
    filteredList,
    setFilter,
    toggle(extension: Extension) {
      setList((list) => {
        return list.map((it) => {
          if (it.name === extension.name) {
            return { ...it, isActive: !it.isActive };
          }
          
          return it;
        });
      });
    },
    remove(extension: Extension) {
      setList((list) => {
        return list.filter((it) => it.name !== extension.name);
      });
    }
  }
}