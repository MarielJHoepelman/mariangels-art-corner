export const getBackendUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://mariangels-art-corner-backend.herokuapp.com/"
    : "http://localhost:5000/";
};
