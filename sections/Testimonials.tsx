import { ImageWidget } from "apps/admin/widgets.ts";
import { Testimonial } from "site/components/Testimonial/index.tsx";

export interface Testimonial {
  image: ImageWidget;
  author: string;
  commentary: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  link?: {
    label: string;
    url: string;
  };
  testimonials: Testimonial[];
}

export default function Testimonials(
  { title, subtitle, link, testimonials }: Props,
) {
  return (
    <div class="w-full flex justify-center py-10 px-5">
      <div class="w-full max-w-[1180px] flex flex-col gap-7">
        <div class="w-full flex items-center justify-between">
          <div class="flex flex-col gap-2">
            <span class="text-black text-base max-lg:text-sm">{subtitle}</span>
            <h3 class="text-[#003459] text-2xl font-bold max-lg:text-xl">
              {title}
            </h3>
          </div>
          <div class="flex items-center gap-5">
            <a
              href={link?.url}
              class="rounded-full py-3 px-7 border-2 border-[#003459] 
              bg-transparent text-[#003459] text-sm font-medium flex items-center gap-2 max-lg:px-4 
              transition-all hover:bg-[#01243d] hover:text-white hover:transition-all"
            >
              {link?.label}
            </a>
          </div>
        </div>
        <div class="w-full flex items-center justify-between gap-5 max-lg:flex-col">
          {testimonials.map((item) => (
            <Testimonial
              author={item.author}
              image={item.image}
              commentary={item.commentary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
