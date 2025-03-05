import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/themeProvider";
import { ThemeToggle } from "@/components/themeToggle";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="flex w-full min-w-[600px] items-center justify-between bg-slate-300 p-4 dark:bg-slate-700">
        <h1>Lead Manager v1.0</h1>
        <ThemeToggle />
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  );
}
