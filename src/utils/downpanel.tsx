import FilterBarContract from "@components/filterBarContract";

export const enum EDownPanelKeys {
  REESTER = "/home/reester",
}

export const downPanel: Record<EDownPanelKeys, JSX.Element> = {
  [EDownPanelKeys.REESTER]: <FilterBarContract />,
};
