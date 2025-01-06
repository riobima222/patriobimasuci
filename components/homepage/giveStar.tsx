import Modal from "./modal";

export default function GiveStar() {
  return (
    <Modal>
      <div className="max-w-[30em] p-4 w-full min-h-[5em] bg-[#212830] rounded-md">
        <h1 className="text-center">Appreciate the star</h1>
        <form action="" className="flex flex-col gap-3 justify-center mt-3">
          <input
            type="text"
            placeholder="what your name ?"
            className="text-sm px-2 py-1 focus:outline-none bg-transparent border-[.5px] border-gray-700 rounded-md py-2"
          />
          <button
            type="submit"
            className="bg-[#0d1117] hover:bg-[#161d26] transition-all py-2 rounded-md"
          >
            send
          </button>
        </form>
      </div>
    </Modal>
  );
}
