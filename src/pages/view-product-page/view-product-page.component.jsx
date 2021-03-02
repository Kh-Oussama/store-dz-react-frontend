import React from 'react';
import ViewProduct from "../../components/view-product/view-product.component";
import ProductRelated from "../../components/products-related/products-related.component";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import Gallery from "../../components/gallery/gallery.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const ViewProductPage = () => {


    return (
        <React.Fragment>
            <Header/>
            <ViewProduct/>
            <ProductRelated/>
            <SubscribeUs/>
            {/*<Gallery/>*/}
            <Footer/>
        </React.Fragment>
    )
}

export default ViewProductPage;