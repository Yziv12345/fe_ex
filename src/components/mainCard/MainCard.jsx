
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import './mainCard.css'
import { Date, Image, Description, MainCardContainer, CardButton } from '../../modules/Home/Home.styled';

const MainCard = ({ date, description, headPicture,BreadCrumbs }) => (
    <MainCardContainer>
        <Image src={headPicture}></Image>
        <Date>{date}</Date>
        <Description>{description}</Description>
        <CardButton>{BreadCrumbs}</CardButton>
    </MainCardContainer>
)

MainCard.propTypes = {
    date: PropTypes.date,
    headPicture: PropTypes.string,
    description: PropTypes.string,
    BreadCrumbs: PropTypes.string,
}

export default MainCard