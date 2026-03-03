import React from 'react'

const Child = ({ childInfo, updateParent }) => {
    console.log("Child")
    return (
        <>
            <h2>Child Info: {childInfo}</h2>
            <div className='mt-2'>
                <button className='btn btn-primary' onClick={() => updateParent(childInfo * 10)}>Update in parent</button>
            </div>

        </>
    )
}

// export default (Child) //Child will re-render in this case
export default React.memo(Child) //child will not re render in this case