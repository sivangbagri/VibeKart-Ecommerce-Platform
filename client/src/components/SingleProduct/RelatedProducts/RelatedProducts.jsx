import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );

    return (
        <div className="related-products">
            <br/>
            <h2>Suggested Products</h2>
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;