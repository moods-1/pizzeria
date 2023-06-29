import { Link } from 'react-router-dom';

const LinkButton = ({ page, className, label }) => {
	return (
		<Link to={`/${page}`}>
			<button className={className}>{label}</button>
		</Link>
	);
};
export default LinkButton;
