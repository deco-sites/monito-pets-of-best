import { Nav } from "site/components/Header/index.tsx";

export interface Props {
  items: Nav[];
}

export function Navbar({ items }: Props) {
  return (
    <nav class="h-full flex items-center gap-12">
      {items.map((item) => (
        <a
          class="h-full flex items-center text-base font-semibold text-[#003459] border-b-2 border-b-transparent transition-all hover:transition-all hover:border-b-[#003459]"
          href={item.url}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
