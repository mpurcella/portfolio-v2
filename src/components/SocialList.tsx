import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import Resume from '/documents/mike_purcella_resume.pdf';

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
            url: 'mailto:mjpurcella@gmail.com',
            label: 'Mike Purcella email address',
            icon: <FaEnvelope />,
        },
        {
            id: uuidv4(),
            url: Resume,
            label: 'Mike Purcella resumé',
            icon: <FaFileAlt />,
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
