import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import './Common.css'


const ChackOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [error,setError]= useState('')
    const handleSubmit =async (event)=>{
        event.preventDefault()
        if(!stripe || ! elements){
            return 
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return 
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        })
        if(error){
            console.log(error)
            setError(error.message)
            
        }
        else{
            setError('')
            console.log(paymentMethod)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success btn-sm mt-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{error}</p>
        </div>
    );
};

export default ChackOutForm;