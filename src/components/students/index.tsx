import { useState } from "react";
import Input from "../UI/input-custom";
import Button from "../UI/button-custom";
import { useStoreManager } from "../store/store";
type Props = {
  studentNumnber: number;
  fullName: string;
  classNumber: string;
  phoneNumber: string;
  email: string;
  onClickForDelete?: () => void;
  onClickForEdite?: () => void;
};

const Student = ({
  studentNumnber,
  fullName,
  classNumber,
  phoneNumber,
  email,
  onClickForDelete,
  onClickForEdite,
}: Props) => {
  const [studentInfo, setStudentInfo] = useState({
    fullName,
    classNumber,
    phoneNumber,
    email,
  });
  const { displayCard } = useStoreManager();

  return (
    <>
      <div
        className={`${
          displayCard ? "w-full" : "w-1/2"
        }  h-max flex flex-col items-start gap-4 p-2 shadow-lg border-2 border-sky-800 rounded-lg`}
      >
        <span className="text-center  w-full text-gray-500">
          شماره دانش اموزی : {studentNumnber}
        </span>
        <Input
          inputLabel="نام و نام خانوادگی"
          value={studentInfo.fullName}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, fullName: e.target.value })
          }
        />
        <Input
          inputLabel={"شماره کلاس"}
          value={studentInfo.classNumber}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, classNumber: e.target.value })
          }
        />
        <Input
          inputLabel={"تلفن"}
          value={studentInfo.phoneNumber}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, phoneNumber: e.target.value })
          }
        />
        <Input
          inputLabel={"ایمیل"}
          value={studentInfo.email}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, email: e.target.value })
          }
        />
        <div className=" w-full border flex gap-2 justify-center">
          <Button
            buttonType="default"
            onClick={onClickForEdite !== undefined ? onClickForEdite : () => {}}
          >
            ویرایش
          </Button>
          <Button
            buttonType="error"
            onClick={
              onClickForDelete !== undefined ? onClickForDelete : () => {}
            }
          >
            حذف
          </Button>
        </div>
      </div>
    </>
  );
};

export default Student;
