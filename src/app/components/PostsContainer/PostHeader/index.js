import Modal from "./Modal";
import Searchbar from "./Searchbar";

function PostsHeader({ setQuery }) {
  return (
    <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
      <Searchbar handleChange={(e) => setQuery(e.target.value)} />
      <Modal />
    </div>
  );
}

export default PostsHeader;
