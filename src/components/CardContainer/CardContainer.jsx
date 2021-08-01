import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../modules/Home/Home.css';
import Card from '../Card/Card'
import MainCard from '../mainCard/MainCard'
import { useHistory } from "react-router-dom";
import { Wrapper, CardContainerStyle, CardsDispaly } from '../../modules/Home/Home.styled';

const mapArticles = (data) => {
    let articels = []
    let mainCard = null
    let allArticles = []
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
                allArticles.push(mainCard)
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
                allArticles.push(temp)

            }
        });
    }

    return [articels, mainCard, allArticles]
}

const CardContainer = (props) => {

    const filteredArt = mapArticles(props.data)
    let articels = filteredArt[0]
    const mainCard = useState(filteredArt[1])
    const allArticles = useState(filteredArt[2])
    const history = useHistory();


    const onCardClicked = (name) => {
        
        history.push(`article/${name}`)

    }

    return (

        <div className="card-container">
            {mainCard &&
                <MainCard
                    date={mainCard[0].date}
                    name={mainCard[0].name}
                    description={mainCard[0].header}
                    headPicture={mainCard[0].img}
                    BreadCrumbs={mainCard[0].breadCrumbs}
                    onClickCard={(name) => onCardClicked(name)}
                />
            }
            {articels.length > 0 && <CardContainerStyle>
                {articels.map((article, idx) => {
                    if (idx < 3) {
                        return (

                            <Card key={idx}
                                date={article.date}
                                name={article.name}
                                description={article.header}
                                headPicture={article.img}
                                BreadCrumbs={article.breadCrumbs}
                                onClickCard={(name) => onCardClicked(name)}
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