/* eslint-disable react-hooks/exhaustive-deps */
import Student from "../students";
import { useStoreManager } from "../store/store";
import Button from "../UI/button-custom";
import { useEffect, useRef } from "react";
import Input from "../UI/input-custom";
import { useNavigate } from "react-router-dom";
import { useGetStudents } from "../hooks/useStudentshook";
const StudentRoute = () => {
  const navigate = useNavigate();
  const { setDisplayCard, displayCard } = useStoreManager();

  const { state, loading } = useGetStudents();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handelScroll = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {}, []);
  if (loading) {
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
          {state &&
            state.map((it) => (
              <Student
                key={it.std_id}
                studentNumnber={it.std_id ?? 0}
                fullName={it.std_fullName}
                classNumber={it.std_classNumber}
                phoneNumber={it.std_phoneNumber}
                email={it.std_email}
                onClickForDelete={() => console.log(it.std_id)}
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
