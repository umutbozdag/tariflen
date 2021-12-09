"use strict";

var _express = _interopRequireDefault(require("express"));

var _search = _interopRequireDefault(require("./api/routes/search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 3000;
app.use('/search', _search.default);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});