'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Article = {
  title: string;
  content: string;
  video?: string;
};

const Article = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined; // Získanie slug z URL

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return; // Počkaj, kým sa slug načíta
      
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
    <div className="max-w-4xl mx-auto p-8 bg-primary rounded-10">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-white">{article.content}</p>
      {article.video && (
        <div className="mt-4">
          <iframe
            className="w-full aspect-video rounded-10"
            src={article.video}
            title={article.title}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Article;
