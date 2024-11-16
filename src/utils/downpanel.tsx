import FilterBar from "@components/filterBar";
import FilterBarContract from "@components/filterBarContract";

export const enum EDownPanelKeys {
  CONSTRUCTOR = "/home/constructor",
  PARTNERS = "/home/partners",
  REESTER = "/home/reester",
}

export const downPanel: Record<EDownPanelKeys, JSX.Element> = {
  [EDownPanelKeys.CONSTRUCTOR]: <FilterBar />,
  [EDownPanelKeys.PARTNERS]: <FilterBar />,
  [EDownPanelKeys.REESTER]: <FilterBarContract />,
};
