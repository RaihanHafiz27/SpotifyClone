export function Input(props) {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      name={type}
      id={type}
      placeholder={placeholder}
      className="w-64 mt-1 mb-2 pl-4 h-8 rounded-sm bg-slate-700 outline-none border border-slate-500 hover:border-slate-200 focus:border-2 focus:border-green-600 duration-75"
    />
  );
}
