import React from 'react';

export default function Title({name, title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-products">
        <h1 className="font-weight-bold">
        <strong className="text-orange">{name}</strong> <strong className="text-cayenne">{title}</strong>
        </h1>
      </div>
    </div>
  )
}
