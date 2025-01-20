"use server"

import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase/init"
import { revalidatePath } from "next/cache";

export async function addBlogStarAction (prevState: unknown, formData: FormData) {
    const yourName = formData.get("yourname") as string;
    try {
        const blogStarRef = collection(db, "blogStar");
        await addDoc(blogStarRef, {name: yourName})
    } catch (err) {
        return "be attention, an error occured : " + err
    }
    revalidatePath("/");
}