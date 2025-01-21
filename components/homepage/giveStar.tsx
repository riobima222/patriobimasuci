import { useActionState } from "react";
import Modal from "./modal";
import { addBlogStarAction } from "@/lib/action";

export default function GiveStar() {
  const [error, action, pending] = useActionState(addBlogStarAction, null);
  
  if(error) {
    return <div className="text-red-500">{error}</div>
  }
  
  return (
    <Modal>
      <div className="max-w-[30em] p-4 w-full min-h-[5em] bg-[#212830] rounded-lg">
        <h1 className="text-center">Appreciate the star</h1>
        <form action={action} className="flex flex-col gap-3 justify-center mt-3">
          {error === undefined ? (
            <span className="italic text-center">Thanks !</span>
          ) : (
            <input
              type="text"
              name="yourname"
              placeholder="what your name ?"
              className="text-sm px-2 py-1 focus:outline-none bg-transparent border-[.5px] border-gray-700 rounded-lg"
            />
          )}
          {error !== undefined && (
          <button
            type="submit"
            className="bg-[#0d1117] hover:bg-[#161d26] transition-all py-2 rounded-lg"
          >
            {pending ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <span>send</span>
            )}
          </button>
          )}
        </form>
      </div>
    </Modal>
  );
}
