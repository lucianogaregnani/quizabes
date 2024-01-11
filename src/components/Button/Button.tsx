import { ButtonProps } from "../../models";
import button from './button.module.scss'

function Button({ text }:ButtonProps) {
    return (
        <button className={`${button.btnPrimary}`}>
            { text }
        </button>
    );
}

export default Button;