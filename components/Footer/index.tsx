import { Newsletter } from "site/components/Footer/Newsletter.tsx";
import { Nav } from "site/components/Header/index.tsx";
import { SocialMediaLinks } from "./SocialMediaLinks.tsx";

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
}

export default function Footer({ title, menu, socialmedia }: Props) {
  return (
    <div class="w-full flex justify-center px-5 pt-20 pb-10 bg-[#FCEED5] rounded-t-3xl">
      <div class="w-full max-w-[1180px] flex flex-col gap-10">
        <Newsletter title={title} />
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center gap-10">
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
      </div>
    </div>
  );
}
