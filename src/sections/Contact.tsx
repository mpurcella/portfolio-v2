import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
// import SectionSubheading from '../components/SectionSubheading';
import Wrapper from '../components/Wrapper';
import ContactForm from '../containers/ContactForm';

const Contact = () => {
    return (
        <Section id="contact" className="bg-white p-20">
            <Wrapper width="medium">
                <div className="flex flex-col gap-60 md:gap-80">
                    <SectionHeading className="text-black-100" label="Let's get in touch" />
                    <div className="flex flex-col items-center gap-40 bg-white p-40">
                        {/* <SectionSubheading className="text-grey-300" label="Contact me" /> */}
                        <ContactForm />
                    </div>
                </div>
            </Wrapper>
        </Section>
    );
};

export default Contact;
