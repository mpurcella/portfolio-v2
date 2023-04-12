import Button from '../components/Button';
import { FaPaperPlane } from 'react-icons/fa';
import ContactFormLabel from '../components/ContactFormLabel';
import ContactFormInput from '../components/ContactFormInput';
import { FaRegCommentAlt } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <form className="m-auto flex w-full max-w-440 flex-col items-center">
            <div className="flex w-full flex-col items-center gap-52 rounded-xl bg-white p-40 shadow-lg shadow-black-100/25">
                <FaRegCommentAlt className="text-40 text-purple" />
                <div className="flex w-full flex-col gap-24">
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="name" label="Name" />
                        <ContactFormInput id="name" type="text" inputMode="text" />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="email" label="Email" />
                        <ContactFormInput id="email" type="email" inputMode="email" />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="message" label="Message" />
                        <textarea
                            name="message"
                            id="message"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 outline-none focus-visible:border-purple focus-visible:transition-none"
                            rows={8}
                            required
                            autoCapitalize="off"
                            autoCorrect="off"
                            inputMode="text"
                        ></textarea>
                    </div>
                </div>
                <Button className="button-primary" icon={<FaPaperPlane />} label="Submit" />
            </div>
        </form>
    );
};

export default ContactForm;
