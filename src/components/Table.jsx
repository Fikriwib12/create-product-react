import React from 'react'
import FileDisplay from './FileDisplay'
import { connect } from 'react-redux';
import { deleteFormData } from './action'; 

const Table = ({data, deleteFormData}) => {
  return (
    <div>
        <div className="container">
        <table className='table table-hover my-4'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    {/* <th>Image Of Product</th> */}
                    <th>Product Freshness</th>
                    <th>Additional Description</th>
                    <th>Product Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index)=>
                    <tr key ={index}>
                        <td>{index + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.productCategory}</td>
                        {/* <td><FileDisplay file={item.imageOfProduct} /></td> */}
                        <td>{item.productFreshness}</td>
                        <td>{item.additionalDescription}</td>
                        <td>{item.productPrice}</td>
                        <td><button className='btn btn-danger' onClick={()=> deleteFormData(index)}>Hapus</button></td>
                       
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
    formData: state.formData,
  })
  export default connect(mapStateToProps, { deleteFormData })(Table);