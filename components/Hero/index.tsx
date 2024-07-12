import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Link {
  label?: string;
  link?: string;
}
export interface Banner {
  imageDesktop: ImageWidget;
  imageMobile: ImageWidget;
}

export interface Props {
  banner: Banner;
  title?: string;
  subtitle?: string;
  text?: string;
  videoLink?: Link;
  cta?: Link;
}
export default function Hero(
  { banner, title, subtitle, text, videoLink, cta }: Props,
) {
  return (
    <div class="w-full flex justify-center lg:items-center relative">
      <Picture class="w-full">
        <Source
          media="(max-width: 1024px)"
          src={banner.imageMobile}
          width={390}
        />
        <img src={banner.imageDesktop} class="w-full" width={1920} />
      </Picture>
      <div class="w-full max-w-[1180px] max-xl:px-5 max-lg:py-[120px] absolute">
        <div class="flex flex-col gap-5 max-w-[510px]">
          <h1 class="text-[#002A48] font-bold text-6xl max-lg:text-[40px]">
            {title}
          </h1>
          <h2 class="text-[#002A48] font-semibold text-5xl max-lg:text-[28px]">
            {subtitle}
          </h2>
          <p class="text-[#242B33] font-normal text-base max-lg:text-[12px]">
            {text}
          </p>
          <div class="flex items-center gap-5">
            <a
              href={videoLink?.link}
              class="rounded-full py-3 px-10 border-2 border-[#003459] 
              bg-transparent text-[#003459] font-medium flex items-center gap-2 max-lg:px-4 
              transition-all hover:bg-[#01243d] hover:text-white hover:transition-all"
              target="_blank"
            >
              {videoLink?.label}
            </a>
            <a
              href={cta?.link}
              class="rounded-full py-3 px-10 border-2 border-[#003459] 
              bg-[#003459] text-white font-medium flex items-center gap-2 max-lg:px-4 
              transition-all hover:bg-[#002743] hover:transition-all"
            >
              {cta?.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
