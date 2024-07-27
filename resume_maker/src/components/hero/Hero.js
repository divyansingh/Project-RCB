import React from 'react'
import classes from './css/hero.module.css'
import Button from "./Button"
const Hero = () => {
    return (
        // <div className={classes.button_container}>
        //   <button className={classes.create_resume_button}>Create Free Resume</button>
        // </div>
        <div className={classes.App}>
            <div className={classes.AppContainer}>

                <h1>Improve your resume and LinkedIn profile</h1>
                <p>
                    Designed by top recruiters, our AI-powered platform instantly gives you
                    tailored feedback on your resume and LinkedIn profile. Land 5x more
                    interviews, opportunities, and job offers.
                </p>
                <div className={classes.button_group}>
                    <Button text="Get started for free" path={'/resume'}/>
                    <Button text="See preview" secondary path={'/'}/>
                </div>
            </div>
        </div>


    )
}
export default Hero