function CTextCell(text) {
  TextCell.call(this, text);
}

CTextCell.prototype = Object.create(TextCell.prototype);
CTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    var space = 0;
    space = (width - line.length)/2;
    if ((space * 2) % 2 == 0) {
      result.push(repeat(" ", space) + line + repeat(" ", space));
    } else {
      result.push(repeat(" ", space) + line + repeat(" ", space - 1));
    }
  }
  return result;
};

