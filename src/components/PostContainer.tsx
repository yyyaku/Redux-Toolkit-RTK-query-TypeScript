import React, { useState } from "react";
import { postApi } from "../service/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const {
        data: posts,
        isLoading,
        error,
    } = postApi.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000,
    });
    return (
        <div className='posts'>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка</h1>}
            {posts && posts.map((post) => <PostItem post={post}></PostItem>)}
        </div>
    );
};

export default PostContainer;
