import { Nav } from "site/components/Header/index.tsx";
import { HamburgerIcon } from "site/components/ui/Icons/HamburgerIcon.tsx";

export interface Props {
  items: Nav[];
}
export function DrawMenu({ items }: Props) {
  return (
    <div class="">
      <button class="">
        <HamburgerIcon />
      </button>
      <div class="flex flex-col absolute left-[-100%]">
        {items.map(({ url, label }) => <a href={url}>{label}</a>)}
      </div>
    </div>
  );
}
