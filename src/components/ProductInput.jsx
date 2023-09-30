import React,  { useState } from "react"
import { useDispatch } from "react-redux"
import { tambahProduct } from "../store/productSlice"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductInput = (props) => {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    productName: '',
    productCategory: '',
    imageOfProduct: '',
    productFreshness: '',
    additionalDescription: '',
    productPrice: '',
  })

  const onChange = e =>{
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
  const formIsNotEmpty =
    data.productName &&
    data.productCategory &&
    data.imageOfProduct &&
    data.productFreshness &&
    data.additionalDescription &&
    data.productPrice;

  const specialCharactersRegex = /[@#{}]/;

  if (formIsNotEmpty) {
    if (data.productName.length > 25) {
      alert('Product name cannot exceed 25 characters.');
    } else if (specialCharactersRegex.test(data.productName)) {
      alert('Product name cannot contain special characters like @, #, {, or }.');
    } else {
      const newData = {
        productName: data.productName,
        productCategory: data.productCategory,
        imageOfProduct: data.imageOfProduct,
        productFreshness: data.productFreshness,
        additionalDescription: data.additionalDescription,
        productPrice: data.productPrice,
      };

      dispatch(tambahProduct(newData));
      setData({
        productName: '',
        productCategory: '',
        imageOfProduct: '',
        productFreshness: '',
        additionalDescription: '',
        productPrice: '',
      });
    }
  } else {
    alert('Semua Form Harus Diisi');
  }
};



  return (
    <div>
      <Container>
          <Row>
            <Col md={{ span: 6, offset: 2 }}><h1 style={{ fontSize: 23, color: "#212529", fontStyle: "normal" }}>Detail Product</h1>
            </Col>
            <form >
            <Col md={{ span: 6, offset: 2}}>
              <div className="form-group ">
                <label htmlFor="productName">Product Name</label>
                <input
                type="text"
                className="form-control product-name-input"
                id="productName"
                name='productName'
                value={data.productName}
                onChange={onChange}
                
                />
              </div>
            </Col>

            <Col md={{ span: 6, offset: 2}}>
              <div className='my-5'>
              <label htmlFor="productCategory" >Product Category</label>
              <select
              className='form-select' 
              name="productCategory" 
              id="productCategory"
              value={data.productCategory}
              onChange={onChange}>
              <option value="">Chose...</option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              </select>
              </div>
            </Col>

            <Col md={{ span: 6, offset: 2}}>
              <div className='form-group image-product my-3'>
              <label htmlFor="imageOfProduct">Image Of Product</label> <br />
              <input
              className='my-2' 
              type="file"
              id='imageOfProduct'
              name='imageOfProduct'
              onChange={onChange}
               />
              </div>
            </Col>
            <Col md={{ span: 6, offset: 2}}>
              
              <div className='form-group my-3'>
              <label htmlFor="productFreshness">Product Freshness</label>
              <div className="form-check">
              <input type="radio"
              className='form-check-input'
              name='productFreshness'
              value='brandNew'
              checked={data.productFreshness === 'brandNew'}
              onChange={onChange}
              />
              
              <label htmlFor="brandNew" className='form-check-label'>Brand New</label>
              </div>

              <div className="form-check">
              <input type="radio"
              className='form-check-input'
              name='productFreshness'
              value='secondHand'
              checked={data.productFreshness === 'secondHand'}
              onChange={onChange}
              />
              <label htmlFor="secondHand" className='form-check-label'>Second Hand</label>
              </div>
              
              <div className="form-check">
              <input type="radio"
              className='form-check-input'
              name='productFreshness'
              value='refurbished'
              checked={data.productFreshness === 'refurbished'}
              onChange={onChange}
              />
              <label htmlFor="refurbished" className='form-check-label'>Refurbished</label>
              </div>

              </div>
              </Col>

              <Col md={{ span: 6, offset: 2}}>
              <div className="form-group">
                <label htmlFor="additionalDescription">Additional Description</label>
                <textarea 
                name="additionalDescription" id="additionalDescription" 
                className='form-control' 
                rows={3}
                value={data.additionalDescription}
                onChange={onChange}
                ></textarea>
              </div>
              </Col>
              
              <Col md={{ span: 6, offset: 2}}>
              <div className="form-group my-4">
                <label htmlFor="productPrice">Product Price</label>
                <input 
                type="number"
                className='form-control'
                placeholder='$1'
                name='productPrice'
                id='productPrice'
                value={data.productPrice}
                onChange={onChange}
                />
              </div>
              </Col>

              <Col md={{ span: 6, offset: 2}}>
                <button type='submit' className='btn btn-primary submit' onClick={handleSubmit}>Submit</button>
              </Col>
              
            
            </form>  
          
          </Row>
        </Container>
    </div>
  )
}

export default ProductInput