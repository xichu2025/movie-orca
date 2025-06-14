"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "antd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { formatViewers } from "@/lib/public";
import { discover_movie } from "@/lib/api";

const NEXT_PUBLIC_TMDB_POSTER_PATH = process.env.NEXT_PUBLIC_TMDB_POSTER_PATH;

export default function MovieList(params: any) {
  const query = params.query || "";
  const genres = params.genres;
  const [selectedGenre, setSelectedGenre] = useState<number | null>(
    Number(params.selectedGenre) || null
  );

  const page = params.page || 1;
  const totalPages = params.total_pages || 1;
  // 分页切换
  const handlePageChange = async (pageNum: number) => {
    // 保留当前筛选条件
    const genreQuery = selectedGenre ? `&genre=${selectedGenre}` : "";
    window.location.href = `/movie-list?page=${pageNum}${genreQuery}`;
  };

  // 分类点击时筛选（这里只是示例，实际可根据需要请求新数据或跳转）
  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId);
    window.location.href = `/movie-list?genre=${genreId}`;
  };

  const movies = params.movies || [];
  // const [movies, setMovies]: any = useState(params.movies || []);
  // const [page, setPage] = useState(2);
  // const [hasMore, setHasMore] = useState(true);
  // const [loading, setLoading] = useState(false);
  // const pageRef = useRef(page);

  // useEffect(() => {
  //   pageRef.current = page;
  // }, [page]);

  // // 获取电影列表
  // const get_discover_movie = async (pageNum: number) => {
  //   setLoading(true);
  //   const res = await discover_movie({ page: pageNum });
  //   if (res?.results?.length) {
  //     setMovies((prev: any) =>
  //       pageNum === 1 ? res.results : [...prev, ...res.results]
  //     );
  //     setHasMore(res.page < res.total_pages);
  //   } else {
  //     setHasMore(false);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 100 >=
  //         document.documentElement.offsetHeight &&
  //       hasMore &&
  //       !loading
  //     ) {
  //       // 只允许一次触发
  //       setLoading(true);
  //       setPage(pageRef.current + 1);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [hasMore, loading]);

  // useEffect(() => {
  //   // get_discover_movie(page);
  // }, [page]);

  // function MovieSkeleton() {
  //   return (
  //     <div className="bg-gray-100 animate-pulse rounded-xl overflow-hidden shadow-md">
  //       <div className="w-full aspect-[2/3] bg-gray-200" />
  //       <div className="p-4">
  //         <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
  //         <div className="flex items-center justify-between mt-2">
  //           <div className="h-4 bg-gray-200 rounded w-1/4"></div>
  //           <div className="h-4 bg-gray-200 rounded w-1/4"></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  const currentGenre = genres.find(
    (item: any) => item.id === Number(selectedGenre)
  );

  return (
    <>
      <main className="container mx-auto px-4 py-8 pt-24">
        <Navbar />

        <h1 className="text-3xl font-bold text-center mb-8">
          {query
            ? `Movies related to ${query}`
            : currentGenre?.name
            ? `Find Your Next Favorite ${currentGenre.name} Movie`
            : "All movie libraries"}
        </h1>
        <h2 className="text-xl text-center mb-10 w-[50%] mx-auto">
          Welcome to MovieOrca Movie Ocean World. Please look for your favorite
          movies. They are completely free to watch.
        </h2>

        {/* 电影分类组件 */}
        {genres.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {genres.map((genre: any) => (
              <button
                key={genre.id}
                className={`cursor-pointer px-4 py-1 rounded-full border transition-all ${
                  selectedGenre === genre.id
                    ? "bg-[#7D3FCD] text-white border-[#7D3FCD]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#7d3fcd1a]"
                }`}
                onClick={() => handleGenreClick(genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
        )}

        {movies?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {movies.map(
              (movie: any) =>
                movie.title &&
                movie.poster_path && (
                  <Link
                    key={movie.id}
                    title={movie.title}
                    href={{ pathname: `/details/${movie.id}` }}
                    prefetch={true}
                  >
                    <div className="group bg-white cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* 播放图标 */}
                      <div className="absolute top-[28%] inset-0 flex justify-center z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-16 h-16 text-white drop-shadow-lg"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            r="24"
                            fill="rgba(125,63,205,0.8)" // 半透明淡紫色
                          />
                          <polygon points="20,16 34,24 20,32" fill="white" />
                        </svg>
                      </div>

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
                              {movie.vote_average?.toFixed(1)}
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
                )
            )}

            {/* 加载时显示骨架屏 */}
            {/* {loading &&
              Array.from({ length: 20 }).map((_, idx) => (
                <MovieSkeleton key={`skeleton-${idx}`} />
              ))} */}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <svg
              className="w-16 h-16 mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="7" cy="8" r="1" fill="currentColor" />
              <circle cx="7" cy="12" r="1" fill="currentColor" />
              <circle cx="7" cy="16" r="1" fill="currentColor" />
              <circle cx="17" cy="8" r="1" fill="currentColor" />
              <circle cx="17" cy="12" r="1" fill="currentColor" />
              <circle cx="17" cy="16" r="1" fill="currentColor" />
              <rect
                x="9"
                y="9"
                width="6"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            <div className="text-lg font-semibold mb-2">No related movies</div>
            <div className="text-sm">
              Try searching with different keywords~
            </div>
          </div>
        )}

        {/* 分页组件 */}
        <div className="flex justify-center my-8">
          <Pagination
            current={page}
            total={totalPages * 20} // TMDB 每页20条
            pageSize={20}
            showSizeChanger={false}
            onChange={handlePageChange}
          />
        </div>

        {/* {loading && <div className="text-center py-4">Loading...</div>} */}
        {/* {!hasMore && (
          <div className="text-center py-4 text-gray-400">
            There is no more.
          </div>
        )} */}
      </main>
      <Footer />
    </>
  );
}
