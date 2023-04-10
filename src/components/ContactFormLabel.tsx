type ContactFormLabelProps = {
    htmlFor: string;
    label: string;
};

const ContactFormLabel = ({ htmlFor, label }: ContactFormLabelProps) => {
    return (
        <label htmlFor={htmlFor} className="sr-only">
            {label}
        </label>
    );
};

export default ContactFormLabel;
