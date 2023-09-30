import React from 'react'

const ListItem = (props) => {
    const {id, productName, productCategory, imageOfProduct, productFreshness, additionalDescription, productPrice} = props.data
    
  return (
   
        <tr>
            
            <td>{productName}</td>
            <td>{productCategory}</td>
            <td>{imageOfProduct}</td>
            <td>{productFreshness}</td>
            <td>{additionalDescription}</td>
            <td>{productPrice}</td>
            <td><button className='btn btn-primary' onClick={()=> props.hapusProduct(id)}>Hapus</button></td>
            <td> <button className="btn btn-primary" onClick={() => props.handleEdit(id)}>
          Edit
        </button></td>
        </tr>
    
  )
}

export default ListItem