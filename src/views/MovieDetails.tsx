"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Tag } from "antd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { formatViewers } from "@/lib/public";

const colors = [
  "purple",
  "blue",
  "red",
  "green",
  "cyan",
  "orange",
  "purple",
  "blue",
  "red",
  "green",
  "cyan",
  "orange",
  "purple",
  "blue",
  "red",
  "green",
  "cyan",
  "orange",
  "purple",
  "blue",
  "red",
  "green",
  "cyan",
  "orange",
  "purple",
  "blue",
  "red",
  "green",
  "cyan",
  "orange",
];

export default function MovieDetails(params: any) {
  const detailsData = params.detailsData;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start pt-20">
        <Navbar />
        {/* <Button>Back</Button> */}

        <div className="container mx-auto p-6 pt-0 rounded-lg bg-white shadow-md">
          {/* 标题 + 海报 */}
          <div className="flex-col items-center justify-start space-y-4 md:space-y-0 md:space-x-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {detailsData.original_title}
            </h1>

            <h2 className="text-gray-800 mt-2">{detailsData.overview}</h2>

            <div className="bg-gray-100 w-full h-[90vh] mt-4">
              <iframe
                src={`https://vidsrc.cc/v2/embed/movie/${params.id}`}
                className="w-full h-full"
              ></iframe>
            </div>

            {detailsData && (
              <div className="w-full mt-4 flex items-center justify-between">
                <div className="flex items-center justify-start space-x-6 text-gray-700">
                  <span>🎬 {detailsData.release_date}</span>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 h-5 text-yellow-400 mr-1"
                    />
                    <span className="text-gray-700">
                      {detailsData.vote_average?.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="w-5 h-5 text-gray-400 mr-1"
                    />
                    <span className="text-gray-700">
                      {detailsData.vote_count &&
                        formatViewers(detailsData.vote_count)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 详情信息 */}
          {detailsData && (
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="flex ">
                <span className="font-semibold mr-2">Duration:</span>
                <span>{detailsData.runtime}m</span>
              </div>

              <div className="flex">
                <span className="font-semibold mr-2">Tagline:</span>
                <h3>{detailsData.tagline}</h3>
              </div>

              <div className="flex flex-wrap items-center">
                <span className="font-semibold mr-2">Genres:</span>
                {detailsData.genres?.map((item: any, index: number) => (
                  <Tag
                    key={item.id}
                    color={colors[index]}
                    style={{ marginTop: 4, marginBottom: 4 }}
                  >
                    {item.name}
                  </Tag>
                ))}
              </div>

              <div className="flex">
                <span className="font-semibold mr-2">Vote Count:</span>
                <span>{detailsData.vote_count}</span>
              </div>

              <div className="flex">
                <span className="font-semibold mr-2">Popularity:</span>
                <span>{detailsData.popularity?.toFixed(1)}</span>
              </div>

              <div className="flex flex-wrap items-center">
                <span className="font-semibold mr-2">
                  Production Companies:
                </span>
                {detailsData.production_companies?.map(
                  (item: any, index: number) => (
                    <Tag
                      key={item.id}
                      color={colors[index]}
                      style={{ marginTop: 4, marginBottom: 4 }}
                    >
                      {item.name}
                    </Tag>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center">
                <span className="font-semibold mr-2">
                  Production Countries:
                </span>
                {detailsData.production_countries?.map(
                  (item: any, index: number) => (
                    <Tag
                      key={item.id}
                      color={colors[index]}
                      style={{ marginTop: 4, marginBottom: 4 }}
                    >
                      {item.name}
                    </Tag>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center">
                <span className="font-semibold mr-2">Spoken Languages:</span>
                {detailsData.spoken_languages?.map(
                  (item: any, index: number) => (
                    <Tag
                      key={item.id}
                      color={colors[index]}
                      bordered={false}
                      style={{ marginTop: 4, marginBottom: 4 }}
                    >
                      {item.name}
                    </Tag>
                  )
                )}
              </div>

              {/* <p>
                  Homepage:{" "}
                  <a
                    href={detailsData.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detailsData.homepage}
                  </a>
                </p> */}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
