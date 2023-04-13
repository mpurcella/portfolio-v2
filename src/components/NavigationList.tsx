import { v4 as uuidv4 } from 'uuid';
import NavigationLink from './NavigationLink';

type NavigationListProps = {
    onClick: () => void;
    isScreenWide: boolean;
    focusDisabled: boolean;
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

const NavigationList = ({ onClick, isScreenWide, focusDisabled }: NavigationListProps) => {
    const tabIndex = () => {
        if (!isScreenWide && !focusDisabled) {
            return -1;
        } else {
            return 0;
        }
    };

    return (
        <ul className="flex flex-col items-center gap-40 md:flex-row">
            {navLinks.map((navLink) => {
                return (
                    <li key={navLink.id}>
                        <NavigationLink
                            url={navLink.url}
                            label={navLink.label}
                            onClick={onClick}
                            tabIndex={tabIndex()}
                        />
                    </li>
                );
            })}
            <li key={uuidv4()}>
                <a
                    href="/documents/mike_purcella_resume.pdf"
                    className="inline-flex rounded-lg bg-purple px-16 py-8 text-24 font-medium lowercase text-white outline-none transition-colors duration-200 ease-linear hover:bg-red focus-visible:bg-red focus-visible:transition-none md:text-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={tabIndex()}
                >
                    <span className="flex items-center gap-12">My Resume</span>
                </a>
            </li>
        </ul>
    );
};

export default NavigationList;
