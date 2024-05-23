import { createContext } from "../utils";

export const [TreeViewProvider, useTreeViewContext] =
  createContext<TreeViewContext>({
    name: "TreeViewContext",
    hookName: "useTreeViewContext",
    providerName: "<Card />",
  });

export interface TreeViewContext {
  readonly size: "sm" | "md" | "lg";
}
