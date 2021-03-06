import React, { Component } from 'react';
import './Grid.css';

const CELL_SIZE = 20;
const WIDTH = 1200;
const HEIGHT = 600;

class Grid extends Component {
  render() {
    return (
      <div>
        <div className="Board"
          style={{ width: WIDTH, height: HEIGHT,
          backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}>
        </div>
      </div>
    );
  }
}
export default Grid;