import { useState } from 'react';
import './AddProduct.css';
import upload_area from 'C:/Users/Mamokete/OneDrive/e-commerce/admin/src/assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: '',
    image: '',
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let formData = new FormData();
    
    formData.append('image', image);
    formData.append('name', productDetails.name);
    formData.append('old_price', productDetails.old_price);
    formData.append('new_price', productDetails.new_price);
    formData.append('category', productDetails.category);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        image: responseData.image_url,
      }));
      console.log('Product added successfully:', productDetails);
      
    await fetch('http://localhost:4000/addproduct',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  };

  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type='text'
          name='name'
          placeholder='Type Here'
        />
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type='text'
            name='old_price'
            placeholder='Type Here'
          />
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Offer Price</p>
        <input
          value={productDetails.new_price}
          onChange={changeHandler}
          type='text'
          name='new_price'
          placeholder='Type Here'
        />
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name='category'
          className='add-product-selector'
        >
          <option value='women'>Women</option>
          <option value='men'>Men</option>
          <option value='kid'>Kid</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          <br />
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className='addproduct-thumbnail-image'
            alt=''
          />
        </label>
        <br />
        <input onChange={imageHandler} id='file-input' type='file' name='image' hidden />
      </div>
      <button onClick={Add_Product} className='addproduct-btn'>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
