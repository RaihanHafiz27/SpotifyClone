import { RecomendationLayout } from "../Layout/RecomendationLayout";

export function Recomendation() {
  return (
    <div className="grid grid-cols-4">
      <RecomendationLayout
        img="img/BmthSpotify.jpg"
        title="Bring Me The Horizon"
      />
      <RecomendationLayout img="img/YoasobiSpotify.jpg" title="Yoasobi" />
      <RecomendationLayout img="img/AnimeSpotify.jpg" title="Anime Songs" />
      <RecomendationLayout img="img/BabyMetalSpotify.jpg" title="BABYMETAL" />
    </div>
  );
}
