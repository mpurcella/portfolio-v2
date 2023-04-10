import ButtonLink from '../components/ButtonLink';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import SectionText from '../components/SectionText';
import SkillsList from '../components/SkillsList';
import Wrapper from '../components/Wrapper';
import { FaRegCommentDots } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <Section id="about" className="bg-white">
                <Wrapper width="md">
                    <div className="flex flex-col items-center gap-52">
                        <SectionHeading className="text-black-100" label="Who am I?" />
                        <div className="flex flex-col gap-28">
                            <SectionText className="text-black-100">
                                I&apos;m a frontend web developer who is passionate about creating
                                digital experiences that are both visually stunning and enjoyable.
                                Although my career didn&apos;t originally include web development, I
                                soon realized that it was where my&nbsp;passion&nbsp;lay.
                            </SectionText>
                            <SectionText className="text-black-100">
                                In my short career thus far, I&apos;ve had the privilege of
                                contributing to websites such as the{' '}
                                <a
                                    href="https://www.nationalparks.org/"
                                    className="navigation-link-secondary"
                                    target="_blank"
                                    rel="rel=noopener noreferrer"
                                >
                                    National Park Foundation
                                </a>
                                , the{' '}
                                <a
                                    href="https://www.hrc.org/"
                                    className="navigation-link-secondary"
                                    target="_blank"
                                    rel="rel=noopener noreferrer"
                                >
                                    Human Rights Campaign
                                </a>
                                , and{' '}
                                <a
                                    href="https://aylohealth.com/"
                                    className="navigation-link-secondary"
                                    target="_blank"
                                    rel="rel=noopener noreferrer"
                                >
                                    Aylo Health
                                </a>
                                , along with the numerous personal projects I work on to strengthen
                                my skills as a developer in order to stay up-to-date on the latest
                                trends. I&apos;ve always been interested in technology and its
                                ability to connect people and improve lives, and web development
                                allows me to do&nbsp;just&nbsp;that.
                            </SectionText>
                            <SectionText className="text-black-100">
                                I aspire to impact teams with meaningful contributions and a
                                growth-focused mindset. If you have a job opportunity that matches
                                my skill set, experience, and provides an opportunity to continue
                                learning and growing as a developer, please feel free
                                to&nbsp;contact&nbsp;me!
                            </SectionText>
                        </div>
                        <ButtonLink
                            url="#contact"
                            className="button-link-secondary"
                            icon={<FaRegCommentDots />}
                            reloadDocument={true}
                            label="Contact"
                        />
                    </div>
                </Wrapper>
            </Section>
            <Section id="skills" className="bg-purple">
                <Wrapper width="md">
                    <div className="m-auto flex max-w-screen-md flex-col items-center gap-52">
                        <SectionHeading className="text-white" label="My Skills" />
                        <SkillsList />
                    </div>
                </Wrapper>
            </Section>
        </>
    );
};

export default About;
