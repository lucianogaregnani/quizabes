import { Header, Wave } from "..";
import layout from "./layout.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={layout.layout}>
        {children}
        <Wave />
      </main>
    </>
  );
}

export default Layout;
