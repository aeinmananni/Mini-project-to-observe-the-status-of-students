/* eslint-disable react-hooks/exhaustive-deps */
import Student from "../students";
import { useStoreManager } from "../store/store";
import Button from "../UI/button-custom";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import { StudentType } from "../models";
import Input from "../UI/input-custom";
import Modal from "../modal";
import BackDrop from "../backdrop";
import SideDrower from "../side-drower";
import { useNavigate } from "react-router-dom";
const StudentRoute = () => {
  const navigate = useNavigate();
  const {
    students,
    handeDeleteStudents,
    setDisplayCard,
    displayCard,
    setStudent,
    showModal,
    setShowModal,
  } = useStoreManager();
  const handelEditeStudent = useStoreManager((s) => s.handelEditeStudents);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [ArrayHoder, setArrayHoder] = useState<StudentType[]>([]);
  const handelfilterStudents = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = [...ArrayHoder];
    const filter = newValue.filter((t) => t.fullName.includes(e.target.value));
    setStudent(filter);
  };

  const handelScroll = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    setArrayHoder(students);
  }, []);

  return (
    <>
      <SideDrower />
      <Modal onChange={(e) => console.log("FFFFF : ", e)} />
      <BackDrop backDrop={showModal} onClick={() => setShowModal(false)} />

      <div className="relative p-2 w-full h-full  flex flex-col gap-4  items-center">
        <Input
          ref={inputRef}
          type="text"
          placeholder="جست و جوی دانش اموزان .."
          className="border-2 shadow-md rounded-md w-full p-2  outline-offset-2"
          onChange={(e) => handelfilterStudents(e)}
        />
        <Button buttonType="success" onClick={() => setDisplayCard((c) => !c)}>
          تغییر وضعیت نمایش
        </Button>
        <div
          className={`grid w-full  gap-4 justify-items-center relative  ${
            displayCard ? "grid-cols-2" : "grid-cols-1"
          } `}
        >
          {students.map((it) => (
            <Student
              key={it.id}
              studentNumnber={it.id}
              fullName={it.fullName}
              classNumber={it.classNumber}
              phoneNumber={it.phoneNumber}
              email={it.email}
              onClickForDelete={() => handeDeleteStudents(it.id)}
              onClickForEdite={() => {
                const personInfo = handelEditeStudent(it.id);
                navigate(`/addStudent/${it.id}`, {
                  state: { editeInfo: personInfo },
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
