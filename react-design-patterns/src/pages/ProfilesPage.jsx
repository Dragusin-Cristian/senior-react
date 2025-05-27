import React, { Suspense } from "react";
import {NavLink, Outlet} from "react-router-dom"

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Profiles page</h1>
      {profiles.map(profile => <NavLink to={`/profiles/${profile}`} className={({isActive}) => isActive ? 'activeLink' : ""}>Profile {profile}</NavLink>)}
      <Suspense fallback="Loading...">
      <Outlet />
      </Suspense>
    </div>
  );
};

export default ProfilesPage;
