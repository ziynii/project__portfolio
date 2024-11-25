import { useState } from 'react';
import data from '../projectData';
import ProjectModal from '../components/project/ProjectModal';
import Overlay from '../components/Overlay';
import ImageModal from '../components/project/ImageModal';
import AnimatedComponent from '../hooks/scrollAnimation';
import ProjectTypeFilter from '../components/project/ProjectTypeFilter';
import ProjectList from '../components/project/ProjectList';
import ImageCard from '../components/project/ImageCard';

export default function Project() {
  const [projectList, setProjectList] = useState(data);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const isOverlayVisible = openProjectModal || openImageModal;

  const onClickImageCard = num => {
    setOpenImageModal(true);
    setSelectedImage(num);
  };

  const onCloseModal = () => {
    setOpenProjectModal(false);
    setOpenImageModal(false);
  };

  return (
    <div className="project">
      <h3 className="project__title">P R O J E C T</h3>
      <ProjectTypeFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ProjectList
        projectList={projectList}
        selectedType={selectedType}
        setOpenProjectModal={setOpenProjectModal}
        setSelectedProject={setSelectedProject}
      />
      <section className="project__design">
        <h3 className="project__title">D E S I G N</h3>

        <AnimatedComponent>
          <ImageCard onClickImageCard={onClickImageCard} />
        </AnimatedComponent>
      </section>

      {isOverlayVisible && (
        <Overlay
          onCloseModal={onCloseModal}
          isOverlayVisible={isOverlayVisible}
        />
      )}

      {openProjectModal && (
        <ProjectModal
          onCloseModal={onCloseModal}
          openModal={openProjectModal}
          selectedProject={selectedProject}
          projectList={projectList}
        />
      )}

      {openImageModal && (
        <ImageModal
          onCloseModal={onCloseModal}
          openModal={openImageModal}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}
