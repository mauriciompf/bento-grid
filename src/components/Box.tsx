import TitleBox from "./titleBox";

function Box() {
  return (
    <div className="text-center py-8 text-white rounded-xl w-full bg-purple-500 flex flex-col gap-4">
      <TitleBox className="text-5xl w-[90%] mx-auto">
        Social Media <span className="text-yellow-500">10x</span>{" "}
        <em>Faster</em> with AI
      </TitleBox>

      <figure>
        <img
          width={200}
          className="mx-auto"
          src="/images/illustration-five-stars.webp"
          alt="five stars"
        />
        <figcaption className="text-yellow-100">
          Over 4,000 5-star reviews
        </figcaption>
      </figure>
    </div>
  );
}

export default Box;
