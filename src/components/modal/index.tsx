import { useState } from "react";
import { useStoreManager } from "../store/store";
import Button from "../UI/button-custom";
import Input from "../UI/input-custom";
type UsersType = {
  userName?: string;
  password?: string;
};

type Props = {
  onChange?: (users: UsersType) => void;
};
const Modal = ({ onChange }: Props) => {
  const { showModal, setShowModal } = useStoreManager();
  const [userInfo, setUserInfo] = useState<UsersType | null>(null);
  return (
    <div
      className={`absolute duration-300 right-[25%] top-[20%]  z-50 w-1/2 h-ئشط border-2 shadow-lg bg-white rounded-lg ${
        showModal ? "translate-x-0" : "translate-x-[200%]"
      }`}
    >
      <div className="flex flex-col gap-4 py-2">
        <span className="w-full py-1 text-xl">اطلاعات ورود</span>
        <Input
          onChange={(e) =>
            setUserInfo((prev: UsersType | null) => ({
              ...prev,
              userName: e.target.value,
            }))
          }
          inputLabel="نام کاربری"
        />
        <Input
          onChange={(e) =>
            setUserInfo((prev: UsersType | null) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          inputLabel="رمز عبور"
        />
        <Button
          onClick={() => {
            setShowModal(false);
            onChange && onChange(userInfo ?? {});
          }}
          className="!bg-blue-500 w-1/4"
        >
          ورود
        </Button>
      </div>
    </div>
  );
};

export default Modal;
