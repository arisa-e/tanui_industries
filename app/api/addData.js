import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";


export default async function addData(form) {
    try {
        const docRef = await addDoc(collection(db, "products"), form);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}