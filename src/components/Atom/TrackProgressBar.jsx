export function TrackProgressBar() {
  return (
    <div className="relative">
      <div className=" dark:bg-slate-700 rounded-full overflow-hidden mt-2">
        <div
          className=" dark:bg-slate-200 hover:bg-green-600 w-1/2 h-1 rounded-full"
          role="progressbar"
          aria-label="music progress"
          aria-valuenow="1456"
          aria-valuemin="0"
          aria-valuemax="4550"
        ></div>
      </div>
    </div>
  );
}
