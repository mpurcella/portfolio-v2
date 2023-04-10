import Button from '../components/Button';
import { FaPaperPlane } from 'react-icons/fa';
import ContactFormLabel from '../components/ContactFormLabel';
import ContactFormInput from '../components/ContactFormInput';

const ContactForm = () => {
    return (
        <form className="flex w-full flex-col items-center gap-40">
            <div className="flex w-full flex-col gap-12">
                <div className="flex w-full flex-col gap-12 md:flex-row">
                    <div className="w-full">
                        <ContactFormLabel htmlFor="fullName" label="Full Name" />
                        <ContactFormInput id="fullName" type="text" placeholder="Full Name" />
                    </div>
                    <div className="w-full">
                        <ContactFormLabel htmlFor="email" label="Email" />
                        <ContactFormInput id="email" type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="w-full p-20 text-18 font-medium outline-none transition-all duration-200 ease-linear focus-visible:transition-none"
                        rows={10}
                    ></textarea>
                </div>
            </div>
            <Button className="button-primary" icon={<FaPaperPlane />} label="Submit" />
        </form>
    );
};

export default ContactForm;
