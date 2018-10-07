import React from "react";
import history from "../history";
export const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    activeMovie: {}
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          getActiveMovie: movie => {
            this.setState({ activeMovie: movie }, function() {
              const formatTitle = this.state.activeMovie.title
                .toLowerCase()
                .replace(" - ", "-")
                .replace(/\s/g, "-")
                .replace(/:/g, "");
              console.log(movie);
              history.push(
                `/movies/${formatTitle}-${this.state.activeMovie.id}`
              );
            });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
