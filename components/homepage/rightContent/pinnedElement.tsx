// ICONS :
import { chattingApp } from "@/utils/fetchingStars";
import Repository from "../pinnedContent/repo";

export default async function PinnedELement() {
  const chattingAppStars = await chattingApp();
  return (
    <div className="grid grid-cols-2 gap-3 max-w-[64em] w-full rounded-md mt-2">
      {/* REPOSITORY 1 */}
      <Repository
        stars={chattingAppStars.length}
        title="chatting-app"
        tech="typescript"
      >
        Simple chatting app, you can stay connected with your close friend.
      </Repository>

      {/* REPOSITORY 2 */}
      <Repository
        stars={chattingAppStars.length}
        title="personal-blog"
        tech="typescript"
      >
        my personal blog, i write a lot of topics about programing
      </Repository>

      {/* REPOSITORY 3 */}
      <Repository
        stars={chattingAppStars.length}
        title="portfolio."
        tech="css"
        isFork={true}
        fork="patriobimasuci354/portfolio."
        forkRef="https://github.com/patriobimasuci354/portfolio."
      >
        this is my simple portfolio, create with html, css and a bit javascript
      </Repository>

      {/* REPOSITORY 4 */}
      <Repository
        stars={chattingAppStars.length}
        title="sigma-blog"
        tech="javascript"
      >
        Simple chatting app, you can stay connected with your close friend.
      </Repository>

      {/* REPOSITORY 5 */}
      <Repository
        stars={chattingAppStars.length}
        title="sigma-todo-list"
        tech="typescript"
      >
        make your todo list, and get started now, there are some features that
        are awesome
      </Repository>

      {/* REPOSITORY 6 */}
      <Repository
        stars={chattingAppStars.length}
        title="sigma-store"
        tech="typescript"
      >
        An online store website example with cool features
      </Repository>
    </div>
  );
}
