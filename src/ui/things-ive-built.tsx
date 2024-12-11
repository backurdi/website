import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { projects } from '@/data/projects';

export const ThingsIveBuilt = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="mt-10 flex w-full flex-col px-0 sm:px-4">
      <p className="px-4 text-xl">My journey</p>

      <div className="mt-5 grid w-full grid-cols-1 gap-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  descriptionLong?: string;
  techStack: string[];
  thumb: string;
  images?: string[];
  onSelect?: () => void;
};

const ProjectCard = ({
  title,
  description,
  techStack,
  thumb,
  onSelect,
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

        <button
          onClick={onSelect}
          className="mt-2 w-fit rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-600"
        >
          See More
        </button>
      </div>
    </div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectCardProps;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-zinc-400 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-black hover:text-white"
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <Image
            src={project.thumb}
            alt={`${project.title} logo`}
            width="48"
            height="48"
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold">{project.title}</h2>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="flex-1">
            <div
              className="w-full text-zinc-800"
              dangerouslySetInnerHTML={{
                __html: project.descriptionLong || '',
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 font-semibold">
            Technologies Used
          </h3>
          <div className="flex flex-wrap items-center">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* {project.images && (
          <div className="mt-6">
            <h3 className="mb-4 font-semibold">
              Project Images
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${
                    index + 1
                  }`}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};
