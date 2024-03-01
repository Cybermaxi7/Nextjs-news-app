import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="text-center font-serif text-xl md:text-4xl">
            <span className="underline decoration-orange-600">Cybermaxi's</span>{" "}
            News App
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* DarkMode FUnc */}
          <DarkModeButton />

          <Link href="https://moses-agbe.vercel.app" target="_blank" rel="no-referrer" className="hidden rounded-full bg-slate-900 px-4 py-2 text-white md:inline lg:px-8 lg:py-4 dark:bg-slate-800">
            Check Developer
          </Link>
        </div>
      </div>

      {/* NavLinks */}
      <NavLinks />

      {/* Search Box */}
      <SearchBox />
    </header>
  );
}
