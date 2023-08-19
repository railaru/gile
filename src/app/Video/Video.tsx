export default function Video() {
    return (
        <div className="mt-24 lg:mt-32">
            <h3 className="text-4xl">
                See it in action:
            </h3>

            <div className="relative pt-[64%] mt-16">
                <div className="bg-white h-[30px] absolute top-0 left-0 w-full z-[1]"/>

                <video
                    width="100%"
                    height="100%"
                    src="/assets/video/homepage/demo-video.mov"
                    className="absolute top-0 left-0 w-full h-full"
                    autoPlay
                    muted
                    loop
                />
            </div>
        </div>
    );
}