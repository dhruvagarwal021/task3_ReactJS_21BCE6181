import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
      hoverColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  handleColorHover = (color) => {
    this.setState({
      hoverColor: color,
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor, hoverColor } = this.state;

    return (
      <div className="color-picker">
        <button
          onClick={this.toggleColorList}
          style={{ backgroundColor: selectedColor || hoverColor , borderRadius:"10px"}}
        >
          Pick a color
        </button>
        {isOpen && (
          <div
            className="color-list"
            style={{ background: hoverColor || 'transparent' }}
          >
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
                onMouseEnter={() => this.handleColorHover(color)}
                onMouseLeave={() => this.handleColorHover(null)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
