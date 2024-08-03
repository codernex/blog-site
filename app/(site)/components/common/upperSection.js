import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaSquare } from "react-icons/fa";

const UpperSection = ({ title, styles = "", curTitle = "" }) => {
  return (
    <div className="bg-[url('/images/banner.png')] bg-cover">
      <div className="bg-[#000000] bg-opacity-80">
        <div className="container flex items-center justify-center lg:py-[130px] md:py-[65px] py-8">
          <div className="flex flex-col items-center">
            <h2
              className={`md:text-[44px] text-2xl font-bold text-white text-center ${styles} font-medium`}
            >
              {title}
            </h2>

            <div className="flex items-center gap-x-2.5 md:mt-4 mt-3">
              <Link
                href="/"
                className="hover:text-mainColor uppercase font-bold text-white md:text-base text-sm"
              >
                <div>
                  
                </div>
              </Link>
              <FaSquare className="text-[8px] text-white" />{" "}
              <span className="text-textGray font-semibold md:text-base text-sm">
                {curTitle ? curTitle : title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
