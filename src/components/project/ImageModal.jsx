import design01 from '../../images/design01.jpg';
import design02 from '../../images/design02.jpg';
import design03 from '../../images/design03.jpg';
import design04 from '../../images/design04.jpg';
import design05 from '../../images/design05.jpg';
import design06 from '../../images/design06.jpg';
import design07 from '../../images/design07.jpg';

export default function ImageModal({ selectedImage }) {
  const images = {
    1: design01,
    2: design02,
    3: design03,
    4: design04,
    5: design05,
    6: design06,
    7: design07,
  };

  return (
    <div className="design__modal">
      <img src={images[selectedImage]} className="image" />
    </div>
  );
}
