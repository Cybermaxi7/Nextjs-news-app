import Image from "next/image";
import ReadMoreButton from "./ReadMoreButton";
import LiveTimestamp from "./LiveTimestamp";

type Props = {
  article: Article;
};
export default function Article({ article }: Props) {
  return (
    <article className="flex flex-col rounded-md bg-slate-100 shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:shadow-lg dark:bg-slate-800">
      {article.image && (
        <img
          src={article?.image}
          alt={article.title}
          //   width={300}
          //   height={300}
          className="h-56 w-full rounded-t-lg object-cover shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>
          <footer>
            <p>{article.source} -</p>

            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        {/* ReadMore Button */}
        <ReadMoreButton article={article}/>
      </div>

    </article>
  );
}
