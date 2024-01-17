import { IoCaretBackOutline, IoCaretForward } from "react-icons/io5";
import list from "./list.module.scss";

interface CarrouselProps {
    children: React.ReactNode,
    goToNextPage: () => void,
    goToPreviousPage: () => void
}

function CarrouselLayout({ children, goToNextPage, goToPreviousPage }: CarrouselProps) {
  return (
    <article className={list.article}>
      <button onClick={goToNextPage} className={list.leftButton}>
        <IoCaretBackOutline />
      </button>
      {children}
      <button onClick={goToPreviousPage} className={list.rightButton}>
        <IoCaretForward />
      </button>
    </article>
  );
}

export default CarrouselLayout;
