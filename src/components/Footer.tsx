import SocialList from './SocialList';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="divide-y-2 divide-white/20 bg-black-300 px-20 py-52 md:px-60">
            <nav className="flex flex-col items-center gap-28 pb-40">
                <SocialList className="flex gap-40" />
            </nav>
            <div className="flex flex-col items-center gap-28 pt-40">
                <a href="https://github.com/mpurcella/portfolio-v2" className="navlink-secondary">
                    Designed and built by Mike Purcella
                </a>
                <p className="flex items-center text-14 font-medium uppercase text-grey-200">
                    &#9400; {year} Mike Purcella. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
