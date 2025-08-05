import Header from "../sections/header";
import Footer from "../sections/footer";
import HeroSection from "../sections/hero-section";
import WhyLeomart from "../sections/why-leomart";
import PopularCategories from "../sections/popular-categories";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyLeomart />
      <PopularCategories />
      <Footer />
    </div>
  );
};
export default Home;
