import { ListOfThemes } from "./components";
import themes from "./themes.module.scss"

function Themes() {
  return (
    <section className={themes.themesSection}>
      <h1>Choose the theme you like the most!</h1>
      <ListOfThemes />
    </section>
  );
}

export default Themes;
