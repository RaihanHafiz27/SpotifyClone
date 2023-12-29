import { ArrowDownload } from "../components/Atom/ArrowDownload";
import { Bell } from "../components/Atom/Bell";
import { Btn } from "../components/Atom/Button";
import { Profile } from "../components/Fragments/Profile";
import { LeftArrow } from "../components/Atom/LeftArrow";
import { RightArrow } from "../components/Atom/RightArrow";
import { SideBar1 } from "../components/Fragments/SideBar1";
import { SideBar2 } from "../components/Fragments/SideBar2";
import { PlaylistHome } from "../components/Fragments/PlaylistHome";
import { InformationPlaylist } from "../components/Elements/Information";
import { Recomendation } from "../components/Fragments/Recomendation";
import { FotterPlaylist } from "../components/Fragments/FotterPlaylist";

export function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex">
        {/* Start SideBar */}
        <div className="w-72 h-5/6 pt-2">
          <SideBar1 />
          <SideBar2 />
        </div>
        {/* End SideBar */}
        {/* Start SongsList */}
        <div className="bg-slate-800 w-4/5 mr-2 mt-2 rounded-xl mb-2">
          <div className="flex text-slate-200 mt-3 pl-5">
            <LeftArrow />
            <RightArrow />
            <div className=" w-full flex justify-end items-center pr-3 ml-2">
              <Btn variant="bg-slate-200" text="text-black">
                Jelajahi Premium
              </Btn>
              <Btn variant="bg-gray-700">
                {<ArrowDownload />}Pasang Aplikasi
              </Btn>
              <Bell />
              {/* Profile */}
              <Profile />
            </div>
          </div>
          <div className="font-bold text-2xl text-slate-200 pt-2 pl-5">
            <h1>Selamat Pagi</h1>
          </div>
          {/* Home Playlist */}
          <div className="mt-1">
            <PlaylistHome />
          </div>
          {/* Information */}
          <div className="flex my-2 ml-5 pr-8 justify-between">
            <InformationPlaylist />
          </div>
          {/* Recomendation */}
          <div className="flex justify-center">
            <Recomendation />
          </div>
        </div>
        {/* End SongsList */}
      </div>
      {/* PlaySongs */}
      <FotterPlaylist />
    </div>
  );
}
