import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function ProjectItem({ project, i, onClickProject }) {
  return (
    <li className="project__item" onClick={() => onClickProject(project)}>
      <div className="project__item__left">
        <span className="project__item__num">0{i + 1}</span>
        <div className={'project__item__thumb ' + `project0${project.id}`}>
          <div className="thumbnail"></div>
        </div>
      </div>{' '}
      <div className="project__item__info">
        <h4 className="title">{project.title}</h4>{' '}
        <div className="description sm-hidden">{project.description}</div>
        <div className="stack sm-hidden">
          {project?.stack?.map((item, i) => (
            <span className="stack__item" key={i}>
              #{item}
            </span>
          ))}
        </div>
      </div>
      <button className="btn--view">
        View Project
        <IoIosArrowRoundForward className="arrow-icon" />
      </button>
    </li>
  );
}
