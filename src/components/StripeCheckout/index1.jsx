import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { stripecheckoutservice } from '../../services/stripeservice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { pathOr } from 'ramda';

const StripeCheckoutButton = () => {

    const [product, setProduct] = useState({
        name: "Tenant based product",
        price: 60,
        productBy: 'Subscription'
    })

    // React redux hooks selctors
    const dispatch = useDispatch();
    const history = useHistory();
    const publishKey = useSelector(state => pathOr(
        'pk_test_51IExDwKrvQRHiF5srVOrOWBuCYxXJ1JcNB1BAI3HU9NrYqbtbo6ZLhHw55rZarKIK9BnYsSKCGOgZnzx8sI9J67k00SM0iDKBZ'
        , ['ThemeReducer', 'stripeKey']
    )(state));

    const makePayment = (token) => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return stripecheckoutservice(headers, body);
    }

    return (
        <StripeCheckout
            stripeKey={publishKey}
            token={makePayment}
            name="Subscription"
            amount={product.price * 100}
            shippingAddress
            billingAddress
        >
            <button
                className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize">Purchase Subscription  in just $ {product.price}</button>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;