import { Label } from "../Atom/Label";
import { Input } from "../Atom/Input";
import { Btn } from "../Atom/Button";
import { SideBtn } from "../Atom/SideButton";
import { RememberMe } from "../Atom/RememberMe";

export function FormLogin() {
  const handlelogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    if (email.value === "" || password.value === "") {
      alert("Email dan Password Wajib diisi!!!");
      return false;
    } else {
      window.location.href = "/home";
    }
  };
  return (
    <div className="flex justify-center mt-2 ">
      <div className="text-sm ml-6">
        <form onSubmit={handlelogin}>
          <Label htmlFor="email">Email or Username</Label>
          <Input type="email" placeholder="Enter Your Email or Username" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="*************"></Input>
          <RememberMe />
          <Btn
            variant="bg-green-600"
            className="w-64 py-4 mt-5 text-gray-900 hover:bg-green-600/60 hover:text-slate-200 duration-200"
          >
            Masuk
          </Btn>
          <SideBtn
            font="font-semibold"
            hvr="hover:text-green-500"
            className="underline flex justify-center my-3"
          >
            Lupa kata sandimu?
          </SideBtn>
        </form>
      </div>
    </div>
  );
}
