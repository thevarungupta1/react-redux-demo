import React, { Component } from 'react';
import { buyBook } from '../redux/bookAction'
import { connect } from 'react-redux';

function BookComponent(props){
    return(
        <div>
            <h2>Number of Books: {props.numberOfBooks}</h2>
            <button onClick={props.buyBookFromCompoment}>Buy</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}

const mapDispatchToProps  = dispatch => {
    return{
        buyBookFromCompoment: () => {
            dispatch(buyBook())
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(BookComponent);