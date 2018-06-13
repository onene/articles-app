import React, { Component } from 'react';
import Note from '../Note/Note';
import Masonry from 'masonry-layout';

class NoteGrid extends Component {
    componentDidMount() {

        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
        itemSelector: '.note',
        columnWidth: 50,
        gutter: 10
});}
componentDidUpdate(prevProps) {
    if(this.props.articles.length !== prevProps.articles.length) {
        this.msnry.reloadItems();
        this.msnry.layout();
    }
}
    
    render() {
        return(
            <div className="notes-grid" ref="grid">
                {
                    this.props.articles.map((item, index) => {
                        return <Note key={item.id} color={item.color}>{item.text}</Note>
                    })
                }
            </div>
        );
    }
}
export default NoteGrid