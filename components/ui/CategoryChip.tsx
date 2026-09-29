type CategoryChipProps = {
  label: string;
  active?: boolean;
};

const CategoryChip = ({ label, active = false }: CategoryChipProps) => (
  <button
    className={`rounded-full px-4 py-3 text-base transition-colors ${active ? "bg-brand-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-950/80 hover:bg-shuttle-100"}`}
    type="button"
  >
    {label}
  </button>
);

export default CategoryChip;
