/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from "zustand"; 


type StoreType ={
      
     displayCard:boolean
     setDisplayCard:(value:boolean | ((c:boolean) => boolean)) =>void
     showModal:boolean
     setShowModal :(value:boolean) =>void
     drower :boolean,
     setDrower: (value: boolean | ((c: boolean) => boolean)) => void;
     refresh:boolean,
     setRefresh:(value:boolean | ((c:boolean) => boolean)) => void
}

export const useStoreManager = create<StoreType>()((_set,_get)=>({
      refresh:false,
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
     setDisplayCard : (value:boolean | ((c:boolean) =>boolean)) =>{
       _set(() =>({
        displayCard: typeof value === 'boolean' ? value : value(_get().displayCard)
       }))
     },

     setRefresh : (value:boolean | ((c:boolean) => boolean)) =>{
        _set(()=>({
           refresh:typeof value === "boolean" ? value : value(_get().refresh)
        }))
     }
}))