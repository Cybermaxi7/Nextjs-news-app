import { categories } from "@/constants";
import { fetchNews } from "@/utils/fetchNews";
import NewsList from "./NewsList";
import response from "../../response.json"

export default async function Homepage() {
  //Fetch news data
  const news: NewsResponse = response || await fetchNews(categories.join(","));
  console.log(news);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
