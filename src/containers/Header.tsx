import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FocusLock from 'react-focus-lock';
import HamburgerButton from '../components/HamburgerButton';
import NavigationMenu from '../components/NavigationMenu';
import { ReactComponent as MLogo } from '../assets/icons/m-logo.svg';

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isNavOpen]);

    const [focusDisabled, setFocusDisabled] = useState(false);

    const handleFocusDisabled = () => {
        setFocusDisabled((prevFocusDisabled) => !prevFocusDisabled);
    };

    return (
        <header className="z-30 bg-black-100 p-28 md:px-60 md:py-28">
            <nav className="flex items-center justify-between">
                <Link
                    to="/"
                    className="z-30 w-44 text-white outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-purple md:w-48"
                    onClick={closeNav}
                    onFocus={scrollToTop}
                    aria-label="Homepage"
                >
                    <MLogo className="pointer-events-none" />
                </Link>
                <FocusLock disabled={!focusDisabled}>
                    <HamburgerButton
                        isNavOpen={isNavOpen}
                        handleIsNavOpen={handleIsNavOpen}
                        handleFocusDisabled={handleFocusDisabled}
                    />
                    <NavigationMenu
                        isNavOpen={isNavOpen}
                        onClick={closeNav}
                        isScreenWide={isScreenWide}
                        focusDisabled={focusDisabled}
                    />
                </FocusLock>
            </nav>
        </header>
    );
};

export default Header;
