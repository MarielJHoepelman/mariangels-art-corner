export const Home = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      {data?.image_file?.large && (
        <img src={data.image_file.thumb} alt="bubble" />
      )}
      <h1>PORTFOLIO</h1>
      <div>
        {data?.display_art &&
          data.display_art.map((art) => (
            <img
              key={art.page_name}
              src={art.image_file.medium}
              alt={art.title}
            />
          ))}
      </div>
    </div>
  );
};
