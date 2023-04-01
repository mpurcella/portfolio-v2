import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Rose from '../components/Rose';
import HamburgerButton from '../components/HamburgerButton';
import NavigationList from '../components/NavigationList';
import SocialList from '../components/SocialList';

const useMediaQuery = (mediaQuery: string) => {
    const [mql] = useState(() => window.matchMedia(mediaQuery));
    const [matches, setMatches] = useState(mql.matches);

    useEffect(() => {
        const screenResize = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mql.addEventListener('change', screenResize);

        return () => {
            mql.removeEventListener('change', screenResize);
        };
    }, [mql]);

    return matches;
};

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(() => false);
    const isScreenWide = useMediaQuery('(min-width: 768px)');

    const handleIsNavOpen = () => {
        setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        if (isScreenWide) {
            setIsNavOpen(false);
        }
    }, [isScreenWide]);

    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isNavOpen]);

    return (
        <header className="z-40 bg-black-300 px-20 py-28 md:px-60">
            <nav className="flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-12" onClick={closeNav}>
                    <span className="sr-only">Mike Purcella Homepage</span>
                    <Rose className="pointer-events-none w-full rotate-22.5 fill-grey-100 transition-colors duration-200 ease-linear group-hover:fill-white" />
                </Link>
                <HamburgerButton isNavOpen={isNavOpen} onClick={handleIsNavOpen} />
                <div
                    className={classNames(
                        'fixed top-96 flex h-[calc(100vh-96px)] w-full flex-col items-center justify-center gap-72 bg-black-200 navigation-list-transition md:static md:h-auto md:w-auto md:bg-transparent',
                        {
                            'right-0': isNavOpen,
                            'right-full': !isNavOpen,
                        },
                    )}
                >
                    <NavigationList onClick={closeNav} />
                    <SocialList className="flex gap-40 md:hidden" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
