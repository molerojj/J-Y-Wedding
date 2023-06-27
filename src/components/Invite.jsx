import { Link } from "react-router-dom";
import style from '../style/Styles.module.css';

const Invite = () => {
	return (
		<div className={style.invite}>
			<h2>Mr. & Mrs. Salisbury have the honor of inviting you to their wedding on <span className={style.resalt}>10/14/2023</span> At <span className={style.resalt}>3:00pm</span> At The Lincoln Cathedral, Rockport, Maine.</h2>
			<p className={style.parrafo}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
			<p className={style.parrafo}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className={style.links}>
				<Link className={style.linkStyle}>MORE DETAILS</Link>
				<p>|</p>
				<Link className={style.linkStyle}>RSVP NOW</Link>
			</div>
		</div>
	)
}

export default Invite;