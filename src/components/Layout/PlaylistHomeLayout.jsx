import { CartPlaylistHome } from "../Elements/CartPlaylistHome";

export function PlaylistHomeLayout(props) {
  const { children, img1, img2, img3, img4 } = props;
  return (
    <div className="w-72 bg-slate-600/40 hover:bg-slate-600/60 rounded-md hover:cursor-pointer mx-5 my-1">
      <div className="flex items-center ">
        <CartPlaylistHome img1={img1} img2={img2} img3={img3} img4={img4}>
          {children}
        </CartPlaylistHome>
      </div>
    </div>
  );
}
