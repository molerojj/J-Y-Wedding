import style from '../style/Styles.module.css';
import LogoBrown from '../assets/img/Logo-brown.png';

const Together = () => {
    return (
        <div className={style.togetherContainer}>
            <div className={style.top}>
                <img src={LogoBrown} className={style.logoBrown} alt="logo-brown-j&ylogo" />
                <h2>Together Forever</h2>
                <hr className='hr' />
                <p className={style.parrafo}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
        </div>
    )
}

export default Together;