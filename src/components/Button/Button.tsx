import { ButtonProps } from "../../models";
import button from './button.module.scss'

function Button({ text, className }:ButtonProps) {
    return (
        <button className={`${button.btnPrimary} ${className}`}>
            { text }
        </button>
    );
}

export default Button;