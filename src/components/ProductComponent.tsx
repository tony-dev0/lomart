import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const ProductComponent = ({
  name,
  image,
  category,
  owner,
  price,
  prevprice,
}) => {
  return (
    <div className="p-2 border border-gray-300 rounded w-">
      <div className="product-img">
        <img className="mx-auto" src={image} alt="" />
      </div>
      <div className="flex-col gap-3">
        <small className="text-gray-500">{category}</small>
        <h6 className="font-bold mb-3">{name}</h6>
        <div className="ratings">
          <span>
            <FontAwesomeIcon icon={solidStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={solidStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={solidStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={solidStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={regularStar} style={{ color: "#FFD700" }} />
            <span className="ml-2 text-gray-500">(4)</span>
          </span>
          <div className="owner mb-2">
            {" "}
            <span className="text-muted mr-1">By</span>
            <span className="text-[#2DCC70]">{owner}</span>
          </div>
          <div className="product-foot flex justify-between items-center mt-2">
            <div className="flex gap-2">
              <span className="text-[#2DCC70]">&#8358;{price}</span>
              <span className="text-gray-500 line-through">
                &#8358;{prevprice}
              </span>
            </div>
            <div>
              <button className="btn px-5 py-1 bg-green-100 text-green-500 rounded hover:text-green-600">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
