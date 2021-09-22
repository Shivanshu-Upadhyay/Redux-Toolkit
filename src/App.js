import './App.css';
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useDeletePostByIdMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./service/Post";


let a = Math.floor(Math.random() * 10);
const NewBody = {
  title: 'deepu',
  body:'bar',
  userId:1,
}
const updateBody = {
  id:1,
  title: "deepa",
  body: "bar-bar",
  userId: 1,
};


function App() {
  // const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(a)
  // const [deletepost,responseInfo] = useDeletePostByIdMutation();
  // const [creatPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation();

  console.log(responseInfo);
  if (responseInfo.isLoading) {
    return <div>Loading.....</div>;
  }
  if (responseInfo.isError) {
    return (
      <div>
        <h1>{responseInfo.error.error}</h1>
      </div>
    );
  }
  return (
    <div className="App">
      {/* {
          responseInfo.data.map((post,i)=>{return (
            <div key={i}>
              <h1>{post.id} {post.title}</h1>
              <p>{post.body}</p>
              <hr />
            </div>
          );                       
          })
        } */}
         
         {/* One Data By Id */}

      {/* <div>
        <h1>
          {responseInfo.data.id} {responseInfo.data.title}
        </h1>
        <p>{responseInfo.data.body}</p>
      </div> */}


     {/* DELETE */}

     {/* <button onClick={()=>{deletepost(a)}}>Delete</button> */}

     {/* Create Post */}

     {/* <button onClick={()=>{creatPost(NewBody);}}>Craete Post</button> */}

     {/* Update Post */}

     <button onClick={()=>{updatePost(updateBody);}}>Update Post</button>

    </div>
  );
}

export default App;
