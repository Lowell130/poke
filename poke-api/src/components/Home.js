import React, { useEffect, useState } from 'react';


function Home() {
    useEffect(() => {
        fetchData();
    }, []
    );

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const rawData = await fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
        const data = await rawData.json();
        const posts = data.results

        console.log(posts);


        setPosts(posts)


    }

    return (
        <div>
            <h1>Home</h1>

       {posts.map(post => (
           <p key={post.name}>{post.name}</p>
       )
        )}

        </div>
    )
}

export default Home;