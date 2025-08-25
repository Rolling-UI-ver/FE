export default function Header() {
  return (
    <header className="border-b border-violet-300/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-11 max-w-6xl items-center gap-1 px-4">
        <svg
          viewBox="0 0 24 24"
          width="12"   
          height="12"  
          className="text-violet-600"
          fill="currentColor"
          aria-hidden
        >
          <path d="M2 12l19-9-6.7 18-3.9-7.3L2 12zm9-1.3l2.8 5.2 4.2-11.3L11 10.7z" />
        </svg>
        <span className="text-xs font-semibold">Rolling</span>
      </div>
    </header>
  );
}
