import { LoginWith } from "../Elements/LoginWith";

export function LoginWithSocial() {
  return (
    // for login page
    <div className="mx-auto mt-6">
      <LoginWith src="/img/google.png">Lanjutkan dengan Google</LoginWith>
      <LoginWith src="/img/facebook.png">Lanjutkan dengan Facebook</LoginWith>
      <LoginWith src="/img/apple.png">Lanjutkan dengan Apple</LoginWith>
      <LoginWith>Lanjutkan dengan nomer telepon</LoginWith>
    </div>
  );
}
