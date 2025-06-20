"use server"
import React, {use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    return (
        <div>
            <h2 className='text-4xl my-20 text-center font-bold'>Hot Jobs Of the year</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
        </div>
    );
};

export default HotJobs;
