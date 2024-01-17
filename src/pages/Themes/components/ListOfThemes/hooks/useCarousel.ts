import { useState } from "react";
import { Themes } from "../../../models";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useCarousel({ items }: { items: Themes[][] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const goToNextPage = () => {
      const nextIndex = currentPage > 0 ? currentPage - 1 : items.length - 1;
      setCurrentPage(nextIndex);
      setSelectedItem(items[nextIndex]);
};

const goToPreviousPage = () => {
      const previousIndex = currentPage < items.length - 1 ? currentPage + 1 : 0;
      setCurrentPage(previousIndex);
      setSelectedItem(items[previousIndex]);
  };

  return { goToNextPage, goToPreviousPage, selectedItem };
}

export default useCarousel;
