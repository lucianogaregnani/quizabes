import { Link } from 'react-router-dom';
import theme from './theme.module.scss'
import { ThemeProps } from '../models';

function Theme({ title, image, to }:ThemeProps) {
    return (
        <Link className={theme.themeArticle} to={to}>
            <h4>{title}</h4>
            <img src={image} alt={`${title} logo`} />
        </Link>
    );
}

export default Theme;