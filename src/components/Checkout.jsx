import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartState } from '../../../Final-project/src/components/Shop';
import { food } from '../../../Final-project/src/constants';
import './Styles/Checkout.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDpzOtIdIKUsysQJE5eEynBJe20Sv2qFjU",
    authDomain: "kahanikhaneki-c7937.firebaseapp.com",
    projectId: "kahanikhaneki-c7937",
    storageBucket: "kahanikhaneki-c7937.firebasestorage.app",
    messagingSenderId: "511318078095",
    appId: "1:511318078095:web:24783d318784f7752f76fa",
    measurementId: "G-6050EKCH8S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Checkout() {
    const cart = useRecoilValue(CartState);
    const setCartState = useSetRecoilState(CartState);
    const navigate = useNavigate();

    const [address, setAddress] = useState({
        name: '',
        phone: '',
        addressLine1: '',
        
    });

    const calculateSubtotal = (id, quantity) => {
        return food[id].Price * (quantity || 1);
    };

    const calculateTotalPrice = () => {
        let total = 0;
        for (const [id, quantity] of Object.entries(cart)) {
            total += calculateSubtotal(id, quantity);
        }
        return total;
    };

    const handlePlaceOrder = async () => {
        if (Object.keys(cart).length === 0) {
            alert("Your cart is empty.");
            return;
        }

        if (!validateAddress(address)) {
            alert("Please fill in all required address fields.");
            return;
        }

        try {
            const ordersCollection = collection(db, "orders");
            const orderItems = Object.entries(cart).map(([id, quantity]) => ({
                foodId: id,
                name: food[id].Name,
                price: food[id].Price,
                quantity: quantity,
            }));

            const orderData = {
                items: orderItems,
                total: calculateTotalPrice(),
                timestamp: serverTimestamp(),
                address: address,
            };

            const docRef = await addDoc(ordersCollection, orderData);
            console.log("Document written with ID: ", docRef.id);

            setCartState({});
            alert("Order placed successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred: " + error.message);
        }
    };

    const validateAddress = (addressData) => {
        return (
            addressData.name &&
            addressData.phone &&
            addressData.addressLine1 &&
            addressData.city &&
            addressData.state &&
            addressData.pincode
        );
    };

    if (Object.keys(cart).length === 0) {
        return <div><h1>No Items in the cart</h1></div>;
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>

            <div className="checkout-sections">
                <div className="checkout-section">
                    <h2>Shipping Address</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} required />

                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} required />

                        <label htmlFor="addressLine1">Address Line 1:</label>
                        <input type="text" id="addressLine1" value={address.addressLine1} onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })} required />

                        /*<label htmlFor="addressLine2">Address Line 2:</label>
                        <input type="text" id="addressLine2" value={address.addressLine2} onChange={(e) => setAddress({ ...address, addressLine2: e.target.value })} />

                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} required />

                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} required />

                        <label htmlFor="pincode">Pincode:</label>
                        <input type="text" id="pincode" value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} required />
                    </form>
                </div>

                <div className="checkout-section">
                    <h2>Order Summary</h2>
                    <div className="checkout-items">
                        {Object.entries(cart).map(([id, quantity]) => (
                            <div key={id} className="checkout-item">
                                <img src={food[id].pic} alt={food[id].Name} width="80px" />
                                <div className="item-details">
                                    <h3>{food[id].Name}</h3>
                                    <p>Quantity: {quantity}</p>
                                    <p>Price: ₹{food[id].Price}</p>
                                    <p>Subtotal: ₹{calculateSubtotal(id, quantity)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-total">
                        <h2>Total: ₹{calculateTotalPrice()}</h2>
                    </div>
                </div>
                {/* Payment Section - Placeholder */}
                <div className="checkout-section">
                    <h2>Payment</h2>
                    <p>Payment integration will add later</p>
                    {/* Add payment gateway integration here */}
                </div>

            </div>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
}

export default Checkout;