import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Wrapper from '../components/Wrapper';
import ContactForm from '../containers/ContactForm';

const Contact = () => {
    return (
        <Section id="contact" className="bg-purple">
            <Wrapper width="sm">
                <div className="flex flex-col gap-52">
                    <SectionHeading className="text-white" label="Lets Connect!" />
                    <ContactForm />
                </div>
            </Wrapper>
        </Section>
    );
};

export default Contact;
