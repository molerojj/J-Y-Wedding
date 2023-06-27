import style from '../style/Styles.module.css';
import LogoBrown from '../assets/img/Logo-brown.png';
import foto1 from '../assets/img/gallery_01.jpeg';
import foto2 from '../assets/img/gallery_02.jpeg';
import foto3 from '../assets/img/gallery_03.jpeg';
import foto4 from '../assets/img/gallery_04.jpeg';
import foto5 from '../assets/img/gallery_05.jpeg';
import foto6 from '../assets/img/gallery_06.jpeg';

const Gallery = () => {
    return (
        <div id="gallery">
            <div className={style.top}>
                <img src={LogoBrown} className={style.logoBrown} alt="logo-brown-j&ylogo" />
                <h2>Photo Gallery</h2>
                <hr className='hr' />
                <p className={style.parrafo}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className={style.gallery}>
                <img src={foto1} alt="foto1" className={style.image} />
                <img src={foto2} alt="foto2" className={style.image} />
                <img src={foto3} alt="foto3" className={style.image} />
                <img src={foto4} alt="foto4" className={style.image} />
                <img src={foto5} alt="foto5" className={style.image} />
                <img src={foto6} alt="foto6" className={style.image} />
            </div>
        </div>
    )
}

export default Gallery;