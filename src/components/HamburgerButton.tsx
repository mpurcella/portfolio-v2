import classNames from 'classnames';

type HamburgerButtonProps = {
    isNavOpen: boolean;
    onClick: () => void;
};

const HamburgerButton = ({ isNavOpen, onClick }: HamburgerButtonProps) => {
    return (
        <button
            type="button"
            className="z-40 flex h-24 w-28 flex-col justify-around outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-purple md:hidden"
            onClick={onClick}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
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
