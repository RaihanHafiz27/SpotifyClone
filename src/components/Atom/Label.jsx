export function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="font-bold hover:cursor-pointer block">
      {children}
    </label>
  );
}
