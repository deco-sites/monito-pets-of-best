import { SearchIcon } from "site/components/ui/Icons/SearchIcon.tsx";

export function Searchbar() {
  return (
    <div class="lg:w-full h-full flex items-center gap-2 px-5 py-3 bg-white rounded-full">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        class="max-lg:hidden border-none bg-white h-full w-full outline-0"
      />
    </div>
  );
}
