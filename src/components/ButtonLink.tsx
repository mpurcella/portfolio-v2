import React from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
    url: string;
    className: string;
    icon?: React.ReactNode;
    reloadDocument: boolean;
    label: string;
};

const ButtonLink = ({ url, className, icon, reloadDocument, label }: ButtonLinkProps) => {
    return (
        <Link to={url} className={className} reloadDocument={reloadDocument}>
            {icon ? (
                <span className="flex items-center gap-12">
                    {icon}
                    {label}
                </span>
            ) : (
                label
            )}
        </Link>
    );
};

export default ButtonLink;
