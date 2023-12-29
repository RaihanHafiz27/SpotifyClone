import { HeaderForm } from "../components/Atom/HeaderForm";
import { UnderLine } from "../components/Atom/Line";
import { NavbarForm } from "../components/Atom/NavbarForm";
import { ToRegister } from "../components/Elements/ToRegister";
import { FormLogin } from "../components/Fragments/FormLogin";
import { LoginWithSocial } from "../components/Fragments/LoginWithSocial";

export function Login() {
  return (
    <div className="h-full w-full">
      <NavbarForm />
      {/* FormLogin */}
      <div className="flex justify-center">
        <div className="flex flex-col bg-slate-800 w-2/5 text text-slate-200 my-4 rounded-md">
          <HeaderForm text="Masuk ke Spotify" />
          <LoginWithSocial />
          <UnderLine />
          <FormLogin />
          <UnderLine />
          <ToRegister />
        </div>
      </div>
    </div>
  );
}
