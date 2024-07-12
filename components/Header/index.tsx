import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Navbar } from "site/components/Header/Navbar.tsx";
import { Searchbar } from "site/components/Header/Searchbar.tsx";

export interface Nav {
  label: string;
  url: string;
}
export interface Props {
  logo: ImageWidget;
  menu: Nav[];
  joinus: Nav;
}

export default function Header({ menu, logo, joinus }: Props) {
  return (
    <div class="w-full lg:fixed top-0 left-0 flex justify-center py-8 px-5">
      <div class="w-full max-w-[1180px] flex items-center gap-12">
        <div class="w-full h-full flex items-center gap-12">
          <a href="/">
            <Image src={logo} alt="Logo" width={115} />
          </a>
          <Navbar items={menu} />
        </div>
        <div class="w-full flex items-center gap-4">
          <Searchbar />
          <a
            class="rounded-full bg-[#003459] hover:bg-[#01243d] transition-all hover:transition-all py-3 px-7 text-white text-base flex items-center justify-center font-semibold whitespace-nowrap"
            href={joinus.url}
            alt={joinus.label}
          >
            {joinus.label}
          </a>
        </div>
      </div>
    </div>
  );
}
