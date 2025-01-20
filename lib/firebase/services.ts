import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./init";

export const getBlogStar = async () => {
    const q = query(collection(db, "blogStar"));
    onSnapshot(
      q,
      (snapshot) => {
        const blogStar = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        return blogStar
      },
      // eslint-disable-next-line
    )
};
