import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),

    deletePostById: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),

    createPost: builder.mutation({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    updatePost: builder.mutation({
      query: (updatePost) => {
        const { id, ...data } = updatePost;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        };
        
      },
    }),
  }),
});

export const {useGetAllPostQuery,useGetPostByIdQuery,useDeletePostByIdMutation,useCreatePostMutation,useUpdatePostMutation} = postApi