"use client";

import Image from "next/image";
import SectionTitle from "../common/sectionTitle";
import { FaCircleCheck } from "react-icons/fa6";
import { useFetch } from "../../../helpers/hooks";
import { getSettings } from "../../../helpers/backend";

const About = () => {
  const [data, getData] = useFetch(getSettings)
  
  return (
    <div className="container flex ">
      <div className="flex lg:flex-row flex-col gap-x-10 justify-between items-center">
        <div className="lg:w-2/5 w-full">
          <SectionTitle className={"lg:text-start text-center"}>
            {data?.settings?.welcomePage?.title}
          </SectionTitle>
          <p className="text-base text-bodyText mt-8 w-full lg:text-start text-center">
            {data?.settings?.welcomePage?.description}
          </p>
          <div className="lg:mt-[81px] mt-10 grid grid-cols-2 lg:gap-6 md:gap-6 gap-3 md:justify-items-center lg:justify-items-start justify-items-start">
            
            {
              data?.settings?.welcomePage?.details && data?.settings?.welcomePage?.details?.map((item, index) => <div key={index} className="text-[18px] flex items-center gap-2">
              <FaCircleCheck color="#E1CF80" />
              <p>
              {item}

              </p>
            </div>)
            }
          </div>
        </div>
        <div className="md:grid grid-cols-1 justify-items-center lg:justify-items-end lg:w-3/5 w-full ">
          <div className="flex lg:flex-row md:flex-row flex-col justify-center   md:items-center   gap-x-[32px] lg:mt-0 mt-[60px] md:mt-[60px]">
            <Image
              src={data?.settings.welcomePage?.welcomeImage}
              width={100}
              height={100}
              alt="about-3"
              className=" md:w-[337px] w-full h-[530px] rounded-[20px] "
            />
            <Image
              src={data?.settings.welcomePage?.welcomeImage2}
              width={100}
              height={100}
              alt="about-1"
              className="lg:mt-0 md:mt-0 mt-[60px] lg:h-[457px]  lg:w-[281px] md:h-[457px]  md:w-[281px] w-full h-[530px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
