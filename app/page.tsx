import { IVideo } from "@/@types/video.interface";
import Slider from "@/components/ui/Slider";
import VideoItem from "@/components/video/VideoItem";

export default function HomePage() {
  return (
    <div className="flex flex-wrap">
      <div className="p-[35px] w-3/4 border-r-[#a4a4a4] border-r border-solid">
        <div className="flex flex-wrap py-0 px-[35px]">
          <div className="w-1/2 pr-[15px]">
            <div className="text-lg">Weekly Featured</div>
            <h1 className="text-2xl my-5 mx-0 font-semibold">
              Hello, Summer Vacation!
            </h1>
            <div className="text-[#a4a4a4] mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              harum placeat ullam vel non, quisquam totam, doloremque expedita
              odit consectetur minima vitae. Facilis nostrum cumque illum fugit
              rem, nam consectetur!
            </div>
            <Slider videos={{} as IVideo[]} />
          </div>

          <div className="w-1/2 pl-[15px]">
            <VideoItem item={{} as IVideo} isLarge isAvatar />
          </div>
        </div>
        <div className="my-8 mx-auto h-[1px] bg-[#a4a4a4] opacity-40" />
        {/* <Recommended newVideos={props.newVideos} /> */}
      </div>

      {/* <RightSide topVideo={props.topVideo} topChannels={props.topChannels} /> */}
    </div>
  );
}
