type SectionSubheadingProps = {
    className: string;
    label: string;
};

const SectionSubheading = ({ className, label }: SectionSubheadingProps) => {
    return <h3 className={`${className} text-24 font-bold md:text-28`}>{label}</h3>;
};

export default SectionSubheading;
