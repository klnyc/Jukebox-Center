const router = require("express").Router();
const Albums = require("../database/albums");
const Orders = require("../database/orders");
const Cart = require("../database/cart");

router.get("/", async (request, response, next) => {
  try {
    await Orders.findOrCreate({
      where: {
        address: request.user.address,
        purchased: false,
        userId: request.user.id,
      },
    });
    const order = await Orders.findOne({
      where: {
        purchased: false,
        userId: request.user.id,
      },
      include: [{ model: Albums }],
    });
    response.json(order);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (request, response, next) => {
  try {
    await Orders.findOrCreate({
      where: {
        address: request.user.address,
        purchased: false,
        userId: request.user.id,
      },
    });
    const order = await Orders.findOne({
      where: {
        purchased: false,
        userId: request.user.id,
      },
    });
    const album = await Cart.create({
      quantity: request.body.quantity,
      albumId: request.body.albumId,
      orderId: order.id,
    });
    response.status(200).json(album);
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (request, response, next) => {
  try {
    const album = await Cart.findOne({
      where: {
        orderId: request.body.orderId,
        albumId: request.body.albumId,
      },
    });
    await album.destroy();
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.put("/purchase", async (request, response, next) => {
  try {
    const order = await Orders.findByPk(request.body.orderId);
    await order.update({
      purchased: true,
      address: request.body.address,
    });
    const albums = await Cart.findAll({
      where: {
        orderId: request.body.orderId,
      },
    });
    albums.forEach(async (album) => {
      const stockAlbum = await Albums.findByPk(album.albumId);
      await stockAlbum.update({
        inventory: stockAlbum.inventory - album.quantity,
      });
    });
    response.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post("/purchase", async (request, response, next) => {
  try {
    const order = await Orders.create({
      address: request.body.guestCart.address,
      purchased: true,
      userId: null,
    });
    request.body.guestCart.albums.forEach(async (album) => {
      await Cart.create({
        quantity: album.cart.quantity,
        albumId: album.id,
        orderId: order.id,
      });
      const stockAlbum = await Albums.findByPk(album.id);
      await stockAlbum.update({
        inventory: stockAlbum.inventory - album.cart.quantity,
      });
    });
    response.status(200).json(order);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
