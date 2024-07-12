import { GridIcon } from "site/components/ui/Icons/GridIcon.tsx";
import { RowIcon } from "site/components/ui/Icons/RowIcon.tsx";

export function Controls() {
  return (
    <div class="flex items-center gap-2">
      <button class="flex p-3 items-center justify-center rounded-lg transition-all hover:bg-[rgba(0,52,89,0.3)] hover:transition-all">
        <GridIcon />
      </button>
      <button class="flex p-3 items-center justify-center rounded-lg transition-all hover:bg-[rgba(0,52,89,0.3)] hover:transition-all">
        <RowIcon />
      </button>
    </div>
  );
}
