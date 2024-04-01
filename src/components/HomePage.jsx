import React from "react";
import { logo, bckGroundImg } from "../assets";
import { expertise_data, stock_data } from "../constants";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <div className={`flex md:flex-col flex-col px-[1rem]`}>
        <div className="flex flex-col md:px-[33rem]">
          <div className="md:w-[0%] w-[100%] flex">
            <img
              src={logo}
              alt="Logo"
              className="md:w-[150px] w-[121px] md:h-[39px] h-[33px]"
            />
          </div>
          <div className="relative flex flex-col py-[2rem] md:w-[50%]">
            <span className="z-10 relative w-[354px] h-[96px] font-[700] text-[22px] leading-[32px] text-gradient">
              Connect with our SEBI-registered research analysts for expert
              guidance
            </span>
            <span className="z-10 relative text-dimWhite font-[500] text-[12px] leading-[16px]">
              Invest, Learn and Earn
            </span>
            <div className="md:w-[50%] md:hidden block absolute inset-0">
              <img
                src={bckGroundImg}
                alt="Background"
                className="w-[80%] object-cover mt-[-4rem] ml-[8rem]"
              />
            </div>
          </div>
        </div>

        <div className="flex pt-[2rem] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:flex">
          {expertise_data.slice(0, 3).map((expert, id) => {
            return (
              <div
                key={expert.id}
                className="md:w-[256px] md:h-[285px] sm:w-[172px] sm:h-[210px] gap-[3px] md:px-[15rem] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <div className="w-[72px] h-[98px] md:w-[256px] md:h-[146px]  relative profile-image-2 mb-4">
                  <img
                    src={expert.icon}
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                  />
                  <img
                    src={expert.userImg}
                    alt="User"
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                  />
                </div>

                <div className="flex md:w-[212px] md:h-[26px] sm:w-[157px] sm:h-[22px] flex justify-between md:gap-0 gap-[2.2rem]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] leading-[12px] font-[500] text-white">
                      {expert.name}
                    </span>
                    <span className="text-[8px] leading-[10px] font-[400] text-dimWhite">
                      {expert.title}
                    </span>
                  </div>
                  <div className="w-[32px] h-[15px] flex">
                    <img
                      src={expert.ratingIcon}
                      className="w-[11.5px] h-[11.5px]"
                    />
                    <span className="text-white font-[600] text-[11.5px] leading-[14px]">
                      {expert.rating}
                    </span>
                  </div>
                </div>

                <div className="md:w-[171px] md:h-[33px] w-[125px] h-[23px] flex justify-between mr-[1rem] mt-2">
                  <div className="flex flex-col w-[52px] h-[33px] items-center">
                    <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                      {expert.experience}
                    </span>
                    <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                      {expert.totalExp}
                    </span>
                  </div>
                  <div className="md:w-[1.4px] md:h-[25px] w-[1px] h-[22px] bg-lightWhite"></div>
                  <div className="flex">
                    <div className="flex flex-col w-[52px] h-[33px] items-center">
                      <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                        {expert.followers}
                      </span>
                      <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                        {expert.totalFollowers}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-[140px] h-[26px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] mt-2 md:mt-0">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={expert.telegram}
                      alt="Telegram"
                      className="w-[16px] h-[16px]"
                    />
                    <button className="text-white font-[400] text-[10px] leading-[19px]">
                      {expert.greet}
                    </button>
                    <img
                      src={expert.arrowIcon}
                      alt="arrow"
                      className="w-[11px] h-[11px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center py-8">
          <span
            className="font-[700] md:text-[50px] text-[30px] md:w-[1114px] md:h-[120px] w-full h-full
          text-gradient-2 md:leading-[60px] leading-[30px] text-center"
          >
            Bridge the Gap between Traders & Analysts with Copartner and Unite
            for Success!
          </span>

          <img
            src={logo}
            alt="LOGO"
            className="md:w-[225px] w-[199px] md:h-[64px] h-[54px] flex items-center justify-center"
          />

          <span className="text-dimWhite md:w-[505px] w-[328px] text-center md:h-[56px] h-[34px] font-[400] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
            Empower your teams to build better processes, for a better
            workplace.
          </span>
        </div>

        <div className="md:w-[1076px] md:h-[100%] w-[337px] h-[1250px] gap-[2rem] md:py-[1rem] py-[1rem] flex flex-col sm:flex-col mx-auto">
          {stock_data.map((stock) => (
            <div
              key={stock.id}
              style={{ height: stock.height }}
              className="flex flex-col p-2 gap-[1rem] items-center md:w-[337px] md:min-h-[80%] w-[335px] rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
            >
              <img
                src={stock.img}
                alt="STOCK_IMAGES"
                className="md:w-[289px] md:h-[151px] w-[288px] h-[150px]"
              />
              <div className="flex flex-col gap-[1rem]">
                <span className="text-lightWhite md:w-[190px] md:h-[27px] w-[164px] h-[27px] font-[600] md:text-[20px] text-[18px] leading-[27px] sm:text-left">
                  {stock.title}
                </span>
                <span className="text-dimWhite w-[257px] h-[96px] text-[16px] font-[400] leading-[24px] text-left">
                  {stock.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default HomePage;
