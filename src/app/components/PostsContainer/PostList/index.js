import PostsCard from "./PostsCard";

function PostsList({ posts }) {
  // const postList = posts.map((post) => (
  //   <div key={post.id}>
  //     <h1>{`Title: ${post.title}.`}</h1>
  //     <h1>{`Description: ${post.description}`}</h1>
  //   </div>
  // ));
  const postList = posts.map((post) => <PostsCard post={post} key={post.id} />);
  return (
    <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
      {postList}
    </div>
  );
}

export default PostsList;
