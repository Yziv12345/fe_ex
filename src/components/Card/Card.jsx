import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Date, Image, Description } from '../../modules/Home/Home.styled';


const Card = ({date, description, headPicture}) => (
    <div style={{ color: '#fff' }}>
        <Image>{headPicture}</Image>
      <Date>{date}</Date>
      <Description>{description}</Description>
    </div>
  )



  Card.propTypes  = {
    date: PropTypes.date,
    headPicture: PropTypes.string,
    description: PropTypes.string
  }

  export default Card