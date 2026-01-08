import Box from "./Box";
import ImageBox from "./ImageBox";
import TitleBox from "./TitleBox";

function Home() {
  const dataBoxes = [
    {
      name: "five stars",
      className: "bg-purple-500 py-8",
      isImageFirst: false,
      title: "Social Media x10 Faster with AI",
      highlight: { text: "x10", color: "text-yellow-500" },
      emText: "Faster",
      image: {
        src: "illustration-five-stars.webp",
        width: 200,
        caption: "Over 4,000 5-star reviews",
      },
    },
    {
      name: "multiple platforms",
      className: "bg-white py-6",
      isImageFirst: true,
      title: "Manage multiple accounts and platforms.",
      highlight: null,
      emText: null,
      image: {
        src: "illustration-multiple-platforms.webp",
        width: 300,
        caption: null,
      },
    },
  ];

  function Boxes() {
    return dataBoxes.map((box) => (
      <Box key={box.name} className={box.className}>
        {box.isImageFirst ? (
          <>
            {box.image.caption ? (
              <ImageBox
                src={box.image.src}
                alt={box.name}
                width={box.image.width}
              >
                {box.image.caption}
              </ImageBox>
            ) : (
              <ImageBox
                src={box.image.src}
                alt={box.name}
                width={box.image.width}
              />
            )}

            <TitleBox>{box.title}</TitleBox>
          </>
        ) : (
          <>
            <TitleBox>{box.title}</TitleBox>

            {box.image.caption ? (
              <ImageBox
                src={box.image.src}
                alt={box.name}
                width={box.image.width}
              >
                {box.image.caption}
              </ImageBox>
            ) : (
              <ImageBox
                src={box.image.src}
                alt={box.name}
                width={box.image.width}
              />
            )}
          </>
        )}
      </Box>
    ));
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
