type SectionHeadingProps = {
    className: string;
    label: string;
};

const SectionHeading = ({ className, label }: SectionHeadingProps) => {
    return <h2 className={`${className} text-center text-32 font-bold md:text-36`}>{label}</h2>;
};

export default SectionHeading;
