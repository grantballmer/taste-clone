import React from 'react'; 

class SeenItBtn extends React.Component {

    handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        const { movie, updateOverlayInfo } = this.props;
        updateOverlayInfo(movie);
    };
    
    render() {
        const { hasSeen, like, colorClass } = this.props.item;
        return (
            <div className={`btn ${colorClass}`} data-click="seen" onClick={this.handleClick} >
            {"\u2714"}    
            {hasSeen  
            ? like ?  'Liked' : 'Disliked'
            : `I've seen this`}
            </div>
        );
    }
}

export default SeenItBtn;