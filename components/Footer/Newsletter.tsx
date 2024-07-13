export interface Props {
  title?: string;
}

export function Newsletter({ title }: Props) {
  return (
    <div class="w-full flex justify-center p-8 bg-[#003459] rounded-xl">
      <div class="w-full flex items-center">
        <p class="text-white text-2xl font-bold w-full max-w-[390px]">
          {title}
        </p>
        <div class="w-full flex items-center gap-3 bg-white p-3 rounded-xl">
          <input
            class="border-[1px] border-[#99A2A5] outline-0 rounded-lg bg-transparent w-full py-3 px-7"
            type="text"
            placeholder="Enter your Email"
          />
          <button class="w-full max-w-fit border-[1px] border-[#003459] rounded-lg py-3 px-7 whitespace-nowrap bg-[#003459] text-white text-base transition-all hover:bg-[#002743] hover:transition-all">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
