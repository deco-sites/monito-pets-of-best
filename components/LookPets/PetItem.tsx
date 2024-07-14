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
      class="w-full flex bg-white shadow-lg p-2 rounded-lg gap-5 max-w-[280px] max-md:max-w-full"
      style={`${
        format === "Vertical"
          ? "flex-direction: column;"
          : "max-width: 580px; flex-direction: row; align-items: center"
      }`}
    >
      <div
        class="w-full rounded-lg"
        style={`${format === "Horizontal" && "max-width: 165px"}`}
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
          class="flex items-center"
          style={`${
            format === "Horizontal"
              ? "justify-content: flex-start; gap: 20px"
              : "justify-content: space-between"
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
