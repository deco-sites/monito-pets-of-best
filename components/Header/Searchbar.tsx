import { SearchIcon } from "site/components/ui/Icons/SearchIcon.tsx";

export function Searchbar() {
  return (
    <div class="w-full h-full flex items-center gap-2 px-5 py-3 bg-white rounded-full">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        class="border-none bg-white h-full w-full"
      />
    </div>
  );
}
