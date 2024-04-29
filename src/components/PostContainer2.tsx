import React, { useEffect, useState } from "react";
import { postApi } from "../service/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const {
        data: posts,
        isLoading,
        error,
        refetch,
    } = postApi.useFetchAllPostsQuery(limit);

    useEffect(() => {
        setTimeout(() => {
            setLimit(5);
        }, 3000);
    }, []);
    return (
        <div className='posts'>
            <button onClick={refetch}>refetch</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Ошибка при загрузки</h1>}
            {posts && posts.map((post) => <PostItem post={post}></PostItem>)}
        </div>
    );
};

export default PostContainer;
