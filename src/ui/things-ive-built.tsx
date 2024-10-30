import clsx from 'clsx';
import Image from 'next/image';

import { projects } from '@/data/projects';

export const ThingsIveBuilt = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Things I&apos;ve built</p>

      <div className="mt-5 grid grid-cols-1 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

type ProjectCardProps = (typeof projects)[0];

const ProjectCard = ({
  title,
  description,
  techStack,
  thumb,
}: ProjectCardProps) => {
  return (
    <div
      className={clsx(
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4',
        'transition-all duration-500 ease-out',
        'hover:bg-white/10'
      )}
    >
      <div className="flex flex-col space-y-3">
        <p className="group flex w-fit items-center gap-2 text-lg font-semibold">
          <Image
            src={thumb}
            alt={`${title} logo`}
            width="32"
            height="32"
            className="rounded-md"
          />
          <span>{title}</span>
        </p>
        <p className="text-base">{description}</p>

        <div className="flex flex-wrap items-center">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
