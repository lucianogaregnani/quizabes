import { ButtonIcon } from '../../components';
import { ButtonBgColors } from '../../models';
import header from './header.module.scss'
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

function Header() {
    return (
        <header className={header.headerSection}>
            <p>
                Quizabes
            </p>
            <div>
                <ButtonIcon bgColor={ButtonBgColors.Blue} icon={<FaLinkedinIn />} to='https://www.linkedin.com/in/luciano-garegnani-33451920a/' />
                <ButtonIcon bgColor={ButtonBgColors.White} icon={<TbBrandGithubFilled color="black" />} to='https://github.com/lucianogaregnani' />
            </div>
        </header>
    );
}

export default Header;