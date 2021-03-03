import React from 'react';
import ShopPageHeader from "../../components/shop-page-header/shop-page-header.componont";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import WorkShowcase from "../../components/work-showcase/work-showcase.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const ShopPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <ShopPageHeader/>
            <CollectionPreview/>
            <div className="shop-header__bottom class-A" style={{justifyContent: 'flex-end'}}>
                <div className="shop-header__bottom-pages" style={{display: 'block', flex: '0 0 25%'}}>
                    <span className="text">Page</span>
                    <span className="number number-active">01</span>
                    <span className="number">02</span>
                    <span className="number">03</span>
                </div>
            </div>
            <SubscribeUs/>
            <WorkShowcase/>
            <Footer/>
        </React.Fragment>
    )
}
export default ShopPage;
