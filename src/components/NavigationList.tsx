import { v4 as uuidv4 } from 'uuid';
import NavigationLink from './NavigationLink';

type NavigationListProps = {
    onClick?: () => void;
};

const navLinks = [
    {
        id: uuidv4(),
        url: '#',
        label: 'About',
    },
    {
        id: uuidv4(),
        url: '#',
        label: 'Technologies',
    },
    {
        id: uuidv4(),
        url: '#',
        label: 'Work',
    },
    {
        id: uuidv4(),
        url: '#',
        label: 'Contact',
    },
];

const NavigationList = ({ onClick }: NavigationListProps) => {
    return (
        <ul className="flex flex-col items-center gap-28 md:flex-row">
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
