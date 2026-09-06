import ArrowCard from "./ArrowCard";
import { blogsData } from "./Data";

const Blogs = () => {

  

  return (
    <>
      {blogsData.map((blog) => <ArrowCard blog={blog} link={blog.link} key={blog.id} />)}

    </>
  );
};

export default Blogs;
