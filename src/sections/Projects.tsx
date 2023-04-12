import Section from '../components/Section';
import Wrapper from '../components/Wrapper';
import SectionHeading from '../components/SectionHeading';
import ProjectsList from '../components/ProjectsList';

const Projects = () => {
    return (
        <Section id="projects" className="bg-grey-100">
            <Wrapper width="xl">
                <div className="flex flex-col gap-52">
                    <SectionHeading className="text-black-100" label="Some Notable Projects" />
                    <ProjectsList />
                </div>
            </Wrapper>
        </Section>
    );
};

export default Projects;
