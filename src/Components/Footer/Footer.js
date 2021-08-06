import './Footer.scss';
import tmdb_square from './../../img/tmdb_square.svg'
function Footer() {
    return (
        <div className="footer">
            <ul>
                <li><a href="#">Nomdev Movie Singapore</a></li>
                <li><a href="#"><img src={tmdb_square} alt="Tmdb Logo" /> </a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
    );
}

export default Footer;