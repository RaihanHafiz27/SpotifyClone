import { SideBtn } from "../Atom/SideButton";
import { LoveIcon } from "../Atom/LoveIcon";
import { ArrowRepeatIcon } from "../Atom/ArrowRepeatIcon";
import { PlayLeftIcon } from "../Atom/PlayLeftIcon";
import { PlayPauseIcon } from "../Atom/PlayPauseIcon";
import { PlayRightIcon } from "../Atom/PlayRightIcon";
import { MixedIcon } from "../Atom/MixedIcon";
import { LirikIcon } from "../Atom/LirikIcon";
import { BarsIcon } from "../Atom/BarsIcon";
import { PhoneIcon } from "../Atom/PhoneIcon";
import { VolumeIcon } from "../Atom/VolumeIcon";
import { CommentsIcon } from "../Atom/CommentIcon";
import { TrackProgressBar } from "../Atom/TrackProgressBar";

export function FotterPlaylist() {
  return (
    <>
      <div className="bg-slate-800 py-1.5 z-10 -mt-1 flex items-center rounded-md">
        <div className="flex items-center ml-6 w-64 py-3.5 mr-10">
          <img
            src="/img/KickBack.jpg"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className="ml-4">
            <SideBtn className="hover:underline text-sm">KICK BACK</SideBtn>
            <SideBtn className="hover:underline text-xs font-normal">
              Kenshi Yonezu
            </SideBtn>
          </div>
          <div className="flex justify-center items-center ml-5 text-slate-500 hover:text-slate-200">
            <LoveIcon></LoveIcon>
          </div>
        </div>
        {/*  */}
        <div className="flex mt-0.5 w-2/5 ml-16">
          <div className=" dark:text-slate-100 mx-2 text-sm flex items-end mt-6">
            2:16
          </div>
          <div className=" w-full">
            <div className="flex justify-center items-center mb-2 ">
              <MixedIcon></MixedIcon>
              <PlayLeftIcon></PlayLeftIcon>
              <PlayPauseIcon></PlayPauseIcon>
              <PlayRightIcon width="w-6" height="h-6"></PlayRightIcon>
              <ArrowRepeatIcon></ArrowRepeatIcon>
            </div>
            <TrackProgressBar />
          </div>
          <div className="text-slate-500 dark:text-slate-400 flex items-end mx-2 text-sm">
            4:26
          </div>
        </div>
        <div className="flex w-1/4 ml-16 mt-2 items-center justify-center hover:cursor-pointer">
          <div className="border-2 rounded-sm mr-2">
            <PlayRightIcon width="w-2" height="h-2" />
          </div>
          <LirikIcon />
          <BarsIcon />
          <PhoneIcon />
          {/*  */}
          <div className="flex">
            <VolumeIcon></VolumeIcon>
            <div className="relative">
              <div className=" dark:bg-slate-700 rounded-full w-28 overflow-hidden mt-2.5">
                <div
                  className=" dark:bg-green-500 w-1/3 h-1"
                  aria-label="music progress"
                  aria-valuenow="1456"
                  aria-valuemin="0"
                  aria-valuemax="4550"
                ></div>
              </div>
              <div className="absolute left-8 top-1/2 w-4 h-4 -mt-1.5 -ml-2 flex items-center justify-center bg-slate-200 rounded-full shadow">
                <div className="w-1.5 h-1.5 dark:bg-green-500 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
              </div>
            </div>
          </div>
          {/*  */}
          <CommentsIcon></CommentsIcon>
        </div>
      </div>
    </>
  );
}
