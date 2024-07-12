import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
    <div class="w-full flex justify-center items-center relative">
      <Image
        src={banner.imageDesktop || banner.imageMobile}
        class="w-full"
        width={1920}
      />
      <div class="w-full max-w-[1180px] max-xl:px-5 absolute">
        <div class="flex flex-col gap-5 max-w-[510px]">
          <h1 class="text-[#002A48] font-bold text-6xl">{title}</h1>
          <h2 class="text-[#002A48] font-semibold text-5xl">{subtitle}</h2>
          <p class="text-[#242B33] font-normal text-base">{text}</p>
          <div class="flex items-center gap-5">
            <a
              href={videoLink?.link}
              class="rounded-full py-3 px-10 border-2 border-[#003459] 
              bg-transparent text-[#003459] font-medium flex items-center gap-2 
              transition-all hover:bg-[#01243d] hover:text-white hover:transition-all"
              target="_blank"
            >
              {videoLink?.label}
            </a>
            <a
              href={cta?.link}
              class="rounded-full py-3 px-10 border-2 border-[#003459] 
              bg-[#003459] text-white font-medium flex items-center gap-2 
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
