import { createContext } from "@rafty/utils";

export const [ContextMenuProvider, useContextMenuContext] =
  createContext<ContextMenuContext>({
    name: "ContextMenuContext",
    hookName: "useContextMenuContext",
    providerName: "<ContextMenu />",
  });

export interface ContextMenuContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}