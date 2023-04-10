type SectionHeadingProps = {
    className: string;
    label: string;
};

const SectionHeading = ({ className, label }: SectionHeadingProps) => {
    return (
        <h2
            className={`${className} relative from-red to-purple text-center text-32 font-bold md:text-36`}
        >
            {label}
        </h2>
    );
};

export default SectionHeading;
