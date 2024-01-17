import { themes } from "../../models";
import { splitArray } from "../../utils/splitArray.utils";
import CarrouselLayout from "./CarrouselLayout";
import Theme from "./components/Theme";
import useCarousel from "./hooks/useCarousel";
import list from "./list.module.scss";

function ListOfThemes() {
  const { goToNextPage, goToPreviousPage, selectedItem } = useCarousel({ items: splitArray(themes, 6) })

  return (
    <CarrouselLayout goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}>
      <div className={list.listOfThemes}>
        {selectedItem.map((theme) => (
          <Theme
            key={theme.to}
            title={theme.name}
            to={theme.to}
            image={theme.image}
          />
        ))}
      </div>
    </CarrouselLayout>
  );
}

export default ListOfThemes;
