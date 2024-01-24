export function ThisImg(props) {
  const { img, rounded } = props;
  return <img src={img} alt="" className={`w-11/12 ${rounded} `} />;
}
