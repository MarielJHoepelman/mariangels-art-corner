export const SingleOrder = ({ order, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>{console.log("single", order)}</div>
  );
};
