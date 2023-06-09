/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import './Common.css'
import axios from "axios";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";


const ChackOutForm = ({bookings, price,refetch }) => {
    console.log(bookings)
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId,setTransectionId] =  useState('')
    const [prcessing,setProcessing] =  useState(false)
    const {user} = useContext(AuthContext)
    useEffect(() => {
        axios.post('https://summry-camp-school-server.vercel.app/create-payment-intent', { price })
            .then(data => {
                // console.log(data.data.clientSecret)
                setClientSecret(data.data.clientSecret)
                
            })
    }, [price])

    useEffect(()=>{
        const intervel = setInterval(()=>{
            refetch()
        })
        return ()=>{
            clearInterval(intervel)
        }
    },[refetch])
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log(error)
            setError(error.message)

        }
        else {
            setError('')
            console.log(paymentMethod)
        }
        setProcessing(true)
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'none name' ,
                        email: user?.email || 'none email'
                    },
                },
            },
            
        );
        if(confirmError){
            console.log(confirmError)
        }
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            setTransectionId(paymentIntent.id)
            const payment ={
                email: user?.email ,
                name : user?.displayName,
                price,
                quentity: bookings.length,
                date : new Date(),
                classId: bookings?.map(item => item.courseId ),
                bookingsId: bookings?.map(item => item._id),
                className: bookings.map(item => item.courseName ),
                transectionId: paymentIntent.id

            }
            axios.post('https://summry-camp-school-server.vercel.app/payment',payment)
            .then(data =>{
                console.log(data.data)
            })
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
                <button className="btn btn-success btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || prcessing}>
                    Pay
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {transectionId && <p className="text-green-500" > Transection complite and transection id is :{transectionId}</p>}
        </div>
    );
};

export default ChackOutForm;