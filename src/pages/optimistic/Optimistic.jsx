import React, { useEffect, useState } from 'react'
import Loading from "../../component/loading/Loading";
const Optimistic = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    if (loading) return <Loading />;
    if (error) return <h3>Error: {error}</h3>;
    return (
        <>
            <h1>useOptimistic</h1>
            <div className='compare-layout'>
                <div className="items">
                    <div style={{ padding: "20px" }}>
                        <h2>Posts List</h2>
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                style={{
                                    border: "1px solid #ccc",
                                    marginBottom: "10px",
                                    padding: "10px",
                                    borderRadius: "5px",
                                }}
                            >
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="items">
                    item two
                </div>
            </div>
        </>
    )
}

export default Optimistic