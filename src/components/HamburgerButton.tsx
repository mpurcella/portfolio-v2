import classNames from 'classnames';

type HamburgerButtonProps = {
    isNavOpen: boolean;
    onClick: () => void;
};

const HamburgerButton = ({ isNavOpen, onClick }: HamburgerButtonProps) => {
    return (
        <button
            type="button"
            className="flex h-24 w-28 flex-col justify-around md:hidden"
            onClick={onClick}
            aria-label={isNavOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isNavOpen ? true : false}
        >
            <span
                className={classNames('h-3 w-full bg-white duration-200 ease-linear', {
                    'translate-y-8 -rotate-45': isNavOpen,
                })}
            ></span>
            <span
                className={classNames('h-3 w-full bg-white duration-200 ease-linear', {
                    'invisible opacity-0': isNavOpen,
                })}
            ></span>
            <span
                className={classNames('h-3 w-full bg-white duration-200 ease-linear', {
                    '-translate-y-8 rotate-45': isNavOpen,
                })}
            ></span>
        </button>
    );
};

export default HamburgerButton;
