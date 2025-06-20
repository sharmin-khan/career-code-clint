import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const { company, title, responsibilities } = useLoaderData();
  return (
    <div className="h-72 flex justify-center items-center bg-base-200">
      <div className="card card-dash bg-base-100 w-96">
        <h1 className="text-3xl font-bold text-center mt-3">Job Details</h1>
        <div className="card-body">
          <h1 className="text-2xl">Company Name: {company}</h1>
          <h2 className="text-xl">{title}</h2>
          <p>{responsibilities}</p>

          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
