import { NavbarForm } from "../Atom/NavbarForm";

export function FormLayout(props) {
  const { children } = props;
  return (
    <div className="h-full w-full">
      <NavbarForm />
      {/* FormLogin */}
      <div className="flex justify-center">
        <div className="flex flex-col bg-slate-800 w-2/5 text text-slate-200 my-4 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}
