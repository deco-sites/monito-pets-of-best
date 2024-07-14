import Image from "apps/website/components/Image.tsx";

export interface Props {
  raca: string;
  cor: string;
  genero: string;
  idade: number;
  preco: number;
  image: string;
  format: string;
}

export function PetItem(
  { cor, genero, idade, image, preco, raca, format }: Props,
) {
  return (
    <div
      class={`w-full flex bg-white shadow-lg p-2 rounded-lg gap-5 max-lg:max-w-full ${
        format === "Vertical"
          ? "max-w-[280px] flex-col"
          : "max-w-[580px] flex-rol items-center"
      }`}
    >
      <div
        class={`w-full rounded-lg ${
          format === "Horizontal" && "max-w-[165px]"
        }`}
      >
        <Image
          src={image}
          alt={raca}
          width={format === "Vertical" ? 265 : 165}
          class="w-full rounded-lg"
        />
      </div>
      <div class="w-full flex flex-col gap-3 p-2">
        <p class="text-base font-bold text-[#00171F]">{raca} - {cor}</p>
        <div
          class={`flex items-center ${
            format === "Horizontal" ? "justify-start gap-5" : "justify-between"
          }`}
        >
          <span class="text-xs text-[#667479]">
            Gene: <b class="font-bold">{genero}</b>
          </span>
          <span class="text-xs text-[#667479]">
            Age: <b class="font-bold">{idade} months</b>
          </span>
        </div>
        <span class="text-base font-bold text-[#00171F]">
          U$ {preco.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
