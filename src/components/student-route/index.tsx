/* eslint-disable react-hooks/exhaustive-deps */
import Student from "../students";
import { useStoreManager } from "../store/store";
import Button from "../UI/button-custom";
import { useRef } from "react";
import Input from "../UI/input-custom";
import { useNavigate } from "react-router-dom";
import { useGetStudents, useRemoveStudents } from "../hooks/useStudentshook";
const StudentRoute = () => {
  const navigate = useNavigate();
  const { setDisplayCard, displayCard } = useStoreManager();

  const { deleteHandlers } = useRemoveStudents();
  const { dataStatus } = useGetStudents();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // const deleteHandlers = async (id: number) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:5000/api/statusStudent/DELETE/remove/${id}`
  //     );
  //     setMessages((prev) => ({ ...prev, message: response.data }));
  //     setRefresh((c) => !c);
  //   } catch (error) {
  //     const axiosError = error as AxiosError;

  //     setMessages((prev) => ({
  //       ...prev,
  //       Error: (axiosError?.response?.data as string) || (error as string),
  //     }));
  //   }
  // };
  const handelScroll = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (dataStatus.isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="relative  w-full h-full  flex flex-col gap-4  items-center">
        <Input
          ref={inputRef}
          type="text"
          placeholder="جست و جوی دانش اموزان .."
          className="border-2 shadow-md rounded-md w-full p-2  outline-offset-2"
        />
        <Button buttonType="success" onClick={() => setDisplayCard((c) => !c)}>
          تغییر وضعیت نمایش
        </Button>
        <div
          className={`grid w-full  gap-4 justify-items-center relative  ${
            displayCard ? "grid-cols-2" : "grid-cols-1"
          } `}
        >
          {dataStatus.data &&
            dataStatus.data.map((it) => (
              <Student
                key={it.std_id}
                studentNumnber={it.std_id ?? 0}
                fullName={it.std_fullName}
                classNumber={it.std_classNumber}
                phoneNumber={it.std_phoneNumber}
                email={it.std_email}
                onClickForDelete={() => {
                  deleteHandlers(it.std_id ?? 0);
                }}
                onClickForEdite={() => {
                  navigate(`/addStudent/${it.std_id}`, {
                    state: { editeInfo: it },
                    replace: true,
                  });
                }}
              />
            ))}
          <Button
            onClick={handelScroll}
            className="absolute top-[128rem] left-2"
            buttonType="default"
          >
            بالا ⬆
          </Button>
        </div>
      </div>
    </>
  );
};

export default StudentRoute;
