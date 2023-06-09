import { toast, ToastContainer } from 'react-toastify';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Wrapper from '../components/Wrapper';
import ContactForm from '../containers/ContactForm';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const successToast = () => {
        toast.success('Message submitted successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'rounded-lg font-source-sans-pro shadow-lg shadow-black-100/15',
        });
    };

    const errorToast = () => {
        toast.error('Failed to submit. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'rounded-lg font-source-sans-pro shadow-lg shadow-black-100/15',
        });
    };

    return (
        <Section id="contact" className="bg-purple">
            <Wrapper width="sm">
                <div className="flex flex-col gap-52">
                    <SectionHeading className="text-white" label="Let's Connect!" />
                    <ContactForm successToast={successToast} errorToast={errorToast} />
                </div>
            </Wrapper>
            <ToastContainer />
        </Section>
    );
};

export default Contact;
