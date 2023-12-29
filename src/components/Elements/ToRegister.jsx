import { SideBtn } from "../Atom/SideButton";

export function ToRegister() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <p>Tidak punya akun?</p>
        <SideBtn
          to="/register"
          text="text-slate-200"
          font="font-semibold"
          hvr="hover:text-green-500"
          className="ml-1 underline text-sm"
        >
          Mendaftar ke Spotify
        </SideBtn>
      </div>
      <p className="text-xs px-2 text-center mt-16 mb-3">
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
    </>
  );
}
