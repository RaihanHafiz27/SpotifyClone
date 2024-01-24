import { PlaylistHomeLayout } from "../Layout/PlaylistHomeLayout";
import { ThisPlaylistHomeLayout } from "../Layout/ThisPlaylist";

export function PlaylistHome() {
  return (
    <div className="flex flex-wrap">
      <PlaylistHomeLayout
        img1="/img/Babymetal1.jpg"
        img2="/img/Babymetal2.jpg"
        img3="/img/Bmth1.jpg"
        img4="/img/Bmth2.png"
      >
        Metal
      </PlaylistHomeLayout>
      <PlaylistHomeLayout
        img1="/img/Lisa1.jpg"
        img2="/img/Lisa2.jpg"
        img3="/img/Yoasobi1.jpg"
        img4="/img/Yoasobi2.jpg"
      >
        Anime
      </PlaylistHomeLayout>
      <PlaylistHomeLayout
        img1="/img/adele1.jpg"
        img2="/img/adele2.jpg"
        img3="/img/adele3.jpg"
        img4="/img/adele4.jpg"
      >
        Chill
      </PlaylistHomeLayout>
      <ThisPlaylistHomeLayout img1="/img/BabyMetalSpotify.jpg">
        This Is BABYMETAL
      </ThisPlaylistHomeLayout>
      <ThisPlaylistHomeLayout img1="/img/BmthSpotify.jpg">
        This Is Bring Me The Horizon
      </ThisPlaylistHomeLayout>
      <ThisPlaylistHomeLayout img1="/img/YoasobiSpotify.jpg">
        This Is Yoasobi
      </ThisPlaylistHomeLayout>
    </div>
  );
}
