import { Btn } from "../components/Atom/Button";
import { HeaderForm } from "../components/Atom/HeaderForm";
import { Input } from "../components/Atom/Input";
import { Label } from "../components/Atom/Label";
import { UnderLine } from "../components/Atom/Line";
import { SideBtn } from "../components/Atom/SideButton";
import { LoginWith } from "../components/Elements/LoginWith";
import { FormLayout } from "../components/Layout/FormLayout";

export function Register() {
  return (
    <FormLayout>
      <HeaderForm
        text="Daftar untuk mulai mendengarkan"
        className="text-center"
      />
      <div className="flex justify-center mt-8 ">
        <div className="text-sm">
          <form action="">
            <Label htmlFor="email">Email :</Label>
            <Input type="email" placeholder="Example@domain.com" />
            <SideBtn className="text-xs underline">
              Gunakan nomer telepon.
            </SideBtn>
            <Btn
              variant="bg-green-600"
              className="w-64 py-4 mt-5 text-gray-900 hover:bg-green-600/60 hover:text-slate-200 duration-200"
            >
              Masuk
            </Btn>
          </form>
        </div>
      </div>
      <div className="flex mt-6 mb-px">
        <UnderLine w="w-2/6" ml="ml-10" />
        <p className="ml-6 mt-0.5">atau</p>
        <UnderLine w="w-2/6" ml="ml-6" />
      </div>
      <div className="mt-6 mb-px">
        <LoginWith src="img/google.png">Daftar dengan Google</LoginWith>
        <LoginWith src="img/facebook.png">Daftar dengan Facebook</LoginWith>
      </div>
      <UnderLine w="w-5/6" ml="ml-10" />
      <div className="flex justify-center">
        <p className="flex text-xs font-semibold">
          Sudah punya akun?
          <SideBtn to="/login" className="text-xs underline ml-2">
            Masuk di sini.
          </SideBtn>
        </p>
      </div>
      <p className="text-xs px-2 text-center mt-4 mb-px">
        Situs ini dilindungi oleh reCAPTCHA dan{" "}
        <span className="underline hover:cursor-pointer">
          Kebijakan Privasi
        </span>{" "}
        serta{" "}
        <span className="underline hover:cursor-pointer">
          Persyaratan Layanan
        </span>{" "}
        Google berlaku.
      </p>
    </FormLayout>
  );
}
