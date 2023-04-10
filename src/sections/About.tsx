import ButtonLink from '../components/ButtonLink';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import SectionText from '../components/SectionText';
import SkillsList from '../components/SkillsList';
import Wrapper from '../components/Wrapper';
// import CodingIllustration from '/images/coding-illustration.svg';
import { FaRegCommentDots } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <Section id="about" className="bg-purple">
                <div className="flex flex-col gap-80">
                    <Wrapper width="md">
                        <div className="flex flex-col items-center gap-52">
                            <SectionHeading className="text-white" label="Who am I?" />
                            <div className="flex flex-col gap-28">
                                <SectionText className="text-white">
                                    I&apos;m a frontend web developer who is passionate about
                                    creating digital experiences that are visually stunning and
                                    enjoyable. Although my career didn&apos;t originally include web
                                    development, I soon realized that it was where
                                    my&nbsp;passion&nbsp;lay.
                                </SectionText>
                                <SectionText className="text-white">
                                    In my short career thus far, I&apos;ve had the privilege of
                                    contributing to websites such as the{' '}
                                    <a
                                        href="https://www.nationalparks.org/"
                                        className="navigation-link-tertiary"
                                        target="_blank"
                                        rel="rel=noopener noreferrer"
                                    >
                                        National Park Foundation
                                    </a>
                                    ,{' '}
                                    <a
                                        href="https://aylohealth.com/"
                                        className="navigation-link-tertiary"
                                        target="_blank"
                                        rel="rel=noopener noreferrer"
                                    >
                                        Aylo Health
                                    </a>
                                    , and the{' '}
                                    <a
                                        href="https://www.hrc.org/"
                                        className="navigation-link-tertiary"
                                        target="_blank"
                                        rel="rel=noopener noreferrer"
                                    >
                                        Human Rights Campaign
                                    </a>
                                    , along with the numerous personal projects I work on to
                                    strengthen my skills as a developer in order to stay up-to-date
                                    on the latest trends and techniques. I&apos;ve always been
                                    fascinated by the power of technology and its ability to connect
                                    people and improve lives, and web development allows me to
                                    do&nbsp;just&nbsp;that.
                                </SectionText>
                                <SectionText className="text-white">
                                    I aspire to impact teams with meaningful contributions and a
                                    growth-focused mindset. If you have a job opportunity that
                                    matches my skill set, experience, and provides an opportunity to
                                    continue learning and growing as a developer, please feel free
                                    to&nbsp;contact&nbsp;me!
                                </SectionText>
                            </div>
                            <ButtonLink
                                url="#contact"
                                className="button-link-tertiary"
                                icon={<FaRegCommentDots />}
                                reloadDocument={true}
                                label="Contact"
                            />
                        </div>
                    </Wrapper>
                    {/* <Wrapper width="full">
                        <div className="rounded-xl bg-white">
                            <img
                                src={CodingIllustration}
                                alt=""
                                className="m-auto max-w-screen-sm"
                            />
                        </div>
                    </Wrapper> */}
                    <Wrapper width="lg">
                        <div className="m-auto flex max-w-screen-md flex-col items-center gap-52">
                            <SectionHeading className="text-white" label="My Skills" />
                            <SkillsList />
                        </div>
                    </Wrapper>
                </div>
            </Section>
        </>
    );
};

export default About;
