import Box from "./Box";
import ImageBox from "./ImageBox";
import TitleBox from "./TitleBox";

function Home() {
  const dataBoxes = [
    {
      id: 1,
      name: "five stars",
      className: "bg-purple-500 py-8",
      isImageFirst: false,
      title: {
        title: "Social Media x10 Faster with AI",
        className: "text-5xl w-[90%] mx-auto",
        highlight: { text: "x10", color: "text-yellow-500" },
        emText: "Faster",
      },
      image: {
        src: "illustration-five-stars.webp",
        className: "mx-auto",
        width: 200,
        caption: "Over 4,000 5-star reviews",
        classNameCaption: "text-yellow-100",
      },
    },
    {
      id: 2,
      name: "multiple platforms",
      className: "bg-white py-6",
      isImageFirst: true,
      title: {
        title: "Manage multiple accounts and platforms.",
        className: "",
        highlight: null,
        emText: null,
      },
      image: {
        src: "illustration-multiple-platforms.webp",
        className: "mx-auto",
        width: 300,
        caption: null,
        classNameCaption: null,
      },
    },
  ];

  function Boxes() {
    const RenderImageBox = ({ box }: { box: any }) => {
      const imageProps = {
        src: box.image.src,
        alt: box.name,
        width: box.image.width,
        className: box.image.className,
      };

      return box.image.caption ? (
        <ImageBox {...imageProps}>{box.image.caption}</ImageBox>
      ) : (
        <ImageBox {...imageProps} />
      );
    };

    const RenderBoxes = ({ box }: { box: any }) => {
      console.log(box.id);
      return (
        <Box key={box.name} className={box.className}>
          {box.isImageFirst ? (
            <>
              <RenderImageBox box={box} />

              <TitleBox className={box.title.className}>
                {box.title.title}
              </TitleBox>
            </>
          ) : (
            <>
              <TitleBox className={box.title.className}>
                {box.title.title}
              </TitleBox>

              <RenderImageBox box={box} />
            </>
          )}
        </Box>
      );
    };

    return dataBoxes.map((box) => <RenderBoxes box={box} />);
  }

  return (
    <main className="text-display font-display bg-amber-50">
      <div className="mx-auto w-[90%] my-7">
        <div className="grid gap-8">
          <Boxes />
          {/* <Box className="bg-purple-500 py-8">
            <TitleBox className="text-5xl w-[90%] mx-auto">
              Social Media <span className="text-yellow-500">10x</span>{" "}
              <em>Faster</em> with AI
            </TitleBox>

            <ImageBox
              width={200}
              className="mx-auto"
              alt="five stars"
              src="illustration-five-stars.webp"
            >
              <figcaption className="text-yellow-100">
                Over 4,000 5-star reviews
              </figcaption>
            </ImageBox>
          </Box>

          <Box className="bg-white py-6">
            <ImageBox
              width={300}
              alt="multiple platforms"
              className="mx-auto"
              src="illustration-multiple-platforms.webp"
            ></ImageBox>
            <TitleBox className="px-4 text-left leading-5! tracking-tighter font-black text-2xl text-black">
              Manage multiple accounts and platforms.
            </TitleBox>
          </Box>

          <Box className="bg-yellow-500 pt-4 px-4">
            <TitleBox className=" text-left leading-5! w-[80%] tracking-tighter font-black text-2xl text-black">
              Maintain a consistent posting schedule.
            </TitleBox>
            <ImageBox
              width={200}
              alt="consistent schedule"
              src="illustration-consistent-schedule.webp"
            ></ImageBox>
          </Box>

          <Box className="bg-purple-100 py-6 px-4">
            <TitleBox className="leading-5! tracking-tighter font-black text-2xl text-black">
              Schedule to social media.
            </TitleBox>
            <ImageBox
              alt="schedule posts"
              src="illustration-schedule-posts.webp"
            >
              <figcaption className="text-black leading-5! px-4 pt-4">
                Optimize post timings to publish content at the perfect time for
                your audience
              </figcaption>
            </ImageBox>
          </Box> */}
        </div>
      </div>
    </main>
  );
}

export default Home;
