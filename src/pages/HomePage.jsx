import React, {Component} from 'react';
import Header from "../Components/Header/Header";
import Categories from "../Components/categories/Categories";
import Products from "../../../../ApplicationPos/client/src/Components/products/Product";
import CartTotals from "../Components/cart/cartTotals";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="home px-6 flex md:flex-row flex-col
            justify-between gap-10 md:pb-0 pb-24">
                    <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
                        {/*categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10*/}
                        <Categories/>
                    </div>
                    <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px]">
                        <Products/>
                    </div>
                    <div className="cart-wrapper min-w-[300px] md:-mr-[24px]
                md:-mt-[2px] border">
                        <CartTotals/>
                    </div>
                </div>


            </div>
        );
    }
}

export default HomePage;