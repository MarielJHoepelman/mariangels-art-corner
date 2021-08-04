const OrderSubmitted = (props) => {
  return (
    <div>
      Thank you! your order number {props.location.state.order.id} has been
      succesfully submitted.
    </div>
  );
};
export default OrderSubmitted;
