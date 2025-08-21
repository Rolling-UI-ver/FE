export default function Button({ children, onClick, disabled = false, full = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-lg px-4 py-2.5 text-sm font-semibold transition",
        full ? "w-full" : "w-auto",
        disabled
          ? "cursor-not-allowed bg-violet-300 text-white/85"
          : "bg-[#7C3AED] text-white hover:opacity-95 active:translate-y-[1px]"
      ].join(" ")}
    >
      {children}
    </button>
  );
}
