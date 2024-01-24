import { CartThisPlaylist } from "../Elements/CartThisPlaylist";

export function ThisPlaylistHomeLayout(props) {
  const { children, img1 } = props;
  return (
    <div className="w-72 bg-slate-600/40 hover:bg-slate-600/60 rounded-md hover:cursor-pointer mx-5 my-1">
      <div className="flex items-center ">
        <CartThisPlaylist img1={img1}>{children}</CartThisPlaylist>
      </div>
    </div>
  );
}
