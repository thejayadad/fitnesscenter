'use client'
import React from 'react'

const Modals = ({opening, title, children}) => {
  return (
    <div>
<label htmlFor="my_modal_6" className="">{opening}</label>

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <div>{children}</div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modals