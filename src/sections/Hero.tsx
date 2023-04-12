import Section from '../components/Section';
import Wrapper from '../components/Wrapper';
import SocialList from '../components/SocialList';
import ButtonLink from '../components/ButtonLink';
import MouseIcon from '../components/MouseIcon';
import { FaCog } from 'react-icons/fa';

const Hero = () => {
    return (
        <Section
            id="hero"
            className="relative flex h-[calc(100vh-80.52px)] flex-col items-center justify-center bg-black-100 md:h-[calc(100vh-92px)]"
        >
            <Wrapper width="md">
                <>
                    <span className="sr-only">Social media and contact links</span>
                    <SocialList
                        listClassName="flex-col gap-28 p-20 bg-white absolute left-0 top-1/2 md:-translate-y-[calc(50%+46px)] hidden lg:inline-flex"
                        linkClassName="social-link-secondary"
                    />
                </>
                <div className="relative -top-[40.26px] md:-top-[46px]">
                    <div className="relative flex flex-col items-center gap-52">
                        <h1 className="text-center text-40 font-black uppercase text-white md:text-60">
                            Hi, I&apos;m Mike&nbsp;Purcella
                        </h1>
                        <p className="text-center text-20 leading-normal text-white md:text-24">
                            A{' '}
                            <span className="bg-gradient-to-r from-red to-purple bg-clip-text font-black text-transparent">
                                frontend web developer
                            </span>{' '}
                            focused on building products and experiences that bring true measurable
                            results to&nbsp;end&nbsp;users.
                        </p>
                        <ButtonLink
                            url="#projects"
                            className="button-link-primary"
                            reloadDocument={true}
                            icon={<FaCog />}
                            label="Projects"
                        />
                    </div>
                </div>
                <MouseIcon />
            </Wrapper>
        </Section>
    );
};

export default Hero;
