import { createContext } from "@rhinobase/utils";

export const [NavigationMenuProvider, useNavigationMenuContext] =
  createContext<NavigationMenuContext>({
    name: "NavigationMenuContext",
    hookName: "useNavigationMenuContext",
    providerName: "<NavigationMenu />",
  });

export interface NavigationMenuContext {
  size?: "sm" | "base" | "lg";
}
