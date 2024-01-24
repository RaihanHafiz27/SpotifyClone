import { SideBtn } from "../Atom/SideButton";

export function LoginWith(props) {
  const { children, src } = props;

  return (
    <SideBtn className="border rounded-full text-sm mx-auto pl-6 py-2 mb-2 w-64">
      {src && <img src={src} alt="" className="w-4 h-4 mr-1" />}
      {children}
    </SideBtn>
  );
}
