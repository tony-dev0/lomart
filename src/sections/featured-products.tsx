import ProductComponent from "../components/ProductComponent";
import { featuredProducts } from "../assets/data";

const FeaturedProducts = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <h3 className="font-bold text-[26px] md:text-[28px] text-[#2DCC70]">
          Featured Products
        </h3>
        <nav className="nav hidden lg:block">
          <ul className="flex gap-4 text">
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#" className="text-[#2dcc70]">
                Vegetables
              </a>
            </li>
            <li>
              <a href="#">Fruits</a>
            </li>
            <li>
              <a href="#">Coffee & teas</a>
            </li>
            <li>
              <a href="#">Meat</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {featuredProducts.map((product, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 200}`}>
            <ProductComponent
              name={product.name}
              image={product.image}
              category={product.category}
              owner={product.owner}
              price={product.price}
              prevprice={product.prevprice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
