'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Video = {
  title: string;
  url: string;
};

type Article = {
  title: string;
  content: string;
  videos?: Video[];
};

const Article = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      try {
        const res = await fetch("/data/Articles.json");
        const data = await res.json();
        setArticle(data[slug] || null);
      } catch (error) {
        console.error("Chyba pri načítaní článku:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!article) {
    return <p>Článok nebol nájdený.</p>;
  }

  return (
    <div className="mx-auto p-8 bg-primary rounded-10 text-text">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-xl" dangerouslySetInnerHTML={{ __html: article.content }}></p>

      {article.videos && article.videos.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {article.videos.map((video, index) => (
            <div key={index} className="h-full flex flex-col">
              {/* Nadpisy majú rovnakú výšku */}
              <h3 className="text-2xl font-medium py-2 min-h-[64px] flex items-center justify-center text-center">
                {video.title}
              </h3>
              {/* Video natiahneme tak, aby boli všetky rovnaké */}
              <div className="flex-1 flex items-center">
                <iframe
                  className="w-full h-full aspect-video rounded-10"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Article;
