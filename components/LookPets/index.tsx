/* import { Controls } from "site/components/LookPets/Controls.tsx"; */
import { PetsList } from "site/components/LookPets/PetsList.tsx";

export interface Data {
  raca: string;
  cor: string;
  genero: string;
  idade: number;
  preco: number;
  image: string;
}
export interface Props {
  title?: string;
  subtitle?: string;
  link?: {
    label: string;
    url: string;
  };
  format: "Horizontal" | "Vertical";
  data: Data[];
}

export default function LookPets(
  {
    title,
    subtitle,
    link,
    data = [
      {
        "raca": "Pomeranian",
        "cor": "White",
        "genero": "Macho",
        "idade": 2,
        "preco": 6000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/19c20d95-97d9-43d8-acb4-fce1d7161315",
      },
      {
        "raca": "Poodle Tiny",
        "cor": "Yellow",
        "genero": "Fêmea",
        "idade": 2,
        "preco": 7000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/e4fc6ec8-b01b-4050-b610-31d196519d70",
      },
      {
        "raca": "Poodle Tiny",
        "cor": "Sepia",
        "genero": "Macho",
        "idade": 3,
        "preco": 5000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/ea00c7f4-e576-4820-81e2-5dec0636d662",
      },
      {
        "raca": "Alaskan Malamute",
        "cor": "Grey",
        "genero": "Macho",
        "idade": 2,
        "preco": 10000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/6cc5a879-0a05-49ee-9ae7-2b8672dcd421",
      },
      {
        "raca": "Pembroke Corgi",
        "cor": "Cream",
        "genero": "Macho",
        "idade": 2,
        "preco": 6000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/7c81d59b-7e83-4b79-95e1-357c63829741",
      },
      {
        "raca": "Pembroke Corgi",
        "cor": "Tricolor",
        "genero": "Fêmea",
        "idade": 2,
        "preco": 6000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/889306c6-ca74-4cc6-b569-809b8e291ca3",
      },
      {
        "raca": "Pomeranian",
        "cor": "White",
        "genero": "Fêmea",
        "idade": 2,
        "preco": 6000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/138a6f12-7b2e-445b-8dee-24744bc97c48",
      },
      {
        "raca": "Poodle Tiny",
        "cor": "Dairy Cow",
        "genero": "Macho",
        "idade": 2,
        "preco": 6000,
        "image":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11440/0cf8386b-3bec-4d18-82af-3e17ab396032",
      },
    ],
    format,
  }: Props,
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
            {/* <Controls /> */}
            <a
              href={link?.url}
              class="rounded-full py-3 px-7 border-2 border-[#003459] 
              bg-transparent text-[#003459] text-sm font-medium flex items-center gap-2 max-lg:px-4 max-lg:hidden 
              transition-all hover:bg-[#01243d] hover:text-white hover:transition-all"
            >
              {link?.label}
            </a>
          </div>
        </div>
        <PetsList data={data} format={format} />
      </div>
    </div>
  );
}
