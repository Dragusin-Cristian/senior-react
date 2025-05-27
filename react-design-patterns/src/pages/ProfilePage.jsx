import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {

  // const params = useParams<{profileId: string}>()
  const params = useParams()

  return (
    <div>
      <h1>Profile page {params.profileId}</h1>
    </div>
  );
};

export default ProfilePage;
