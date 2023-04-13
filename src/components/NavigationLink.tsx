import { Link } from 'react-router-dom';

type NavigationLinkProps = {
    url: string;
    label: string;
    onClick?: () => void;
    tabIndex: number;
};
const NavigationLink = ({ url, label, onClick, tabIndex }: NavigationLinkProps) => {
    return (
        <Link
            to={url}
            className="navigation-link-primary"
            reloadDocument
            onClick={onClick}
            tabIndex={tabIndex}
        >
            {label}
        </Link>
    );
};

export default NavigationLink;
