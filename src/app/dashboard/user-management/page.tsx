import React from "react";

const UserManagementPage = () => {
  return (
    <div className="flex flex-col">
      <div className="collapse w-full bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
      <div className="mt-2 size-60 bg-red-50" />
      <div className="mt-2 size-60 bg-red-50" />
      <div className="mt-2 size-60 bg-red-50" />
      <div className="mt-2 size-60 bg-red-50" />
      <div className="size-60 bg-red-50" />
      <p>testing</p>
    </div>
  );
};

export default UserManagementPage;
