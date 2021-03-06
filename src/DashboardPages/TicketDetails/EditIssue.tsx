/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProjectHttpReq from "../../services/Project.service";

function EditIssue({ issue }: any) {
    const { title, reporterName, bugCategory, bugDescription, status, project, severity } = issue;
    const [success, setSuccess] = useState<any>();
    const { register, handleSubmit } = useForm<any>({
        defaultValues: {
            title,
            reporterName,
            bugCategory,
            bugDescription,
            status,
            project: project?._id,
            severity,
        },
    });
    const [projects, setProjects] = useState<any>([]);
    const [projectSeverity] = useState<any>(["low", "moderate", "high", "extreme"]);

    const onSubmit = async (): Promise<void> => {
        // need an api to edit an issue/ticket
        // const res = await IssueHttpReq.editIssue(issue._id, data);
        // if (res.data.success) {
        //     window.location.reload();
        //     cogoToast.success("Ticket edited successfully!");
        // }
    };

    // Text Fill text Remove
    const successTextRemover = () => {
        setSuccess(" ");
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await ProjectHttpReq.getAllProjects();
            setProjects(res.projects);
        };
        fetchData();
    }, []);

    return (
        <>
            {issue._id && projects.length ? (
                <div className="m-0 md:m-3">
                    <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                        <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
                            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">
                                Edit Ticket
                            </h1>
                            <p className="text-[#95D1CC]">
                                You can edit the existing fields here or rewrite them
                            </p>
                        </div>
                        <form className="mx-1 mt-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row">
                                <input
                                    style={{ outline: "none" }}
                                    onClick={successTextRemover}
                                    className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                    placeholder="Title"
                                    {...register("title")}
                                />

                                <input
                                    style={{ outline: "none" }}
                                    onClick={successTextRemover}
                                    className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                    placeholder="Reporter Name"
                                    {...register("reporterName")}
                                />

                                <input
                                    style={{ outline: "none" }}
                                    onClick={successTextRemover}
                                    className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                    placeholder="Bug Category"
                                    {...register("bugCategory")}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <input
                                    style={{ outline: "none" }}
                                    onClick={successTextRemover}
                                    className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                    placeholder="Status"
                                    {...register("status")}
                                />
                                <select
                                    {...register("project")}
                                    className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid border-gray-200 py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                >
                                    {projects.map((proj: any) => (
                                        <option value={proj._id} key={proj._id}>
                                            {proj.name}
                                        </option>
                                    ))}
                                </select>
                                {projectSeverity?.length && (
                                    <select
                                        {...register("severity")}
                                        className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid border-gray-200 py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                    >
                                        <option value={severity} key={severity}>
                                            {severity}
                                        </option>
                                        {projectSeverity
                                            .filter((sev: any) => sev !== severity)
                                            .map((s: any) => (
                                                <option value={s} key={s}>
                                                    {s}
                                                </option>
                                            ))}
                                    </select>
                                )}
                            </div>
                            <div className="mx-1 flex flex-col md:flex-row">
                                <textarea
                                    style={{ outline: "none" }}
                                    onClick={successTextRemover}
                                    rows={5}
                                    className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid border-gray-200 py-2 px-3 focus:border-[#22577E]"
                                    placeholder="Bug Description"
                                    {...register("bugDescription")}
                                />
                            </div>

                            <button className="primary-btn" type="submit">
                                Submit
                            </button>
                        </form>

                        <p className="text-danger text-uppercase fs-4 mt-4 mb-5 pb-5 text-center">
                            {success}
                        </p>
                    </div>
                </div>
            ) : (
                <h2>Loading</h2>
            )}
        </>
    );
}

export default EditIssue;
