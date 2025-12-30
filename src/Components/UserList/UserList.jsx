import React from "react";

function UserList({ users }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {users.map((user) => (
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      ))}
    </div>
  );
}

export default UserList;
