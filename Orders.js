import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

function Orders() {
  const orders = useSelector((state) => state.order.orders);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Your Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="card my-3">
              <div className="card-body">
                <h5>Order ID: {order.id}</h5>
                <p>Date: {order.date}</p>
                <p>Total: ₹{order.total}</p>
                <h6>Items:</h6>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.title} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Orders;

