// numeral.js locale configuration
// locale : Indonesia / Indonesian (id)
// author : Irfan Anshari : https://github.com/irzl

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../numeral'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('../numeral'));
  } else {
    factory(global.numeral);
  }
}(this, function (numeral) {
  numeral.register("locale", "id-sr", {
    delimiters: {
      thousands: ".",
      decimal: ","
    },
    abbreviations: {
      thousand: "Rb",
      million: "Jt",
      billion: "M",
      trillion: "T"
    },
    ordinal: function (number) {
      return '.';
    },
    currency: {
      symbol: "Rp"
    }
  })
}));
