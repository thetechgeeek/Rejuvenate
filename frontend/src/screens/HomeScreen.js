//script for rendering the Homescreen
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions_list } from '../actions/productActions';
import { Container, Row, Col } from 'react-bootstrap';
import Message from '../components/message';
import Loader from '../components/loader';
import Paginate from '../components/Paginate';
import Product from '../components/Product';
//list of all products
//state levels- component(menu,forms) and global(products, users)

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  //extracting 'productList' part of state, defined in store
  const productList = useSelector((state) => state.productList);
  //extracting info from 'productList' part of state into an Obj
  const { loading, error, products, page, pages } = productList;

  //dispatching 'list products' action using useEffect
  useEffect(() => {
    dispatch(productActions_list(keyword, pageNumber));
  }, [dispatch, match, keyword, pageNumber]);

  return (
    <>
      {/* explore */}
      <Container className='hello' fluid>
        <Row>
          <Col>
            <h1>Let's talk Science.</h1>
          </Col>
        </Row>
      </Container>
      <Container className='helloImg' fluid>
        <Row>
          <Col>
            <img
              src='https://cdn.shopify.com/s/files/1/0410/9608/5665/files/minimalist-skin-1-min.png?v=1593807250'
              fluid
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className='text-center py-5' fluid>
        <Row style={{ paddingLeft: '6rem', paddingRight: '6rem' }}>
          <Col>
            <h4>
              <strong>Looking for clean & effective skincare products?</strong>
            </h4>
            <p>
              We have all been there. You look for a product that addresses your
              particular skin concern. But there's an ocean of products out
              there with numerous promises & claims but hardly any clear
              information about ingredients used and their concentration. We are
              here to offer no-nonsense, hardworking, active based products that
              do what they are expected to do.
            </p>
          </Col>
        </Row>
      </Container>
      <h3
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          marginBottom: '1.5rem',
        }}
      >
        <span className='underlineCustom'>Shop our bestsellers</span>
      </h3>
      {/*if loading then show loading, else show error, else show actual data*/}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Container className='mb-3'>
            <Row className='justify-content-center'>
              {/*loop through all products and render Product component for each product, while
                    passing array element as a prop*/}
              {products.map((currProduct) => (
                <Col xs={5} sm={5} md={4} lg={3}>
                  <Product product={currProduct} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </Container>
          {/* explore */}
          <Container className='explore' fluid>
            <Row>
              <Col>
                <img
                  src='https://cdn.shopify.com/s/files/1/0410/9608/5665/files/skin-regimen-grey-min.png?v=1593944034'
                  alt=''
                  fluid
                ></img>
              </Col>
              <Col>
                <h3>Looking for particular?</h3>
                <p>
                  Know which ingredient is best suited for your particular skin
                  concern. No more guesses.
                </p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
