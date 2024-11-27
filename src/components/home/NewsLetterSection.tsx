const NewsLetterSection = () => {
  return (
    <section
      className="relative my-24 bg-cover bg-center py-20 text-white"
      style={{
        backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-xdrive-50e-796-659d5427d6862.jpg?crop=0.689xw:0.516xh;0.0721xw,0.420xh&resize=640:*')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-5">
        <h2 className="text-4xl font-bold mb-4 font-heading">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8 font-text">
          Stay updated with the latest news, offers, and exclusive promotions.
          Sign up now!
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md font-text text-black"
          />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterSection;
