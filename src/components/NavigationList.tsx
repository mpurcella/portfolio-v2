import { v4 as uuidv4 } from 'uuid';
import NavigationLink from './NavigationLink';

type NavigationListProps = {
    onClick?: () => void;
};

const navLinks = [
    {
        id: uuidv4(),
        url: '#about',
        label: 'About',
    },
    {
        id: uuidv4(),
        url: '#projects',
        label: 'projects',
    },
    {
        id: uuidv4(),
        url: '#contact',
        label: 'Contact',
    },
];

const NavigationList = ({ onClick }: NavigationListProps) => {
    return (
        <ul className="flex flex-col items-center gap-40 md:flex-row">
            {navLinks.map((navLink) => {
                return (
                    <li key={navLink.id}>
                        <NavigationLink url={navLink.url} label={navLink.label} onClick={onClick} />
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationList;
