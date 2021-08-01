import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../modules/Home/Home.css';
import Card from '../Card/Card'
import MainCard from '../mainCard/MainCard'
import { Wrapper, CardContainerStyle } from '../../modules/Home/Home.styled';

const mapArticles = (data) => {
    let articels = []
    let mainCard = null
    if (data && data.ArticleItems.items && data.ArticleItems.total > 0) {

        data.ArticleItems.items.forEach((article) => {
            if (!mainCard) {
                mainCard = {
                    name: article.slug,
                    date: new Date(article.created_at).toDateString(),
                    header: article.content.heading,
                    breadCrumbs: article.content.BreadCrumbs,
                    categories: article.content.categories.name,
                    img: article.content.headPicture.filename
                }
            }
            else {
                let temp = {
                    name: article.slug,
                    date: new Date(article.created_at).toDateString(),
                    header: article.content.heading,
                    breadCrumbs: article.content.BreadCrumbs,
                    categories: article.content.categories.name,
                    img: article.content.headPicture.filename
                }
                articels.push(temp)

            }
        });
    }

    return [articels, mainCard]
}

const CardContainer = (props) => {

    const filteredArt = mapArticles(props.data)
    let articels = filteredArt[0]
    const mainCard = useState(filteredArt[1])

    debugger
    return (

        <div className="card-container">
            {mainCard &&
                <MainCard
                    date={mainCard[0].date}
                    description={mainCard[0].header}
                    headPicture={mainCard[0].img}
                    BreadCrumbs={mainCard[0].breadCrumbs}
                />
            }
            {articels.length > 0 && <CardContainerStyle>
                {articels.map((article, idx) => {
                    if (idx < 3) {
                        return (

                            <Card key={idx}
                                date={article.date}
                                description={article.header}
                                headPicture={article.img}
                                BreadCrumbs={article.breadCrumbs}
                            />
                        )
                    }

                })
                }
            </CardContainerStyle>
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