import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProfilePage = () => {

  // * extract params into the client component
  // const params = useParams<{profileId: string}>()
  const params = useParams()

  const data = useLoaderData()
  console.log("HERE", data);
  

  return (
    <div>
      <h1>Profile page {params.profileId} {data.name} {data.age}</h1>
    </div>
  );
};



export default ProfilePage
