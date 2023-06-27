import Logo from '../assets/img/Logo.png';
import style from '../style/Styles.module.css'

const Header = () => {
    return (
        <section id='home' className={style.header}>
            <div className={style.container}>
                <img src={Logo} alt="logo-j&y" style={{width: "280px"}} />
                <h1 className={style.title}>Mr. & Mrs. Salisbury</h1>
                <span className={style.subtitle}>Invite you to our wedding on 10-14-2023 at 3pm</span>
                <button className='button'>RSVP NOW</button>
            </div>
        </section>
    )
}

export default Header;