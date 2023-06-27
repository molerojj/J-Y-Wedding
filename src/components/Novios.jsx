import style from '../style/Styles.module.css';
import Novio from '../assets/img/groom.jpeg';
import Novia from '../assets/img/bride.jpeg';

const Novios = () => {
    return (
        <div className={style.noviosContainer}>
            <div className={style.novio}>
                <img src={Novio} alt="novio" className={style.imageBg} />
                <p className={style.pNovios}>“You will know you are in love when it doesn’t matter if you sit in heaven or hell with that special someone just as long as they can make you laugh, while you put out the fires.”</p>
                <h3 className={style.names}>MR. SALISBURY - GROOM</h3>
            </div>

            <div className={style.novia}>
                <img src={Novia} alt="novia" className={style.imageBg} />
                <p className={style.pNovios}>“In my heaven sweet melodies of the skies ripple pool of the sea playing sweet song to me, sharing tales of the past, blending with mine as mirage, painting new…I breathe in, am in love and alive…”</p>
                <h3 className={style.names}>MR. SALISBURY - BRIDE</h3>
            </div>
        </div>
    )
}

export default Novios;