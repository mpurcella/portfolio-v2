type ButtonProps = {
    className: string;
    icon?: React.ReactNode;
    label: string;
};

const Button = ({ className, icon, label }: ButtonProps) => {
    return (
        <button type="submit" className={className}>
            {icon ? (
                <span className="flex items-center gap-12">
                    {icon}
                    {label}
                </span>
            ) : (
                label
            )}
        </button>
    );
};

export default Button;
