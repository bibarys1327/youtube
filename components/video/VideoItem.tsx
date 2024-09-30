"use client";

import cn from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

import { IVideoItem } from "@/@types/video.interface";
import VideoDuration from "./VideoDuration";
import VideoStatistics from "./VideoStatistics";

dayjs.extend(relativeTime);

const VideoItem: FC<IVideoItem> = ({
  item,
  isLarge,
  isAvatar,
  tag,
  removeHandler,
  isUpdateLink,
}) => {
  const { push } = useRouter();

  return (
    <div className="block relative flex-[1_1_calc((100%_/_4)_-_2rem)] w-[23%] mb-2.5">
      {!!removeHandler && (
        <button
          className={"absolute top-3 right-3 z-10"}
          onClick={() => removeHandler(item._id)}
        >
          <BiTrash className="text-lg text-red-700" />
        </button>
      )}
      {isUpdateLink && (
        <button
          className={"absolute top-3 right-11 z-10"}
          onClick={() => push(`/video/edit/${item._id}`)}
        >
          <BiEdit className="text-lg text-blue-600" />
        </button>
      )}
      <Link href={`/v/${item._id}`} className="block">
        <div className="relative">
          {item.thumbnailPath && (
            <Image
              src={item.thumbnailPath}
              alt={item.name}
              width={185}
              height={103}
              layout="responsive"
            />
          )}
          <VideoDuration videoPath={item.videoPath} />
          {tag && (
            <div
              className="absolute rounded-sm text-white flex items-center justify-center w-14 h-6 left-2 top-2;
				background-color: rgba(229, 27, 23, 0.76);"
            >
              {tag}
            </div>
          )}
          {isAvatar && (
            <div
              className="bg-white p-1 rounded-full absolute
				right-10px
				bottom-30px"
            >
              <Image
                width={50}
                height={50}
                alt={item.user?.name || ""}
                src={item.user?.avatarPath || ""}
                className="rounded-full"
              />
            </div>
          )}
        </div>
        <div
          className={cn("mt-2 font-normal text-base-gray", {
            verified: item.user?.isVerified,
          })}
        >
          {item.user?.name}
        </div>
        <div className="font-semibold mt-1 mb-3 text-lg truncate">
          {item.name}
        </div>
      </Link>
      {isLarge && (
        <div
          className="color: $gray;
		margin-bottom: 20px"
        >
          {item.description}
        </div>
      )}
      <VideoStatistics
        views={item.views}
        likes={isLarge ? item.likes : undefined}
        createdAt={item.createdAt}
      />
    </div>
  );
};

export default VideoItem;
