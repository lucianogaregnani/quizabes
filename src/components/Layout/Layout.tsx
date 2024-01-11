import { Header, Wave } from "..";
import layout from "./layout.module.scss"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={layout.layout}>
      <Header />
      {children}
      <Wave />
    </div>
  );
}

export default Layout;
