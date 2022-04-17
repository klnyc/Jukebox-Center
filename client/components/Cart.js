import React from "react";
import { connect } from "react-redux";
import Base from "./Base";
import store, {
  getCart,
  removeFromCart,
  purchaseCart,
  getGuestCart,
  removeFromGuestCart,
  purchaseGuestCart,
  setError,
} from "../store";
import { IoIosClose } from "react-icons/io";

class Cart extends Base {
  constructor() {
    super();
    this.state = {
      CC: "",
      MM: "",
      YY: "",
      CVC: "",
      address: "",
    };
    this.removeAlbum = this.removeAlbum.bind(this);
    this.validateCreditCard = this.validateCreditCard.bind(this);
    this.purchase = this.purchase.bind(this);
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
  }

  componentDidMount() {
    const { getCart, getGuestCart, user } = this.props;
    const self = this;
    store.dispatch(setError(""));
    user.id ? getCart() : getGuestCart();
    setTimeout(() => {
      const { user } = self.props;
      this.setState({ address: user.address });
    }, 200);
  }

  removeAlbum(orderId, albumId) {
    const { user, removeFromCart, removeFromGuestCart } = this.props;
    user.id ? removeFromCart(orderId, albumId) : removeFromGuestCart(albumId);
  }

  validateCreditCard() {
    const { CC, MM, YY, CVC, address } = this.state;
    if (
      CC.length !== 16 ||
      MM.length !== 2 ||
      YY.length !== 2 ||
      CVC.length !== 3
    )
      return false;

    const card = Number(CC);
    const month = Number(MM);
    const year = Number(YY);
    const cvc = Number(CVC);
    if (month < 1 || month > 12 || year < 1 || cvc < 0) return false;
    return card && month && year && cvc && address;
  }

  purchase(orderId, address) {
    const { user, purchaseCart, purchaseGuestCart, history } = this.props;
    this.validateCreditCard()
      ? user.id
        ? purchaseCart(orderId, address, history)
        : purchaseGuestCart(address, history)
      : store.dispatch(setError("Invalid credit card and address"));
  }

  calculateTotalPrice() {
    const { cart } = this.props;
    if (cart.id) {
      return cart.albums.reduce((start, album) => {
        return start + album.price * album.cart.quantity;
      }, 0);
    }
  }

  render() {
    const { cart, error } = this.props;
    const { CC, MM, YY, CVC, address } = this.state;
    return (
      <div className="cart">
        {cart.id &&
          (cart.albums.length ? (
            <>
              <div className="cart-list">
                {cart.albums.map((album) => (
                  <div className="cart-albums-container" key={album.id}>
                    <div className="cart-album-image-container">
                      <img className="cart-albums-image" src={album.image} />
                    </div>
                    <div className="cart-albums-details">
                      <div>Title: {album.title}</div>
                      <div>Artist: {album.artist}</div>
                      <div>Price: {this.formatPrice(album.price)}</div>
                      <div>Quantity: {album.cart.quantity}</div>
                      <div
                        className="cart-remove-button"
                        onClick={() => this.removeAlbum(cart.id, album.id)}
                      >
                        <IoIosClose />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-checkout">
                <div className="cart-checkout-title">Checkout</div>
                <div>
                  Total Price: {this.formatPrice(this.calculateTotalPrice())}
                </div>
                <div className="cart-credit-card">
                  <div className="cart-credit-card-top">
                    <input
                      name="CC"
                      type="number"
                      placeholder="Credit Card"
                      value={CC}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="cart-credit-card-bottom">
                    <input
                      name="MM"
                      type="number"
                      placeholder="MM"
                      value={MM}
                      onChange={this.handleChange}
                    ></input>
                    <input
                      name="YY"
                      type="number"
                      placeholder="YY"
                      value={YY}
                      onChange={this.handleChange}
                      className="middle"
                    ></input>
                    <input
                      name="CVC"
                      type="number"
                      placeholder="CVC"
                      value={CVC}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className="cart-address-container">
                  <div>Address</div>
                  <div className="cart-address">
                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div
                  className="cart-purchase-button"
                  onClick={() => this.purchase(cart.id, address)}
                >
                  Purchase
                </div>
                {error && <div className="error">{error}</div>}
              </div>
            </>
          ) : (
            <div className="cart-empty">Cart is empty</div>
          ))}
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  user: state.user,
  error: state.error,
});

const mapDispatch = (dispatch) => ({
  getCart: () => dispatch(getCart()),
  getGuestCart: () => dispatch(getGuestCart()),
  removeFromCart: (orderId, albumId) =>
    dispatch(removeFromCart(orderId, albumId)),
  purchaseCart: (orderId, address, history) =>
    dispatch(purchaseCart(orderId, address, history)),
  removeFromGuestCart: (albumId) => dispatch(removeFromGuestCart(albumId)),
  purchaseGuestCart: (address, history) =>
    dispatch(purchaseGuestCart(address, history)),
});

export default connect(mapState, mapDispatch)(Cart);
