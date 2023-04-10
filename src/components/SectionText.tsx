type SectionTextProps = {
    className: string;
    children: React.ReactNode;
};

const SectionText = ({ className, children }: SectionTextProps) => {
    return (
        <p className={`${className} text-center text-18 leading-normal md:text-20`}>{children}</p>
    );
};

export default SectionText;