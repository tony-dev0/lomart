import {
  faClock,
  faRankingStar,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#F3F4F6]">
      <div className="">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0 md:justify-self-center">
            <h4 className="text-lg font-bold lg:max-w-xs text-center lg:text-left mb-3">
              Download our app
            </h4>
            <div className="flex gap-3 lg:flex-col justify-center mb-3">
              {/* apple store start */}
              <div className="apple-store w-fit flex gap-3 bg-[#1B1B1B] rounded-lg py-2 px-8 items-center">
                <img src="/app-store.png" alt="" width={19} height={19} />
                <div className="flex flex-col gap-0 text-white">
                  <span className="text-[9px] opacity-80">Download on the</span>
                  <span className="text-[11px]">App Store</span>
                </div>
              </div>
              {/* apple store end */}
              {/* playstore start */}
              <div className="play-store w-fit flex gap-3 bg-black rounded-lg py-2 px-8 items-center">
                <img src="/play-store.png" alt="" width={19} height={19} />
                <div className="flex flex-col gap-0 text-white">
                  <span className="text-[9px] opacity-80">Download on the</span>
                  <span className="text-[11px]">Google Play</span>
                </div>
              </div>
            </div>
            {/* play store end */}
            <p className="text-center">Follow us on social media:</p>
            <div className="flex gap-5 mt-3 justify-center">
              <img src="/facebook.svg" alt="" width={19} height={19} />
              <img src="/instagram.svg" alt="" width={19} height={19} />
              <img src="/pinterest.svg" alt="" width={19} height={19} />
              <img src="/youtube.svg" alt="" width={19} height={19} />
              <img src="/twitter.svg" alt="" width={19} height={19} />
            </div>
          </div>

          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Need help
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  +88012345678910
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  +88012345678910
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-green-500 hover:text-gray-600"
                >
                  contact@lomart.com
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Customer</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  My account
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Sell Products
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Information
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Contact us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Shipping & return
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!--Grid--> */}
      <div className="py-5 border-t border-gray-200">
        <div className="flex justify-center max-sm:flex-col items-center max-md:gap-10 gap-20">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-green-400" icon={faTruckFast} />
            {/* <img src="/icon1.png" alt="" width={25} height={25} /> */}
            <span className="text-sm text-gray-500">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-green-400" icon={faRankingStar} />
            {/* <img src="/icon2.png" alt="" width={25} height={25} /> */}
            <span className="text-sm text-gray-500">Quality assurance</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-green-400" icon={faClock} />
            {/* <img src="/icon3.png" alt="" width={25} height={25} /> */}
            <span className="text-sm text-gray-500">24/7 support service</span>
          </div>
        </div>
      </div>

      <div className="py-7 border-t border-gray-200">
        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-gray-500 ">
            &copy; <a href="https://pagedone.io/">Lomart</a>{" "}
            {new Date().getFullYear()}, All rights reserved.
          </span>
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
            <img src="/image39.png" alt="" className="w-9 h-9" />
            <img src="/image40.png" alt="" className="w-9 h-9" />
            <img src="/image41.png" alt="" className="w-9 h-8" />
            <img src="/image42.png" alt="" className="w-9 h-8" />
            <img src="/image43.png" alt="" className="w-9 h-8" />
            <img src="/image44.png" alt="" className="w-9 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
