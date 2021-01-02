import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticlesHome } from "../../actions/homeArticlesActions";
import HomeArticles from "../homeArticles/HomeArticles";
const Home = (props) => {
  useEffect(() => {
    props.getArticlesHome();
  }, []);

  return (
    <div>
      {props.homeArticle.map((item, idx) => {
        return <HomeArticles item={item} key={idx} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    homeArticle: state.home.homeArticle,
    isFetching: state.home.isFetching,
    error: state.home.error,
  };
};

export default connect(mapStateToProps, { getArticlesHome })(Home);
