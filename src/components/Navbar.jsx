import style from '../style/Styles.module.css';
import Logo from '../assets/img/Logo.png';

const Navbar = () => {
    return (
        <div id='invite' className={style.Navbar}>
            <ul>
                <a href='#home' className={style.menu}>HOME</a>
                <a href='#invite' className={style.menu}>INVITE</a>
                <a href='#timing' className={style.menu}>TIMING</a>
                <a href='#venue' className={style.menu}>VENUE</a>
                <img className={style.logo} src={Logo} alt="logo-j&y" />
                <a href='#story' className={style.menu}>STORY</a>
                <a href='#gallery' className={style.menu}>GALLERY</a>
                <a href='#details' className={style.menu}>DETAILS</a>
                <a href='#rsvp' className={style.menu}>RSVP</a>
            </ul>
        </div>
    )
}

export default Navbar