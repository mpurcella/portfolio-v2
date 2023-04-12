type ContactFormInputProps = {
    id: string;
    type: string;
    inputMode: 'text' | 'email';
};

const ContactFormInput = ({ id, type, inputMode }: ContactFormInputProps) => {
    return (
        <input
            id={id}
            type={type}
            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 focus:border-purple focus:outline-none focus-visible:transition-none"
            required
            autoCapitalize="off"
            autoCorrect="off"
            inputMode={inputMode}
        />
    );
};

export default ContactFormInput;
