
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import './mainCard.css'
import { Date, Image, Description, MainCardContainer } from '../../modules/Home/Home.styled';

const MainCard = ({ date, description, headPicture }) => (
    <MainCardContainer>
        <Image src={headPicture}></Image>
        {/* <Title>{title}</Title> */}
        <Date>{date}</Date>
        <Description>{description}</Description>
    </MainCardContainer>
)

MainCard.propTypes = {
    date: PropTypes.date,
    headPicture: PropTypes.string,
    description: PropTypes.string
}

export default MainCard