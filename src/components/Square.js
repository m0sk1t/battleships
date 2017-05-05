import React, { PropTypes } from 'react'

const Square = ({ onClick, hited, shipId }) => (
  <td
    onClick={onClick}
    className={
      hited ? shipId != null ? 'hit' : 'miss' : ''
    }
  >
  </td>
)

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  hited: PropTypes.bool.isRequired,
  shipId: PropTypes.number
}

export default Square