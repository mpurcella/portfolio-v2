import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

type SocialListProps = {
    className: string;
};

const SocialList = ({ className }: SocialListProps) => {
    const socialLinks = [
        {
            id: uuidv4(),
            url: 'https://github.com/mpurcella',
            label: 'Mike Purcella on GitHub',
            icon: <FaGithub />,
        },
        {
            id: uuidv4(),
            url: 'https://www.linkedin.com/in/mpurcella/',
            label: 'Mike Purcella on LinkedIn',
            icon: <FaLinkedinIn />,
        },
        {
            id: uuidv4(),
            url: 'mailto:mjpurcella@gmail.com',
            label: 'Mike Purcella Email',
            icon: <FaEnvelope />,
        },
    ];
    return (
        <ul className={className}>
            {socialLinks.map((socialLink) => {
                return (
                    <li key={socialLink.id}>
                        <span className="sr-only">{socialLink.label}</span>
                        <a
                            href={socialLink.url}
                            className="text-24"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {socialLink.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialList;
