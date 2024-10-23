import { getAllPosts } from "./actions";
import Modal from "./components/Modal";

// console.log(getAllPosts);
// getAllPosts();
export default async function Home() {
  const posts = await getAllPosts();
  const titlePosts = posts.map((post) => (
    <div>
      <h1>{`Title: ${post.title}.`}</h1>
      <h1>{`Description: ${post.description}`}</h1>
    </div>
  ));
  // const descriptionPosts = posts.map((post) => <h1></h1>);

  return (
    <div className="bg-red-400 h-screen w-screen flex flex-col items-center justify-center">
      <Modal />
      {titlePosts}
      {/* {descriptionPosts} */}
    </div>
  );
}
