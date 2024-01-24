import { ArrowIcon } from "../Atom/ArrowIcon";
import { Btn } from "../Atom/Button";
import { PlusIcon } from "../Atom/PlusIcon";
import { SideBtn } from "../Atom/SideButton";
import { Stack } from "../Atom/Stack";
import { SearchIcon } from "../Atom/SearchIcon";
import { PlaylistLayout } from "../Layout/Playlist";

export function SideBar2() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap bg-slate-800 mx-2 my-2 py-2 pl-6 rounded-xl">
        <SideBtn icon={<Stack />} className="mt-2">
          Koleksi Kamu
        </SideBtn>
        <SideBtn icon={<PlusIcon />} className="mt-2">
          {" "}
        </SideBtn>
        <SideBtn icon={<ArrowIcon />} className="mt-2">
          {" "}
        </SideBtn>
        <div className="w-full mb-2">
          <Btn
            variant="bg-gray-600"
            text="text-white"
            className="hover:bg-gray-500/50 hover:shadow-md hover:text-slate-100 mt-5"
          >
            Daftar Putar
          </Btn>
        </div>
        <div className="flex mb-2">
          <SideBtn icon={<SearchIcon />} className="mt-3 mr-16">
            {" "}
          </SideBtn>
          <SideBtn font="font-semibold" className="mt-3 ml-4">
            Baru diputar ▼
          </SideBtn>
        </div>
        <PlaylistLayout
          img1="/img/adele1.jpg"
          img2="/img/adele2.jpg"
          img3="/img/adele3.jpg"
          img4="/img/adele4.jpg"
        >
          Chill
        </PlaylistLayout>
        <PlaylistLayout
          img1="/img/Lisa1.jpg"
          img2="/img/Lisa2.jpg"
          img3="/img/Yoasobi1.jpg"
          img4="/img/Yoasobi2.jpg"
        >
          Anime
        </PlaylistLayout>
        <PlaylistLayout
          img1="/img/Babymetal1.jpg"
          img2="/img/Babymetal2.jpg"
          img3="/img/Bmth1.jpg"
          img4="/img/Bmth2.png"
        >
          Metal
        </PlaylistLayout>
        <PlaylistLayout
          img1="/img/Payungteduh.jpg"
          img2="/img/ForRevenge.jpg"
          img3="/img/ForRevenge2.jpg"
          img4="/img/Slank.jpg"
        >
          Indo
        </PlaylistLayout>
      </div>
    </>
  );
}
