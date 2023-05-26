import React from "react";

const SampleError = async () => {
  // this is a dummy function to showcase how error.tsx file will run if there is a error in fetching , so here the api is wrong in this function, to see the correct a[i fetching go to list of posts scetion]
  const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.sers");
    return res.json();
  };
  const users = await getUserData();
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default SampleError;
