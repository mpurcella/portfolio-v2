import classNames from 'classnames';
import NavigationList from './NavigationList';
import SocialList from './SocialList';

type NavigationMenuProps = {
    isNavOpen: boolean;
    onClick: () => void;
    isScreenWide: boolean;
    focusDisabled: boolean;
};

const NavigationMenu = ({
    isNavOpen,
    onClick,
    isScreenWide,
    focusDisabled,
}: NavigationMenuProps) => {
    const tabIndex = () => {
        if (!isScreenWide && !focusDisabled) {
            return -1;
        } else {
            return 0;
        }
    };
    return (
        <div
            id="navigation-menu"
            className={classNames(
                'fixed top-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-80 bg-black-200 navigation-list-transition md:static md:h-auto md:w-auto md:bg-transparent',
                {
                    'right-0': isNavOpen,
                    'right-full': !isNavOpen,
                },
            )}
        >
            <NavigationList
                onClick={onClick}
                isScreenWide={isScreenWide}
                focusDisabled={focusDisabled}
            />
            <>
                <span className="sr-only">Social media and contact links</span>
                <SocialList
                    listClassName="flex gap-40 md:hidden"
                    linkClassName="social-link-primary"
                    tabIndex={tabIndex()}
                />
            </>
        </div>
    );
};

export default NavigationMenu;
