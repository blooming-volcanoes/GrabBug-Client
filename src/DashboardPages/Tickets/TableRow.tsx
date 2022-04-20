import Link from "next/link";
import React from "react";

function TableRow({ ticket }: any) {
    return (
        <tr className="border-b">
            <td className="table-td">{ticket.title}</td>
            <td className="table-td">N/A</td>
            <td className="table-td">{ticket.severity}</td>
            <td className="table-td">{ticket.status}</td>
            <td className="table-td">{ticket.bugCategory}</td>
            <td className="table-td">{ticket.reporterName}</td>
            <td className="table-td">
                {" "}
                <li className="text-blue-600 underline decoration-solid">
                    <Link href="/home">Edit/Assign</Link>
                </li>
                <li className="text-blue-600 underline decoration-solid">
                    <Link href="/home">Details</Link>
                </li>
            </td>
        </tr>
    );
}

export default TableRow;