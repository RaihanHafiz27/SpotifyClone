import { ImgRecomendation } from "../Atom/ImgRecomendation";

export function RecomendationLayout(props) {
  const { title, img } = props;
  return (
    <div className="w-48 px-4 mx-6 rounded-md bg-slate-600/20 hover:bg-slate-600/30">
      <ImgRecomendation img={img} rounded="rounded-md"></ImgRecomendation>
      <h1 className="mt-1 font-bold truncate text-slate-200">
        This Is {title}
      </h1>
      <p className="mb-3 text-sm font-semibold text-slate-500">
        Semua album tentang {title}.
      </p>
    </div>
  );
}
