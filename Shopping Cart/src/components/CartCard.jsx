import React from 'react';

export default function CartCard({ cardItems }) {
  // Calculate the total price
  const totalPrice = cardItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='mt-6'>
      {cardItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cardItems.map((item) => (
            <div key={item.id} className="cart-item flex justify-center flex-col shadow-xl gap-4 p-4 bg-gray-400 mx-5 border-b-4">
              <div className='flex justify-between px-4'>
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
              </div>
              <p className='text-blue-700 px-4'>{item.inStock ? "In Stock" : "Out of Stock"}</p>
            </div>
          ))}
          <div className='mt-4 px-5'>
            <h3 className='text-xl font-bold text-right'>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}
