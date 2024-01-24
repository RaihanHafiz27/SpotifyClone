import { ProfileImg } from "../Atom/ProfileImg";

export function Profile() {
  return (
    <ProfileImg
      img="/img/Lisa1.jpg"
      rounded="rounded-full"
      className="border-2 border-slate-400 w-8 h-8 hover:border-slate-200 hover:cursor-pointer"
    />
  );
}
