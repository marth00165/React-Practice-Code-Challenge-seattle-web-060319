import React, { Fragment } from 'react'

const Sushi = ({sushi, handleEaten}) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => handleEaten(sushi) }>
        {
          /* Tell me if this sushi has been eaten! */
          sushi.eaten ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
