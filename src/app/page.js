import { getAllPosts } from "./actions";
import Modal from "./components/PostsContainer/PostHeader/Modal";
import SearchBar1 from "./SearchBar1";

// console.log(getAllPosts);
// getAllPosts();
export default async function Home() {
  const posts = await getAllPosts();

  const descriptionPosts = posts.map((post) => <h1></h1>);

  return (
    <div className="bg-red-400 h-screen w-screen flex flex-col items-center justify-center">
      <Modal />
      <SearchBar1 posts={posts} />
    </div>
  );
}
