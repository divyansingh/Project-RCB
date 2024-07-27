import React from 'react'
import classes from './css/landing.module.css'
import InputDashboard from './InputDashboard'
const Landing = () => {
    return (
        <div className='df'>
            <InputDashboard/>
            <div className={classes.outerContainer}>
                <div className={classes.resumeContainer}>
                    <ResumeSection title="Professional Summary" />
                    <ResumeSection title="Employment History" />
                    <ResumeSection title="Education" />
                </div>
            </div>
        </div>
    )
}

export default Landing
const ResumeSection = ({ title }) => {
    return (
        <div className={classes.section}>
            <h2>{title}</h2>
            <div className={classes.line}></div>
        </div>
    );
};