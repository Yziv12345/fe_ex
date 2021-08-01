import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../modules/Home/Home.css';
import Card from '../Card/Card'
import MainCard from '../mainCard/MainCard'
import { Wrapper } from '../../modules/Home/Home.styled';

const mapArticles = (data) => {
    let articels = []
    if (data && data.ArticleItems.items && data.ArticleItems.total > 0) {
        articels = data.ArticleItems.items.map((article, idx) => {
            return {
                index: idx,
                date: new Date(article.created_at).toDateString(),
                header: article.content.heading,
                breadCrumbs: article.content.BreadCrumbs,
                categories: article.content.categories.name,
                img: article.content.headPicture.filename
            }
        })
    }
    return articels
}

const CardContainer = (props) => {

    const articels = mapArticles(props.data)
    const mainCard = useState(articels.length > 0 ? articels[0] : null)
    debugger
    return (

        <div className="card-container">
            {mainCard &&
                <MainCard
                    date={mainCard[0].date}
                    description={mainCard[0].header}
                    headPicture={mainCard[0].img}
                />
            }

                       {/* <p>{`loading: ${loading}`}</p>
        <p>{`error: ${error}`}</p>
        <p>data: {JSON.stringify(data)}</p> */}

        </div>
     
    );
};

CardContainer.propTypes = {
    data: PropTypes.any
}

export default CardContainer;