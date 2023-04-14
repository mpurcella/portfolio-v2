import { ArrowSquareOut } from '@phosphor-icons/react';

type ProjectProps = {
    imgUrlWebp: string;
    imgUrlPng: string;
    alt: string;
    name: string;
    description: string;
    url: string;
};

const Project = ({ imgUrlWebp, imgUrlPng, alt, name, description, url }: ProjectProps) => {
    return (
        <div className="flex flex-col gap-40">
            <picture>
                <source srcSet={imgUrlWebp} type="image/webp" />
                <source srcSet={imgUrlPng} type="image/png" />
                <img src={imgUrlPng} alt={alt} loading="lazy" />
            </picture>
            <div className="flex h-full flex-col items-center justify-center gap-28">
                <h3 className="text-center text-24 font-bold">{name}</h3>
                <p className="text-18 leading-normal">{description}</p>
                <a href={url} className="button-link-secondary">
                    <span className="text-20">
                        <ArrowSquareOut weight="bold" />
                    </span>
                    View Site
                </a>
            </div>
        </div>
    );
};

export default Project;
