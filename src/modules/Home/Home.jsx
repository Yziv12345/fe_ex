import React from 'react';
import './Home.css';
import { Wrapper } from './Home.styled';
import { gql, useQuery } from '@apollo/client';
import CardContainer from 'src/components/CardContainer/CardContainer';
import CardsFooter from 'src/components/CardsFooter/CardsFooter'
import loader from 'src/assets/svg/loader.svg'
import Article from '../Article/Article'

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

const Home = () => {
  const { data, loading, error } = useQuery(ARTICLES_QUERY);

  return (
    <Wrapper>
      <div className="header_footer">Marble</div>
      <div className="header">
        <h1 className={
          'header-h'
        }>Marble Blog</h1>
        <p className={'header-p'} style={{
          //styleName: /H4/ semi-bold;
          fontFamily: 'Assistant',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '32px',
          letterSpacing: '0em',
          textAlign: 'left'
        }}>Main Blog page description Main Blog page description Main Blog page description Main Blog page description Main Blog page description </p>

      </div>
      {loading && <loader>
        </loader>}
      {
        data && <CardContainer
          data={data}

        />
      }

      {
        data && <CardsFooter
          data={data}

        />
      }

      {/* <p>{`loading: ${loading}`}</p>
      <p>{`error: ${error}`}</p>
      <p>data: {JSON.stringify(data)}</p> */}
    </Wrapper >
  );
};

export default Home;
