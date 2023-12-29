export function ImgRecomendation(props) {
  const { img, rounded } = props;
  return <img src={img} alt="" className={`w-40 h-36 ${rounded} mt-3`} />;
}
