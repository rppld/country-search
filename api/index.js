const countries = require("i18n-iso-countries");

module.exports = (req, res) => {
  const { query = "", lang = "" } = req.query;
  const obj = countries.getNames(lang || "en");
  const arr = Object.keys(obj).map(key => ({ code: key, name: obj[key] }));
  const matches = arr.filter(
    item =>
      item.code.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query)
  );
  res.json(matches);
  res.end();
};
