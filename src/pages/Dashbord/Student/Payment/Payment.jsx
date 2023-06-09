import { Elements } from "@stripe/react-stripe-js";
import useBooking from "../../../../hooks/useBooking";
import ChackOutForm from "./ChackOutForm";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {
    const [bookings, refetch] = useBooking()
    const total = bookings.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    return (
        <div className="mt-14 px-8">
            <p className="text-3xl font-bold text-center">Total price {total}</p>
            <Elements stripe={stripePromise}>
                <ChackOutForm bookings={bookings} refetch={refetch} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;