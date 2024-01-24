import { CartPlaylist } from "../Elements/CartPlaylist";

export function PlaylistLayout(props) {
  const { children, img1, img2, img3, img4 } = props;
  return (
    <div className="w-full -ml-4 hover:bg-slate-700 rounded-md hover:cursor-pointer">
      <div className="flex items-center pl-1 pt-1">
        <CartPlaylist img1={img1} img2={img2} img3={img3} img4={img4}>
          {children}
        </CartPlaylist>
      </div>
    </div>
  );
}
