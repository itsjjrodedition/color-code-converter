function getHexStr(color) {
  var hex;
  color = color.toUpperCase();
  if(color === "RED"){
    hex = "#FF0000";
  } else if(color === "GREEN"){
    hex = "#00FF00";
  } else if(color === "BLUE"){
    hex = "#0000FF";
  } else if(color === "WHITE"){
    hex = "#FFFFFF";
  } else if(color === "BLACK"){
    hex = "#000000";
  } else if(color === "YELLOW"){
    hex = "#FFFF00";
  } else if(color === "ORANGE"){
    hex = "#FFA500"
  } else if(color === "CYAN"){
    hex = "#00FFFF";
  } else if(color === "MAGENTA"){
    hex = "#FF00FF";
  } else if(color === "SILVER"){
    hex = "#C0C0C0";
  } else if(color === "GRAY" || color === "GREY"){
    hex = "#808080";
  } else if(color === "MAROON"){
    hex = "#800000";
  } else if(color === "OLIVE"){
    hex = "#808000";
  } else if(color === "LIME"){
    hex = "#00FF00";
  } else if(color === "AQUA"){
    hex = "#00FFFF";
  } else if(color === "TEAL"){
    hex = "#008080";
  } else if(color === "NAVY"){
    hex = "#000080";
  } else if(color === "FUCHSIA"){
    hex = "#FF00FF";
  } else if(color === "PURPLE"){
    hex = "#800080";
  } else if(color === "BROWN"){
    hex = "#A52A2A";
  } else if(color === "PINK"){
    hex = "#FFC0CB";
  } else if(color === "INDIGO"){
    hex = "#4B0082";
  } else if(color === "VIOLET"){
    hex = "#EE82EE";
  } else if(color === "TURQUOISE"){
    hex = "#40E0D0";
  } else if(color === "LAVENDER"){
    hex = "#E6E6FA";
  } else if(color === "BEIGE"){
    hex = "#F5F5DC";
  } else if(color === "CHOCOLATE"){
    hex = "#D2691E";
  } else {
    throw new Error(`Unknown color code: ${color}`);
  }
  return hex;
}

function getHexRGB(r, g, b) {
  var hex = "#";
  hex += r.toString(16).length === 1 ? "0" + r.toString(16) : r.toString(16); 
  hex += g.toString(16).length === 1 ? "0" + g.toString(16) : g.toString(16); 
  hex += b.toString(16).length === 1 ? "0" + b.toString(16) : b.toString(16); 
  return hex;
}

function getStrHex(hex){
  var str
  return
}

function getRGBHex(hex){
  var r, g, b
  return
}


module.exports = { getHexStr, getHexRGB, getStrHex, getRGBHex };