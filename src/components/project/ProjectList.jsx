import React from 'react';
import AnimatedComponent from '../../hooks/scrollAnimation';
import ProjectItem from './ProjectItem';

export default function ProjectList({
  projectList,
  selectedType,
  setOpenProjectModal,
  setSelectedProject,
}) {
  const filteredProjects =
    selectedType === 'all'
      ? projectList
      : projectList.filter(item => item.type === selectedType);

  const onClickProject = project => {
    setOpenProjectModal(true);
    setSelectedProject(project.id);
  };

  return (
    <ul className="project__list">
      {filteredProjects?.map((project, i) => (
        <AnimatedComponent key={i}>
          <ProjectItem
            key={project.id}
            project={project}
            i={i}
            onClickProject={onClickProject}
          />
        </AnimatedComponent>
      ))}
    </ul>
  );
}
