import React from 'react'



function Ads(props) {
  return (
    <div className='col-md-3 mt-2'>
        <div className="card h-100 d-flex flex-row align-items-center p-2" style={{ minWidth: '300px' }}>
            <img
                src={props.img}
                className="img-fluid"
                alt={props.name}
                style={{ width: '100px', height: '100px', objectFit: 'contain', marginRight: '10px' }}
            />
            <div className="card-body">
                <h5 className="card-title mb-1">{props.name}</h5>
                <p className="card-text small">{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Ads
