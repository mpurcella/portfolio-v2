import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaCodepen } from 'react-icons/fa';

type SocialListProps = {
    listClassName: string;
    linkClassName: string;
    tabIndex: number;
};

const SocialList = ({ listClassName, linkClassName, tabIndex }: SocialListProps) => {
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
            icon: <FaRegEnvelope />,
        },
    ];
    return (
        <ul className={listClassName}>
            {socialLinks.map((socialLink) => {
                return (
                    <li key={socialLink.id}>
                        <a
                            href={socialLink.url}
                            className={linkClassName}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={socialLink.label}
                            tabIndex={tabIndex}
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
