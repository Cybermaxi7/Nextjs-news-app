import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

export async function fetchNews(
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean,
) {
  // query (graphQL)
  const query = gql`
  query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
          access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "gb"
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

    const res = await fetch(
    "https://moisei.stepzen.net/api/olfactory-starfish/__graphql",
    {
      method: "POST",
      // cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    },
  );
  console.log("LOADING NEW DATA", category, keywords);
  const newsResponse = await res.json();
  console.log(newsResponse);
  //   Sort function by images and !images
  // console.log(newsResponse.data)
  const news = sortNewsByImage(newsResponse.data.myQuery);
  //   return result
  return news;
}

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=8e9860c0ea94b41405b7f1d487627205&countries=us%2Cgb&limit=100&offset=0&sort=published_desc
