import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  savePaymentMethod,
  saveShippingAddress,
} from "../../redux/features/cart/cartSlice";
import ProgressStep from "../../components/ProgressStep";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );

  const [country, setCountry] = useState(shippingAddress.country || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  //payment
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);
  return (
    <div>
      <div className="mx-auto">
        <ProgressStep step1 step2 />
        <div className="mt-[10rem] flex justify-around items-center flex-wrap">
          <form onSubmit={submitHandler} className="w-[40rem]">
            <h1 className="text-2xl font-semibold mb-4">Shipping</h1>
            <div className="mb-4">
              <label className="block text-white mb-2">Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter postal code"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Country</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400">Select Method</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-pink-500"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === "PayPal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <span className="ml-2">PayPal or Credit Card</span>
                </label>
              </div>
            </div>

            <button
              className="bg-pink-500 text-white py-2 px-4 rounded-full text-lg w-full"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
