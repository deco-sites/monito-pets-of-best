import { Pets } from "site/components/LookPets/Pets.tsx";
import { Controls } from "site/components/LookPets/Controls.tsx";
export interface Props {
  title?: string;
  subtitle?: string;
  link?: {
    label: string;
    url: string;
  };
}

export default function LookPets(
  { title, subtitle, link }: Props,
) {
  return (
    <div class="w-full flex justify-center py-10 px-5">
      <div class="w-full max-w-[1180px] flex flex-col gap-7">
        <div class="w-full flex items-center justify-between">
          <div class="flex flex-col gap-2">
            <span class="text-black text-base">{subtitle}</span>
            <h3 class="text-[#003459] text-2xl font-bold">{title}</h3>
          </div>
          <div class="flex items-center gap-5">
            <Controls />

            <a
              href={link?.url}
              class="rounded-full py-3 px-7 border-2 border-[#003459] 
              bg-transparent text-[#003459] font-medium flex items-center gap-2 max-lg:px-4 
              transition-all hover:bg-[#01243d] hover:text-white hover:transition-all"
            >
              {link?.label}
            </a>
          </div>
        </div>
        <Pets />
      </div>
    </div>
  );
}
