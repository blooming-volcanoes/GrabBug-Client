import React from "react";
import Details from "./Details";
import EditIssue from "./EditIssue";

function Main({ issue }: { issue: any }) {
    return (
        <section className="">
            <Details issue={issue} />
            <EditIssue issue={issue} />
        </section>
    );
}

export default Main;
