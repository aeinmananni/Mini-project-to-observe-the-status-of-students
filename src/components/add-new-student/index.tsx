import Input from "../UI/input-custom";
import Button from "../UI/button-custom";
import { useForm } from "react-hook-form";
import { StudentType } from "../models";
import { useStoreManager } from "../store/store";
import { forwardRef } from "react";
import { useLocation, useParams } from "react-router-dom";

const AddNewStudent = forwardRef<HTMLFormElement>((_props, ref) => {
  const location = useLocation();
  const params = useParams();
  const editeMode: StudentType = location?.state?.editeInfo;
  const { setStudent, students } = useStoreManager();
  const { register, handleSubmit, reset } = useForm<StudentType>({
    defaultValues: {
      std_fullName: editeMode ? editeMode.std_fullName : "",
      std_classNumber: editeMode ? editeMode.std_classNumber : "",
      std_phoneNumber: editeMode ? editeMode.std_phoneNumber : "",
      email: editeMode ? editeMode.email : "",
    },
  });

  const onSubmit = (data: StudentType) => {
    if (params.id) {
      const findIndex = students.findIndex(
        (it) => it.std_id === (params.id ? +params.id : 0)
      );
      students[findIndex] = { ...students[findIndex], ...data };
      setStudent(students);
    } else {
      const newStudent = { ...data, id: students.length + 1 };

      setStudent([...students, newStudent]);
    }
    reset({
      std_fullName: "",
      std_classNumber: "",
      std_phoneNumber: "",
      email: "",
    });
  };

  return (
    <form
      ref={ref}
      className="flex flex-col relative h-full  items-start w-full gap-5 border-2 py-3 px-2 rounded-lg shadow-md text-sm"
    >
      <Input {...register("fullName")} placeholder="نام و نام خانوادگی" />
      <Input {...register("classNumber")} placeholder="شماره کلاس" />
      <Input {...register("phoneNumber")} placeholder="تلفن" />
      <Input {...register("email")} placeholder="ایمیل" />
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
