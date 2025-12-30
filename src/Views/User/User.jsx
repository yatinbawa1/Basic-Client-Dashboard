import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../data/UserProvider";
import { useParams } from "react-router-dom";
import EmptyState from "../../Components/EmptyState/EmptyState";
import Loader from "../../Components/Loading/Loader";

// while being able to get user from navigation state,
// this is example on how to get user data from context based on URL params
// in case of page refresh or direct link access
// that feature is not implemented in this demo app because
// it would require re-fetching all user data again
export function getUserInLink() {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const { data, setData } = useContext(UserContext);
  return data ? data.find((user) => user.id === userId) : null;
}

function User() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fake timer so that loading screen can come up
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const user = getUserInLink();

  // simple spinner
  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <EmptyState
        image="/Say No Icon.png"
        alt="Error"
        message="Unable to access user data."
        messageClass="text-secondary"
      />
    );
  }

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="mt-8 p-4">
      <div className="mx-auto rounded-md bg-white shadow-md">
        <div
          className={`flex-1 p-4 ${
            user.role === "admin"
              ? "bg-green-300 text-green-700"
              : "bg-red-300 text-red-700"
          } animate-pulse`}
        >
          <span className="flex-1 text-xl font-bold">
            {user.role === "admin" ? "ACTIVE" : "INACTIVE"}{" "}
          </span>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div className="rounded-xl">
            <h2 className="mb-3 text-lg font-semibold">Profile</h2>

            <ul className="space-y-1 text-sm text-gray-700">
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
              <li>Age: {user.age}</li>
              <li>Gender: {user.gender}</li>
              <li>Blood Group: {user.bloodGroup}</li>
              <li>Eye Color: {user.eyeColor}</li>
              <li>
                Hair: {user.hair?.color}, {user.hair?.type}
              </li>
            </ul>
          </div>

          <div className="rounded-md">
            <h2 className="mb-3 text-lg font-semibold">Address</h2>

            <p className="text-sm text-gray-700">
              {user.address.address}, {user.address.city}, {user.address.state}{" "}
              {user.address.postalCode}
              <br />
              {user.address.country}
            </p>
          </div>

          {/* Company */}
          <div className="rounded-md">
            <h2 className="mb-3 text-lg font-semibold">Company</h2>

            <ul className="space-y-1 text-sm text-gray-700">
              <li>Department: {user.company?.department}</li>
              <li>Title: {user.company?.title}</li>
              <li>Organization: {user.company?.name}</li>
            </ul>
          </div>

          <div className="rounded-md">
            <h2 className="mb-3 text-lg font-semibold">Other</h2>

            <ul className="space-y-1 text-sm text-gray-700">
              <li>University: {user.university}</li>
              <li>Crypto Wallet: {user.crypto?.wallet}</li>
              <li>Coin: {user.crypto?.coin}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
