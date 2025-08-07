const MobileAdvert = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="mobile-advert-img"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src="mobile-app.png" alt="" />
        </div>
        <div
          className="mobile-advert-content lg:px-12"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div
            className="lg:mt-20 lg:mb-10 mb-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="lg:text-3xl text-2xl font-bold">
              Connecting our user with iOS & Android apps. Download from App
              Store & Play store
            </h4>
          </div>
          <div
            className="lg:mb-10 mb-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>
              Lorem ipsum dolor sit amet consectetur. Sit in sed sed rutrum
              ultrices egestas. Neque leo praesent odio diam. Vel amet vitae
              pulvinar cursus enim sagittis enim. Cum arcu vitae non scelerisque
              cursus eget mi.
            </span>
          </div>
          <div
            className="flex gap-5 max-sm:justify-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="apple-store gap-3 flex bg-[#1B1B1B] rounded-lg py-3 px-4 items-center max-sm:w-full max-sm:justify-center">
              <img src="/app-store.png" alt="" width={19} height={19} />
              <div className="flex flex-col gap-0 text-white">
                <span className="text-[9px] opacity-80">Download on the</span>
                <span className="text-[11px]">App Store</span>
              </div>
            </div>

            <div className="play-store gap-3 flex bg-black rounded-lg py-3 px-4 items-center max-sm:w-full max-sm:justify-center">
              <img src="/play-store.png" alt="" width={19} height={19} />
              <div className="flex flex-col gap-0 text-white">
                <span className="text-[9px] opacity-80">Download on the</span>
                <span className="text-[11px]">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAdvert;
