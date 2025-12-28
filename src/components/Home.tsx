function Home() {
  return (
    <main className="text-display font-display">
      <div className="mx-auto w-[90%] h-screen my-7">
        <div className="text-center py-8 text-white rounded-xl w-full bg-purple-500 flex flex-col gap-4">
          <h2 className="text-5xl w-[90%] leading-10 font-medium  mx-auto">
            Social Media <span className="text-yellow-500">10x</span>{" "}
            <em>Faster</em> with AI
          </h2>

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
      </div>
    </main>
  );
}

export default Home;
