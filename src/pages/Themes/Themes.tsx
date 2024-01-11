import { ListOfThemes } from "./components";
import themes from "./themes.module.scss"

function Themes() {
  return (
    <section className={themes.themesSection}>
      <h1>Choose <span>the theme</span> you like the most<span>!</span></h1>
      <ListOfThemes />
    </section>
  );
}

export default Themes;
