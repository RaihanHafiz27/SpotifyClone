import { HomeIcon } from "../Atom/HomeIcon";
import { SearchIcon } from "../Atom/SearchIcon";
import { SideBtn } from "../Atom/SideButton";

export function SideBar1() {
  return (
    <div className="bg-slate-800 mx-2 py-5 pl-6 rounded-xl">
      <SideBtn icon={<HomeIcon />} className="mb-4">
        Home
      </SideBtn>
      <SideBtn icon={<SearchIcon />} className="mt-6">
        Search
      </SideBtn>
    </div>
  );
}
