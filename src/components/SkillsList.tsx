import { v4 as uuidv4 } from 'uuid';
import {
    FaReact,
    FaPlug,
    FaHtml5,
    FaCss3,
    FaSass,
    FaMobileAlt,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiJquery, SiTailwindcss, SiStorybook } from 'react-icons/si';

const skills = [
    {
        id: uuidv4(),
        icon: <FaReact />,
        label: 'React',
    },
    {
        id: uuidv4(),
        icon: <SiJavascript />,
        label: 'JavaScript',
    },
    {
        id: uuidv4(),
        icon: <SiTypescript />,
        label: 'TypeScript',
    },
    {
        id: uuidv4(),
        icon: <SiJquery />,
        label: 'jQuery',
    },
    {
        id: uuidv4(),
        icon: <FaPlug />,
        label: 'REST APIs',
    },
    {
        id: uuidv4(),
        icon: <FaHtml5 />,
        label: 'HTML',
    },
    {
        id: uuidv4(),
        icon: <FaCss3 />,
        label: 'CSS',
    },
    {
        id: uuidv4(),
        icon: <FaSass />,
        label: 'Sass',
    },
    {
        id: uuidv4(),
        icon: <FaMobileAlt />,
        label: 'Responsive Design',
    },
    {
        id: uuidv4(),
        icon: <SiTailwindcss />,
        label: 'Tailwind',
    },
    {
        id: uuidv4(),
        icon: <FaBootstrap />,
        label: 'Bootstrap',
    },
    {
        id: uuidv4(),
        icon: <SiStorybook />,
        label: 'Storybook',
    },
    {
        id: uuidv4(),
        icon: <FaGitAlt />,
        label: 'Git',
    },
    {
        id: uuidv4(),
        icon: <FaGithub />,
        label: 'GitHub',
    },
];

const SkillsList = () => {
    return (
        <ul className="flex flex-wrap justify-center gap-20">
            {skills.map((skill) => {
                return (
                    <li
                        key={skill.id}
                        className="flex items-center gap-12 bg-black-100 px-16 py-8 shadow-lg shadow-black-100/30"
                    >
                        <span className="text-20 text-white">{skill.icon}</span>
                        <span className="font font-source-sans-pro text-white">{skill.label}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default SkillsList;
