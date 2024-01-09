import React from 'react'
import { Row, Col, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'


function Wishlist() {
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)

  const handleCart = (product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addtoCart(product))
  }
  
  return (
    <>
    <Header/>
    <div style={{marginTop:"60px"}}>
      <Row className='mt-5 container'>
       { wishlist?.length>0?wishlist?.map(product=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem' }}>
       <Link to={'/view/1'}><Card.Img style={{height:'250px'}} variant="top" src={product.thumbnail} /></Link>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{product.title}</Card.Title>
          <div className='d-flex justify-content-between'>
          <button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn fs-5"><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
          <button onClick={()=>handleCart(product)} className="btn fs-5"><i className="fa-solid fa-cart-plus text-success"></i></button>
          </div>
      </Card.Body>
    </Card>
        </Col>
       )):<div className='text-center'>
          <img width={'25%'} height={'300px'} src='https://cdn-icons-png.flaticon.com/512/10340/10340375.png'></img>
          <h1>Your Wishlist Is Empty</h1>
          </div>}
      </Row>
    </div>
    </>
  )
}

export default Wishlist