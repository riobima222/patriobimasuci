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
                    A simple todo-list application where users can :
                  </p>
                  <ul className="mt-2 list-disc">
                    <li> Register and log in for personal access.</li>
                    <li>
                      {" "}
                      Add task and mark task as completed.
                    </li>
                    <li>
                      {" "}
                      Completed task will be moved to a checklist.
                    </li>
                    <li> Task that are no longer nedded can be deleted.</li>
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
                    A modern real-time chat application with features :
                  </p>
                  <ul className="mt-2 list-disc">
                    <li>
                      Login and register using firebase authentication.
                    </li>
                    <li>
                      {" "}
                      Messages are send and received instanly without reloading.
                    </li>
                    <li>Responsive design with tailwind CSS.</li>
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
