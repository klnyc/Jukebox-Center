const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const database = require("./database/database");

const app = express();
const sessionStore = new SequelizeStore({ db: database });
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await database.models.users.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "session secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", require("./routes/routes"));

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((error, request, response, next) => {
  console.error(error.stack);
  response
    .status(error.status || 500)
    .send(error.message || "Internal server error");
});

database
  .sync()
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log("Server is listening on Port 3000")
    )
  );
