import { v4 as uuidv4 } from 'uuid';
import Project from './Project';
import HeartLineMockupPng from '/images/mockups/png/heart-line.png';
import JukeboxMonkeyRecordsMockupPng from '/images/mockups/png/jukebox-monkey-records.png';
import McuGuideMockupPng from '/images/mockups/png/mcu-guide.png';
import ThePopcornPlaceMockupPng from '/images/mockups/png/the-popcorn-place.png';
import HeartLineMockupWebp from '/images/mockups/webp/heart-line.webp';
import JukeboxMonkeyRecordsMockupWebp from '/images/mockups/webp/jukebox-monkey-records.webp';
import McuGuideMockupWebp from '/images/mockups/webp/mcu-guide.webp';
import ThePopcornPlaceMockupWebp from '/images/mockups/webp/the-popcorn-place.webp';

const projects = [
    {
        id: uuidv4(),
        imgUrlPng: McuGuideMockupPng,
        imgUrlWebp: McuGuideMockupWebp,
        alt: 'Macbook showing the Marvel Cinematic Universe Guide homepage',
        name: 'MCU Guide',
        description:
            'MCU Guide was created to expand and build upon the core concepts and ideas introduced while building The Popcorn Place: making API requests and manipulating the returned data, implementing dynamic routing, and utilizing TypeScript to set and check data types.',
        url: 'https://mcu-guide.netlify.app/',
    },
    {
        id: uuidv4(),
        imgUrlPng: ThePopcornPlaceMockupPng,
        imgUrlWebp: ThePopcornPlaceMockupWebp,
        alt: 'Macbook showing The Popcorn Place homepage',
        name: 'The Popcorn Place',
        description:
            'The Popcorn Place was created during my time as a UI Developer Apprentice at Viget, a digital agency, to gain experience collaborating with other developers, strengthen UI Development skills, make API requests, and consume and manipulate API data.',
        url: 'https://the-popcorn-place.netlify.app/',
    },
    {
        id: uuidv4(),
        imgUrlPng: HeartLineMockupPng,
        imgUrlWebp: HeartLineMockupWebp,
        alt: 'Macbook showing the Heart Line homepage',
        name: 'Heart Line',
        description:
            'Heart Line was created to gain experience working with React by exploring its many features and subtleties, including setting and updating states, passing props, creating reusable components, utilizing hooks, and setting up a basic routing system.',
        url: 'https://mpurcella.github.io/artist-page-v2-react/',
    },
    {
        id: uuidv4(),
        imgUrlPng: JukeboxMonkeyRecordsMockupPng,
        imgUrlWebp: JukeboxMonkeyRecordsMockupWebp,
        alt: 'Macbook showing the Jukebox Monkey Records homepage',
        name: 'Jukebox Monkey Records',
        description:
            'Jukebox Monkey Records was created to utilize the various layouts, components, forms, and utilities that Bootstrap provides to develop a fully responsive and user-friendly website, while practicing and implementing DOM manipulation in order to emulate e-commerce functionality.',
        url: 'https://mpurcella.github.io/jukebox-monkey-records/',
    },
];

const ProjectsList = () => {
    return (
        <ul className="flex flex-col gap-100 md:grid md:grid-cols-2">
            {projects.map((project) => {
                return (
                    <li key={project.id}>
                        <Project
                            imgUrlWebp={project.imgUrlWebp}
                            imgUrlPng={project.imgUrlPng}
                            alt={project.alt}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsList;
