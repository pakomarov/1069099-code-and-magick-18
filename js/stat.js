'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = '#fff';
var SHADE_X = 10;
var SHADE_Y = 10;
var SHADE_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT = '16px PT Mono';
var TEXT_BASELINE = 'hanging';
var TEXT_COLOR = '#000';
var HEADING_PADDING_X = 20;
var HEADING_PADDING_Y = 20;
var HEADING_LINE_HEIGHT = 20;
var HEADING_MARGIN_Y = 10;
var GRAPH_PADDING_X = 40;
var GRAPH_ORIGIN_X = CLOUD_X + GRAPH_PADDING_X;
var GRAPH_ORIGIN_Y = CLOUD_Y + HEADING_PADDING_Y + HEADING_LINE_HEIGHT * 2 + HEADING_MARGIN_Y;
var SCORE_LINE_HEIGHT = 20;
var NAME_PADDING_Y = 5;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_MARGIN_X = 50;
var USER_NAME = 'Вы';
var BAR_COLOR_USER = 'rgba(255, 0, 0, 1)';

var getBarColor = function () {
  return 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

var renderShape = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderCloud = function (ctx, x, y) {
  renderShape(ctx, x + SHADE_X, y + SHADE_Y, CLOUD_WIDTH, CLOUD_HEIGHT, SHADE_COLOR);
  renderShape(ctx, x, y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
};

var setTextParameters = function (ctx) {
  ctx.font = FONT;
  ctx.textBaseline = TEXT_BASELINE;
};

var renderHeading = function (ctx) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X + HEADING_PADDING_X, CLOUD_Y + HEADING_PADDING_Y);
  ctx.fillText('Список результатов:', CLOUD_X + HEADING_PADDING_X, CLOUD_Y + HEADING_PADDING_Y + HEADING_LINE_HEIGHT);
};

var renderPlayerScore = function (ctx, originX, originY, name, time, maxScore) {
  var barHeight = (time / maxScore) * MAX_BAR_HEIGHT;
  ctx.fillStyle = TEXT_COLOR;

  ctx.fillText(name, originX, originY + SCORE_LINE_HEIGHT + MAX_BAR_HEIGHT + NAME_PADDING_Y);

  ctx.fillText(Math.floor(time), originX, originY + MAX_BAR_HEIGHT - barHeight);

  ctx.fillStyle = name === USER_NAME ? BAR_COLOR_USER : getBarColor();
  ctx.fillRect(originX, originY + SCORE_LINE_HEIGHT + MAX_BAR_HEIGHT - barHeight, BAR_WIDTH, barHeight);
};

var renderGraph = function (ctx, names, times) {
  var scoreOriginX = GRAPH_ORIGIN_X;
  var scoreOriginY = GRAPH_ORIGIN_Y;
  var maxScore = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    renderPlayerScore(ctx, scoreOriginX, scoreOriginY, names[i], times[i], maxScore);
    scoreOriginX += BAR_WIDTH + BAR_MARGIN_X;
  }
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y);
  setTextParameters(ctx);
  renderHeading(ctx);
  renderGraph(ctx, names, times);
};
