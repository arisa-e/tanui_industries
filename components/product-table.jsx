import Link from 'next/link';
import React from 'react';

const ProductTable = ({ items }) => {

  return (
    <div className="overflow-x-auto my-10">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
                <button className='btn btn-primary btn-outline my-3 md:m-3'>
                  <Link href={`/items/${item.id}/update`}>
                    Update
                  </Link>
                </button>
                <button className='btn btn-error'>
                  <Link href={`/items/${item.id}/delete`}>Delete</Link>
                </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
