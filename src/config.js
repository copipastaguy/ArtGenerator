const { MODE } = require("./blendMode.js");
const description =
  "Corgis made from love and generative art. No 2 corgis are the same ever! Created by Alfred";
const baseUri = "https://gateway.pinata.cloud/ipfs/Qmbc4X6BYsxcm96MS5fbYMBs9Rvp8jvv4NwXFBx6Zz3uHp";

const layerConfigurations = [
  {
    growEditionSizeTo: 500, // Example to show you the inifite amount of possibilities
    layersOrder: [
      { name: "background" },
      { name: "base" },
      { name: "ears" },
      { name: "eyes" },
      { name: "face" },
      { name: "iris" },
      { name: "skin" },
      { name: "tongue" },
    ],
  },
  // {
  //   growEditionSizeTo: 25, // 15 more like this, added eyewear
  //   layersOrder: [
  //     { name: "1-background" },
  //     { name: "2-extra" },
  //     { name: "3-character" },
  //     { name: "4-prop" },
  //     { name: "5-expression" },
  //     { name: "6-face" },
  //     { name: "7-eyewear" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 65, // 40 more, added headpiece
  //   layersOrder: [
  //     { name: "1-background" },
  //     { name: "2-extra" },
  //     { name: "3-character" },
  //     { name: "4-prop" },
  //     { name: "5-expression" },
  //     { name: "6-face" },
  //     { name: "7-eyewear" },
  //     { name: "8-headpiece" },
  //   ],
  // },
]; // Now you can go and rename the pngs to which ever number you want them to be...
            // ... to make the order more mixed. Remember even tho it's not RNG now, it is to the buyer!
const format = {
  width: 1000, // change this to the dimension your NFT was created with in PSD
  height: 1000,
};

const background = {
  generate: true,
  brightness: "100%",
};

const rarityDelimiter = "_";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
