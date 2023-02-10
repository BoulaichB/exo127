import React from 'react';

export const User = (props) => {
  return (
    <div>
        <span className='bg-red-600 text-white px-2 py-0.5 font-bold rounded-md'>{props.name}</span>
    </div>
  )
}
