import { IUser } from "./user.interface";

export interface IVideo {
  _id: string;
  name: string;
  description: string;
  thumbnailPath: string;
  videoPath: string;
  views: number;
  likes: number;
  user?: IUser;
  isPublic?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IVideoDto
  extends Pick<
    IVideo,
    "thumbnailPath" | "description" | "name" | "videoPath" | "isPublic"
  > {}

export interface IVideoStatistics {
  views: number;
  likes?: number;
  createdAt: string;
  subscribers?: number;
}

export interface IVideoItem {
  item: IVideo;
  isLarge?: boolean;
  isAvatar?: boolean;
  tag?: string;
  removeHandler?: (videoId: string) => void;
  isUpdateLink?: boolean;
}

export interface IVideoInformation {
  thumbnailPath?: string;
  videoId: string;
  fileName: string;
  isUploaded: boolean;
}
