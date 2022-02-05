import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p, index) => (
        <Post key={index} post={p} />
      ))}
    </div>
  );
};

export default Posts;
