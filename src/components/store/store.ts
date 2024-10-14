/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"; 
import { StudentType } from "../models";


type StoreType ={
     students:StudentType[]
     handeDeleteStudents:(id:number) =>void
     handelEditeStudents:(id:number) =>void
     displayCard:boolean
     setDisplayCard:(value:boolean | ((c:boolean) => boolean)) =>void
     setStudent : (student:StudentType[]) =>void
     showModal:boolean
     setShowModal :(value:boolean) =>void
     drower :boolean,
     setDrower: (value: boolean | ((c: boolean) => boolean)) => void;
}

export const useStoreManager = create<StoreType>()((_set,_get)=>({
     students:[
        {
            id: 1,
            fullName: "علیرضا کریمی",
            classNumber: "44332",
            phoneNumber: "223355",
            email: "eee.gmail.com",
          },
          {
            id: 2,
            fullName: "یونس عزیزی",
            classNumber: "3342",
            phoneNumber: "1123344",
            email: "ttt.gmail.com",
          },
          {
            id: 3,
            fullName: "روح الله حسینی",
            classNumber: "11222",
            phoneNumber: "9878",
            email: "uuu.gmail.com",
          },
          {
            id: 4,
            fullName: "سارا باقرجانی",
            classNumber: "43466",
            phoneNumber: "12345",
            email: "yyy.gmail.com",
          },
          {
            id: 5,
            fullName: "سحر حاج گوهری",
            classNumber: "11123",
            phoneNumber: "876554",
            email: "iii.gmail.com",
          },
     ],
     drower:false,
     setDrower:(value:boolean | ((c:boolean) => boolean)) =>{
        _set(()=>({
           drower :typeof value === "boolean" ? value : value(_get().drower)
        }))
     },
     showModal:false,
     setShowModal:(value:boolean) =>{
     _set(()=>({
       showModal:value
     }))
     },
     displayCard:false,
     setStudent:(students:StudentType[]) =>{
        _set({
           students : students
        })
     },
     handeDeleteStudents:(id:number) =>{
       const findIndex = _get().students.findIndex(it => it.id === id)
        const newArray = [..._get().students]
        newArray.splice(findIndex,1);
        
       _set(()=>({
         students:newArray
       }))
     },
     handelEditeStudents:(id:number) =>{
      const findStudent = _get().students.find(it => it.id === id);
      return findStudent
     },
     setDisplayCard : (value:boolean | ((c:boolean) =>boolean)) =>{
       _set(() =>({
        displayCard: typeof value === 'boolean' ? value : value(_get().displayCard)
       }))
     }
}))