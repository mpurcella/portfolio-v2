type SectionProps = {
    id: 'hero' | 'about' | 'skills' | 'contact' | 'projects';
    className: string;
    children: React.ReactNode;
};

const Section = ({ id, className, children }: SectionProps) => {
    return (
        <section id={id} className={`py-80 ${className}`}>
            {children}
        </section>
    );
};

export default Section;
