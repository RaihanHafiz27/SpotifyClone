import { ImgPlaylistSide } from "../Atom/ImgPlaylistSide";

export function CartPlaylist(props) {
  const { children, img1, img2, img3, img4 } = props;
  return (
    <>
      <div className="flex items-center pl-2 pt-1 mt-1">
        {" "}
        <div className="flex w-12 mb-2 flex-wrap">
          <ImgPlaylistSide img={img1} rounded="rounded-tl-md" />
          <ImgPlaylistSide img={img2} rounded="rounded-tr-md" />
          <ImgPlaylistSide img={img3} rounded="rounded-bl-md" />
          <ImgPlaylistSide img={img4} rounded="rounded-br-md" />
        </div>
      </div>
      <div className="pl-3 text-sm">
        <h2 className="text-slate-200 font-bold">{children}</h2>
        <p className="text-gray-400 font-semibold">Playlist • AsunaYukki</p>
      </div>
    </>
  );
}
