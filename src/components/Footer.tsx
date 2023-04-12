import PageLogo from './PageLogo';
import SocialList from './SocialList';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center gap-52 bg-black-100 px-28 py-72 md:px-60">
            <PageLogo className="pointer-events-none w-52 fill-white" />
            <>
                <span className="sr-only">Social media and contact links</span>
                <SocialList
                    listClassName="flex justify-center items-center gap-40"
                    linkClassName="social-link-primary"
                />
            </>
            <p className="text-18 font-medium text-white">
                Created by{' '}
                <a
                    href="https://github.com/mpurcella/portfolio-v2"
                    className="navigation-link-tertiary"
                    aria-label="View code on GitHub"
                >
                    me
                </a>{' '}
                &#9400; {year}
            </p>
        </footer>
    );
};

export default Footer;
