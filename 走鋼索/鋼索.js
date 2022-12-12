(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"鋼索_atlas_1", frames: [[0,52,89,30],[0,0,97,50],[99,0,48,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["鋼索_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["鋼索_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["鋼索_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.左鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 左鞋
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("AgBApQgMgEgOgIIgLgGIgEAKIgzgRIASgoIAFgBQAJgRAKgHQAVgPAEAzIAQANQASAPAHAEQASAKA8AZQhDgDgbgKg");
	this.shape.setTransform(9.35,5.3383);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左鞋, new cjs.Rectangle(0,0,18.7,10.7), null);


(lib.左手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 左手
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(0,0,44.5,15), null);


(lib.左大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 左大腿
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("ABVCvQgPgJgRgSIgPgQQgUgphPhQQhEhEgJgrIAAgBIgBgMIABgBQABgdAKgRQAOgaAiAGQAuAJASAMQAJAHAVAeIAGAFIAyBPQA0BbARBIQgEA5gcAAQgKAAgNgHg");
	this.shape.setTransform(14,18.1692);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左大腿, new cjs.Rectangle(0,0,28,36.4), null);


(lib.左小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 左小腿
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("AACC8IgvgMIgHgCQAGgIAIhhQAIhjAAhDIADg9IAbgZQAdgRATAuQAOA2gWCWQgLBLgOBAg");
	this.shape.setTransform(5.2972,18.8804);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左小腿, new cjs.Rectangle(0,0,10.6,37.8), null);


(lib.右鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 右鞋
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("AgFAHQgEgLgDgPIgBgNIgKADIgSgyIArgMIAcAHQAWALgdAcIgBAWQgBAWABAJQACATARBBQgmg4gIgdg");
	this.shape.setTransform(4.15,9.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右鞋, new cjs.Rectangle(0,0,8.3,18.3), null);


(lib.右手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 右手
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手, new cjs.Rectangle(0,0,48.5,25), null);


(lib.右大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 右大腿
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("AA/C7QgOgLgPgUIgNgSQgOgqhIhgQg9hRAEgvIAAgKQABgJAGAAQAagtAmgEQAzgFAmBaIAmBUQAoBiAHBKQgLA0gZAAQgLAAgNgKg");
	this.shape.setTransform(12.3345,19.7041);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右大腿, new cjs.Rectangle(0,0,24.7,39.5), null);


(lib.右小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 右小腿
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("AiOBzIgWgxIgCgHQAKAABSg0QBTg0A2gqIAygiIAlAGQAfAOgZAqQgjAsiEBJQhDAkg7Acg");
	this.shape.setTransform(16.7158,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右小腿, new cjs.Rectangle(0,0,33.5,24.5), null);


(lib.頭部 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 頭部
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060E38").s().p("AgoAxQghglAFgaQAEgOAXgXQARgRAkABQAfABATAKIAHAIQADALgKAKQgOgBgOAEQgdAHgEAUQgGgDgHgCQgPgEADAOQAEARAEAFQAFAFAIgEIgiAlg");
	this.shape.setTransform(6.9795,6.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0EFE6").s().p("AghAxIgMg5QgjgoANgiQAFAEAFgDIADgCQAEACAEgCIAMgGIATgFQATgFATgCIAfASQACAGABAOIABARQACAEAMANQABACgIAJQAGAkgHAEQgEADgHABIgKABQgVAHgWAiQgUAggDACIgKg1g");
	this.shape_1.setTransform(7.7474,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.頭部, new cjs.Rectangle(0,0,14.9,22.7), null);


(lib.上半身 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 上半身
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.上半身, new cjs.Rectangle(0,0,24,48), null);


(lib.man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_3
	this.ikNode_2 = new lib.頭部();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(54.15,17.9,1,1,0,0,0,7.5,17.9);

	this.ikNode_1 = new lib.上半身();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(54.05,22.7,1,1,0,0,0,14.2,9.2);

	this.ikNode_4 = new lib.左手();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(57.3,22.45,1,1,0,0,0,11.8,10);

	this.ikNode_6 = new lib.右手();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(45.3,24.75,1,1,0,0,0,45.3,5.9);

	this.ikNode_8 = new lib.左大腿();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(60.15,51.5,0.9997,0.9997,14.0536,0,0,10.1,2.9);

	this.ikNode_10 = new lib.左小腿();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(66.05,81.65,0.9997,0.9997,-2.8925,0,0,5.9,5);

	this.ikNode_12 = new lib.左鞋();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(65.8,110.25,0.9997,0.9997,-2.8925,0,0,5.4,-0.1);

	this.ikNode_14 = new lib.右大腿();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(50.05,51.5,0.9998,0.9998,17.2041,0,0,6.5,2.9);

	this.ikNode_16 = new lib.右小腿();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(55.05,86.05,0.9997,0.9997,-37.5942,0,0,29.7,3.6);

	this.ikNode_18 = new lib.右鞋();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(44.65,117.3,0.9997,0.9997,-37.5942,0,0,6.6,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_18,p:{scaleX:0.9997,scaleY:0.9997,rotation:-37.5942,x:44.65,y:117.3,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9997,scaleY:0.9997,rotation:-37.5942,x:55.05,y:86.05,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9998,scaleY:0.9998,rotation:17.2041,x:50.05,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.4,regY:-0.1,scaleX:0.9997,scaleY:0.9997,rotation:-2.8925,x:65.8,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:-2.8925,x:66.05,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.0536,x:60.15,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:0,x:45.3,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:0,x:57.3,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]}).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.5162,x:44.45,y:117.35,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.5162,x:54.9,y:86.2,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:17.7035,x:50.1,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.85,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:66,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:1.3412,x:45.2,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:1.4024,x:57.2,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.4375,x:44.2,y:117.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-37.4375,x:54.75,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:18.2035,x:50.15,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.85,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:66,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:2.6832,x:45.2,y:24.65,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:2.8049,x:57.25,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.359,x:44,y:117.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.359,x:54.5,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:18.7021,x:50.35,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.85,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:66,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:4.0249,x:45.35,y:24.8,regX:45.4,regY:6}},{t:this.ikNode_4,p:{rotation:4.2073,x:57.1,regX:11.7,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.2785,x:43.8,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.2785,x:54.35,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.2024,x:50.55,y:51.75,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.8,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.95,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:5.3671,x:45.2,y:24.6,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:5.6104,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.2003,x:43.6,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.2003,x:54.2,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.7014,x:50.6,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.8,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8918,x:65.95,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:6.7087,x:45.2,y:24.6,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:7.0126,x:57.2,regX:11.8,y:22.5,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.1206,x:43.35,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.1206,x:54.05,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:20.2018,x:50.75,y:51.6,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.8,y:110.2}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.95,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:8.0505,x:45.15,y:24.6,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:8.4153,x:57.2,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.0418,x:43.1,y:117.5,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.0418,x:53.9,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:20.7005,x:50.95,y:51.6,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.75,y:110.2}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.9,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:9.3923,x:45.2,y:24.55,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:9.8178,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.9631,x:42.85,y:117.55,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.9631,x:53.6,y:86.5,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.2004,x:50.95,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.75,y:110.2}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.9,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:10.734,x:45.15,y:24.55,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:11.2203,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.8846,x:42.7,y:117.5,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-36.8846,x:53.45,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.6986,x:51.15,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.7,y:110.15}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.9,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:12.0755,x:45.15,y:24.5,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:12.6233,x:57.1,regX:11.7,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.8069,x:42.5,y:117.5,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.8069,x:53.35,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.1978,x:51.2,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.7,y:110.15}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.85,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:13.4173,x:45.2,y:24.45,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:14.0256,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.7282,x:42.25,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.7282,x:53.2,y:86.6,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.6977,x:51.4,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.7,y:110.15}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.85,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:14.7595,x:45.15,y:24.45,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:15.4286,x:57.2,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.65,x:42.05,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.65,x:53,y:86.6,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:23.197,x:51.5,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.65,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.85,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:16.1009,x:45.05,y:24.4,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:16.8312,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.5706,x:41.8,y:117.4,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.5706,x:52.8,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:23.6967,x:51.65,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.65,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.8,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:17.4432,x:45.1,y:24.5,regX:45.3,regY:6}},{t:this.ikNode_4,p:{rotation:18.234,x:57.2,regX:11.8,y:22.55,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.4919,x:41.6,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.4919,x:52.65,y:86.6,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.1956,x:51.8,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.6,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.8,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:18.7852,x:45.15,y:24.4,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:19.6363,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.4144,x:41.4,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.4144,x:52.55,y:86.7,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.6957,x:51.9,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.6,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.8,y:81.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:20.1272,x:45.15,y:24.35,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:21.0396,x:57.1,regX:11.7,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.3345,x:41.15,y:117.5,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-36.3345,x:52.4,y:86.7,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:25.1961,x:52,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.55,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.75,y:81.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:21.4684,x:45.1,y:24.45,regX:45.3,regY:6}},{t:this.ikNode_4,p:{rotation:22.4421,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.2549,x:40.95,y:117.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.2549,x:52.2,y:86.6,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:25.694,x:52.15,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.55,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.75,y:81.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:22.8105,x:45.1,y:24.3,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:23.8443,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.1772,x:40.75,y:117.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.1772,x:51.95,y:86.7,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:26.1931,x:52.4,y:51.75,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.55,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.75,y:81.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.1527,x:45.25,y:24.35,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:25.2469,x:57.2,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.0978,x:40.65,y:117.3,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-36.0978,x:51.9,y:86.7,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:26.6937,x:52.55,y:51.8,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.5,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:65.7,y:81.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.4945,x:45.15,y:24.35,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:26.6499,x:57.2,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-38.1651,x:42.6,y:117.65,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-38.1651,x:52.7,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:25.8427,x:52.75,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.4155,x:64.45,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.4155,x:64.9,y:81.7,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.0742,x:59.7,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.4432,x:45.1,y:24.35,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:26.4212,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-40.2332,x:44.45,y:118.1,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-40.2332,x:53.45,y:86.6,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:24.9927,x:53.15,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-1.9411,x:63.4,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.9411,x:64,y:81.85,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:16.0956,x:59.35,y:51.65,regY:3,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.3916,x:45.05,y:24.4,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:26.194,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-42.3008,x:46.5,y:118.3,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-42.3008,x:54.35,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.1423,x:53.4,y:51.8,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-1.4651,x:62.3,y:110.4}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.4651,x:63.3,y:81.95,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:17.1191,x:59.1,y:51.6,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.3396,x:45.1,y:24.5,regX:45.3,regY:6}},{t:this.ikNode_4,p:{rotation:25.9653,x:57.1,regX:11.7,y:22.5,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-44.3704,x:48.4,y:118.65,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-44.3704,x:55.1,y:86.65,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9998,scaleY:0.9998,rotation:23.2899,x:53.65,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.9901,x:61.2,y:110.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9901,x:62.35,y:82.1,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:18.1421,x:58.8,y:51.7,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.2884,x:45.15,y:24.45,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:25.7369,x:57.25,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-46.438,x:50.35,y:118.75,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-46.438,x:56,y:86.6,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.4395,x:53.95,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.5151,x:60.15,y:110.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.5151,x:61.55,y:82.2,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:19.164,x:58.5,y:51.75,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.2371,x:45.25,y:24.5,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:25.5089,x:57.25,regX:11.8,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-48.5068,x:52.25,y:118.95,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-48.5068,x:56.7,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.5892,x:54.3,y:51.8,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.0411,x:59.05,y:110.7}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.0411,x:60.65,y:82.3,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:20.1868,x:58.25,y:51.75,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.1859,x:45.25,y:24.5,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:25.2806,x:57.2,regX:11.8,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-50.5746,x:54.4,y:119.05,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-50.5746,x:57.6,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:20.7403,x:54.65,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:0.4294,x:57.95,y:110.75}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.4294,x:59.75,y:82.35,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:21.2096,x:57.9,y:51.8,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.1347,x:45.15,y:24.5,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:25.0525,x:57.2,regX:11.8,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-52.6429,x:56.4,y:119.1,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-52.6429,x:58.45,y:86.5,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.8892,x:54.95,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:0.9053,x:56.85,y:110.8}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.9053,x:58.9,y:82.4,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:22.2318,x:57.6,y:51.85,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.0834,x:45.2,y:24.5,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:24.8249,x:57.15,regX:11.8,y:22.6,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-54.7107,x:58.3,y:119.05,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-54.7107,x:59.15,y:86.4,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.0387,x:55.3,y:51.8,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:1.3803,x:55.75,y:110.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.3803,x:58.1,y:82.45,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:23.2553,x:57.3,y:51.95,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:25.0314,x:45.15,y:24.5,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:24.5968,x:57.25,regX:11.8,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-56.7786,x:60.4,y:119.05,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-56.7786,x:60.1,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:18.1874,x:55.5,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:1.8553,x:54.7,y:110.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.8553,x:57.25,y:82.5,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:24.277,x:56.9,y:52.05,regY:3,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.9802,x:45.1,y:24.6,regX:45.3,regY:6}},{t:this.ikNode_4,p:{rotation:24.3683,x:57.1,regX:11.7,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-58.8468,x:62.4,y:118.9,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-58.8468,x:60.9,y:86.2,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:17.3364,x:55.85,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:2.3306,x:53.6,y:110.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.3306,x:56.4,y:82.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:25.2996,x:56.7,y:51.95,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.9293,x:45.2,y:24.5,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:24.1402,x:57.15,regX:11.8,y:22.65,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-60.9145,x:64.4,y:118.8,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-60.9145,x:61.8,y:86.1,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:16.488,x:56.2,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:2.8034,x:52.5,y:110.8}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.8034,x:55.5,y:82.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:26.3229,x:56.4,y:52,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.8781,x:45.15,y:24.5,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:23.9124,x:57.25,regX:11.8,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-62.9836,x:66.45,y:118.5,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-62.9836,x:62.5,y:86.1,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:15.6363,x:56.45,y:51.65,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.2789,x:51.45,y:110.75}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2789,x:54.65,y:82.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:27.3454,x:55.95,y:51.95,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:24.8261,x:45.05,y:24.5,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:23.6838,x:57.25,regX:11.8,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-65.0517,x:68.5,y:118.2,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-65.0517,x:63.4,y:85.9,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:14.7854,x:56.8,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.7547,x:50.35,y:110.75}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.7547,x:53.8,y:82.55,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:28.3681,x:55.75,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.7752,x:45.25,y:24.55,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:23.456,x:57.2,regX:11.8,y:22.55,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-67.1192,x:70.4,y:117.9,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-67.1192,x:64.15,y:85.85,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:13.9357,x:57.1,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:4.2299,x:49.25,y:110.7}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.2299,x:53.1,y:82.5,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:29.391,x:55.4,y:52.15,regY:3,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.724,x:45.2,y:24.55,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:23.2276,x:57.2,regX:11.8,y:22.7,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-69.1884,x:72.4,y:117.55,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-69.1884,x:65.05,y:85.6,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:13.0849,x:57.5,y:51.55,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:4.7055,x:48.15,y:110.65}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.7055,x:52.25,y:82.5,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.4133,x:55.15,y:52.1,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.6719,x:45.2,y:24.55,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:22.9993,x:57.25,regX:11.8,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-71.2567,x:74.35,y:117.1,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-71.2567,x:65.8,y:85.55,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:12.2335,x:57.8,y:51.5,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:5.1795,x:47.1,y:110.55}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.1795,x:51.2,y:82.45,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:31.4355,x:54.8,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.6211,x:45.2,y:24.55,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:22.7717,x:57.25,regX:11.8,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-73.3232,x:76.25,y:116.6,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-73.3232,x:66.65,y:85.25,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:11.383,x:58,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:5.6548,x:45.95,y:110.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.6548,x:50.35,y:82.35,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:32.4594,x:54.5,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.5691,x:45.2,y:24.6,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:22.5432,x:57.2,regX:11.8,y:22.65,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-75.3931,x:78.2,y:116.05,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-75.3931,x:67.5,y:85.1,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:10.5323,x:58.3,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.1295,x:44.9,y:110.3}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.1295,x:49.5,y:82.25,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:33.48,x:54.2,y:52,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.5182,x:45.2,y:24.65,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:22.3154,x:57.1,regX:11.7,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-77.4609,x:80.1,y:115.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-77.4609,x:68.25,y:84.9,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:9.6813,x:58.6,y:51.3,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.604,x:43.8,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.604,x:48.7,y:82.15,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:34.5044,x:53.85,y:52.1,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:24.4673,x:45.2,y:24.65,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:22.0868,x:57.25,regX:11.8,y:22.65,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-74.3495,x:77.45,y:116.25,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-74.3495,x:67.25,y:85.15,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:10.6592,x:58.2,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.6744,x:44.6,y:110.3}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.6744,x:49.5,y:82.25,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:33.5372,x:54.15,y:52,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:23.1818,x:45.35,y:24.65,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:20.8243,x:57.25,regX:11.8,y:22.65,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9997,scaleY:0.9997,rotation:-71.2373,x:74.7,y:116.95,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9997,scaleY:0.9997,rotation:-71.2373,x:66.2,y:85.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:11.6354,x:57.7,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.7439,x:45.35,y:110.4}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.7439,x:50.3,y:82.3,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:32.5707,x:54.5,y:52.15,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:21.8974,x:45.25,y:24.65,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:19.5611,x:57.2,regX:11.8,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-68.1252,x:71.9,y:117.65,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-68.1252,x:65.25,y:85.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:12.6114,x:57.35,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.8144,x:46.15,y:110.4}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.8144,x:51.1,y:82.35,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:31.6035,x:54.8,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:20.6121,x:45.1,y:24.65,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:18.2975,x:57.2,regX:11.8,y:22.6,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-65.0126,x:69.2,y:118.05,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-65.0126,x:64.1,y:85.7,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:13.5874,x:56.8,y:51.6,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.8822,x:46.9,y:110.45}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.8822,x:51.9,y:82.4,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.6363,x:55.1,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:19.3274,x:45.25,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:17.035,x:57.25,regX:11.8,y:22.55,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-61.9015,x:66.25,y:118.5,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-61.9015,x:63.1,y:85.9,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:14.5648,x:56.45,y:51.65,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.9519,x:47.65,y:110.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.9519,x:52.75,y:82.45,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:29.6711,x:55.35,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:18.0426,x:45.15,y:24.7,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:15.7719,x:57.25,regX:11.8,y:22.55,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-58.7903,x:63.5,y:118.75,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-58.7903,x:62.05,y:85.9,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:15.5411,x:55.9,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.0214,x:48.5,y:110.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.0214,x:53.6,y:82.45,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:28.7035,x:55.6,y:52,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:16.7574,x:45.2,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:14.5083,x:57.2,regX:11.8,y:22.55,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-55.6771,x:60.7,y:118.9,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-55.6771,x:61,y:86.2,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:16.5181,x:55.5,y:51.7,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.0902,x:49.25,y:110.55}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.0902,x:54.4,y:82.5,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:27.7366,x:56,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:15.4732,x:45.25,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:13.2457,x:57.25,regX:11.8,y:22.55,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-52.5662,x:57.9,y:118.9,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-52.5662,x:60,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:17.4933,x:55.05,y:51.65,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.1598,x:50,y:110.55}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.1598,x:55.2,y:82.5,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:26.7708,x:56.3,y:52.05,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:14.1881,x:45.1,y:24.75,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:11.9824,x:57.2,regX:11.8,y:22.65,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-49.4529,x:55.1,y:118.95,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-49.4529,x:58.85,y:86.4,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:18.4698,x:54.55,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.2286,x:50.8,y:110.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.2286,x:55.95,y:82.5,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:25.8027,x:56.65,y:52,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:12.9028,x:45.25,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:10.7189,x:57.2,regX:11.8,y:22.6,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-46.3415,x:52.2,y:118.75,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-46.3415,x:57.9,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.4472,x:54.1,y:51.8,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.2991,x:51.6,y:110.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.2991,x:56.75,y:82.5,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:24.8367,x:56.9,y:52,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:11.618,x:45.1,y:24.8,regX:45.2,regY:5.9}},{t:this.ikNode_4,p:{rotation:9.4561,x:57.25,regX:11.8,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-43.2292,x:49.45,y:118.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-43.2292,x:56.85,y:86.5,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:20.4237,x:53.6,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.3679,x:52.35,y:110.45}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.3679,x:57.6,y:82.45,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:23.871,x:57.25,y:51.95,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:10.3331,x:45.25,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:8.1927,x:57.25,regX:11.8,y:22.5,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-40.1171,x:46.65,y:117.95,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-40.1171,x:55.75,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.4003,x:53.15,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.4376,x:53.15,y:110.4}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.4376,x:58.4,y:82.4,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:22.9034,x:57.4,y:51.85,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:9.0487,x:45.25,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:6.9297,x:57.2,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.0056,x:43.85,y:117.5,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-37.0056,x:54.7,y:86.65,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.3766,x:52.75,y:51.75,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.5064,x:53.95,y:110.3}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.5064,x:59.25,y:82.3,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:21.9367,x:57.7,y:51.85,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:7.7636,x:45.25,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:5.6667,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-33.8948,x:41.25,y:116.85,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-33.8948,x:53.55,y:86.55,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:23.3525,x:52.2,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.5744,x:54.7,y:110.25}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.5744,x:60.05,y:82.3,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:20.9703,x:58.15,y:51.8,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:6.479,x:45.25,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:4.4037,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-30.7826,x:38.45,y:116.1,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-30.7826,x:52.45,y:86.75,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.329,x:51.75,y:51.75,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.6448,x:55.55,y:110.2}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.6448,x:60.9,y:82.2,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:20.0034,x:58.4,y:51.7,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:5.1942,x:45.15,y:25,regX:45.2,regY:6}},{t:this.ikNode_4,p:{rotation:3.1402,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-27.6708,x:35.85,y:115.35,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-27.6708,x:51.45,y:86.7,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:25.3064,x:51.25,y:51.65,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.7146,x:56.25,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.7146,x:61.85,y:82.1,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:19.0362,x:58.65,y:51.85,regY:3,regX:10.1}},{t:this.ikNode_6,p:{rotation:3.9093,x:45.25,y:24.9,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:1.8774,x:57.2,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-24.5577,x:33.35,y:114.3,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-24.5577,x:50.4,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:26.2827,x:50.85,y:51.65,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.7827,x:57.05,y:109.95}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.7827,x:62.5,y:82,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:18.0699,x:59,y:51.7,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:2.6237,x:45.3,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:0.6137,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-21.4457,x:30.7,y:113.35,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-21.4457,x:49.35,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:27.2593,x:50.45,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.8533,x:57.8,y:109.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.8533,x:63.3,y:81.9,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:17.1031,x:59.3,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:1.3395,x:45.25,y:24.9,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.6479,x:57.25,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.3348,x:28.2,y:112.2,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-18.3348,x:48.3,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:28.2357,x:49.95,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.9221,x:58.6,y:109.7}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.9221,x:64.1,y:81.75,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:16.1357,x:59.6,y:51.6,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:0.0542,x:45.3,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.9115,x:57.3,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.2231,x:25.8,y:111,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-15.2231,x:47.25,y:86.15,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:29.2129,x:49.5,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.9918,x:59.35,y:109.55}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.9918,x:64.9,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.1701,x:59.9,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.2293,x:45.55,y:24.9,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:-3.1744,x:57.3,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.8387,x:26.15,y:111.35,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-15.8387,x:47.45,y:86.25,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:28.9479,x:49.55,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.7199,x:59.5,y:109.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.7199,x:65.1,y:81.65,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.1419,x:59.95,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.1987,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-3.0946,x:57.3,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-16.456,x:26.65,y:111.5,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-16.456,x:47.6,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:28.6833,x:49.6,y:51.5,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.4473,x:59.65,y:109.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.4473,x:64.95,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.1141,x:59.9,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.1681,x:45.4,y:24.9,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-3.0159,x:57.3,regX:11.8,y:22.4,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.0735,x:27.15,y:111.65,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-17.0735,x:47.85,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:28.4192,x:49.5,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:7.1757,x:59.8,y:109.65}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.1757,x:65,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.0859,x:59.95,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.1375,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.9362,x:57.25,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.6887,x:27.6,y:111.9,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-17.6887,x:48,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:28.1543,x:49.6,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.9034,x:59.95,y:109.65}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.9034,x:65,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.0577,x:59.9,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.1069,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.8566,x:57.3,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.3061,x:27.95,y:112.15,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-18.3061,x:48.15,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:27.8894,x:49.6,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.6312,x:60.1,y:109.7}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.6312,x:64.95,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.0297,x:59.95,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.0754,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.7778,x:57.3,regX:11.8,y:22.4,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.922,x:28.5,y:112.35,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-18.922,x:48.35,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:27.6258,x:49.6,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.3592,x:60.25,y:109.7}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.3592,x:65,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.0025,x:59.9,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.0448,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.6981,x:57.25,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-19.5385,x:28.85,y:112.6,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-19.5385,x:48.6,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:27.3602,x:49.55,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:6.0865,x:60.4,y:109.75}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.0865,x:65.05,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.9743,x:59.9,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-1.0142,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.6185,x:57.25,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9997,scaleY:0.9997,rotation:-20.1568,x:29.45,y:112.85,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9997,scaleY:0.9997,rotation:-20.1568,x:48.6,y:86.4,regX:29.6}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:27.0962,x:49.7,y:51.45,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:5.8148,x:60.55,y:109.75}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.8148,x:65.1,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.9463,x:59.9,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.9836,x:45.4,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.5397,x:57.3,regX:11.8,y:22.4,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9997,scaleY:0.9997,rotation:-20.772,x:29.9,y:113,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9997,scaleY:0.9997,rotation:-20.772,x:48.85,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:26.833,x:49.65,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:5.5422,x:60.75,y:109.9}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.5422,x:65.05,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.9183,x:59.9,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.953,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.4601,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-21.39,x:30.35,y:113.25,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-21.39,x:49.05,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:26.5678,x:49.75,y:51.45,regX:6.6}},{t:this.ikNode_12,p:{regX:5.4,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:5.27,x:60.85,y:109.8}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.27,x:65.1,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.8905,x:59.9,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.9224,x:45.4,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.3804,x:57.25,regX:11.8,y:22.25,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-22.0056,x:30.75,y:113.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-22.0056,x:49.3,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:26.3038,x:49.7,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:4.9969,x:61.1,y:109.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.9969,x:65.15,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.8621,x:59.9,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.8909,x:45.4,y:24.85,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.3017,x:57.25,regX:11.8,y:22.4,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-22.6229,x:31.45,y:113.55,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-22.6229,x:49.35,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:26.0379,x:49.8,y:51.35,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:4.7265,x:61.25,y:109.8}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.7265,x:65.3,y:81.65,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.8341,x:60,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.8603,x:45.4,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.2221,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9997,scaleY:0.9997,rotation:-23.2398,x:31.65,y:113.85,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9997,scaleY:0.9997,rotation:-23.2398,x:49.6,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:25.7738,x:49.7,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:4.4536,x:61.4,y:109.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.4536,x:65.15,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.8061,x:59.85,y:51.5,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.8297,x:45.4,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.1425,x:57.25,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.8558,x:32.25,y:114.05,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-23.8558,x:49.8,y:86.45,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:25.5098,x:49.75,y:51.35,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:4.1817,x:61.55,y:109.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.1817,x:65.3,y:81.65,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.7783,x:59.9,y:51.45,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.7991,x:45.4,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-2.0629,x:57.25,regX:11.8,y:22.4,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-24.4728,x:32.85,y:114.15,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-24.4728,x:49.9,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:25.2454,x:49.75,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.9081,x:61.7,y:109.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.9081,x:65.2,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.7501,x:59.85,y:51.5,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.7685,x:45.4,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.9841,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-25.0888,x:33.2,y:114.35,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-25.0888,x:50.1,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:24.9809,x:49.85,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.6373,x:61.85,y:109.85}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.6373,x:65.4,y:81.65,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.7229,x:59.9,y:51.45,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.7379,x:45.5,y:24.8,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.9045,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-25.7069,x:33.7,y:114.65,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-25.7069,x:50.3,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.7168,x:49.8,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.3649,x:62,y:109.9}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.3649,x:65.3,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.6951,x:59.85,y:51.5,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.7064,x:45.35,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.8249,x:57.25,regX:11.8,y:22.4,regY:10.1}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-26.3229,x:34.1,y:114.65,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-26.3229,x:50.45,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.4523,x:49.75,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.0924,x:62.15,y:109.9}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.0924,x:65.4,y:81.6,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.6669,x:59.85,y:51.45,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.6758,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.7453,x:57.25,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-26.9394,x:34.65,y:114.9,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-26.9394,x:50.7,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:24.1881,x:49.8,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:2.8191,x:62.3,y:109.9}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.8191,x:65.3,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.6395,x:59.85,y:51.5,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.6452,x:45.35,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.6666,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-27.5554,x:35.15,y:115.15,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-27.5554,x:50.8,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:23.9239,x:49.85,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:2.5468,x:62.45,y:109.95}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.5468,x:65.45,y:81.6,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.6107,x:59.85,y:51.45,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.6146,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.587,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-28.1736,x:35.55,y:115.2,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-28.1736,x:50.95,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:23.6584,x:49.85,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:2.2763,x:62.65,y:109.95}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.2763,x:65.35,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.5829,x:59.85,y:51.6,regY:3,regX:10}},{t:this.ikNode_6,p:{rotation:-0.584,x:45.35,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.5074,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-28.7888,x:36.2,y:115.3,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-28.7888,x:51.2,y:86.5,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:23.394,x:49.85,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:2.0041,x:62.8,y:109.95}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.0041,x:65.5,y:81.6,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.5549,x:59.9,y:51.45,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.5534,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.4278,x:57.25,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-29.407,x:36.5,y:115.6,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-29.407,x:51.25,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:23.1296,x:49.95,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:1.732,x:62.95,y:109.95}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.732,x:65.35,y:81.65,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.5267,x:59.95,y:51.5,regY:2.9,regX:10}},{t:this.ikNode_6,p:{rotation:-0.5219,x:45.35,y:24.8,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.3491,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-30.0228,x:37.05,y:115.7,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-30.0228,x:51.45,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.8655,x:49.9,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:1.4599,x:63.1,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4599,x:65.35,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.4987,x:59.95,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.4913,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.2696,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-30.6386,x:37.65,y:115.85,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-30.6386,x:51.8,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:22.6009,x:49.95,y:51.4,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:1.1869,x:63.25,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.1869,x:65.4,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.4707,x:60.1,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.4607,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.19,x:57.25,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-31.2561,x:38.05,y:116,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.6,scaleX:0.9996,scaleY:0.9996,rotation:-31.2561,x:51.8,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.3359,x:50,y:51.55,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:0.9149,x:63.4,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.9149,x:65.45,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.4429,x:60.05,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.4301,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.1104,x:57.3,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-31.8724,x:38.6,y:116.1,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-31.8724,x:52.05,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:22.0715,x:49.9,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:0.642,x:63.55,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.642,x:65.45,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.4147,x:60.1,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.3995,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-1.0317,x:57.3,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-32.4898,x:39,y:116.35,regX:6.5,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-32.4898,x:52.3,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.8074,x:50.1,y:51.6,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:0.3708,x:63.75,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.3708,x:65.45,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.3867,x:60.05,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.3689,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.9521,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9997,scaleY:0.9997,rotation:-33.1067,x:39.6,y:116.45,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9997,scaleY:0.9997,rotation:-33.1067,x:52.35,y:86.4,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.544,x:50,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:0.098,x:63.9,y:109.95}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.098,x:65.55,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.3587,x:60.05,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.3375,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.8725,x:57.25,regX:11.8,y:22.3,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-33.7218,x:40.15,y:116.45,regX:6.7,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-33.7218,x:52.55,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.2793,x:50.1,y:51.6,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.1697,x:64.05,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.1697,x:65.5,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.3309,x:60.05,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.3069,x:45.35,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.793,x:57.3,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-34.3392,x:40.55,y:116.65,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-34.3392,x:52.75,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:21.0141,x:49.95,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.4408,x:64.2,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.4408,x:65.6,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.3027,x:60.05,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.2763,x:45.35,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.7143,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-34.9559,x:41.15,y:116.6,regX:6.7,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-34.9559,x:52.95,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:20.7505,x:50.05,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.7128,x:64.35,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.7128,x:65.55,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.2749,x:60.05,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.2457,x:45.45,y:24.7,regX:45.4,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.6347,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-35.5728,x:41.5,y:116.75,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-35.5728,x:53.15,y:86.35,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:20.4854,x:50.05,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-0.9857,x:64.5,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9857,x:65.65,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.2469,x:60.05,y:51.55,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.2151,x:45.3,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.5552,x:57.3,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.1893,x:42.05,y:117,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.1893,x:53.3,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:2.9,scaleX:0.9997,scaleY:0.9997,rotation:20.2211,x:50.1,y:51.45,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-1.2578,x:64.65,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.2578,x:65.6,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.2189,x:60.1,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.1845,x:45.3,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.4756,x:57.3,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-36.8069,x:42.65,y:117.05,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-36.8069,x:53.5,y:86.25,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.957,x:50.1,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-1.5299,x:64.85,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.5299,x:65.7,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.1911,x:60.05,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.153,x:45.3,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.396,x:57.25,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-37.4219,x:43.15,y:117.25,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.8,scaleX:0.9996,scaleY:0.9996,rotation:-37.4219,x:53.75,y:86.3,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.6922,x:50.1,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-1.802,x:65,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.802,x:65.65,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.1629,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.1224,x:45.3,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.3174,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-38.0374,x:43.65,y:117.2,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-38.0374,x:53.9,y:86.2,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.4275,x:50.15,y:51.5,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.0759,x:65.15,y:110}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.0759,x:65.7,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.1349,x:60.05,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.0918,x:45.3,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.2378,x:57.3,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-38.6556,x:44.15,y:117.35,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-38.6556,x:54.05,y:86.2,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:19.1631,x:50.2,y:51.55,regX:6.6}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.3472,x:65.3,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.3472,x:65.7,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.1073,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.0612,x:45.3,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.1582,x:57.3,regX:11.8,y:22.35,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-39.2719,x:44.65,y:117.4,regX:6.6,regY:3.2}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-39.2719,x:54.2,y:86.1,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:18.8995,x:50.15,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:-0.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.6186,x:65.45,y:110.05}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.6186,x:65.8,y:81.6,regX:6}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0793,x:60.1,y:51.5,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:-0.0306,x:45.3,y:24.7,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:-0.0787,x:57.25,regX:11.8,y:22.4,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_18,p:{scaleX:0.9996,scaleY:0.9996,rotation:-39.8881,x:45.15,y:117.4,regX:6.6,regY:3.1}},{t:this.ikNode_16,p:{regY:3.7,scaleX:0.9996,scaleY:0.9996,rotation:-39.8881,x:54.35,y:86.15,regX:29.7}},{t:this.ikNode_14,p:{regY:3,scaleX:0.9997,scaleY:0.9997,rotation:18.6341,x:50.15,y:51.55,regX:6.5}},{t:this.ikNode_12,p:{regX:5.5,regY:0,scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.65,y:110.1}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8909,x:65.75,y:81.6,regX:5.9}},{t:this.ikNode_8,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0528,x:60.1,y:51.45,regY:2.9,regX:10.1}},{t:this.ikNode_6,p:{rotation:0,x:45.3,y:24.75,regX:45.3,regY:5.9}},{t:this.ikNode_4,p:{rotation:0,x:57.3,regX:11.8,y:22.45,regY:10}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-0.5,99.2,134.6);


// stage content:
(lib.鋼索 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 人
	this.instance = new lib.man();
	this.instance.setTransform(134.5,69.7,0.5199,0.5199,0,0,0,45,66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	// 鋼索
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eh5OAAAMDydAAA");
	this.shape.setTransform(767.875,102.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// 背景
	this.instance_1 = new lib.補間動畫1("synched",0);
	this.instance_1.setTransform(762.4,89.45);

	this.instance_2 = new lib.補間動畫2("synched",0);
	this.instance_2.setTransform(-262.4,89.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:-262.4},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-774.8,89,2319.6,90);
// library properties:
lib.properties = {
	id: 'EE1C27536C78D74DB9F276DEA1FCA2FE',
	width: 500,
	height: 178,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
		{src:"images/鋼索_atlas_1.png", id:"鋼索_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EE1C27536C78D74DB9F276DEA1FCA2FE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;