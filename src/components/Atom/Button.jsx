export function Btn(props) {
  const { children = "Submit", variant, text, className } = props;
  return (
    <>
      <button
        className={`h-7 px-4 mr-3 flex items-center justify-center font-semibold text-sm rounded-full ${variant} ${className} ${text} `}
        type="submit"
      >
        {children}
      </button>
    </>
  );
}
