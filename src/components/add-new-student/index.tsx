import Input from "../UI/input-custom";
import Button from "../UI/button-custom";
import { useForm } from "react-hook-form";
import { StudentType } from "../models";
import { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddNewStudent = forwardRef<HTMLFormElement>((_props, ref) => {
  const nav = useNavigate();
  const location = useLocation();
  // const params = useParams();
  const editeMode: StudentType = location?.state?.editeInfo;
  const { register, handleSubmit, reset } = useForm<StudentType>({
    defaultValues: {
      std_fullName: editeMode ? editeMode.std_fullName : "",
      std_classNumber: editeMode ? editeMode.std_classNumber : "",
      std_phoneNumber: editeMode ? editeMode.std_phoneNumber : "",
      std_email: editeMode ? editeMode.std_email : "",
    },
  });

  const onSubmit = async (data: StudentType) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/statusStudent/POST/Add",
        data
      );
      nav("/");
      reset();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      ref={ref}
      className="flex flex-col relative h-full  items-start w-full gap-5 border-2 py-3 px-2 rounded-lg shadow-md text-sm"
    >
      <Input {...register("std_fullName")} placeholder="نام و نام خانوادگی" />
      <Input {...register("std_classNumber")} placeholder="شماره کلاس" />
      <Input {...register("std_phoneNumber")} placeholder="تلفن" />
      <Input {...register("std_email")} placeholder="ایمیل" />
      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        buttonType="default"
      >
        اضافه کردن دانش آموز
      </Button>
      <small className="absolute bottom-0 left-0 p-3">
        اضافه کردن دانش آموزان
      </small>
    </form>
  );
});

export default AddNewStudent;
