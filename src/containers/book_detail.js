import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <h5 style={{'padding-top': '50px', 'padding-left': '380px'}}>Select a book to get started 📚</h5>;
    }

    return (
      <div style={{'padding-top': '50px', 'padding-left': '400px'}}>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Author: {this.props.book.author}</div>
        <div>Pages: {this.props.book.pages}</div>
        <div>Originally published: {this.props.book.published}</div>
        <img src='../../book-image.jpg'/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { //the object we return is going to show up as propos inside BookDetail
    book: state.activeBook //the activeBook piece of state is created in index.js
  };
}

export default connect(mapStateToProps)(BookDetail);
