const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minima,
          nobis hic impedit facilis modi libero cupiditate corrupti. Numquam ad
          commodi aliquam aut similique optio ipsam quisquam illum fugiat
          expedita!
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also available on</p>

          <div className="brand-icons">
            <img src="/public/images/amazon.png" alt="" />
            <img src="/public/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/public/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
