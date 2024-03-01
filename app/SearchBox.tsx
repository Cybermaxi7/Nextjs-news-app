"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBox() {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  }
  return (
    <form
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
      onSubmit={handleSearch}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none dark:text-orange-400"
        placeholder="Search keywords..."
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
