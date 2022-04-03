import React from 'react'

const Card = (props) => {
    const { title, currencies } = props.card
  return (
    <div className="card">
        <h5>{title}</h5>
        <p>{currencies.map(currency => <span> {currency}</span> )}</p>
    </div>
  )
}


export default Card