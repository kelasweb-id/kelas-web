import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="post" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Yusuf</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam hic delectus cupiditate tempore id maiores eaque nam aliquid commodi natus perspiciatis non magni culpa fugit officiis earum, voluptates iure perferendis. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Aperiam hic delectus cupiditate tempore id maiores eaque nam aliquid commodi natus perspiciatis non magni culpa fugit officiis earum, voluptates iure perferendis. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Aperiam hic delectus cupiditate tempore id maiores eaque nam aliquid commodi natus perspiciatis non magni culpa fugit officiis earum, voluptates iure perferendis. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Aperiam hic delectus cupiditate tempore id maiores eaque nam aliquid commodi natus perspiciatis non magni culpa fugit officiis earum, voluptates iure perferendis.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
