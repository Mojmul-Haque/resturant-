import React from "react";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";

function CheckoutForm() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car",
  });

  const history = useHistory();

  async function handleToken(token, addresses) {
    console.log(token, "token", addresses);
    history.push("/order-history");
  }

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51IeJRZKMw2MF1W6edDkrMdO8w2NjnFPEcFt5MrQL7YAqDm1CurzYkEnVpXN2f3mW5ZAYPyg2RLSwTRerSlpBiCC500bQBrUsqy"
        token={handleToken}
        amount={product.price * 100}
        name="Mojmul"
        image="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
        billingAddress
        zipCode
        locale="auto"
        shippingAddress
        // panelLabel="Order Place"
        label="Order Place"
      />
    </div>
  );
}

export default CheckoutForm;
// 4242 4242 4242 4242