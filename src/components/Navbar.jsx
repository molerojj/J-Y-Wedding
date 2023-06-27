import style from '../style/Styles.module.css';
import Logo from '../assets/img/Logo.png';

const Navbar = () => {
    return (
        <nav id='invite' className={`navbar navbar-expand-lg ${style.Navbar}`}>
            <div className="container-fluid">
                <button className={`navbar-toggler bg-white ${style.buttonToggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ${style.navUl}`}>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                        </li>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#invite">INVITE</a>
                        </li>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#timing">TIMING</a>
                        </li>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#venue">VENUE</a>
                        </li>
                        <img className={style.logo} src={Logo} alt="logo-j&y" />
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#story">STORY</a>
                        </li>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#gallery">GALLERY</a>
                        </li>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#details">DETAILS</a>
                        </li>
                        <li className={`nav-item ${style.menu}`}>
                            <a className="nav-link active" aria-current="page" href="#rsvp">RSVP</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        // <div id='invite' className={style.Navbar}>
        //     <ul>
        //         <a href='#home' className={style.menu}>HOME</a>
        //         <a href='#invite' className={style.menu}>INVITE</a>
        //         <a href='#timing' className={style.menu}>TIMING</a>
        //         <a href='#venue' className={style.menu}>VENUE</a>
        //         <img className={style.logo} src={Logo} alt="logo-j&y" />
        //         <a href='#story' className={style.menu}>STORY</a>
        //         <a href='#gallery' className={style.menu}>GALLERY</a>
        //         <a href='#details' className={style.menu}>DETAILS</a>
        //         <a href='#rsvp' className={style.menu}>RSVP</a>
        //     </ul>
        // </div>
    )
}

export default Navbar;