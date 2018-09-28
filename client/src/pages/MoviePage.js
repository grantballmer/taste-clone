import React from 'react';

// class MoviePage extends React.Component {
//     componentDidMount () {
//         console.log(this.props);
//     }
//     render() {
//         return ( 
//             <h1>something</h1>
//         );
//     }
// }

const MoviePage = props => {
    console.log(props.location);
   return (
    <h1>Something</h1>
    ); 
};

export default MoviePage; 