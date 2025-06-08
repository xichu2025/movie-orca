"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { formatViewers } from "@/lib/public";
import { discover_movie } from "@/lib/api";

const NEXT_PUBLIC_TMDB_POSTER_PATH = process.env.NEXT_PUBLIC_TMDB_POSTER_PATH;

export default function MovieList(params: any) {
  const [movies, setMovies]: any = useState(params.movies || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(page);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  // 获取电影列表
  const get_discover_movie = async (pageNum: number) => {
    setLoading(true);
    const res = await discover_movie({ page: pageNum });
    if (res?.results?.length) {
      setMovies((prev: any) =>
        pageNum === 1 ? res.results : [...prev, ...res.results]
      );
      setHasMore(res.page < res.total_pages);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.offsetHeight &&
        hasMore &&
        !loading
      ) {
        // 只允许一次触发
        setLoading(true);
        setPage(pageRef.current + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  useEffect(() => {
    get_discover_movie(page);
  }, [page]);

  function MovieSkeleton() {
    return (
      <div className="bg-gray-100 animate-pulse rounded-xl overflow-hidden shadow-md">
        <div className="w-full aspect-[2/3] bg-gray-200" />
        <div className="p-4">
          <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="flex items-center justify-between mt-2">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8 pt-24">
        <Navbar />

        <h1 className="text-3xl font-bold text-center mb-8">Movies</h1>

        <h2 className="text-xl text-center mb-10 w-[50%] mx-auto">
          Welcome to MovieOrca Movie Ocean World. Please look for your favorite
          movies. They are completely free to watch.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie: any) => (
            <Link
              key={movie.id}
              title={movie.title}
              href={{ pathname: `/details/${movie.id}` }}
            >
              <div className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* 电影封面 */}
                <Image
                  src={NEXT_PUBLIC_TMDB_POSTER_PATH + movie.poster_path}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="w-full h-auto aspect-[2/3]"
                />

                <div className="p-4">
                  {/* 电影标题 */}
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                    {movie.title}
                  </h3>

                  {/* 评分和观看人数区域 */}
                  <div className="flex items-center justify-between mt-2">
                    {/* 评分区域 */}
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-5 h-5 text-yellow-400 mr-1"
                      />
                      <span className="text-gray-700">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>

                    {/* 观看人数区域 */}
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="w-5 h-5 text-gray-400 mr-1"
                      />
                      <span className="text-gray-700">
                        {formatViewers(movie.vote_count)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* 加载时显示骨架屏 */}
          {loading &&
            Array.from({ length: 20 }).map((_, idx) => (
              <MovieSkeleton key={`skeleton-${idx}`} />
            ))}
        </div>

        {loading && <div className="text-center py-4">Loading...</div>}
        {!hasMore && (
          <div className="text-center py-4 text-gray-400">
            There is no more.
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
}
