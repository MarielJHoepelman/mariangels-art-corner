import { useState, useEffect } from "react";
/*import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";*/
import { Art as ArtComponent } from "../components/Art";

const fetcher = async () => {
  try {
    const result = await fetch("http://localhost:5000/contents/art");
    const json = await result.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}

const Art = () => {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callFetcher = async () => {
      const getArt = await fetcher();
      setArt(getArt);
      setLoading(false);
    }

    callFetcher();
  }, []);

  return (
    <ArtComponent content={art} loading={loading} />
  );
}

export default Art;



/*class Art extends Component {
  componentDidMount() {
    this.props.fetcher();
  }

  render() {
    return (
      <ArtComponent content={this.props.content} loading={this.props.loading} />
    );
  }
}

const mapStateToProps = (state) => {
  return { content: state.content, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: () => dispatch(fetcher("contents/art", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Art);*/

