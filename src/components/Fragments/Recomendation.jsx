import { RecomendationLayout } from "../Layout/RecomendationLayout";

export function Recomendation() {
  return (
    <>
      <RecomendationLayout
        img="img/BmthSpotify.jpg"
        title="Bring Me The Horizon"
      />
      <RecomendationLayout img="img/YoasobiSpotify.jpg" title="Yoasobi" />
      <RecomendationLayout img="img/AnimeSpotify.jpg" title="Anime Songs" />
      <RecomendationLayout img="img/BabyMetalSpotify.jpg" title="BABYMETAL" />
    </>
  );
}
