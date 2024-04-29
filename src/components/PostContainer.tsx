import React from "react";
import { postApi } from "../service/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const { data: posts } = postApi.useFetchAllPostsQuery(5);
    return (
        <div>
            {posts && posts.map((post) => <PostItem post={post}></PostItem>)}
        </div>
    );
};

export default PostContainer;
