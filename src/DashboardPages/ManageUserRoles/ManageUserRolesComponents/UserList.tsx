/* eslint-disable no-underscore-dangle */

import React from "react";
import UserSingle from "./UserSingle";

function UserList({ users }: any) {
    return (
        <tbody className="text-center">
            {users.map((user: any) => (
                <UserSingle user={user} key={user.assignedUser._id} />
            ))}
        </tbody>
    );
}

export default UserList;
