import FilterBar from "@components/filterBar";

export const enum EDownPanelKeys {
  CONSTRUCTOR = "/home/constructor",
  PARTNERS = "/home/partners",
}

export const downPanel: Record<EDownPanelKeys, JSX.Element> = {
  [EDownPanelKeys.CONSTRUCTOR]: <FilterBar />,
  [EDownPanelKeys.PARTNERS]: <FilterBar />,
};
