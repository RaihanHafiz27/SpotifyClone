export function UnderLine(props) {
  const { w = "w-4/5", ml = "ml-14" } = props;
  return <p className={`border-b-2 border-gray-700 my-4 ${w} ${ml}`}></p>;
}
