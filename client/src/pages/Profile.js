import Layout from "./../components/Layout";
import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Layout>
      <div>
        <h2 className="text-2xl">User Profile</h2>

        <div className="mentor-profile">
          <div className="mentor-card">
            <div className="mentor-details">
              <h3 className="text-xl">{user.name}</h3>
              <p>
                <span className="font-semibold">Are you doctor:</span>{" "}
                <span className="text-blue-600">
                  {user.isDoctor ? "Yes" : "No"}
                </span>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-blue-600">{user.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
