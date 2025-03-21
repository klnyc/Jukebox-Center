import React from "react";
import { connect } from "react-redux";
import store, { getAlbum, addToCart, addToGuestCart, setError } from "../store";
import Base from "./Base";
import { ImDiamonds } from "react-icons/im";

class Album extends Base {
  constructor() {
    super();
    this.state = { quantity: 1, addedToCart: false };
    this.buyAlbum = this.buyAlbum.bind(this);
  }

  componentDidMount() {
    const { genre, id } = this.props.match.params;
    const { getAlbum } = this.props;
    getAlbum(genre, id);
    store.dispatch(setError(""));
  }

  buyAlbum(albumId, quantity, inventory, genre) {
    const { user, addToCart, addToGuestCart } = this.props;
    const { addedToCart } = this.state;
    const purchase = () => {
      addedToCart
        ? null
        : user.id
        ? addToCart(albumId, quantity)
        : addToGuestCart(albumId, quantity, genre);
      this.setState({ addedToCart: true });
      store.dispatch(setError(""));
    };
    quantity > inventory || quantity < 1
      ? store.dispatch(setError("Not enough in stock"))
      : purchase();
  }

  render() {
    const { album, error } = this.props;
    const { quantity, addedToCart } = this.state;
    return (
      <div className="album">
        <img className="album-image" src={album.image} />
        <div className="album-info">
          <div className="album-title">{album.title}</div>
          <div className="album-artist">{album.artist}</div>
          <div className="album-details">
            {album.genre}
            <ImDiamonds className="album-details-diamond" />
            {album.year}
            <ImDiamonds className="album-details-diamond" />
            {album.price && this.formatPrice(album.price)}
          </div>
          {album.inventory ? (
            <>
              <div className="stock-in">Stock: {album.inventory}</div>
              <div>
                Quantity:{" "}
                <input
                  className="album-quantity-input"
                  type="number"
                  name="quantity"
                  value={quantity}
                  min="1"
                  onChange={this.handleChange}
                />
              </div>
              <div
                className={"album-add-button" + (addedToCart ? " added" : "")}
                onClick={() =>
                  this.buyAlbum(
                    album.id,
                    quantity,
                    album.inventory,
                    album.genre
                  )
                }
              >
                Add To Cart
              </div>
            </>
          ) : (
            <div className="stock-out">"Out of stock!"</div>
          )}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  album: state.album,
  user: state.user,
  error: state.error,
});

const mapDispatch = (dispatch) => ({
  getAlbum: (genre, albumId) => dispatch(getAlbum(genre, albumId)),
  addToCart: (albumId, quantity) => dispatch(addToCart(albumId, quantity)),
  addToGuestCart: (albumId, quantity, genre) =>
    dispatch(addToGuestCart(albumId, quantity, genre)),
});

export default connect(mapState, mapDispatch)(Album);
