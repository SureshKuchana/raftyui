import { createContext } from "@rhinobase/utils";

export const [MenuProvider, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
  hookName: "useMenuContext",
  providerName: "<Menu />",
});

export interface MenuContext {
  size?: "sm" | "base" | "lg";
}
