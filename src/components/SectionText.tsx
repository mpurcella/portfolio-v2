type SectionTextProps = {
    className: string;
    children: React.ReactNode;
};

const SectionText = ({ className, children }: SectionTextProps) => {
    return <p className={`${className} text-18 leading-normal`}>{children}</p>;
};

export default SectionText;
