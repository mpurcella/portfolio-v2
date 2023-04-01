import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
    url: string;
    label: string;
    onClick?: () => void;
};
const NavigationLink = ({ url, label, onClick }: NavigationLinkProps) => {
    return (
        <NavLink to={url} className="navlink-primary" onClick={onClick}>
            {label}
        </NavLink>
    );
};

export default NavigationLink;
