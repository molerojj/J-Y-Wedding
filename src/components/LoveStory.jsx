import style from '../style/Styles.module.css';
import LogoBrown from '../assets/img/Logo-brown.png';
import { BsSuitHeartFill } from 'react-icons/bs';
import foto1 from '../assets/img/circles_01.jpeg';
import foto2 from '../assets/img/circles_02.jpeg';
import foto3 from '../assets/img/circles_03.jpeg';
import foto4 from '../assets/img/circles_04.jpeg';

const LoveStory = () => {
    return (
        <div id="story" className={style.loveStoryContainer}>
            <div className={style.top}>
                <img src={LogoBrown} className={style.logoBrown} alt="logo-brown-j&ylogo" />
                <h2>Our Very Own Love Story</h2>
                <hr className='hr' />
                <p className={style.parrafo}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>

            <div className={style.cards}>
                <div className={style.card}>
                    <img src={foto1} alt="photo-1" className={style.photo} />
                    <div className={style.text}>
                        <BsSuitHeartFill className={style.heart}/>
                        <h3 className={style.titleH3}>WE FIRST MET – SEEMS LIKE YESTERDAY!</h3>
                        <hr style={ {margin: "0px"}} />
                        <p className={style.parrafos3}>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.text}>
                        <BsSuitHeartFill className={style.heart}/>
                        <h3 className={style.titleH3}>WE FINALLY WENT ON A DATE – ONLY TOOK A YEAR!</h3>
                        <hr style={ {margin: "0px"}} />
                        <p className={style.parrafos3}>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <img src={foto2} alt="photo-1" className={style.photo} />
                </div>
                <div className={style.card}>
                    <img src={foto3} alt="photo-1" className={style.photo} />
                    <div className={style.text}>
                        <BsSuitHeartFill className={style.heart}/>
                        <h3 className={style.titleH3}>WE FELL IN LOVE INSTANTLY – WELL ALMOST!</h3>
                        <hr style={ {margin: "0px"}} />
                        <p className={style.parrafos3}>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.text}>
                        <BsSuitHeartFill className={style.heart}/>
                        <h3 className={style.titleH3}>… AND HE FINALLY PROPOSED!</h3>
                        <hr style={ {margin: "0px"}} />
                        <p className={style.parrafos3}>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <img src={foto4} alt="photo-1" className={style.photo} />
                </div>
            </div>
            
        </div>
    )
}

export default LoveStory;