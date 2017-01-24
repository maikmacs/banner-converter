(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/fondo_imagen_BB.jpg", id:"fondo_imagen_BB"},
		{src:"images/fondo_imagen_BB_1.jpg", id:"fondo_imagen_BB_1"},
		{src:"images/pascal_BB.png", id:"pascal_BB"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.fondo_imagen_BB = function() {
	this.initialize(img.fondo_imagen_BB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.fondo_imagen_BB_1 = function() {
	this.initialize(img.fondo_imagen_BB_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.pascal_BB = function() {
	this.initialize(img.pascal_BB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,263);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.fondo_imagen_BB();
	this.instance.setTransform(-150,-300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300.2,300,250);


(lib.pascal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.pascal_BB();
	this.instance.setTransform(-58,-223.5,1.77,1.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-223.5,118.6,465.5);


(lib.negro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTsMAAAgnWMAu3AAAMAAAAnWg");
	this.shape.setTransform(0,-174);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,252);


(lib.linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAsxIIhXAAQABAAABAhQAECfgCOIQgBIkgDIlIBUAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-110.7,10.9,221.6);


(lib.imagen_fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.fondo_imagen_BB_1();
	this.instance.setTransform(-150,-299.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-299.9,300,250);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75B7F4").s().p("AAgCNIgHgzIg1AAIgIAzIgoAAIAtkaIA/AAIAtEagAgWAzIApAAIgUiOg");
	this.shape.setTransform(76.3,1.1,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#75B7F4").s().p("AgwB+QgRgSAAgjIAAiRQAAgjARgSQARgTAfAAQAgAAARATQARASAAAjIAAAbIgqAAIAAgeQAAgcgYAAQgVAAAAAcIAACXQAAAcAVAAQAYAAAAgcIAAgoIAqAAIAAAlQAAAjgRASQgRATggAAQgfAAgRgTg");
	this.shape_1.setTransform(67.5,1.1,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#75B7F4").s().p("AAZCNIg2jMIAADMIgoAAIAAkaIA4AAIAsCoIAAioIAnAAIAAEag");
	this.shape_2.setTransform(58.4,1.1,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#75B7F4").s().p("AgwB9QgRgTAAgiIAAjWIAsAAIAADZQAAAbAVAAQAYAAAAgbIAAjZIAqAAIAADWQAAAigRATQgRASggAAQgfAAgRgSg");
	this.shape_3.setTransform(49.3,1.2,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#75B7F4").s().p("AAZCNIg2jMIAADMIgoAAIAAkaIA4AAIAsCoIAAioIAnAAIAAEag");
	this.shape_4.setTransform(40.1,1.1,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75B7F4").s().p("Ag7CNIAAkaIB3AAIAAApIhKAAIAABPIA7AAIAAAmIg7AAIAABUIBKAAIAAAog");
	this.shape_5.setTransform(31.3,1.1,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#75B7F4").s().p("AgwB9QgRgTAAgiIAAjWIAtAAIAADZQgBAbAWAAQAXAAAAgbIAAjZIAqAAIAADWQAAAigQATQgSASggAAQgfAAgRgSg");
	this.shape_6.setTransform(22.6,1.2,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#75B7F4").s().p("ABBCYQgdAAgJgUQgOAGgPAAQghAAgSgTQgRgSAAgjIAAiRQAAgjARgSQASgTAhAAQAeAAASATQARATAAAiIAACRQAAAYgIAQQACAGAKAAIAEAAIAAAogAgZhSIAACXQAAAcAXAAQAVAAAAgcIAAiXQAAgcgVAAQgXAAAAAcg");
	this.shape_7.setTransform(14,1.4,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#75B7F4").s().p("Ag7CNIAAkaIB3AAIAAApIhLAAIAABPIA8AAIAAAmIg8AAIAABUIBLAAIAAAog");
	this.shape_8.setTransform(5.4,1.1,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#75B7F4").s().p("AhDCNIAAkaIBFAAQBCAAAABGIAACOQAABGhCAAgAgWBlIAWAAQAXAAABgcIAAiSQgBgbgXAAIgWAAg");
	this.shape_9.setTransform(-3.2,1.1,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#75B7F4").s().p("AAZCNIg2jMIAADMIgoAAIAAkaIA4AAIAsCoIAAioIAnAAIAAEag");
	this.shape_10.setTransform(-12.6,1.1,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#75B7F4").s().p("AAgCNIgHgzIg1AAIgHAzIgqAAIAukaIA/AAIAtEagAgWAzIApAAIgTiOg");
	this.shape_11.setTransform(-21.9,1.1,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#75B7F4").s().p("AAYCNQgFgNAAgWIAAgsQAAgUgHgIQgGgJgOAAIgPAAIAAB0IgtAAIAAkaIBEAAQAgAAAQAQQAQAQAAAiIAAAWQAAAsgeAMQAeAMAAAwIAAAsQAAAWAFAMgAgXgNIARAAQAZAAAAgeIAAgcQAAgdgVAAIgVAAg");
	this.shape_12.setTransform(-30.7,1.1,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#75B7F4").s().p("AgwB+QgRgSAAgjIAAiRQAAgjARgSQARgTAfAAQAgAAASATQAQASAAAjIAAAbIgqAAIAAgeQAAgcgXAAQgWAAABAcIAACXQgBAcAWAAQAXAAAAgcIAAg0IgUAAIAAgnIA+AAIAABYQAAAjgQASQgSATggAAQgfAAgRgTg");
	this.shape_13.setTransform(-39.7,1.1,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#75B7F4").s().p("AgwB+QgRgSAAgjIAAgRIAqAAIAAAUQAAAcAXAAQAWAAAAgcQAAgagqgpQgsgmAAgrQAAgjARgSQAQgTAfAAQAgAAARATQAQASAAAjIAAAJIgpAAIAAgMQAAgcgXAAQgUAAAAAcQAAAaAqApQArAmAAArQAAAjgRASQgRATggAAQgfAAgRgTg");
	this.shape_14.setTransform(-48.3,1.1,0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#75B7F4").s().p("AAgCrIgIgzIg0AAIgIAzIgoAAIAtkaIA/AAIAtEagAgWBRIAoAAIgTiOgAgWh9IAZgtIAsAAIgpAtg");
	this.shape_15.setTransform(-57,-0.4,0.5,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#75B7F4").s().p("AAzCNIAAjKIgfDKIgoAAIghjGIAADGIgnAAIAAkaIA+AAIAfDIIAejIIA+AAIAAEag");
	this.shape_16.setTransform(-67.5,1.1,0.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#75B7F4").s().p("AgCCNIAHhRIgYAAIgJBRIgkAAIAIhRIgTAAIACggIAUAAIAIhIIgUAAIADgfIAVAAIAGhCIAjAAIgFBCIAZAAIAGhCIAkAAIgGBCIAVAAIgEAfIgVAAIgHBIIAVAAIgEAgIgVAAIgIBRgAgQAcIAYAAIAIhIIgZAAg");
	this.shape_17.setTransform(-77.9,1.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-9,162,18.1);


// stage content:
(lib.imagenradio_pascal_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGiJSIAAuUIgDAAIlKOUIiqAAIlJuUIgEAAIAAOUIjGAAIAAykIEmAAIFFOjIAEAAIFAujIEiAAIAASkg");
	this.shape.setTransform(169.9,129,0.081,0.081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmZJSIAAykIMzAAIAAC0IpjAAIAAE5IIYAAIAACoIoYAAIAAIPg");
	this.shape_1.setTransform(160.2,129,0.081,0.081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiZI8QhJgXg3gsQg3gugghCQghhBgDhZIC+AAQAHBfA5AzQA5AzBdAAQA7AAApgUQApgTAbgkQAagjALguQAKgxABg0QAAgvgOgtQgOgtgaggQgcgggpgUQgsgUg2AAQg7AAg1AXQg0AWgYA8Ii+AAIB9p9IJZAAIAACqInLAAIg8EpIADAEQAngsA7gXQA7gWA4AAQBWAABGAdQBEAeAuA0QAvA0AYBGQAYBHABBUQAABHgXBJQgWBLgyA8QgxA+hNAmQhNAohqAAQhTgBhIgWg");
	this.shape_2.setTransform(148.3,129.2,0.081,0.081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyBwIAAjfIDlAAIAADfg");
	this.shape_3.setTransform(142.6,133,0.081,0.081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjLIlQhPg6gshZQgshZgQhrQgQhpAAhlQAAhkAQhpQAPhqAthaQAshZBPg6QBQg5B7AAQB8AABQA5QBPA6AsBZQAsBaAQBqQAQBtAABgQAABigQBsQgQBrgsBZQgsBZhPA6QhPA5h9AAQh8AAhPg5gAhnmbQgpAlgYA9QgYA+gKBQQgKBNAABeQAABgAKBNQAKBRAYA9QAYA8ApAlQAoAkA/AAQA9AAAqgkQApgjAZg+QAYg9AKhRQAKhTAAhaQAAhYgKhTQgKhQgYg+QgZg/gpgjQgqgkg9AAQg+AAgpAkg");
	this.shape_4.setTransform(136.9,129.1,0.081,0.081);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AikJHQg+gYgvgpQgvgpgeg7Qgfg7gChHIC9AAQAHBHAtAtQArAsBMAAQBLAAAtgpQAugpAZg9QAZg+AJhEQAKhOAEgxIgDgDQgmBEhDAkQhDAkhOAAQhTAAhDgdQhGgdgugyQgxgzgahGQgbhIAAhbQAAhWAbhHQAbhJAzg2QA1g3BJgdQBMgeBeAAQB5AABRAvQBQAxAuBRQAtBTATBwQASBwAAB8QAABpgXBrQgWBrg0BXQg0BYhUA2QhUA3h5AAQhIAAg8gXgAhmmsQgmAUgZAhQgZAigNArQgMAqAAAwQAAAxAMArQANAsAZAiQAZAhAmATQAnAVAzAAQAzAAApgUQAogTAZgiQAaghANgtQAOgsAAgwQAAgvgOgrQgNgsgaggQgZgggogVQgngUg1AAQgzAAgnATg");
	this.shape_5.setTransform(129.4,129.1,0.081,0.081);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AEjJSIknnGIktHGIjvAAIGmpmImJo+ID4AAIEMGlIEamlIDpAAImJI+IGmJmg");
	this.shape_6.setTransform(91,129,0.081,0.081);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGjJSIAAuUIgDAAIlLOUIipAAIlKuUIgEAAIAAOUIjGAAIAAykIEmAAIFGOjIADAAIFAujIEiAAIAASkg");
	this.shape_7.setTransform(80.6,129,0.081,0.081);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("An8JSIAAykIHuAAQCFAABlAvQBlAvA/BRQA/BQAfBtQAfBrAAB7QAAB9gfBqQgfBtg/BQQg/BRhlAvQhjAuiHAAgAkrGpIDNAAQB5AABMghQBNggAtg6QAsg5AQhOQAPhMAAhbQAAhZgPhNQgQhNgsg6Qgtg5hNghQhOggh3gBIjNAAg");
	this.shape_8.setTransform(69.9,129,0.081,0.081);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjOI+QhrgyhIhVQhJhUgohyQgnhxAAiAQAAh9AnhyQAohxBJhVQBJhVBqgyQBpgyCEAAQBlAABYAcQBWAaBFA2QBEA0AqBLQAqBMAJBgIjQAAQgMgygZgtQgXgsglgfQglgggxgRQgvgShDAAQhdAAhFAmQhFAngrBAQgsBAgVBSQgUBTAABSQAABUAUBSQAVBSAsBAQArBABFAmQBEAnBeAAQBHAAA1gYQA1gYAmgrQAngqAVg5QAWg4AHhCIDLAAQgGBpgoBaQgmBXhEBCQhDBAhZAjQhaAjhtAAQiCAAhrgxg");
	this.shape_9.setTransform(59.9,129,0.081,0.081);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDBGIAAiLIAHAAIAACLg");
	this.shape_10.setTransform(115.2,129.2,1,1,0,0,0,3.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArC4IgKhDIhGAAIgKBDIg1AAIA7lvIBTAAIA7FvgAgdBDIA2AAIgai5g");
	this.shape_11.setTransform(244,147.9,0.262,0.262);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgrDfIAAlvIA3AAIAAFvgAgtikIAkg7IA3AAIg0A7g");
	this.shape_12.setTransform(240,146.9,0.262,0.262);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgC4IhHkKIAAEKIg0AAIAAlvIBJAAIA6DbIAAjbIA0AAIAAFvg");
	this.shape_13.setTransform(235,147.9,0.262,0.262);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhACkQgXgYAAgtIAAi9QAAgtAXgYQAXgZApAAQAqAAAXAZQAXAYAAAtIAAC9QAAAtgXAYQgXAYgqAAQgpAAgXgYgAgdhjIAADHQAAAjAdABQAdgBAAgjIAAjHQAAgjgdgBQgdABAAAjg");
	this.shape_14.setTransform(228.9,147.9,0.262,0.262);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbC4IAAk6Ig9AAIAAg1ICxAAIAAA1Ig8AAIAAE6g");
	this.shape_15.setTransform(223.4,147.9,0.262,0.262);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgC4IhGkKIAAEKIg1AAIAAlvIBJAAIA6DbIAAjbIA0AAIAAFvg");
	this.shape_16.setTransform(217.7,147.9,0.262,0.262);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbC4IAAlvIA3AAIAAFvg");
	this.shape_17.setTransform(213.1,147.9,0.262,0.262);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/CkQgWgYAAgtIAAgWIA3AAIAAAbQAAAjAeAAQAcAAAAgjQAAgZgSgYQgIgKgcgcQg5gzAAg4QAAgtAVgYQAWgZAoAAQAqAAAWAZQAVAYABAtIAAALIg4AAIAAgQQAAgjgdgBQgaABgBAjQAAAZASAYQAIAKAdAcQA5AzAAA4QAAAtgWAYQgWAYgqAAQgpAAgWgYg");
	this.shape_18.setTransform(208.8,147.9,0.262,0.262);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAqC4IgKhDIhFAAIgKBDIg1AAIA7lvIBTAAIA7FvgAgdBDIA1AAIgai5g");
	this.shape_19.setTransform(200.6,147.9,0.262,0.262);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABDC4IAAkHIgpEHIg0AAIgskDIAAEDIgyAAIAAlvIBRAAIAoEEIAokEIBRAAIAAFvg");
	this.shape_20.setTransform(193.7,147.9,0.262,0.262);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag/CkQgWgYAAgtIAAgWIA3AAIAAAbQAAAjAeAAQAcAAAAgjQAAgZgRgYQgJgKgdgcQg5gzAAg4QAAgtAWgYQAWgZAoAAQAqAAAWAZQAWAYAAAtIAAALIg3AAIAAgQQAAgjgdgBQgbABgBAjQABAZARAYQAIAKAeAcQA4AzAAA4QAAAtgWAYQgWAYgqAAQgpAAgWgYg");
	this.shape_21.setTransform(187.1,147.9,0.262,0.262);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcC4IAAlvIA5AAIAAFvg");
	this.shape_22.setTransform(182.9,147.9,0.262,0.262);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABDC4IAAkHIgpEHIg1AAIgrkDIAAEDIgyAAIAAlvIBRAAIAoEEIAokEIBRAAIAAFvg");
	this.shape_23.setTransform(177.5,147.9,0.262,0.262);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAqC4IgKhDIhFAAIgKBDIg1AAIA7lvIBTAAIA7FvgAgeBDIA2AAIgai5g");
	this.shape_24.setTransform(168.1,147.9,0.262,0.262);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhLC4IAAlvIA6AAIAAE6IBdAAIAAA1g");
	this.shape_25.setTransform(162.9,147.9,0.262,0.262);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAgC4IhHkKIAAEKIg0AAIAAlvIBJAAIA6DbIAAjbIA0AAIAAFvg");
	this.shape_26.setTransform(154.6,147.9,0.262,0.262);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhOC4IAAlvICdAAIAAA1IhjAAIAABmIBOAAIAAAzIhOAAIAABsIBjAAIAAA1g");
	this.shape_27.setTransform(148.8,147.9,0.262,0.262);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhACkQgXgYAAgtIAAi9QAAgtAXgYQAXgZApAAQAqAAAXAZQAXAYAAAtIAAC9QAAAtgXAYQgXAYgqAAQgpAAgXgYgAgdhjIAADHQAAAjAdABQAdgBAAgjIAAjHQAAgjgdgBQgdABAAAjg");
	this.shape_28.setTransform(140.6,147.9,0.262,0.262);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag/CkQgWgYAAgtIAAi9QAAgtAWgYQAWgZApAAQAqAAAWAZQAWAYAAAtIAAAkIg3AAIAAgpQAAgjgegBQgcABAAAjIAADHQAAAjAcAAQAeAAAAgjIAAg1IA3AAIAAAwQAAAtgWAYQgWAYgqAAQgpAAgWgYg");
	this.shape_29.setTransform(134.9,147.9,0.262,0.262);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbC4IAAlvIA3AAIAAFvg");
	this.shape_30.setTransform(130.6,147.9,0.262,0.262);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAsC4IgtiSIgxCSIg2AAIBBi8Ig9izIA9AAIApCIIAtiIIA2AAIg9CzIBBC8g");
	this.shape_31.setTransform(126,147.9,0.262,0.262);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhODfIAAlvICdAAIAAA1IhjAAIAABkIBOAAIAAA1IhOAAIAABsIBjAAIAAA1gAgeikIAig7IA5AAIg2A7g");
	this.shape_32.setTransform(120.2,146.9,0.262,0.262);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABDC4IAAkHIgpEHIg0AAIgskDIAAEDIgyAAIAAlvIBQAAIApEEIAokEIBQAAIAAFvg");
	this.shape_33.setTransform(113.5,147.9,0.262,0.262);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAqC4IgKhDIhFAAIgJBDIg2AAIA7lvIBTAAIA7FvgAgdBDIA1AAIgZi5g");
	this.shape_34.setTransform(104.2,147.9,0.262,0.262);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhACkQgWgYgBgtIAAi9QABgtAWgYQAXgZApAAQAqAAAXAZQAWAYABAtIAAC9QgBAtgWAYQgXAYgqAAQgpAAgXgYgAgchjIAADHQAAAjAcABQAdgBAAgjIAAjHQAAgjgdgBQgcABAAAjg");
	this.shape_35.setTransform(95.8,147.9,0.262,0.262);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhYC4IAAlvIBaAAQBXAAAABbIAAC5QAABbhXAAgAgeCDIAfAAQAeABAAglIAAi9QAAglgeABIgfAAg");
	this.shape_36.setTransform(90,147.9,0.262,0.262);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAgC4IhGkKIAAEKIg1AAIAAlvIBJAAIA6DbIAAjbIAzAAIAAFvg");
	this.shape_37.setTransform(83.8,147.9,0.262,0.262);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhOC4IAAlvICdAAIAAA1IhjAAIAABmIBOAAIAAAzIhOAAIAABsIBjAAIAAA1g");
	this.shape_38.setTransform(78.1,147.9,0.262,0.262);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgcC4IAAlvIA5AAIAAFvg");
	this.shape_39.setTransform(73.8,147.9,0.262,0.262);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAgC4IhHkKIAAEKIgzAAIAAlvIBIAAIA6DbIAAjbIAzAAIAAFvg");
	this.shape_40.setTransform(69.2,147.9,0.262,0.262);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhACkQgXgYAAgtIAAi9QAAgtAXgYQAXgZApAAQAqAAAXAZQAWAYABAtIAAC9QgBAtgWAYQgXAYgqAAQgpAAgXgYgAgchjIAADHQAAAjAcABQAdgBAAgjIAAjHQAAgjgdgBQgcABAAAjg");
	this.shape_41.setTransform(63.2,147.9,0.262,0.262);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhUC4IAAlvIBUAAQBVAAABBbIAAAwQgBBahVAAIgbAAIAACKgAgbgFIAbAAQAOAAAGgIQAIgIgBgTIAAg3QABgUgIgIQgGgHgOAAIgbAAg");
	this.shape_42.setTransform(57.7,147.9,0.262,0.262);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1E8BC9").s().p("AlDMAQiWhAh0hzQhzhzg/iWQhCibAAipQAAioBCibQBAiWByhzQB0h0CWg/QCahCCpAAQCpAACbBCQCVA/B0B0QB0BzA/CWQBCCbAACoQAACphCCbQg/CWh0BzQh0BziVBAQibBCipAAQipAAiahCg");
	this.shape_43.setTransform(75.3,51,0.262,0.262);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EB2040").s().p("ArxLyIAA3jIXjAAIAAXjg");
	this.shape_44.setTransform(75.3,96.7,0.262,0.262);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AjVDOQhShTAAh6IAAgBQAAh5BThUQBWhXB/ABQCAAABVBVQBSBUAAB6IAAAAQAAB6hTBUQhVBWiAABQh/AAhWhXgAiJiNQg2A5AABUIAAAAQAABUA2A6QA4A7BSABQBTAAA2g8QA2g5gBhUIAAgBQAAhTg2g5Qg3g8hSAAQhSAAg3A7g");
	this.shape_45.setTransform(176,84.3,0.262,0.262);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgwEbIAAo1IBhAAIAAI1g");
	this.shape_46.setTransform(164.1,84.3,0.262,0.262);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Aj/EbIAAo1IDUAAQCCAABVBRQBUBQAAB5IAAAAQAAB4hUBRQhVBSiCAAgAibDBIBwAAQBWAAA3g2QA2g2AAhUIAAgBQAAhTg2g2Qg3g2hWAAIhwAAg");
	this.shape_47.setTransform(153.1,84.3,0.262,0.262);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AC+EdIg6iJIkKAAIg6CJIhmAAID5o5IBbAAID5I5gAhiA8IDCAAIhgjhg");
	this.shape_48.setTransform(136.4,84.3,0.262,0.262);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AB7EbIiKjFIh9AAIAADFIhjAAIAAo1ID7AAQBpAAA6A4QAwAxAABKIAAACQAABDgnArQgiAqg/ARICZDXgAiMgBICQAAQA2AAAggaQAfgaAAgqIAAgDQAAgsgfgZQgfgZg4ABIiPAAg");
	this.shape_49.setTransform(121.2,84.3,0.262,0.262);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AlPGeIAAs8IKZAAIAADFIm1AAIAAB9IFtAAIAACzIltAAIAACEIG7AAIAADDg");
	this.shape_50.setTransform(209.9,58.1,0.262,0.262);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AC9GeIlgnEIAAHEIjjAAIAAs8IDXAAIFTG1IAAm1IDjAAIAAM8g");
	this.shape_51.setTransform(232.8,58.1,0.262,0.262);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AkUE3QiAh6gBi7IAAgCQABi1B+h8QCBh9C+AAQBpAABVAgQBOAeBEA7IiHCjQgvgogtgTQgxgUg7AAQhYAAg+BCQg8BCgBBdIAAADQABBlA+BAQBABBBgAAQBQAAA1gjIAAhkIijAAIAAinIF9AAIAAF0QhHA7hVAgQhhAlhrAAQjBAAiAh4g");
	this.shape_52.setTransform(186.4,58.1,0.262,0.262);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAwBdIgNghIhGAAIgNAhIg2AAIBPi5IAvAAIBPC5gAgUAUIAoAAIgUgzg");
	this.shape_53.setTransform(163.4,58.1,1.174,1.174);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAvBcIAAhoIgvBGIAAAAIguhGIAABoIgzAAIAAi3IA2AAIArBIIAshIIA2AAIAAC3g");
	this.shape_54.setTransform(137.5,58.2,1.174,1.174);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhyGeIAAs8IDlAAIAAM8g");
	this.shape_55.setTransform(117.9,58.1,0.262,0.262);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},255).wait(114));

	// Capa 12
	this.instance = new lib.Symbol();
	this.instance.setTransform(149.9,207.8,0.86,0.86);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(255).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).wait(101));

	// Capa 7
	this.instance_1 = new lib.negro();
	this.instance_1.setTransform(150,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(241).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(114));

	// Layer 1
	this.instance_2 = new lib.linea();
	this.instance_2.setTransform(153.4,121.4,0.91,0.061);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({scaleY:0.91},16,cjs.Ease.get(1)).to({_off:true},169).wait(113));

	// Capa 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_71 = new cjs.Graphics().p("AhzJgIAAhVIYpAAIAABVg");
	var mask_graphics_72 = new cjs.Graphics().p("AhzKAIAAjOIYpAAIAADOg");
	var mask_graphics_73 = new cjs.Graphics().p("AhzKfIAAlFIYpAAIAAFFg");
	var mask_graphics_74 = new cjs.Graphics().p("AhzK/IAAm+IYpAAIAAG+g");
	var mask_graphics_75 = new cjs.Graphics().p("AhzLfIAAo3IYpAAIAAI3g");
	var mask_graphics_76 = new cjs.Graphics().p("AhzL+IAAqvIYpAAIAAKvg");
	var mask_graphics_77 = new cjs.Graphics().p("AhzMeIAAslIYpAAIAAMlg");
	var mask_graphics_78 = new cjs.Graphics().p("AhzM9IAAudIYpAAIAAOdg");
	var mask_graphics_79 = new cjs.Graphics().p("AhzNdIAAwWIYpAAIAAQWg");
	var mask_graphics_80 = new cjs.Graphics().p("AhzN8IAAyOIYpAAIAASOg");
	var mask_graphics_81 = new cjs.Graphics().p("AhzOcIAA0GIYpAAIAAUGg");
	var mask_graphics_82 = new cjs.Graphics().p("AhzO8IAA1/IYpAAIAAV/g");
	var mask_graphics_83 = new cjs.Graphics().p("AhzPbIAA33IYpAAIAAX3g");
	var mask_graphics_84 = new cjs.Graphics().p("AhzP7IAA5wIYpAAIAAZwg");
	var mask_graphics_85 = new cjs.Graphics().p("AhzQaIAA7nIYpAAIAAbng");
	var mask_graphics_86 = new cjs.Graphics().p("AhzQ6IAA9gIYpAAIAAdgg");
	var mask_graphics_87 = new cjs.Graphics().p("AhzRaIAA/ZIYpAAIAAfZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:146.3,y:60.9}).wait(1).to({graphics:mask_graphics_72,x:146.3,y:64}).wait(1).to({graphics:mask_graphics_73,x:146.3,y:67.2}).wait(1).to({graphics:mask_graphics_74,x:146.3,y:70.4}).wait(1).to({graphics:mask_graphics_75,x:146.3,y:73.5}).wait(1).to({graphics:mask_graphics_76,x:146.3,y:76.7}).wait(1).to({graphics:mask_graphics_77,x:146.3,y:79.8}).wait(1).to({graphics:mask_graphics_78,x:146.3,y:83}).wait(1).to({graphics:mask_graphics_79,x:146.3,y:86.1}).wait(1).to({graphics:mask_graphics_80,x:146.3,y:89.3}).wait(1).to({graphics:mask_graphics_81,x:146.3,y:92.4}).wait(1).to({graphics:mask_graphics_82,x:146.3,y:95.6}).wait(1).to({graphics:mask_graphics_83,x:146.3,y:98.8}).wait(1).to({graphics:mask_graphics_84,x:146.3,y:101.9}).wait(1).to({graphics:mask_graphics_85,x:146.3,y:105.1}).wait(1).to({graphics:mask_graphics_86,x:146.3,y:108.2}).wait(1).to({graphics:mask_graphics_87,x:146.3,y:111.4}).wait(282));

	// Capa 4
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#929496").s().p("AAbByIgKg1IgjAAIgKA1IgoAAIA0jjIAhAAIA0DjgAgMAcIAWAAIgKg/IAAAAg");
	this.shape_56.setTransform(250.9,204.7,0.648,0.648);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#929496").s().p("AgQBxIgzjhIArAAIAZCGIAAAAQAEgbAEgQIAThbIAoAAIgzDhg");
	this.shape_57.setTransform(242.5,204.7,0.648,0.648);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#929496").s().p("AgUBxIAAjhIApAAIAADhg");
	this.shape_58.setTransform(235.7,204.7,0.648,0.648);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#929496").s().p("AgUBxIAAi9IgnAAIAAgkIB3AAIAAAkIgnAAIAAC9g");
	this.shape_59.setTransform(229.3,204.7,0.648,0.648);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#929496").s().p("AAaByIgKg1IgiAAIgKA1IgoAAIA0jjIAhAAIA0DjgAgMAcIAWAAIgKg/IAAAAg");
	this.shape_60.setTransform(221.6,204.7,0.648,0.648);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#929496").s().p("AAzBxIgDhNIgBgkIgBAAQgCALgIAaIgYBMIgXAAIgXhMQgIgcgDgJIgBAAIAAAkIgEBNIgpAAIAOjhIAiAAIArCXIAAAAIANgxIAghmIAhAAIAODhg");
	this.shape_61.setTransform(210.4,204.7,0.648,0.648);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#929496").s().p("AAUBxIgihfIgIAAIAABfIgqAAIAAjhIA4AAQAVAAAQASQAQATAAAcQAAARgHAPQgGAOgJAFIAqBtgAgWgQIAKAAQAGAAAFgIQAEgJAAgOQAAgOgEgIQgFgIgGAAIgKAAg");
	this.shape_62.setTransform(199.8,204.7,0.648,0.648);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#929496").s().p("Ag1BVQgUghgBg0QABgzAUggQAVggAggBQAiABAUAgQAVAgAAAzQAAA0gVAhQgUAfgiAAQggAAgVgfgAgUg2QgJAWAAAgQAAAhAJAWQAIAVAMABQANgBAIgVQAJgWAAghQAAgggJgWQgIgVgNAAQgMAAgIAVg");
	this.shape_63.setTransform(189.2,204.7,0.648,0.648);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#929496").s().p("AgtBxIAAjhIBbAAIAAAkIgwAAIAAA6IAmAAIAAAkIgmAAIAABfg");
	this.shape_64.setTransform(180.6,204.7,0.648,0.648);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#929496").s().p("AAnBxIgshVIgUgrIgBAAIABCAIgpAAIAAjiIAhAAIAoBSQAOAdAFALIABAAIgBh6IAoAAIAADig");
	this.shape_65.setTransform(171.5,204.7,0.648,0.648);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#929496").s().p("AgUBxIAAjhIApAAIAADhg");
	this.shape_66.setTransform(164,204.7,0.648,0.648);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#929496").s().p("Ag0BxIAAgKIAjh2QAIgdAJgeIAAgBIguAAIAAglIBhAAIAAAKIg0CyIA2AAIAAAlg");
	this.shape_67.setTransform(212.4,171.7,0.648,0.648);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#929496").s().p("AguBxIAAjhIBXAAIAAAlIgsAAIAAA6IAkAAIAAAjIgkAAIAAA7IAyAAIAAAkg");
	this.shape_68.setTransform(205.4,171.7,0.648,0.648);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#929496").s().p("AhABxIAAjhIA2AAQAfAAAVAcQAWAeABA2QgBA3gWAfQgVAbgfAAgAgVBMIAIAAQANAAAJgSQAMgUAAgmQAAgkgMgVQgJgSgNAAIgIAAg");
	this.shape_69.setTransform(196.6,171.7,0.648,0.648);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#929496").s().p("AgUBxIAAjhIApAAIAADhg");
	this.shape_70.setTransform(189.2,171.7,0.648,0.648);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#929496").s().p("AgvBxIAAjhIAqAAIAAC8IA1AAIAAAlg");
	this.shape_71.setTransform(183.6,171.7,0.648,0.648);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#929496").s().p("Ag1BUQgUgggBg0QABgzAUghQAUgfAhAAQAhAAAVAfQAVAhgBAzQABA0gVAgQgVAgghABQgggBgVgggAgUg2QgJAWAAAgQAAAgAJAXQAJAVALAAQANAAAIgVQAKgXgBggQABgggKgWQgIgWgNAAQgLAAgJAWg");
	this.shape_72.setTransform(174.1,171.7,0.648,0.648);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#929496").s().p("AgtBmIgCgsQAOATAVAAQAQAAABgUQAAgVgTgZQgfgkAAghQAAgaAPgQQANgPAWAAQAWAAALAJIgDAnQgKgKgNAAQgOAAAAARQgBAQARAWQAiAnAAAlQAAAdgPARQgOARgZAAQgZAAgOgPg");
	this.shape_73.setTransform(165.2,171.7,0.648,0.648);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgXAuQARgWAEgXQgFgBgHgGQgGgJAAgGQAAgHAJgKQAJgKADAAQAGAAAIAKQAJAKAAAHQAAAOgLAUQgKAUgMAQg");
	this.shape_74.setTransform(278.7,145.9,0.648,0.648);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag1BUQgVggABg0QgBgzAVggQAVghAgABQAhgBAVAhQAUAgABAzQgBA0gUAgQgVAgghABQghgBgUgggAgUg2QgJAXAAAfQAAAhAJAWQAJAWALgBQAMABAKgWQAIgWABghQgBgggIgWQgKgWgMAAQgLAAgJAWg");
	this.shape_75.setTransform(271.8,138.7,0.648,0.648);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgaCYIAAjhIAqAAIAADhgAgdhsQAggNAVgeIAHAgQgSATgbAKg");
	this.shape_76.setTransform(264.4,136.2,0.648,0.648);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAUBxIgihfIgIAAIAABfIgqAAIAAjhIA4AAQAVAAAQASQAQATAAAcQAAARgGAPQgGAOgKAFIAqBtgAgWgQIAKAAQAHAAAFgIQADgJAAgOQAAgOgDgIQgFgIgHAAIgKAAg");
	this.shape_77.setTransform(257.6,138.7,0.648,0.648);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgvBxIAAjhIArAAIAAC8IA0AAIAAAlg");
	this.shape_78.setTransform(245.5,138.7,0.648,0.648);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AguBxIAAjhIBYAAIAAAkIgtAAIAAA6IAkAAIAAAkIgkAAIAAA6IAyAAIAAAlg");
	this.shape_79.setTransform(238.2,138.7,0.648,0.648);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhABxIAAjhIA1AAQAgAAAVAbQAXAfAAA2QAAA3gXAeQgVAcggAAgAgWBMIAIAAQAOAAAKgSQAKgVAAglQAAglgKgUQgKgSgOAAIgIAAg");
	this.shape_80.setTransform(229.5,138.7,0.648,0.648);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAoByIhBiAIgBAAIABB/IgpAAIAAjiIAhAAIAoBTQAMAXAHAQIABAAIgBgnIAAhTIApAAIAADjg");
	this.shape_81.setTransform(215.5,138.7,0.648,0.648);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAaCYIgKg0IgjAAIgKA0IgnAAIA0jiIAhAAIA0DigAgMBDIAXAAIgLhCIAAAAgAgWhsQAfgNAXgeIAGAgQgRASgcALg");
	this.shape_82.setTransform(205.7,136.2,0.648,0.648);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAUBxIgihfIgIAAIAABfIgqAAIAAjhIA4AAQAVAAAQASQAQATAAAcQAAARgGAPQgGAOgKAFIAqBtgAgWgQIAKAAQAHAAAEgIQAEgJAAgOQAAgOgEgIQgEgIgHAAIgKAAg");
	this.shape_83.setTransform(197,138.7,0.648,0.648);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUBxIAAi9IgnAAIAAgkIB3AAIAAAkIgnAAIAAC9g");
	this.shape_84.setTransform(187.8,138.7,0.648,0.648);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgvBxIAAjhIArAAIAAC8IA0AAIAAAlg");
	this.shape_85.setTransform(181.5,138.7,0.648,0.648);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AguBxIAAjhIBYAAIAAAkIgtAAIAAA6IAkAAIAAAkIgkAAIAAA6IAyAAIAAAlg");
	this.shape_86.setTransform(174.2,138.7,0.648,0.648);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag3BxIAAjhIAyAAQAUAAAOAPQAPAQAAAcQAAANgEANQgFAMgHAEQAKADAJANQAJARAAAWQAAAggRATQgQASgYAAgAgQBQIALAAQAGAAAGgJQAHgKAAgRQAAgRgHgLQgGgJgGAAIgLAAgAgQgYIAHAAQAGAAADgHQAFgIAAgNQAAgNgFgIQgDgHgGAAIgHAAg");
	this.shape_87.setTransform(166.1,138.7,0.648,0.648);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgvBxIAAjhIAqAAIAAC8IA1AAIAAAlg");
	this.shape_88.setTransform(236.8,105.7,0.648,0.648);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAbBxIgKg0IgkAAIgKA0IgnAAIA0jhIAhAAIA0DhgAgMAdIAWAAIgKhAIAAAAg");
	this.shape_89.setTransform(228.2,105.7,0.648,0.648);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AghBWQgVggAAg2QAAg1AVggQAUgfAgAAQAXAAANALIgCAoQgLgMgRAAQgRAAgIAXQgKAVAAAhQAAAiAKAVQAIAWATAAQASAAAJgNIgCArQgNAJgUAAQggAAgUgeg");
	this.shape_90.setTransform(219.6,105.7,0.648,0.648);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgtBmIgCgrQAPASATAAQASAAgBgUQABgVgTgZQgfgkAAghQAAgaAOgPQAOgQAWgBQAVAAALAKIgCAnQgLgKgMAAQgOAAgBAQQAAARARAWQAiAnAAAkQAAAegPARQgPAQgZAAQgZAAgNgOg");
	this.shape_91.setTransform(211.9,105.7,0.648,0.648);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAaBxIgJg0IgjAAIgKA0IgoAAIA0jhIAhAAIA0DhgAgMAdIAWAAIgKhAIAAAAg");
	this.shape_92.setTransform(203.7,105.7,0.648,0.648);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ag2BxIAAjhIA2AAQAXAAAQASQAQATAAAcQAAAdgQASQgQASgXAAIgMAAIAABfgAgMgQIAJAAQAFAAAGgIQAFgJAAgOQAAgOgFgIQgGgIgFAAIgJAAg");
	this.shape_93.setTransform(196.3,105.7,0.648,0.648);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgUBxIAAhiIgxh/IArAAIAUAyIAGAZIABAAIAchLIApAAIgxB+IAABjg");
	this.shape_94.setTransform(183.5,105.7,0.648,0.648);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag1BUQgUgggBg0QABg0AUgfQAUghAhAAQAhAAAVAhQAVAfgBA0QABA0gVAgQgVAhghgBQggABgVghgAgUg2QgJAWAAAgQAAAgAJAWQAJAWALAAQANAAAIgWQAKgWgBggQABgggKgWQgIgVgNgBQgLABgJAVg");
	this.shape_95.setTransform(174.1,105.7,0.648,0.648);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgtBmIgCgrQAOASAVAAQAQAAABgUQAAgVgTgZQgfgkAAghQAAgaAPgPQANgQAWgBQAWAAALAKIgDAnQgKgKgNAAQgOAAAAAQQgBARARAWQAiAnAAAkQAAAegPARQgOAQgZAAQgZAAgOgOg");
	this.shape_96.setTransform(165.2,105.7,0.648,0.648);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#929496").s().p("AAaByIgJg1IgkAAIgKA1IgnAAIA0jjIAhAAIA0DjgAgMAcIAXAAIgLg/IAAAAg");
	this.shape_97.setTransform(249.1,72.7,0.648,0.648);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#929496").s().p("AAVBxIAAhfIgpAAIAABfIgrAAIAAjhIArAAIAABeIApAAIAAheIArAAIAADhg");
	this.shape_98.setTransform(239.5,72.7,0.648,0.648);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#929496").s().p("AghBWQgVgfAAg3QAAg0AVghQAVgeAfAAQAXgBANALIgCApQgKgMgRAAQgSAAgIAWQgKAVAAAhQAAAiAKAVQAIAWATAAQASAAAKgMIgDAqQgLAKgWAAQgggBgUgeg");
	this.shape_99.setTransform(230.4,72.7,0.648,0.648);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#929496").s().p("AgtBjQgSgRAAgdIAAinIArAAIAACkQAAANAHAHQAFAHAIAAQAKAAAFgHQAHgHgBgNIAAikIArAAIAACnQgBAdgSARQgRAQgcAAQgbAAgSgQg");
	this.shape_100.setTransform(221.2,72.8,0.648,0.648);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#929496").s().p("AghBWQgVgfAAg3QAAg0AVghQAVgeAfAAQAVgBAPALIgCApQgKgMgRAAQgSAAgIAWQgKAVAAAhQAAAiAKAVQAIAWATAAQATAAAIgMIgCAqQgLAKgWAAQgggBgUgeg");
	this.shape_101.setTransform(212.2,72.7,0.648,0.648);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#929496").s().p("AgtBnIgCgtQAPAUATAAQASgBAAgUQAAgVgTgZQgfgkAAghQAAgaAPgPQAOgRAVABQAWgBALAKIgDAnQgKgKgNAAQgOAAAAAQQgBASARAVQAiAnAAAlQAAAdgPARQgOARgZAAQgYAAgPgOg");
	this.shape_102.setTransform(204.6,72.7,0.648,0.648);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#929496").s().p("AguBxIAAjhIBYAAIAAAkIgtAAIAAA7IAkAAIAAAjIgkAAIAAA6IAyAAIAAAlg");
	this.shape_103.setTransform(197.7,72.7,0.648,0.648);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#929496").s().p("AgtBnIgCgtQAPAUATAAQASgBAAgUQAAgVgTgZQgegkgBghQABgaAOgPQAOgRAVABQAXgBAKAKIgDAnQgKgKgNAAQgPAAABAQQAAASAQAVQAiAnAAAlQAAAdgPARQgPARgZAAQgXAAgPgOg");
	this.shape_104.setTransform(186.4,72.7,0.648,0.648);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#929496").s().p("Ag1BUQgVgfAAg1QAAgzAVggQAVggAgAAQAhAAAVAgQAVAgAAAzQAAA1gVAfQgVAhghAAQghAAgUghgAgUg2QgJAWAAAgQAAAgAJAXQAJAVALAAQAMAAAKgVQAJgWAAghQAAgggJgWQgKgVgMgBQgLABgJAVg");
	this.shape_105.setTransform(177.4,72.7,0.648,0.648);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#929496").s().p("AAoBxIgshVQgMgWgJgUIgBAAIABApIAABWIgoAAIAAjhIAgAAIAnBSQAOAZAGAOIAAAAIgBh5IAqAAIAADhg");
	this.shape_106.setTransform(166.8,72.7,0.648,0.648);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#929496").s().p("Ag1BVQgVghABg0QgBg0AVgfQAVggAggBQAiABAUAgQAUAfAAA0QAAA0gUAhQgVAfghAAQggAAgVgfgAgUg2QgJAWAAAgQAAAhAJAVQAIAWAMAAQAMAAAJgWQAJgVAAghQAAgggJgWQgJgWgMABQgMgBgIAWg");
	this.shape_107.setTransform(251.9,39.7,0.648,0.648);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#929496").s().p("AghBWQgVggAAg2QAAg1AVgfQAUggAgAAQAXAAANAMIgCAnQgKgLgRAAQgSAAgIAVQgKAWAAAhQAAAiAKAVQAIAWATAAQATAAAIgMIgCAqQgMAJgVAAQggABgUgfg");
	this.shape_108.setTransform(242.8,39.7,0.648,0.648);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#929496").s().p("AgUBxIAAjhIApAAIAADhg");
	this.shape_109.setTransform(236.3,39.7,0.648,0.648);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#929496").s().p("AAYBxIgYhJIAAAAIgHAZIgSAwIgpAAIAshzIgphuIArAAIAUBCIABAAIAWhCIApAAIgoBuIArBzg");
	this.shape_110.setTransform(229.4,39.7,0.648,0.648);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#929496").s().p("AguCYIAAjhIBYAAIAAAlIgtAAIAAA3IAkAAIAAAlIgkAAIAAA8IAyAAIAAAkgAgXhrQAhgNAVgfIAGAgQgRATgcAKg");
	this.shape_111.setTransform(221.6,37.2,0.648,0.648);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#929496").s().p("AgLBxIgXhMIgLgmIAAAAQAAATgBASIgFBNIgnAAIANjhIAiAAIArCXIAAAAIANgyIAfhlIAiAAIANDhIgoAAIgDhNQgCgTABgSIgBAAIgKAmIgXBMg");
	this.shape_112.setTransform(211.1,39.7,0.648,0.648);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#929496").s().p("Ag1BVQgVghABg0QgBg0AVgfQAVggAggBQAhABAVAgQAUAfABA0QgBA0gUAhQgVAfghAAQggAAgVgfgAgUg2QgKAWABAgQgBAhAKAVQAIAWAMAAQAMAAAJgWQAJgVAAghQAAgggJgWQgJgWgMABQgMgBgIAWg");
	this.shape_113.setTransform(195.4,39.7,0.648,0.648);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#929496").s().p("AhABxIAAjhIA1AAQAgAAAVAcQAXAeAAA2QAAA3gXAfQgVAbggAAgAgWBMIAIAAQAOAAAKgSQAKgUAAgmQAAgkgKgVQgKgSgOAAIgIAAg");
	this.shape_114.setTransform(185.1,39.7,0.648,0.648);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#929496").s().p("Ag1BVQgVghABg0QgBg0AVgfQAVggAggBQAiABAUAgQAUAfAAA0QAAA0gUAhQgUAfgiAAQggAAgVgfgAgUg2QgJAWAAAgQAAAhAJAVQAJAWALAAQAMAAAKgWQAIgVABghQgBgggIgWQgKgWgMABQgLgBgJAWg");
	this.shape_115.setTransform(174.6,39.7,0.648,0.648);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#929496").s().p("AgUBxIAAi9IgnAAIAAgkIB3AAIAAAkIgnAAIAAC9g");
	this.shape_116.setTransform(165.7,39.7,0.648,0.648);

	this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},71).to({state:[]},185).wait(113));

	// Capa 8
	this.instance_3 = new lib.pascal();
	this.instance_3.setTransform(91,133.8,0.448,0.448);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({scaleX:0.51,scaleY:0.51,y:142.5,alpha:1},14,cjs.Ease.get(1)).to({_off:true},185).wait(113));

	// Capa 3
	this.instance_4 = new lib.Símbolo1();
	this.instance_4.setTransform(150,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},214).wait(113));

	// Capa 1
	this.instance_5 = new lib.imagen_fondo();
	this.instance_5.setTransform(150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:0.738},8,cjs.Ease.get(1)).to({_off:true},234).wait(113));

	// Capa 2
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_117.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_117).to({_off:true},256).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;