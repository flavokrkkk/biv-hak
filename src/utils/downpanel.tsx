import FilterBar from "@components/filterBar";

export const enum EDownPanelKeys {
  FILTER = "/home/constructor",
}

export const downPanel: Record<EDownPanelKeys, JSX.Element> = {
  [EDownPanelKeys.FILTER]: <FilterBar />,
};
