import Header from "../sections/header";
import Footer from "../sections/footer";
import HeroSection from "../sections/hero-section";
import WhyLeomart from "../sections/why-leomart";
import PopularCategories from "../sections/popular-categories";
import FeaturedProducts from "../sections/featured-products";
import MobileAdvert from "../sections/mobile-advert";
import CommonQuestions from "../sections/common-questions";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyLeomart />
      <PopularCategories />
      <FeaturedProducts />
      <MobileAdvert />
      <CommonQuestions />
      <Footer />
    </div>
  );
};
export default Home;
