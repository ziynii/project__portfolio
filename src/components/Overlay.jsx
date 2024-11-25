export default function Overlay({ isOverlayVisible, onCloseModal }) {
  return (
    <div
      className={'overlay ' + (isOverlayVisible === true ? 'active' : '')}
      onClick={onCloseModal}
    ></div>
  );
}
