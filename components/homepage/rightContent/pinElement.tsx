"use client";
// IMPORT COMPONENTS :
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
const PinWrapper = lazy(() => import("@/components/3d-pinWrappert"));

// KOMPONEN LOADING :
const LoadingPlaceholder = () => (
  <div className="text-sm text-center min-h-[40em] w-full">...</div>
);

export default function PinElement() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref1}
      className="flex sm:min-h-[33em] min-h-[66em] flex-wrap gap-10 justify-center items-center mt-6"
    >
      <Suspense fallback={<LoadingPlaceholder />}>
        {inView1 && (
          <>
            <PinWrapper
              title="See application"
              href="https://sigma-todolist.vercel.app"
              contentTitle="📝 Sigma TodoList"
              contentDesc={
                <>
                  <p className="text-slate-300">
                    Aplikasi TodoList sederhana namun lengkap. Pengguna dapat :
                  </p>
                  <ul className="mt-2 list-disc">
                    <li> Mendaftar dan login untuk akses personal.</li>
                    <li>
                      {" "}
                      Menambahkan task dan menandai task yang sudah selesai.
                    </li>
                    <li>
                      {" "}
                      Task yang selesai akan dipindahkan ke daftar ceklist.
                    </li>
                    <li> Task yang sudah tidak digunakan bisa dihapus.</li>
                  </ul>
                </>
              }
              img="https://i.postimg.cc/wjsbCg9x/Sigma-Todo-List.jpg"
            ></PinWrapper>
            <PinWrapper
              title="See application"
              href="https://erchat-chatting.vercel.app"
              contentTitle="🗨️ ERChat - Chatting App"
              contentDesc={
                <>
                  <p className="text-slate-300">
                    Aplikasi chatting real-time modern dengan fitur :
                  </p>
                  <ul className="mt-2 list-disc">
                    <li>
                      Login dan register menggunakan Firebase Authentication.
                    </li>
                    <li>
                      {" "}
                      Pesan dikirim dan diterima secara instan tanpa reload.
                    </li>
                    <li> Desain responsif dengan Tailwind CSS.</li>
                  </ul>
                </>
              }
              img="https://i.postimg.cc/wMTGZNjn/Erchat.jpg"
            ></PinWrapper>
          </>
        )}
      </Suspense>
    </div>
  );
}
