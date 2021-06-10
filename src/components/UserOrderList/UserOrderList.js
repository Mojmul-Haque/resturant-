import React from "react";

const UserOrderList = () => {
  return (
    <div className="order-list">
      <div className="order-top-text">
        <h6 className="d-inline-block px-4 text-white py-2 mb-4">All Orders</h6>
      </div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Date</th>
            <th scope="col">Food</th>
            <th scope="col">Price</th>
            <th scope="col">Payment Id</th>
            <th scope="col">phone Number</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserOrderList;
