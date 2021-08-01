import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../modules/Home/Home.css';
import Card from '../Card/Card'
import { CardsDispaly } from '../../modules/Home/Home.styled';

const mapArticles = (data) => {
    let articels = []

    if (data && data.ArticleItems.items && data.ArticleItems.total > 0) {

        articels = data.ArticleItems.items.map((article) => {
            return {
                name: article.slug,
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

const CardsFooter = (props) => {

    const allArticles = mapArticles(props.data)

    return (
        <CardsDispaly>
            {allArticles.map((article, idx) => {
                debugger
                return (
                    <div className={"card"} key={idx}>
                        <Card
                            date={article.date}
                            description={article.header}
                            headPicture={article.img}
                            BreadCrumbs={article.breadCrumbs}
                        />
                    </div>
                )


            })
            }
        </CardsDispaly>
    );
};

CardsFooter.propTypes = {
    data: PropTypes.any
}

export default CardsFooter;