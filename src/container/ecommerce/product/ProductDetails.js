import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Rate } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';
import { filterSinglepage } from '../../../redux/product/actionCreator';
import { ProductDetailsWrapper } from '../Style';
import { NavLink } from 'react-router-dom';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { products, product } = useSelector(state => {
    return {
      product: state.product.data,
      products: state.products.data,
    };
  });

  const [state, setState] = useState({
    quantity: 1,
  });

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      dispatch(filterSinglepage(parseInt(match.params.id)));
    }

    return () => {
      unmounted = true;
    };
  }, [match.params.id, dispatch]);

  const { name, rate, price, oldPrice, description, img, category, brand } = product[0];
  const { quantity } = state;

  const incrementQuantity = e => {
    e.preventDefault();
    quantity !== 5 &&
      setState({
        ...state,
        quantity: quantity + 1,
      });
  };

  const decrementQuantity = e => {
    e.preventDefault();
    quantity !== 1 &&
      setState({
        ...state,
        quantity: quantity - 1,
      });
  };

  return (
    <Fragment>
      <PageHeader ghost title="Product Details" />
      <Main>
        <Cards headless>
          <ProductDetailsWrapper>
            <div className="product-details-box">
              <Row gutter={30}>
                <Col md={10}>
                  <div className="product-details-box__left pdbl">

                    <figure>
                      <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
                    </figure>
                    <div className="pdbl__slider pdbs">
                      <Row gutter={5}>
                        {products.length
                          ? products
                              .filter(product => {
                                return product.category === category;
                              })
                              .map((product, index) => {
                                return (
                                  index <= 3 && (
                                    <Col md={4} key={product.id}>
                                      <div className="pdbl__image">
                                        <figure>
                                          <NavLink to={`/ecommerce/productDetails/${product.id}`}>
                                            <img style={{ width: '100%' }} src={require(`../../../${product.img}`)} alt="" />
                                          </NavLink>
                                        </figure>
                                      </div>
                                    </Col>
                                  )
                                );
                              })
                          : null}
                      </Row>
                    </div>
                  </div>
                  
                </Col>
                <Col md={10}>
                  <div className="product-details-box__right pdbr">
                    <Heading className="pdbr__title" as="h2">{name}</Heading>
                    <Rate allowHalf defaultValue={rate} disabled /> 
                    <span className="pdbr__rating">{rate}</span>
                    <span className="pdbr__review-count"> 778 Reviews</span>
                    <p><span className="pdbr__brand-text">Brand :</span> <span className="pdbr__brand-name">{brand}</span></p>
                    <Heading className="pdbr__new-price" as="h3"> <span className="pdbr__currancy">$</span><span className="pdbr__price">{price}</span> </Heading>
                    {oldPrice && (
                      <Heading className="pdbr__old-price" as="h6">
                        <del>${oldPrice}</del> <span className="pdbr__offer-price">30% Off</span>
                      </Heading>
                    )}
                    <br />
                    <p>{description}</p>
                    <br />
                    <div className="pdbr__current-status">
                      <p> <span className="current-status-title">Available:</span> 
                        <span className="stock-status in-stock"> In Stock</span>
                      </p>
                      <p> 
                        <span className="current-status-title"> Shipping: </span>
                        <span className="shipping-cost">Free</span> 
                      </p>
                      <p className="pdbr__quantity">
                        <span className="current-status-title">Quantity:</span>
                        
                        <Button className="btn-inc" onClick={decrementQuantity} type="default">
                          -
                        </Button>
                        {quantity}
                        <Button className="btn-dec" onClick={incrementQuantity} type="default">
                          +
                        </Button>
                        <span className="pdbr__availability">540 pieces available</span>
                      </p>
                    </div>
                    
                    <div className="pdbr__Actions d-flex align-items-center">
                      <div className="pdbr__product-action">
                        <Button size="default" type="primary">Buy Now</Button>
                        <Button size="default" type="secondary">
                          <FeatherIcon icon="shopping-bag" size={14} /> Add To Cart
                        </Button>
                        <Button className="btn-icon" size="default" raised type="white" shape="circle">
                          <FeatherIcon icon="heart" size={14} />
                        </Button>
                        <Button className="btn-icon" size="default" raised type="white" shape="circle">
                          <FeatherIcon icon="share-2" size={14} />
                        </Button>
                      </div>
                      <div className="pdbr__socials">
                        <NavLink to="#">
                          <FeatherIcon icon="facebook" size={14} />
                        </NavLink>
                        <NavLink to="#">
                          <FeatherIcon icon="twitter" size={14} />
                        </NavLink>
                        <NavLink to="#">
                          <FeatherIcon icon="linkedin" size={14} />
                        </NavLink>
                        <NavLink to="#">
                          <FeatherIcon icon="send" size={14} />
                        </NavLink>
                      </div>
                    </div>
                    <ul className="pdbr__list">
                      <li>
                        <span>Category:</span>
                        <span>
                          {category}
                        </span>
                      </li>
                    </ul>
                    <ul className="pdbr__list">
                      <li>
                        <span>Tags:</span>
                        <span>Blue, Green, Light</span>
                      </li>
                    </ul>
                  </div>
                  
                </Col>
              </Row>
            </div>
          </ProductDetailsWrapper>
        </Cards>
      </Main>
    </Fragment>
  );
};

export default ProductDetails;
