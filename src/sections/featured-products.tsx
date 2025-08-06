import ProductComponent from "../components/productComponent";
import { featuredProducts } from "../assets/data";

const FeaturedProducts = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <h3 className="font-bold text-[23px] md:text-[27px] text-[#2DCC70]">
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
        <select className="block w-75 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm lg:hidden">
          <option value="all" selected>
            All
          </option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits"> Fruits</option>
          <option value="coffeeandteas">Coffee & teas</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {featuredProducts.map((product) => {
          return (
            <ProductComponent
              name={product.name}
              image={product.image}
              category={product.category}
              owner={product.owner}
              price={product.price}
              prevprice={product.prevprice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
