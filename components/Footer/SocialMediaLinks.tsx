import { SocialMedia } from "site/components/Footer/index.tsx";
import { FacebookIcon } from "site/components/ui/Icons/FacebookIcon.tsx";
import { Instagram } from "site/components/ui/Icons/InstagramIcon.tsx";
import { Xuitter } from "site/components/ui/Icons/XuitterIcon.tsx";
import { YoutubeIcon } from "site/components/ui/Icons/YoutubeIcon.tsx";

export function SocialMediaLinks(
  { youtube, facebook, instagram, xuitter }: SocialMedia,
) {
  return (
    <div class="flex items-center gap-10">
      {facebook?.show && (
        <a href={facebook.url} target="_blank">
          <FacebookIcon />
        </a>
      )}
      {instagram?.show && (
        <a href={instagram.url} target="_blank">
          <Instagram />
        </a>
      )}
      {xuitter?.show && (
        <a href={xuitter.url} target="_blank">
          <Xuitter />
        </a>
      )}
      {youtube?.show && (
        <a href={youtube.url} target="_blank">
          <YoutubeIcon />
        </a>
      )}
    </div>
  );
}
