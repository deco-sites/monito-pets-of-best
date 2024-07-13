import { Newsletter } from "site/components/Footer/Newsletter.tsx";
import { Nav } from "site/components/Header/index.tsx";
import { SocialMediaLinks } from "./SocialMediaLinks.tsx";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface SocialMedia {
  facebook?: {
    show?: boolean;
    url?: string;
  };
  xuitter?: {
    show?: boolean;
    url?: string;
  };
  instagram?: {
    show?: boolean;
    url?: string;
  };
  youtube?: {
    show?: boolean;
    url?: string;
  };
}

export interface Props {
  title?: string;
  menu: Nav[];
  socialmedia?: SocialMedia;
  logo: ImageWidget;
}

export default function Footer({ title, menu, socialmedia, logo }: Props) {
  return (
    <div class="w-full flex justify-center px-5 pt-20 pb-10 bg-[#FCEED5] rounded-t-3xl">
      <div class="w-full max-w-[1180px] flex flex-col gap-10">
        <Newsletter title={title} />
        <div class="w-full flex items-center justify-between max-lg:flex-col max-lg:gap-5">
          <div class="flex items-center gap-10 max-lg:gap-4 max-lg:justify-between max-lg:w-full">
            {menu.map((item) => (
              <a href={item.url} class="text-base font-semibold text-[#00171F]">
                {item.label}
              </a>
            ))}
          </div>
          <SocialMediaLinks
            youtube={socialmedia?.youtube}
            xuitter={socialmedia?.xuitter}
            instagram={socialmedia?.instagram}
            facebook={socialmedia?.facebook}
          />
        </div>
        <div class="w-full h-0.5 bg-[#CCD1D2] "></div>
        <div class="w-full flex items-center justify-between max-lg:flex-col max-lg:gap-4">
          <p class="text-base text-[#667479] font-semibold">
            © 2024 Monito. All rights reserved.
          </p>
          <Image src={logo} alt="Logo" width={115} />
          <div class="flex items-center gap-10">
            <a
              href="/"
              class="text-base text-[#667479] font-semibold hover:text-[#5b6366]"
              target="_blank"
            >
              Terms of Service
            </a>
            <a
              href="/"
              class="text-base text-[#667479] font-semibold hover:text-[#5b6366]"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
