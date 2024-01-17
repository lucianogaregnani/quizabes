import { Link } from 'react-router-dom';
import { ButtonIcon } from '..';
import { ButtonBgColors } from '../../models';
import header from './header.module.scss'
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

function Header() {
    return (
        <header className={header.headerSection}>
            <Link to='/'>
                Quizabes
            </Link>
            <div>
                <ButtonIcon bgColor={ButtonBgColors.Blue} icon={<FaLinkedinIn />} to='https://www.linkedin.com/in/luciano-garegnani-33451920a/' />
                <ButtonIcon bgColor={ButtonBgColors.White} icon={<TbBrandGithubFilled color="black" />} to='https://github.com/lucianogaregnani' />
            </div>
        </header>
    );
}

export default Header;