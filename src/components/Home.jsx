import style from '../style/Styles.module.css';
import FotoBoda1 from '../assets/img/foto-boda-1.jpg'
import FotoBoda2 from '../assets/img/dama.jpg'
import FotoBoda3 from '../assets/img/foto-boda-3.jpg'
import '../index.css'

/** Import Components */
import Header from './Header';
import Navbar from './Navbar';
import Invite from './Invite';
import Timing from './Timing';
import Venue from './Venue';
import LoveStory from './LoveStory';
import Gallery from './Gallery';
import Novios from './Novios';
import Together from './Together';
import Details from './Details';
import SaveTheDay from './SaveTheDay';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Invite />
            <section className='fotoBoda1'>
                <img src={FotoBoda1} className={style.fotoBoda1}></img>
            </section>
            <Timing />
            <Venue />
            <LoveStory />
            <section className='fotoBoda2'>
                <img src={FotoBoda2} className={style.fotoBoda1}></img>
            </section>
            <Gallery />
            <Novios />
            <Together />
            <section className='fotoBoda3'>
                <img src={FotoBoda3} className={style.fotoBoda1}></img>
            </section>
            <Details />
            <SaveTheDay />
        </>
    )
}

export default Home;