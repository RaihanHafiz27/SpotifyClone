export function ImgPlaylistHome(props) {
  const { img, rounded } = props;
  return <img src={img} alt="" className={`w-9 h-9 ${rounded}`} />;
}
