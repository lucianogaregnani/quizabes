import { ButtonBgColors, ButtonIconProps } from "../../models/buttonIcon.models";
import buttonIcon from "./buttonIcon.module.scss"

function ButtonIcon({ icon, bgColor, to }:ButtonIconProps) {
    const bgIcon = bgColor === ButtonBgColors.Blue ? buttonIcon.buttonBlue : buttonIcon.buttonWhite

    return (
        <a className={`${bgIcon} ${buttonIcon.button}`} target="_blank" href={to}>
            {icon}
        </a>
    );
}

export default ButtonIcon;