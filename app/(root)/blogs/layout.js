import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CustomSearch from "../../components/ui/CustomSearch";
import PageHeader from "../../components/ui/PageHeader";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function RootLayout({ children }) {
  const Feed = ({ id, image, title, date }) => {
    return (
      <div className="flex gap-4 cursor-pointer">
        <figure className="w-16 h-16 bg-primary"></figure>
        <Link href={"/"}>
          <h4 className="font-bold">{title}</h4>
          <p className="font-semibold text-gray-600 text-xs">{date}</p>
        </Link>
      </div>
    );
  };
  return (
    <>
      <PageHeader title={"Blogs"} />
      <main className="w-full grid grid-cols-12 gap-6 paddings my-20">
        <aside className="col-span-full sm:col-span-7 md:col-span-8 lg:col-span-9 ">
          {children}
        </aside>
        <aside className="col-span-full sm:col-span-5 md:col-span-4 lg:col-span-3 ">
          <h3 className="text-xl font-bold relative text-gray-800 border-b py-3 before:h-[2px] before:w-20 before:bg-primary before:absolute before:-bottom-[1px] before:rounded-lg">
            Search Here
          </h3>
          <div className="mt-6">
            <CustomSearch
              placeholder={"type keyword..."}
              variant={"secondary"}
              icon={<HiMagnifyingGlass />}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-bold relative text-gray-800 border-b py-3 before:h-[2px] before:w-20 before:bg-primary before:absolute before:-bottom-[1px] before:rounded-lg">
              Latest Feeds
            </h3>
            <div className="space-y-3 mt-4">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <Feed
                    key={i}
                    title={"lorem ipsum dollar"}
                    date={"17 Mar 2024"}
                  />
                );
              })}
            </div>
          </div>
          <div>
            {" "}
            <h3 className="text-xl font-bold relative text-gray-800 border-b py-3 before:h-[2px] before:w-20 before:bg-primary before:absolute before:-bottom-[1px] before:rounded-lg">
              Categories
            </h3>
            <ul className="space-y-2 mt-4">
              <li className="flex justify-between items-center text-md text-gray-600 font-semibold">
                Business <span className="font-bold text-black">26</span>
              </li>
              <li className="flex justify-between items-center text-md text-gray-600 font-semibold">
                Creative <span className="font-bold text-black">2</span>
              </li>
              <li className="flex justify-between items-center text-md text-gray-600 font-semibold">
                UI/UX <span className="font-bold text-black">17</span>
              </li>
              <li className="flex justify-between items-center text-md text-gray-600 font-semibold">
                Technology <span className="font-bold text-black">4</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold relative text-gray-800 border-b py-3 before:h-[2px] before:w-20 before:bg-primary before:absolute before:-bottom-[1px] before:rounded-lg">
              Sponsor Ads
            </h3>
            <div className="mt-4 h-40 bg-primary w-full"></div>
          </div>
        </aside>
      </main>
    </>
  );
}
