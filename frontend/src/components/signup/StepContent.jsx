import React from 'react'

const StepContent = ({ changeTab }) => {
    return <div className='w-full h-full'>
        {
            changeTab === "1" ? (
           <></>
            ) : changeTab === "2" ? (
        <></>
        ) : changeTab === "3" ? (
        <></>
        ) : changeTab === "4" && (
        <></>
            )
      }
  </div>;
};

export default StepContent