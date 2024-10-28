import { forwardRef, HTMLAttributes } from "react";
import Navigation from "../navigation";
import { useStoreManager } from "../store/store";
import Button from "../UI/button-custom";

type SideDrowerType = object & HTMLAttributes<HTMLDivElement>;

const SideDrower = forwardRef<HTMLDivElement, SideDrowerType>((props, ref) => {
  const { setShowModal, drower, setDrower } = useStoreManager();

  return (
    <div
      {...props}
      ref={ref}
      className={`duration-300 ${
        drower ? "translate-x-0" : "translate-x-96"
      } flex flex-col h-full items-center gap-6 py-4 px-2 justify-start   fixed w-1/2 sm:w-1/4 md:hidden bg-white z-50 border `}
    >
      <Navigation className="!flex-col gap-9 " />
      <Button
        className="w-full"
        onClick={() => {
          setShowModal(true);
          setDrower(false);
        }}
        buttonType="success"
      >
        ورودوثبت نام
      </Button>
    </div>
  );
});

export default SideDrower;
