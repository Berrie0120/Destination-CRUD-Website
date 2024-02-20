import React from 'react';

const Work = (props) => {
  const { title, duties } = props;

  return (
    <div className='work'>
      <h2>{title}</h2>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;