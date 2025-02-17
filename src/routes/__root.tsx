import { Outlet, createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "src/components/root-layout";
import { ThemeProvider } from "src/components/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RootLayout>
        <Outlet />
      </RootLayout>
    </ThemeProvider>
  );
}
