import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { hapusProduct, editProduct } from '../store/productSlice'
import ListItem from './ListItem'

const ListProduct = props => {

    const products = useSelector((state) => state.product.products)
    const [editingProductId, setEditingProductId] = useState(null);
    const dispatch = useDispatch()

    const handleEdit = (id) => {
        const productToEdit = products.find((product) => product.id === id);
        // Mengirimkan detail produk ke ProductInput untuk pengeditan
        setEditingProductId(id);
    };
  return (
    <div>
        <h1>List Product</h1>
        <table className="table table-hover">
            <thead>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Image Of Product</th>
                <th>Product Fresheness</th>
                <th>Additional Description</th>
                <th>Product Price</th>
                <th>Action</th>
            </thead>
            <tbody>
            {products.map(item => (
                        <ListItem
                        key = {item.id}
                        data = {item}
                        hapusProduct = {() => {dispatch(hapusProduct(item.id))}}
                        handleEdit={handleEdit}/>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListProduct