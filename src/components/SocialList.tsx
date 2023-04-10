import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCodepen } from 'react-icons/fa';

type SocialListProps = {
    listClassName: string;
    linkClassName: string;
};

const SocialList = ({ listClassName, linkClassName }: SocialListProps) => {
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
            url: 'https://codepen.io/mpurcella',
            label: 'Mike Purcella on CodePen',
            icon: <FaCodepen />,
        },
        {
            id: uuidv4(),
            url: 'mailto:mjpurcella@gmail.com',
            label: 'Mike Purcella email address',
            icon: <FaEnvelope />,
        },
    ];
    return (
        <ul className={listClassName}>
            {socialLinks.map((socialLink) => {
                return (
                    <li key={socialLink.id}>
                        <span className="sr-only">{socialLink.label}</span>
                        <a
                            href={socialLink.url}
                            className={linkClassName}
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
