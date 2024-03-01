import { fetchNews } from "@/utils/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};
export default async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true,
  );
  return (
    <div>
      <h2 className="headerTitle">Search results for {searchParams?.term}</h2>
    <NewsList news={news} />
    </div>
  );
}
