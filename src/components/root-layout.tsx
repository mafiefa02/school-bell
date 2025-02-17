import { Copyright } from "src/components/copyright";
import { Header } from "src/components/header";

export const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-y-auto p-6">{children}</main>
      <Copyright />
    </div>
  );
};
