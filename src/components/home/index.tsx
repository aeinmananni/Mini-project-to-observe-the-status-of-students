import { Outlet } from "react-router-dom";
import Button from "../UI/button-custom";
import { IoMdSchool, IoIosMenu } from "react-icons/io";
import { useStoreManager } from "../store/store";
import Navigation from "../navigation";

const Home = () => {
  const { setShowModal, setDrower } = useStoreManager();
  return (
    <>
      <div className="h-24 w-full border-2 border-sky-800 rounded-b-lg flex justify-between items-center p-1">
        <IoMdSchool className="text-7xl" />
        <Navigation className="hidden md:flex" />
        <div>
          <IoIosMenu
            className="text-3xl block md:hidden cursor-pointer"
            onClick={() => setDrower((c) => !c)}
          />
          <Button
            className="hidden md:flex"
            onClick={() => setShowModal(true)}
            buttonType="success"
          >
            ورودوثبت نام
          </Button>
        </div>
      </div>
      <div className="relative p-2 w-full h-full  border-2 rounded-xl border-sky-900   overflow-auto overflow-x-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
