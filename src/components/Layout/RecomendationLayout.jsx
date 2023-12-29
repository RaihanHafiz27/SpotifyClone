import { ImgRecomendation } from "../Atom/ImgRecomendation";

export function RecomendationLayout(props) {
  const { title, img } = props;
  return (
    <div className="bg-slate-600/20 hover:bg-slate-600/30 w-48 mx-6 px-4 rounded-md">
      <ImgRecomendation img={img} rounded="rounded-md"></ImgRecomendation>
      <h1 className="text-slate-200 font-bold truncate mt-1">
        This Is {title}
      </h1>
      <p className="text-slate-500 font-semibold text-sm mb-3">
        Semua album tentang {title}.
      </p>
    </div>
  );
}
