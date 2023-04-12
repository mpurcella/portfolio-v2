type ContactFormLabelProps = {
    htmlFor: string;
    label: string;
};

const ContactFormLabel = ({ htmlFor, label }: ContactFormLabelProps) => {
    return (
        <label htmlFor={htmlFor} className="font-bold text-black-100">
            {label}
        </label>
    );
};

export default ContactFormLabel;
