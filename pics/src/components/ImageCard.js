import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // Initialise ref
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Too early to access Image height -> Have not loaded yet (async)
    // console.log(this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
