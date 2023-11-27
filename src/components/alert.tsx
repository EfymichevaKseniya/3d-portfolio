import React from 'react'

const Alert: React.FC<{ text: string, type: string }> = ({ text, type }) => {
  return (
    <div className='absolute left-0 right-0 flex justify-center items-center'>
        <div
            className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100 lg:rounded-full flex lg:inline-flex items-center`}
            role='alert'
        >
          <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} rounded-full flex py-1 mr-3 font-semibold uppercase px-2 text-xs`}>
            {type === 'danger' ? 'Failed' : 'Success'}
          </p>
          <p className='mr-2 text-left'>{text}</p>
        </div>
    </div>
  )
}

export default Alert