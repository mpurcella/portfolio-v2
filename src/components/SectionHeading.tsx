type SectionHeadingProps = {
    className: string;
    label: string;
};

const SectionHeading = ({ className, label }: SectionHeadingProps) => {
    return (
        // <h2
        //     className={`${className} relative from-red to-purple text-center text-32 font-bold after:absolute after:-bottom-16 after:left-1/2 after:h-6 after:w-48 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:content-[''] md:text-40`}
        // >
        //     {label}
        // </h2>
        <h2
            className={`${className} relative from-red to-purple text-center text-32 font-bold md:text-40`}
        >
            {label}
        </h2>
    );
};

export default SectionHeading;
