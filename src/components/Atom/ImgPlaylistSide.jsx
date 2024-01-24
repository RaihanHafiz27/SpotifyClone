export function ImgPlaylistSide(props) {
  const { img, rounded, className } = props;
  return <img src={img} alt="" className={`w-6 h-6 ${rounded} ${className}`} />;
}
