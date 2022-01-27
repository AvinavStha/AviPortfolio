import React from 'react';
import "./productList.css";
import Product from "../product/Product";
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pi-title">
                    Create & Inspire. It's Abhinav
                </h1>
                <p className="pl-desc">
                    Checkout my Social Profile below:
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>

                ))}

            </div>
        </div>
    );
};

export default ProductList;
