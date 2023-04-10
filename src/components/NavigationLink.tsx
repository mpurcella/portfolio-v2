import { Link } from 'react-router-dom';

type NavigationLinkProps = {
    url: string;
    label: string;
    onClick?: () => void;
};
const NavigationLink = ({ url, label, onClick }: NavigationLinkProps) => {
    return (
        <Link to={url} className="navigation-link-primary" reloadDocument onClick={onClick}>
            {label}
        </Link>
    );
};

export default NavigationLink;
