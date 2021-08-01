import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: 'none';
  `
  ;


export const Date = styled.div`
position: absolute;
width: 84px;
height: 24px;
left: 184px;
top: 802px;

/* P1/ semi-bold */

font-family: Assistant;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Dark */

color: #2E4056;
`

export const Description = styled.p`
osition: absolute;
width: 590px;
height: 64px;
left: 186px;
top: 834px;

/* /H4/ semi-bold */

font-family: Assistant;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
/* or 133% */


/* Dark */

color: #2E4056;
`

export const Image = styled.img`
height: 50%;
width: 80%;
`

export const MainCardContainer = styled.div`
position: absolute;
width: 640px;
height: 448px;
left: 160px;
top: 538px;

/* Bright */

background: #FFFFFF;
box-shadow: 0px 8px 24px #DCE2FF;
border-radius: 12px;
`;