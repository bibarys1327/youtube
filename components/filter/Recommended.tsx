import { IVideo } from "@/@types/video.interface";
import { FC } from "react";
import VideoItem from "../video/VideoItem";

const Recommended: FC<{
  newVideos: IVideo[];
  removeHandler?: (videoId: string) => void;
  isUpdateLink?: boolean;
}> = ({ newVideos, removeHandler, isUpdateLink }) => {
  return (
    <div className="py-0 px-[35px]">
      <div className="flex items-center justify-between mb-[25px]">
        <div className="flex items-center">
          <h2>Newest video</h2>
        </div>
        <div className="font-medium">By View Trending</div>
      </div>

      <div className="flex flex-wrap gap-5">
        {newVideos.map((video) => (
          <VideoItem
            item={video}
            key={video._id}
            isAvatar
            removeHandler={removeHandler}
            isUpdateLink={isUpdateLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
