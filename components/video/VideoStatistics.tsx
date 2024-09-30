import { IVideoStatistics } from "@/@types/video.interface";
import { formatNumberToK } from "@/lib/formatNumberToK";
import dayjs from "dayjs";
import { FC } from "react";

const VideoStatistics: FC<IVideoStatistics> = ({
  views,
  likes,
  createdAt,
  subscribers,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div
        className="uppercase font-semibold;
		color: $gray"
      >
        VIEWS {formatNumberToK(views)}
      </div>
      {!!likes && <div>LIKES {formatNumberToK(likes)}</div>}
      <div>{dayjs(new Date(createdAt)).fromNow()}</div>
      {!!subscribers && (
        <div className="text-primary">
          SUBSCRIBERS {formatNumberToK(subscribers)}
        </div>
      )}
    </div>
  );
};

export default VideoStatistics;
