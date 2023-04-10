type SectionTextProps = {
    className: string;
    children: React.ReactNode;
};

const SectionText = ({ className, children }: SectionTextProps) => {
    return (
        <p className={`${className} text-center text-20 font-medium leading-normal`}>{children}</p>
    );
};

export default SectionText;
