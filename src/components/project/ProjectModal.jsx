import { useEffect, useRef, useState } from 'react';
import AnimatedComponent from '../../hooks/scrollAnimation';
import { IoCloseOutline } from 'react-icons/io5';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { FaGithubAlt, FaFigma } from 'react-icons/fa';

export default function ProjectModal({
  openModal,
  selectedProject,
  projectList,
  onCloseModal,
}) {
  const [projectId, setProjectId] = useState(selectedProject);
  const [currentProject, setCurrentProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const modalRef = useRef(null);

  const goPrevProject = () => {
    if (projectId === 1) {
      return;
    }
    setProjectId(prev => prev - 1);
  };

  const goNextProject = () => {
    if (projectId === 8) {
      return;
    }
    setProjectId(prev => prev + 1);
  };

  useEffect(() => {
    let filteredCurrentProject = projectList.filter(
      item => item.id === projectId,
    );
    setCurrentProject(filteredCurrentProject[0]);

    if (projectId !== 1) {
      let filteredPrevProject = projectList.filter(
        item => item.id === projectId - 1,
      );
      setPrevProject(filteredPrevProject[0]);
    }

    if (projectId !== 8) {
      let filteredNextProject = projectList.filter(
        item => item.id === projectId + 1,
      );
      setNextProject(filteredNextProject[0]);
    }
  }, [projectId]);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [currentProject]);

  return (
    <div className={'modal ' + (openModal === true ? 'active' : '')}>
      <div className="modal__wrapper" ref={modalRef}>
        <button className="btn--close" onClick={onCloseModal}>
          <IoCloseOutline className="icon" />
        </button>

        <div className="modal__main">
          <div className="top-section">
            <AnimatedComponent>
              <div
                className={
                  'thumb ' + `project0${currentProject && currentProject.id}`
                }
              >
                {' '}
                <div className="thumbnail"></div>
              </div>
            </AnimatedComponent>

            <div className="info">
              <AnimatedComponent>
                <h4 className="title">
                  {currentProject && currentProject.title}
                </h4>
              </AnimatedComponent>
              <AnimatedComponent>
                <p className="description">
                  {currentProject && currentProject.description}
                </p>
              </AnimatedComponent>

              <AnimatedComponent>
                <div className="pages">
                  <p className="page red">개인 프로젝트</p>{' '}
                  {currentProject &&
                    currentProject.pages.map((page, index) => (
                      <p className="page" key={index}>
                        # {page}
                      </p>
                    ))}
                </div>
              </AnimatedComponent>

              <AnimatedComponent>
                <div className="links">
                  <a
                    href={currentProject && currentProject?.url?.web}
                    target="blank"
                    className="link-web"
                  >
                    최종 결과물
                  </a>
                  <div className="links-right">
                    {' '}
                    <a
                      href={currentProject && currentProject?.url?.github}
                      target="blank"
                      className="link-git"
                    >
                      <FaGithubAlt />

                      <span className="popup lg-only">
                        프로젝트 파일과 스크린샷
                      </span>
                    </a>
                    {currentProject && currentProject?.url?.figma && (
                      <a
                        href={currentProject && currentProject?.url?.figma}
                        target="blank"
                        className="link-figma"
                      >
                        <FaFigma />

                        <span className="popup lg-only">
                          프로젝트 디자인 파일 (피그마)
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedComponent>
            </div>
          </div>

          <div className="stack">
            {currentProject &&
              currentProject.keyFeatures?.map((stack, i) => (
                <AnimatedComponent key={i}>
                  <div className="stack__card">
                    <div className="stack__card__info">
                      <div className={`icon__stack--${stack.name}`}></div>
                      <p className="name">{stack.name}</p>
                    </div>

                    <div className="stack__card__description">
                      {stack.description}
                    </div>
                  </div>
                </AnimatedComponent>
              ))}
          </div>

          <AnimatedComponent>
            <div className="modal__main__preview">
              <div
                className={`preview preview0${currentProject && currentProject.id}`}
              ></div>
              {currentProject && currentProject.id === 5 ? (
                <div className={`preview preview05-second`}></div>
              ) : (
                ''
              )}
            </div>
          </AnimatedComponent>
        </div>

        <div className="modal__nav">
          {currentProject && currentProject.id !== 1 ? (
            <button className="btn--prev" onClick={() => goPrevProject()}>
              <IoIosArrowRoundBack />
              <span className="highlight">{prevProject?.title}</span>{' '}
            </button>
          ) : (
            <div></div>
          )}

          {currentProject && currentProject.id !== 8 ? (
            <button className="btn--next" onClick={() => goNextProject()}>
              <IoIosArrowRoundForward />
              <span className="highlight">{nextProject?.title}</span>{' '}
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
