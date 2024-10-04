import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <p className="text-4xl">Profile Page <span className="p-2 rounded bg-orange-500 text-black">{params.id}</span></p>
      </div>
    </div>
  );
};

export default UserProfile;
