import { ImgPlaylistHome } from "../Atom/ImgHome";

export function CartPlaylistHome(props) {
  const { children, img1, img2, img3, img4 } = props;
  return (
    <>
      <div className="flex items-center">
        <div className="flex w-20 flex-wrap">
          <ImgPlaylistHome img={img1} rounded="rounded-tl-md" />
          <ImgPlaylistHome img={img2} />
          <ImgPlaylistHome img={img3} rounded="rounded-bl-md" />
          <ImgPlaylistHome img={img4} />
        </div>
      </div>
      <div className="pl-2 text-base">
        <h2 className="text-slate-200 font-bold">{children}</h2>
      </div>
    </>
  );
}
