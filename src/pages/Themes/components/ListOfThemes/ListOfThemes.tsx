import { themes } from "../../models";
import Theme from "./components/Theme";
import list from "./list.module.scss";

function ListOfThemes() {
  return (
    <div className={list.listOfThemes}>
      {themes.map((theme) => (
        <Theme key={theme.to} title={theme.name} to={theme.to} image={theme.image} />
      ))}
    </div>
  );
}

export default ListOfThemes;
