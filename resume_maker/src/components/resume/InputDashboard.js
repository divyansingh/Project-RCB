import React from 'react'
import profileIcon from '../../imageUtils/student.png'
import educationIcon from '../../imageUtils/education.png'
import workIcon from '../../imageUtils/work-experience.png'
import infoIcon from '../../imageUtils/info-button.png'
import printIcon from '../../imageUtils/printer-icon.png'
import './css/inputDashboard.css'
const InputDashboard = () => {
  return (
    <div className='df fdc fwNW jcse inputDashboard'>
      <DasboardElements path={profileIcon} alt={'Profile'} />
      <DasboardElements path={educationIcon} alt={'Profile'} />
      <DasboardElements path={workIcon} alt={'Profile'} />
      <DasboardElements path={infoIcon} alt={'Profile'} />
      <DasboardElements path={printIcon} alt={'Profile'} />
    </div>
  )
}

export default InputDashboard

const DasboardElements = ({ path, alt }) => {
  return (
    <div>
      <img src={path} alt={alt} style={{ height: 50, width: 50 }} />
    </div>
  )
}