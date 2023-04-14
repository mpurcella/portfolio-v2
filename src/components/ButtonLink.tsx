import React from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
    url: string;
    className: string;
    icon: React.ReactNode;
    label: string;
    reloadDocument: boolean;
};

const ButtonLink = ({ url, className, icon, label, reloadDocument }: ButtonLinkProps) => {
    return (
        <Link to={url} className={className} reloadDocument={reloadDocument}>
            <span className="text-20">{icon}</span>
            {label}
        </Link>
    );
};

export default ButtonLink;
