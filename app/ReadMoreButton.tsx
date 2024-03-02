"use client";

import { useRouter } from "next/navigation";


type Props = {
  article: Article;
};
export default function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  function handleClick() {
    const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
    const url = `/article?${queryString}`
    console.log(url)
    router.push(url)
  }
  return (
    <button
      onClick={handleClick}
      className="h-10 rounded-b-lg bg-orange-400 hover:bg-orange-500 dark:text-gray-900"
    >
      Read More
    </button>
  );
}
