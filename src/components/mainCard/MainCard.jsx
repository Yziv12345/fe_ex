
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import './mainCard.css'
import { Date, Image, Description, MainCardContainer, CardButton } from '../../modules/Home/Home.styled';

const MainCard = ({ date, name, description, headPicture, BreadCrumbs, onClickCard }) => (
    <MainCardContainer>
        <Image src={headPicture}></Image>
        <Date>{date}</Date>
        <Description>{description}</Description>
        <CardButton onClick={() => onClickCard(name)}>{BreadCrumbs}</CardButton>
    </MainCardContainer>
)

MainCard.propTypes = {
    date: PropTypes.date,
    headPicture: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    BreadCrumbs: PropTypes.string,
    onClickCard: PropTypes.func
}

export default MainCard