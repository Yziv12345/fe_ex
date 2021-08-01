
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Date, CardImage, Description, SideCardContainer, CardButton } from '../../modules/Home/Home.styled';

const Card = ({ date, description, headPicture, BreadCrumbs}) => (
    <SideCardContainer>
        <CardImage src={headPicture}></CardImage>
        <Date>{date}</Date>
        <Description>{description}</Description>
        <CardButton>{BreadCrumbs}</CardButton>
    </SideCardContainer>
)

Card.propTypes = {
    date: PropTypes.date,
    headPicture: PropTypes.string,
    description: PropTypes.string,
    BreadCrumbs: PropTypes.string,
}

export default Card