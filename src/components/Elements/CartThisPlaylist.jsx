import { ThisImg } from "../Atom/ImgThis";

export function CartThisPlaylist(props) {
  const { children, img1 } = props;
  return (
    <>
      <div className="flex items-center ">
        <div className="flex w-20 flex-wrap ">
          <ThisImg img={img1} rounded="rounded-tl-md rounded-bl-md" />
        </div>
      </div>
      <div className="pl-2 text-base">
        <h2 className="text-slate-200 font-bold">{children}</h2>
      </div>
    </>
  );
}
