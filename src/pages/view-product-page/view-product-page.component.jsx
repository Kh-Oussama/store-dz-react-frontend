import React from 'react';
import ViewProduct from "../../components/view-product/view-product.component";
import ProductRelated from "../../components/products-related/products-related.component";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import Gallery from "../../components/gallery/gallery.component";

const ViewProductPage = () => {


    return (
        <React.Fragment>
            <ViewProduct/>
            <ProductRelated/>
            <SubscribeUs/>
            {/*<Gallery/>*/}

        </React.Fragment>
    )
}

export default ViewProductPage;