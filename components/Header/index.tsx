import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Navbar } from "site/components/Header/Navbar.tsx";
import { Searchbar } from "site/components/Header/Searchbar.tsx";
import { DrawMenu } from "site/components/Header/DrawMenu.tsx";

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
    <div class="w-full fixed z-10 top-0 left-0 flex justify-center py-8 max-lg:py-6 px-5 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div class="w-full max-w-[1180px] flex items-center gap-12">
        <div class="lg:hidden w-full flex items-center justify-between">
          <DrawMenu items={menu} />
          <a href="/">
            <Image src={logo} alt="Logo" width={115} />
          </a>
          <Searchbar />
        </div>
        <div class="max-lg:hidden w-full h-full flex items-center gap-12">
          <a href="/">
            <Image src={logo} alt="Logo" width={115} />
          </a>
          <Navbar items={menu} />
        </div>
        <div class="max-lg:hidden w-full flex items-center gap-4">
          <Searchbar />
          <a
            class="rounded-full hidden lg:flex bg-[#003459] hover:bg-[#01243d] transition-all hover:transition-all py-3 px-7 text-white text-base items-center justify-center font-semibold whitespace-nowrap"
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
