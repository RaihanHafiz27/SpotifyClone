import { SideBtn } from "../Atom/SideButton";

export function InformationPlaylist() {
  return (
    <>
      <div>
        <SideBtn className="hover:underline">Baru saja didengar</SideBtn>
      </div>
      <div>
        <SideBtn className="font-medium text-sm hover:underline">
          Tampilkan semua
        </SideBtn>
      </div>
    </>
  );
}
