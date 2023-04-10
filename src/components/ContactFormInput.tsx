type ContactFormInputProps = {
    id: string;
    type: string;
    placeholder: string;
};

const ContactFormInput = ({ id, type, placeholder }: ContactFormInputProps) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full p-20 text-18 font-medium duration-200 ease-linear focus-visible:transition-none"
        />
    );
};

export default ContactFormInput;
