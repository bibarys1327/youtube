import { IVideoInformation } from "@/@types/video.interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const VideoInformation: FC<IVideoInformation> = ({
  videoId,
  thumbnailPath,
  fileName,
  isUploaded,
}) => {
  return (
    <div>
      {!thumbnailPath ? (
        <div
          className="bg-gray-200 text-gray-600 text-base flex items-center justify-center;
		min-height-[200px]"
        >
          {!isUploaded ? "Uploading video..." : "You should upload thumbnail"}
        </div>
      ) : (
        <Image src={thumbnailPath} width={344} height={200} alt={""} />
      )}
      <div className="bg-gray-50 p-3">
        <div className="mb-3 last:mb-0">
          <span className="text-gray-400 mb-1 block text-base">Video link</span>
          <span className="block text-base">
            <Link className="text-primary opacity-75" href={`/v/${videoId}`}>
              http://local/v/{videoId}
            </Link>
          </span>
        </div>
        <div>
          <span className="block text-base">Filename</span>
          <span className="block text-base">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoInformation;
