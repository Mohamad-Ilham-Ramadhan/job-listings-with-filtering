import spartan400Eot from "./fonts/spartan-v2-latin-regular.eot";
import spartan400Woff2 from "./fonts/spartan-v2-latin-regular.woff2";
import spartan400Woff from "./fonts/spartan-v2-latin-regular.woff";
import spartan400Ttf from "./fonts/spartan-v2-latin-regular.ttf";
import spartan400Svg from "./fonts/spartan-v2-latin-regular.svg";

import spartan700Eot from "./fonts/spartan-v2-latin-700.eot";
import spartan700Woff2 from "./fonts/spartan-v2-latin-700.woff2";
import spartan700Woff from "./fonts/spartan-v2-latin-700.woff";
import spartan700Ttf from "./fonts/spartan-v2-latin-700.ttf";
import spartan700Svg from "./fonts/spartan-v2-latin-700.svg";

const spartan400 = {
  fontFamily: "Spartan",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url('${spartan400Eot}'),
        local(''),
        url('${spartan400Eot}?#iefix') format('embedded-opentype'),
        url('${spartan400Woff2}') format('woff2'),
        url('${spartan400Woff}') format('woff'),
        url('${spartan400Ttf}') format('truetype'),
        url('${spartan400Svg}#Spartan') format('svg'); 
  `,
};

const spartan700 = {
  fontFamily: "Spartan",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${spartan700Eot}'),
        local(''),
        url('${spartan700Eot}?#iefix') format('embedded-opentype'),
        url('${spartan700Woff2}') format('woff2'),
        url('${spartan700Woff}') format('woff'),
        url('${spartan700Ttf}') format('truetype'),
        url('${spartan700Svg}#Spartan') format('svg'); 
  `,
};

export { spartan400, spartan700 };
