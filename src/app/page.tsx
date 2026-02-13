import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-light tracking-wide">Miraligal — Концепты</h1>
        <p className="text-stone-400">Выберите концепт для просмотра:</p>
        <div className="flex flex-col gap-4">
          <Link href="/concept-1" className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg">
            Концепт 1
          </Link>
          <Link href="/concept-2" className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg">
            Концепт 2
          </Link>
          <Link href="/concept-3" className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg">
            Концепт 3
          </Link>
        </div>
      </div>
    </div>
  );
}
