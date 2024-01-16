import { ButtonProps } from "../../models";
import button from './button.module.scss'

function Button({ text, onClick }:ButtonProps) {
    return (
        <button className={`${button.btnPrimary}`} onClick={onClick}>
            { text }
        </button>
    );
}

export default Button;