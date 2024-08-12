export default function Overlay({ openModal }) {
  return (
    <div className={'overlay ' + (openModal === true ? 'active' : '')}></div>
  );
}
