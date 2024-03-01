import NewsList from "@/app/NewsList";
import { categories } from "@/constants";
import { fetchNews } from "@/utils/fetchNews";

type Props = {
  params: { category: Category };
};

export async function generateStaticProps() {
  return categories.map((category) => ({
    props: {
      params: {
        category,
      },
    },
  }));
}

export default async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}