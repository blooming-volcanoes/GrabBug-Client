/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";
import React from "react";
import styles from "../../../styles/projectDescriptionTable.module.css";

function UserSingle({ user }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[300px]`}>{user.assignedUser.name}</td>
            <td className={`${styles.td} w-[300px]`}>{user.role}</td>
            <td className={`${styles.td} w-[300px]`}>
                <div className="flex justify-center">
                    <Link href="/dashboard/projectDetails" className="table-btn ">
                        about{user.assignedUser.name}
                    </Link>
                    <a className="table-btn mx-2" href="#">
                        change role
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default UserSingle;
