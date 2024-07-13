import Image from "apps/website/components/Image.tsx";

export interface Props {
  image: string;
  author: string;
  commentary: string;
}

export function Testimonial({ image, author, commentary }: Props) {
  return (
    <div class="w-full flex flex-col bg-white rounded-xl p-2 shadow-lg">
      <div class="w-full rounded-lg">
        <Image src={image} alt={author} width={364} class="w-full rounded-lg" />
      </div>
      <div class="w-full flex flex-col gap-2 p-2">
        <span class="text-base font-bold text-[#00171F]">{author}</span>
        <p class="text-normal text-sm text-[#242B33] text-ellipsis line-clamp-3">
          {commentary}
        </p>
      </div>
    </div>
  );
}
