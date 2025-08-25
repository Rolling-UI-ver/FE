function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="white" strokeWidth="3">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ColorPicker({ colors, value, onChange }) {
  return (
    <div className="flex gap-6">
      {colors.map((c) => {
        const active = value === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onChange(c.id)}
            className="relative h-28 w-28 rounded-xl ring-1 ring-black/5 shadow-sm focus:outline-none"
            style={{ backgroundColor: c.hex }}
            aria-pressed={active}
          >
            {active && (
              <span className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black/70">
                  <Check />
                </span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
