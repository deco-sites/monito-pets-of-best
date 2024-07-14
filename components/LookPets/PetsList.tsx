import { Data } from "site/components/LookPets/index.tsx";
import { PetItem } from "site/components/LookPets/PetItem.tsx";

export interface Props {
  data: Data[];
  format: string;
}
export function PetsList({ data, format }: Props) {
  return (
    <div class="w-full flex flex-wrap justify-between gap-5">
      {data.map(({ cor, genero, idade, image, preco, raca }) => (
        <PetItem
          cor={cor}
          genero={genero}
          idade={idade}
          image={image}
          preco={preco}
          raca={raca}
          format={format}
        />
      ))}
    </div>
  );
}
