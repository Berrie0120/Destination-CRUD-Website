import React from 'react';
import Work from './Work';

const WorkList = () => {
  const workData = [
    {
      title: 'HIGH SCHOOL SCIENCE TUTOR - SAINT ELLYS ADVANCED EDUCATION CENTRE',
      duties: ['Taught classes of up to 15 students aged 13 to 15 in various science subjects.',
                'Created engaging teaching materials, including workbooks and presentations, to support languages, math, and science lessons.',
                'Designed and assigned weekly assignments aligned with the course curriculum to meet student learning needs.']
    },
    {
      title: 'HOMEWORK ASSISTANT TUTOR - SAINT ELLYS EDUCATION',
      duties: ['Provided academic support to students struggling with subject. ', 
                'Directed students in completing assignments and projects related to the subject material.', 
                'Conducted one-on-one and small group tutoring sessions.']
    }
  ];

  return (
    <div className='work-list'>
      {workData.map((work, index) => (
        <Work key={index} title={work.title} duties={work.duties} />
      ))}
    </div>
  );
};

export default WorkList;