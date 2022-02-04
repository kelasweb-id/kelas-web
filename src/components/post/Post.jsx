import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="post" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse animi, aliquam mollitia totam numquam vel officiis laboriosam sapiente voluptate impedit fugit obcaecati suscipit odit harum deserunt quaerat? Neque, iste. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. At esse animi, aliquam mollitia totam numquam vel officiis laboriosam sapiente voluptate impedit fugit obcaecati suscipit odit harum deserunt quaerat? Neque, iste. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. At esse animi, aliquam mollitia totam numquam vel officiis laboriosam sapiente voluptate impedit fugit obcaecati suscipit odit harum deserunt quaerat? Neque, iste.
      </p>
    </div>
  );
};

export default Post;
