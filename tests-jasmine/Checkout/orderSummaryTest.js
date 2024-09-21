import { renderOrderSummary } from "../../Scripts/Checkout/orderSummary";

describe('test suite: renderOrderSummary', ()=>{
    it('displays the cart',()=>{
        document.querySelector('.js-test-container').innerHTML=`
            <div class="js-order-summary"></div>
        `

    });
});