import { useEffect, useState } from 'react';
import classNames from 'classnames';
import HamburgerButton from '../components/HamburgerButton';
import NavigationList from '../components/NavigationList';
import SocialList from '../components/SocialList';
import IconLink from '../components/IconLink';

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

    return (
        <header className="z-30 bg-black-100 p-28 md:px-60 md:py-28">
            <nav className="flex items-center justify-between">
                <IconLink
                    svgClassName="pointer-events-none w-44 fill-white md:w-48"
                    onClick={closeNav}
                    onFocus={scrollToTop}
                />
                <HamburgerButton isNavOpen={isNavOpen} onClick={handleIsNavOpen} />
                <div
                    className={classNames(
                        'fixed top-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-72 bg-black-200 navigation-list-transition md:static md:h-auto md:w-auto md:bg-transparent',
                        {
                            'right-0': isNavOpen,
                            'right-full': !isNavOpen,
                        },
                    )}
                >
                    <NavigationList onClick={closeNav} />
                    <>
                        <span className="sr-only">Social media and contact links</span>
                        <SocialList
                            listClassName="flex gap-40 md:hidden"
                            linkClassName="social-link-primary"
                        />
                    </>
                </div>
            </nav>
        </header>
    );
};

export default Header;
