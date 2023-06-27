import style from '../style/Styles.module.css';
import Logo from '../assets/img/Logo.png';
import Rings from '../assets/img/rings.jpg'

const Venue = () => {
    return (
        <div id="venue" className={style.venueContainer}>
            <div className={style.venueLeft}>
                <img src={Logo} alt="logo-j&y" style={{width: "55px"}} />
                <h2 className={style.titleH2}>The Venue</h2>
                <hr className={style.whiteHr} />
                <p className={style.parrafo2}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <p className={style.parrafo2}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam cupidatat.</p>
            </div>
            <div className={style.venueRigth}>
                <img src={Rings} alt="anillos" style={ {height: "800px"}} />
            </div>
        </div>
    )
}

export default Venue;