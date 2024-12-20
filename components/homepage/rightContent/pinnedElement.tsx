// ICONS :
import {
  chattingApp,
  personalBlog,
  portfolio,
  sigmaBlog,
  sigmaStore,
  sigmaTodoList,
} from "@/utils/fetchingStars";
import Repository from "../pinnedContent/repo";

export default async function PinnedELement() {
  const chattingAppStars = await chattingApp();
  const personalBlogStars = await personalBlog();
  const portfolioStars = await portfolio();
  const sigmaBlogStars = await sigmaBlog();
  const sigmaTodoListStars = await sigmaTodoList();
  const sigmaStoreStars = await sigmaStore();
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 max-w-[64em] w-full rounded-md mt-2">
      {/* REPOSITORY 1 */}
      <Repository
        stars={chattingAppStars.length}
        title="chatting-app"
        titleLink="chatting-app"
        tech="typescript"
        starsLink="chatting-app"
      >
        Simple chatting app, you can stay connected with your close friend.
      </Repository>

      {/* REPOSITORY 2 */}
      <Repository
        stars={personalBlogStars.length}
        title="personal-blog"
        titleLink="personal-blog"
        tech="typescript"
        starsLink="personal-blog"
      >
        my personal blog, i write a lot of topics about programing
      </Repository>

      {/* REPOSITORY 3 */}
      <Repository
        stars={portfolioStars.length}
        title="portfolio."
        titleLink="portfolio."
        tech="css"
        isFork={true}
        fork="patriobimasuci354/portfolio."
        forkRef="https://github.com/patriobimasuci354/portfolio."
        starsLink="portfolio."
      >
        this is my simple portfolio, create with html, css and a bit javascript
      </Repository>

      {/* REPOSITORY 4 */}
      <Repository
        stars={sigmaBlogStars.length}
        title="sigma-blog"
        titleLink="sigma-blog"
        tech="javascript"
        starsLink="sigma-blog"
      >
        Simple chatting app, you can stay connected with your close friend.
      </Repository>

      {/* REPOSITORY 5 */}
      <Repository
        stars={sigmaTodoListStars.length}
        title="sigma-todo-list"
        titleLink="sigma-todo-list"
        tech="typescript"
        starsLink="sigma-todo-list"
      >
        make your todo list, and get started now, there are some features that
        are awesome
      </Repository>

      {/* REPOSITORY 6 */}
      <Repository
        stars={sigmaStoreStars.length}
        title="sigma-store"
        titleLink="sigma-store"
        tech="typescript"
        starsLink="sigma-store"
      >
        An online store website example with cool features
      </Repository>
    </div>
  );
}
