import SocialList from './SocialList';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex flex-col items-center gap-52 bg-black-100 px-28 py-72 md:px-60">
            <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 682 380"
                className="pointer-events-none w-52 fill-white"
            >
                <title>M Logo</title>
                <g>
                    <path d="m530.7 115.4l-110.7 221.5c-12.9 25.8-38.7 41.7-67.5 41.7-26.3 0-50.3-13.3-64.2-35.7-13.8-22.4-15-49.9-3.2-73.4l21.2-42.5-53.5-107-108.5 216.9c-12.8 25.8-38.7 41.7-67.4 41.7-26.4 0-50.3-13.3-64.2-35.7-13.8-22.4-15-49.9-3.3-73.4l116.3-232.5c11.1-22.2 33.4-36 58.2-36 24.8 0 47.1 13.8 58.2 36l26.1 52.2 53.5 107 79.6-159.2c11.1-22.2 33.4-36 58.2-36 24.8 0 47.1 13.8 58.2 36l13 26.1c8.2 16.4 8.2 35.9 0 52.3zm-293.3-26.2l-20-39.9c-6.5-13-19-20.7-33.5-20.7-14.5 0-27.1 7.7-33.6 20.7l-116.2 232.5c-7.5 15-6.7 32.4 2.1 46.6 8.8 14.2 24 22.7 40.7 22.7 18.2 0 34.6-10.2 42.8-26.5zm268.7-13.8l-13.1-26.1c-6.5-13-19-20.7-33.5-20.7-14.5 0-27 7.7-33.5 20.7l-116.3 232.5c-7.5 15-6.7 32.4 2.1 46.6 8.8 14.2 24 22.7 40.7 22.7 18.2 0 34.6-10.2 42.8-26.5l110.8-221.6c4.3-8.6 4.3-18.9 0-27.6z" />
                    <path d="m602 378.6c-43.2 0-78.1-34.9-78.1-78 0-43.2 34.9-78.1 78.1-78.1 43.1 0 78 34.9 78 78.1 0 43.1-34.9 78-78 78zm50.4-78c0-27.9-22.5-50.5-50.4-50.5-28 0-50.5 22.6-50.5 50.5 0 27.9 22.5 50.5 50.5 50.5 27.9 0 50.4-22.6 50.4-50.5z" />
                </g>
            </svg>
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
