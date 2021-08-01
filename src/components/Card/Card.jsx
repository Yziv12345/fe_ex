
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Date, CardImage, Description, SideCardContainer, CardButton } from '../../modules/Home/Home.styled';

const Card = ({ date, name, description, headPicture, BreadCrumbs, onClickCard }) => (
  <SideCardContainer>
    <CardImage src={headPicture}></CardImage>
    <Date>{date}</Date>
    <Description>{description}</Description>
    <CardButton onClick={() => onClickCard(name)}>{BreadCrumbs}</CardButton>
  </SideCardContainer>
)

Card.propTypes = {
  date: PropTypes.date,
  name: PropTypes.string,
  headPicture: PropTypes.string,
  description: PropTypes.string,
  BreadCrumbs: PropTypes.string,
  onClickCard: PropTypes.func
}

export default Card