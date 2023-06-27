import style from '../style/Styles.module.css';
import LogoBrown from '../assets/img/Logo-brown.png';

/** Import React Icons */
import { GiLinkedRings } from 'react-icons/gi';
import { BsFillTriangleFill } from 'react-icons/bs';

/** Import Photos Gallery */
import foto1 from '../assets/img/wedding.png';
import foto2 from '../assets/img/photos.png';
import foto3 from '../assets/img/dinner.png';
import foto4 from '../assets/img/reception.png';

const Timing = () => {
    return (
        <div id='timing' className={style.timingContainer}>
            <div className={style.top}>
                <img src={LogoBrown} className={style.logoBrown} alt="logo-brown-j&ylogo" />
                <h2>Our Wedding Day</h2>
                <hr className={style.hrTop} />
                <p className={style.parrafo}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>

            <div className={style.timingData}>

                <div className={style.timingEvent}>
                    <div className={style.event}>
                        <img src={foto1} alt="foto-boda" />
                        <div className={style.timer}>
                            <p>1pm - 3pm Wedding</p>
                        </div>
                        <BsFillTriangleFill className={style.triangle} />  
                    </div>

                    <div className={style.event}>
                        <img src={foto3} alt="foto-boda" />
                        <div className={style.timer}>
                            <p>4pm - 7pm Dinner</p>
                        </div>
                        <BsFillTriangleFill className={style.triangle} />
                    </div>
                </div>

                <div className={style.timingCenter}>
                    <GiLinkedRings className={style.iconRings} />
                    <div className={style.date}>
                        <p>October 2023</p>
                    </div>
                    <hr className={style.hrVertical} />
                </div>

                <div className={style.timingEvent}>
                    <div className={style.event}>
                        <img src={foto2} alt="foto-boda" />
                        <div className={style.timer}>
                            <p>3pm - 4pm Photos</p>
                        </div>
                        <BsFillTriangleFill className={style.triangle2} />
                    </div>

                    <div className={style.event}>
                        <img src={foto4} alt="foto-boda" />
                        <div className={style.timer}>
                            <p>7pm - 11pm Reception</p>
                        </div>
                        <BsFillTriangleFill className={style.triangle2} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Timing