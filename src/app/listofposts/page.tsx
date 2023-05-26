import React from "react";
import Image from "next/image";
const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};


const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    // cache: "no-store", //so that everytime we get a new data  when we refresh the page
    next: { revalidate: 10 }, //so that everytime when the user refresh it should not fetch new data, every 3sec if in case user refrserhes it will fetch the new data, as in if someone clicks refresh it will not fetch the new data, if it is clicked under 3 seconds, but after 10 seconds it will fetch the new data
  });
  return res.json();
};

const ListOfPosts = async () => {
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUserData(),
    getDogData(),
  ]);
  return (
    <div className="flex flex-row justify-between">
      <div>
        {posts.map((post: any) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <div>
        {users.map((user: any) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <div>
        <Image src={dog.message} width={200} height={200} alt="dog" />
      </div>
    </div>
  );
};

export default ListOfPosts;
