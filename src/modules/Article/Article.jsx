import React from 'react';
import './Article.css';
import { gql, useQuery } from '@apollo/client';
import { Wrapper } from './Article.styled';


// graphql playground:
// https://gapi-browser.storyblok.com/?token=HwsawDuLR2g1sBoukqkPDQtt
const ARTICLES_QUERY = gql`
  query {
    ArticleItems(by_slugs: "articles/*") {
      items {
        name
        slug
        created_at
        content {
          BreadCrumbs
          categories {
            name
          }
          headPicture {
            filename
          }
          heading
        }
      }
      total
    }
 }
`;

const mapArticle = (data) => {
  let articel = null
  let articelName = window.location.pathname.slice("/")[3]

  if (data && data.ArticleItems.items && data.ArticleItems.total > 0) {

    articel = data.ArticleItems.items.filter((article) => {
      article.slug === articelName
    })
  }

  return articels
}


const Article = () => {
  const { data, loading, error } = useQuery(ARTICLES_QUERY);
  const articles = mapArticles(props.data)


  return (
    <Wrapper>
      <div className="article-container">This is an article</div>
    
    </Wrapper>
  );
};

Article.propTypes = {
  data: PropTypes.any
}

export default Article;
