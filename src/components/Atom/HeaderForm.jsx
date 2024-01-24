export function HeaderForm(props) {
  const { text, className } = props;
  return (
    <div className={`mx-auto mt-6 ${className}`}>
      <h2 className="font-bold text-4xl">{text}</h2>
    </div>
  );
}
