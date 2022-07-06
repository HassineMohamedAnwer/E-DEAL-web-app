import React from 'react'


const Panier = () => {
    return (
      <>
    <div class="container">
        <h1>Shopping Checkout</h1>
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_cart"/>
            <input type="hidden" name="upload" value="1"/>
            <input type="hidden" name="business" value="womghei-facilitator@connect.hku.hk"/>
            <input type="hidden" name="return" value="http://net.tutsplus.com/payment-complete/"/>
            <table class="table table-hover">
                <thead class="thead-inverse">
                    <tr>
                        <th>Qty</th>
                        <th>Item Name</th>
                        <th>Cost</th>
                        <th class="text-xs-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody id="output"> </tbody>
            </table>
            <input type="submit" class="btn btn-primary btn-block" value="Checkout with PayPal"/>
            <a href="/home" class="btn btn-success btn-block">Continue Shopping</a>
        </form>
    </div>
    </>
  )
}

export default Panier