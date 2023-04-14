import ContactFormLabel from '../components/ContactFormLabel';
import { FaRegCommentAlt, FaPaperPlane } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    return (
        <form
            name="contact"
            className="m-auto flex w-full max-w-440 flex-col items-center"
            method="POST"
            data-netlify="true"
        >
            <div className="flex w-full flex-col items-center gap-52 rounded-xl bg-white p-40 shadow-lg shadow-black-100/25">
                <FaRegCommentAlt className="text-40 text-purple" aria-hidden />
                <div className="flex w-full flex-col gap-24">
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="name" label="Name" />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 focus:border-purple focus:outline-none focus-visible:transition-none"
                            required
                            autoCapitalize="off"
                            autoComplete="false"
                            autoCorrect="off"
                            inputMode="text"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="email" label="Email" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 focus:border-purple focus:outline-none focus-visible:transition-none"
                            required
                            autoCapitalize="off"
                            autoComplete="false"
                            autoCorrect="off"
                            inputMode="email"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="message" label="Message" />
                        <textarea
                            name="message"
                            id="message"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 outline-none focus-visible:border-purple focus-visible:transition-none"
                            rows={8}
                            required
                            autoCorrect="off"
                            inputMode="text"
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className="button-primary">
                    <span className="flex items-center gap-12">
                        <FaPaperPlane />
                        Submit
                    </span>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
