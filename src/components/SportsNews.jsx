import React from 'react'
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderPlaceholder from "./LoaderPlaceholder";

function SportsNews({category}) {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [news, setNews] = useState([]);
  
    const loadMore = () => {
      // Increment the page number to fetch the next set of articles
      setPage((prevPage) => prevPage + 1);
    };
  
    function fetchNews() {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=in&language=en&category=${category}&pageSize=6&page=${page}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((responce) => responce.json())
        .then((data) => {
          // Check if there are more articles
          setHasMore(data.articles.length > 0);
  
          setNews((prevTopHeadlines) => {
            // If it's the initial fetch, set the data directly
            if (page === 1) {
              return [...data.articles];
            }
            // For subsequent fetches, append the data
            return [...prevTopHeadlines, ...data.articles];
          });
        })
        .catch((err) => console.log(err));
    }
  
    useEffect(() => {
      fetchNews();
    }, [page]);
      return (
          <div className="mx-auto p-4 dark:darkMode">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          {category}
        </h2>
        <InfiniteScroll
          dataLength={news.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<LoaderPlaceholder/>}
        >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((article) => (
            <li
              key={article.title}
              className="bg-white rounded-lg overflow-hidden shadow-md dark:darkMode"
            >
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">
                {article.source.name}
              </span>
  
              <img
                src={
                  article.urlToImage ||
                  "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
                }
                alt={article.title}
                className="w-full h-52 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {article.title.length > 100
                    ? `${article.title.slice(0, 100)} ...`
                    : article.title}
                </h3>
                <p className="text-gray-700  dark:text-gray-400">
                  {article.description
                    ? article.description.length > 100
                      ? `${article.description.slice(0, 100)} ...`
                      : article.description
                    : "Unavailable"}
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-sm pt-2">
                  Published At - {new Date(article.publishedAt).toLocaleString()}
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  Author {article.author || "Unknown"}
                </p>
  
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 hover:underline block"
                >
                  Read more
                </a>
              </div>
            </li>
          ))}
             
          </ul>
          </InfiniteScroll>
      </div>
      );
}

export default SportsNews
