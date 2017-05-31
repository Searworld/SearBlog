(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/a.png", id:"a"},
		{src:"images/apng复制.png", id:"apng复制"},
		{src:"images/b.png", id:"b"},
		{src:"images/c.png", id:"c"},
		{src:"images/count_bg.png", id:"count_bg"},
		{src:"images/count_man.png", id:"count_man"},
		{src:"images/count_man_2.png", id:"count_man_2"},
		{src:"images/count_man_3.png", id:"count_man_3"},
		{src:"images/count_txt.png", id:"count_txt"},
		{src:"images/cover_bg_1.png", id:"cover_bg_1"},
		{src:"images/cover_bg_1png复制.png", id:"cover_bg_1png复制"},
		{src:"images/cover_bg_1png复制2.png", id:"cover_bg_1png复制2"},
		{src:"images/cover_bg_2png复制.png", id:"cover_bg_2png复制"},
		{src:"images/cover_bg_top.png", id:"cover_bg_top"},
		{src:"images/cover_bg_toppng复制.png", id:"cover_bg_toppng复制"},
		{src:"images/cover_bg_toppng复制2.png", id:"cover_bg_toppng复制2"},
		{src:"images/cover_bg_toppng复制5.png", id:"cover_bg_toppng复制5"},
		{src:"images/cover_man_1.png", id:"cover_man_1"},
		{src:"images/cover_man_2png复制.png", id:"cover_man_2png复制"},
		{src:"images/cover_title.png", id:"cover_title"},
		{src:"images/cp_1.png", id:"cp_1"},
		{src:"images/cp_2.png", id:"cp_2"},
		{src:"images/cp_3.png", id:"cp_3"},
		{src:"images/d.png", id:"d"},
		{src:"images/denglong.png", id:"denglong"},
		{src:"images/dl_bottom.png", id:"dl_bottom"},
		{src:"images/dl_top.png", id:"dl_top"},
		{src:"images/q1_a.png", id:"q1_a"},
		{src:"images/q1_b.png", id:"q1_b"},
		{src:"images/q1_c.png", id:"q1_c"},
		{src:"images/q1_d.png", id:"q1_d"},
		{src:"images/q2_a.png", id:"q2_a"},
		{src:"images/q2_b.png", id:"q2_b"},
		{src:"images/q2_c.png", id:"q2_c"},
		{src:"images/q2_d.png", id:"q2_d"},
		{src:"images/q3_a.png", id:"q3_a"},
		{src:"images/q3_b.png", id:"q3_b"},
		{src:"images/q3_c.png", id:"q3_c"},
		{src:"images/q3_d.png", id:"q3_d"},
		{src:"images/q4_a.png", id:"q4_a"},
		{src:"images/q4_b.png", id:"q4_b"},
		{src:"images/q4_c.png", id:"q4_c"},
		{src:"images/q4_d.png", id:"q4_d"},
		{src:"images/r1_l.png", id:"r1_l"},
		{src:"images/r1_r.png", id:"r1_r"},
		{src:"images/r2_l.png", id:"r2_l"},
		{src:"images/r2_r.png", id:"r2_r"},
		{src:"images/r3_l.png", id:"r3_l"},
		{src:"images/r3_r.png", id:"r3_r"},
		{src:"images/r4_l.png", id:"r4_l"},
		{src:"images/r4_r.png", id:"r4_r"},
		{src:"images/r_man_1.png", id:"r_man_1"},
		{src:"images/r_man_2_1.png", id:"r_man_2_1"},
		{src:"images/r_man_2_2.png", id:"r_man_2_2"},
		{src:"images/r_man_3.png", id:"r_man_3"},
		{src:"images/result_b_1.png", id:"result_b_1"},
		{src:"images/result_b_2.png", id:"result_b_2"},
		{src:"images/result_b_3.png", id:"result_b_3"},
		{src:"images/topic_1_bg1png复制4.png", id:"topic_1_bg1png复制4"},
		{src:"images/topic_1_bg2png复制.png", id:"topic_1_bg2png复制"},
		{src:"images/topic_2_bg1.png", id:"topic_2_bg1"},
		{src:"images/topic_2_bg2.png", id:"topic_2_bg2"},
		{src:"images/topic_2_bg3.png", id:"topic_2_bg3"},
		{src:"images/topic_2_bg4.png", id:"topic_2_bg4"},
		{src:"images/topic_3_bg1.png", id:"topic_3_bg1"},
		{src:"images/topic_3_bg2.png", id:"topic_3_bg2"},
		{src:"images/topic_4_bg1.png", id:"topic_4_bg1"},
		{src:"images/topic_4_bg2.png", id:"topic_4_bg2"},
		{src:"images/zhz.png", id:"zhz"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.a = function() {
	this.initialize(img.a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.apng复制 = function() {
	this.initialize(img.apng复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.count_bg = function() {
	this.initialize(img.count_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_man = function() {
	this.initialize(img.count_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_2 = function() {
	this.initialize(img.count_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_3 = function() {
	this.initialize(img.count_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_txt = function() {
	this.initialize(img.count_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,331);


(lib.cover_bg_1 = function() {
	this.initialize(img.cover_bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_1png复制 = function() {
	this.initialize(img.cover_bg_1png复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_1png复制2 = function() {
	this.initialize(img.cover_bg_1png复制2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_2png复制 = function() {
	this.initialize(img.cover_bg_2png复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_top = function() {
	this.initialize(img.cover_bg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_bg_toppng复制 = function() {
	this.initialize(img.cover_bg_toppng复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_bg_toppng复制2 = function() {
	this.initialize(img.cover_bg_toppng复制2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_bg_toppng复制5 = function() {
	this.initialize(img.cover_bg_toppng复制5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_man_1 = function() {
	this.initialize(img.cover_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_man_2png复制 = function() {
	this.initialize(img.cover_man_2png复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_title = function() {
	this.initialize(img.cover_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,413);


(lib.cp_1 = function() {
	this.initialize(img.cp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_2 = function() {
	this.initialize(img.cp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_3 = function() {
	this.initialize(img.cp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.d = function() {
	this.initialize(img.d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.denglong = function() {
	this.initialize(img.denglong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.dl_bottom = function() {
	this.initialize(img.dl_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.dl_top = function() {
	this.initialize(img.dl_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.q1_a = function() {
	this.initialize(img.q1_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_b = function() {
	this.initialize(img.q1_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_c = function() {
	this.initialize(img.q1_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_d = function() {
	this.initialize(img.q1_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_a = function() {
	this.initialize(img.q2_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_b = function() {
	this.initialize(img.q2_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_c = function() {
	this.initialize(img.q2_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_d = function() {
	this.initialize(img.q2_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_a = function() {
	this.initialize(img.q3_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_b = function() {
	this.initialize(img.q3_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_c = function() {
	this.initialize(img.q3_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_d = function() {
	this.initialize(img.q3_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_a = function() {
	this.initialize(img.q4_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_b = function() {
	this.initialize(img.q4_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_c = function() {
	this.initialize(img.q4_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_d = function() {
	this.initialize(img.q4_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.r1_l = function() {
	this.initialize(img.r1_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r1_r = function() {
	this.initialize(img.r1_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,539);


(lib.r2_l = function() {
	this.initialize(img.r2_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r2_r = function() {
	this.initialize(img.r2_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r3_l = function() {
	this.initialize(img.r3_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r3_r = function() {
	this.initialize(img.r3_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r4_l = function() {
	this.initialize(img.r4_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r4_r = function() {
	this.initialize(img.r4_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r_man_1 = function() {
	this.initialize(img.r_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.r_man_2_1 = function() {
	this.initialize(img.r_man_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_2_2 = function() {
	this.initialize(img.r_man_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_3 = function() {
	this.initialize(img.r_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.result_b_1 = function() {
	this.initialize(img.result_b_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,563,90);


(lib.result_b_2 = function() {
	this.initialize(img.result_b_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.result_b_3 = function() {
	this.initialize(img.result_b_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,82);


(lib.topic_1_bg1png复制4 = function() {
	this.initialize(img.topic_1_bg1png复制4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_1_bg2png复制 = function() {
	this.initialize(img.topic_1_bg2png复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_2_bg1 = function() {
	this.initialize(img.topic_2_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg2 = function() {
	this.initialize(img.topic_2_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg3 = function() {
	this.initialize(img.topic_2_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg4 = function() {
	this.initialize(img.topic_2_bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_3_bg1 = function() {
	this.initialize(img.topic_3_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_3_bg2 = function() {
	this.initialize(img.topic_3_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_4_bg1 = function() {
	this.initialize(img.topic_4_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.topic_4_bg2 = function() {
	this.initialize(img.topic_4_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.zhz = function() {
	this.initialize(img.zhz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.tpeople = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_1_bg2png复制();

	this.instance_1 = new lib.topic_1_bg1png复制4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.result1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.q5bgss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.q5_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
		this.parent.parent.gotoAndPlay(6);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A18DIIAAmPMAr5AAAIAAGPg");
	var mask_graphics_4 = new cjs.Graphics().p("A2QF8IAAr3MAshAAAIAAL3g");
	var mask_graphics_9 = new cjs.Graphics().p("A2kKKIAA0TMAtJAAAIAAUTg");
	var mask_graphics_14 = new cjs.Graphics().p("A2QOGIAA8LMAshAAAIAAcLg");
	var mask_graphics_19 = new cjs.Graphics().p("A2kQuMAAAghbMAtJAAAMAAAAhbg");
	var mask_graphics_24 = new cjs.Graphics().p("A2QUeMAAAgo7MAshAAAMAAAAo7g");
	var mask_graphics_29 = new cjs.Graphics().p("A2GXcMAAAgu3MAsNAAAMAAAAu3g");
	var mask_graphics_34 = new cjs.Graphics().p("A2Qa3MAAAg1tMAshAAAMAAAA1tg");
	var mask_graphics_60 = new cjs.Graphics().p("A2Qa3MAAAg1tMAshAAAMAAAA1tg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:114.6,y:5.1}).wait(4).to({graphics:mask_graphics_4,x:116.6,y:25.1}).wait(5).to({graphics:mask_graphics_9,x:118.6,y:48.1}).wait(5).to({graphics:mask_graphics_14,x:116.5,y:75.3}).wait(5).to({graphics:mask_graphics_19,x:118.6,y:90.1}).wait(5).to({graphics:mask_graphics_24,x:116.6,y:114.1}).wait(5).to({graphics:mask_graphics_29,x:115.6,y:133.1}).wait(5).to({graphics:mask_graphics_34,x:116.5,y:159.1}).wait(26).to({graphics:mask_graphics_60,x:116.5,y:159.1}).wait(1));

	// q5_text
	this.instance = new lib.count_txt();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.2,25.1);


(lib.q5_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// q5_man
	this.instance = new lib.count_man();

	this.instance_1 = new lib.count_man_2();

	this.instance_2 = new lib.count_man_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.q4man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_4_bg1();

	this.instance_1 = new lib.topic_4_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.q3tops = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.q2top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.q2man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_2_bg1();

	this.instance_1 = new lib.topic_2_bg2();

	this.instance_2 = new lib.topic_2_bg3();

	this.instance_3 = new lib.topic_2_bg4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.q2_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egw3AGeIAAs8MBhvAAAIAAM8g");
	this.shape.setTransform(312.9,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,625.7,83);


(lib.q2_c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxsAGQIAAsfMBjZAAAIAAMfg");
	this.shape.setTransform(318.2,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636.3,80);


(lib.q2_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxlAGjIAAtGMBjLAAAIAANGg");
	this.shape.setTransform(317.5,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,635,84);


(lib.q2_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx5AGaIAAs0MBjzAAAIAAM0g");
	this.shape.setTransform(319.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,638.9,82.2);


(lib.q1btnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EguaAGQIAAsfMBc0AAAIAAMfg");
	this.shape.setTransform(297.1,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,594.2,80);


(lib.q1btnc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu4AGQIAAsfMBdxAAAIAAMfg");
	this.shape.setTransform(300.1,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600.2,80);


(lib.q1btnb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EguuAGQIAAsfMBddAAAIAAMfg");
	this.shape.setTransform(299.1,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,598.2,80);


(lib.q1btna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EguuAGZIAAsyMBddAAAIAAMyg");
	this.shape.setTransform(299.1,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,598.2,82);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_man_1();

	this.instance_1 = new lib.cover_man_2png复制();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.huhuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2HGnIAAtOMAsPAAAIAANOg");
	this.shape.setTransform(141.6,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.2,84.8);


(lib.hongtop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_toppng复制5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.hong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_toppng复制2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.font = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,525,413);


(lib.补间74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_2();
	this.instance.setTransform(-132,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-40,264,80);


(lib.补间70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_2();
	this.instance.setTransform(-132,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-40,264,80);


(lib.补间69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_3();
	this.instance.setTransform(-136,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-41,272,82);


(lib.补间68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_3();
	this.instance.setTransform(-136,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-41,272,82);


(lib.补间67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_1();
	this.instance.setTransform(-281.5,-45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAPAAIAAC6IlzAAIAAi6IAAg7IAAh+IFzAAIAAB+IFWAAIAAA7IlWAAIlzAAAlkg7IFzAA");
	this.shape.setTransform(8.8,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlkC6IAAi6IFyAAIAAC6gAAOAAIlyAAIAAg7IFyAAIlyAAIAAh+IFyAAIAAB+IFXAAIAAA7gAlkAAg");
	this.shape_1.setTransform(8.8,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.5,-45,563,90);


(lib.补间66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_1();
	this.instance.setTransform(-281.5,-45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Alkg7IAAh+IFzAAIAAB+IFWAAIAAA7IlWAAIlzAAIAAg7IFzAAAAPAAIAAC6IlzAAIAAi6");
	this.shape.setTransform(8.8,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlkC6IAAi6IAAg7IFyAAIlyAAIAAh+IFyAAIAAB+IFXAAIAAA7IlXAAIlyAAIFyAAIAAC6g");
	this.shape_1.setTransform(8.8,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.5,-45,563,90);


(lib.补间59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_3();
	this.instance.setTransform(-122,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-225,244,450);


(lib.补间58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_2();
	this.instance.setTransform(-122,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-225,244,450);


(lib.补间57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_1();
	this.instance.setTransform(-122,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-225,244,450);


(lib.补间52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhz();
	this.instance.setTransform(-72.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-72,145,144);


(lib.补间51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_2_2();
	this.instance.setTransform(-149.5,-258.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-258.5,299,517);


(lib.补间50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_2_1();
	this.instance.setTransform(-149.5,-258.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-258.5,299,517);


(lib.补间42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.duilian_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// as
	this.text = new cjs.Text("this.stop()", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 144;
	this.text.setTransform(-212.8,124.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	// 4
	this.instance = new lib.dl_top();
	this.instance.setTransform(0,-17);

	this.instance_1 = new lib.dl_bottom();
	this.instance_1.setTransform(0,522);

	this.instance_2 = new lib.r4_r();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).wait(1));

	// 3
	this.instance_3 = new lib.dl_bottom();
	this.instance_3.setTransform(0,522);

	this.instance_4 = new lib.dl_top();
	this.instance_4.setTransform(0,-17);

	this.instance_5 = new lib.r3_r();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},2).to({state:[]},1).wait(1));

	// 2
	this.instance_6 = new lib.dl_top();
	this.instance_6.setTransform(0,-17);

	this.instance_7 = new lib.dl_bottom();
	this.instance_7.setTransform(0,522);

	this.instance_8 = new lib.r2_r();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[]},1).wait(2));

	// 1
	this.instance_9 = new lib.r1_r();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,539);


(lib.duilian_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 4
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(0,540);

	this.instance_1 = new lib.dl_top();
	this.instance_1.setTransform(-6,0);

	this.instance_2 = new lib.r4_l();
	this.instance_2.setTransform(7,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).wait(1));

	// 3
	this.instance_3 = new lib.dl_bottom();
	this.instance_3.setTransform(0,540);

	this.instance_4 = new lib.dl_top();

	this.instance_5 = new lib.r3_l();
	this.instance_5.setTransform(8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},2).to({state:[]},1).wait(1));

	// 2
	this.instance_6 = new lib.dl_top();

	this.instance_7 = new lib.dl_bottom();
	this.instance_7.setTransform(0,543);

	this.instance_8 = new lib.r2_l();
	this.instance_8.setTransform(10,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[]},1).wait(2));

	// 1
	this.instance_9 = new lib.dl_bottom();
	this.instance_9.setTransform(0,540);

	this.instance_10 = new lib.dl_top();

	this.instance_11 = new lib.r1_l();
	this.instance_11.setTransform(10,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,574);


(lib.denglong11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.denglong();
	this.instance.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:24.4,x:105.1,y:6.6},0).wait(5).to({rotation:0,x:0,y:12},0).wait(5).to({rotation:-24.2,x:-92.7,y:59.9},0).wait(5).to({rotation:0,x:0,y:12},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,130,480);


(lib.d_q4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxvAHYIAAuvMBjfAAAIAAOvg");
	this.shape.setTransform(318.4,47.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636.8,94.4);


(lib.currentmcs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d
	this.instance = new lib.d();
	this.instance.setTransform(0,294);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(1,191);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(1,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.currentmc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d
	this.instance = new lib.d();
	this.instance.setTransform(0,266);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,182);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(-1,89);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.currentmc3s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d
	this.instance = new lib.d();
	this.instance.setTransform(1,277);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,189);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(0,99);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// currentmc3s
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.currentmc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d
	this.instance = new lib.d();
	this.instance.setTransform(0,276);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,188);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(0,96);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a
	this.instance_3 = new lib.apng复制();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coverbtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwHAccMAAAg43MBgPAAAMAAAA43g");
	this.shape.setTransform(308.1,182.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616.2,364.1);


(lib.covebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_1png复制();

	this.instance_1 = new lib.cover_bg_toppng复制();

	this.instance_2 = new lib.cover_bg_2png复制();

	this.instance_3 = new lib.cover_bg_1png复制2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.instance_2}]},4).to({state:[{t:this.instance_1},{t:this.instance},{t:this.instance_2},{t:this.instance_3}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.c_q4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxfAF/IAAr+MBi+AAAIAAL+g");
	this.shape.setTransform(316.8,38.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633.6,76.8);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_3_bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.buttonssd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvVAGZIAAsyMBerAAAIAAMyg");
	this.shape.setTransform(303.1,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,82);


(lib.buttonssc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvLAGQIAAsfMBeXAAAIAAMfg");
	this.shape.setTransform(302.1,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604.2,80);


(lib.buttonssb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgutAGQIAAsfMBdbAAAIAAMfg");
	this.shape.setTransform(299.1,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,598.2,80);


(lib.buttonss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgutAGVIAAspMBdbAAAIAAMpg");
	this.shape.setTransform(299.1,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,598.2,81);


(lib.button_q4d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvVAGGIAAsLMBerAAAIAAMLg");
	this.shape.setTransform(303.1,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,78);


(lib.button_q4c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvpAGBIAAsBMBfTAAAIAAMBg");
	this.shape.setTransform(305.1,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,610.2,77);


(lib.button_q4b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvfAGBIAAsBMBe/AAAIAAMBg");
	this.shape.setTransform(304.1,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,608.2,77);


(lib.button_q4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvzAGGIAAsLMBfnAAAIAAMLg");
	this.shape.setTransform(306.1,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,612.2,78);


(lib.button_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgtIAHpIAAvRMBaRAAAIAAPRg");
	this.shape.setTransform(289,48.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,578,97.9);


(lib.bufu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0pGQIAAsgMApTAAAIAAMgg");
	this.shape.setTransform(132.2,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.4,80.2);


(lib.btn_huhuans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A2KG4IAAtwMAsVAAAIAANwg");
	this.shape.setTransform(142,44.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.9,88.2);


(lib.btn_bufus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1jGVIAAspMArHAAAIAAMpg");
	this.shape.setTransform(138,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,81);


(lib.btn_agains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtJAG4IAAtvMBaSAAAIAANvg");
	this.shape.setTransform(289,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,578,88);


(lib.b_q4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxfAF/IAAr+MBi+AAAIAAL+g");
	this.shape.setTransform(316.8,38.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633.6,76.8);


(lib.aaa_q1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwbAGZIAAsyMBg3AAAIAAMyg");
	this.shape.setTransform(310.1,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,620.2,82);


(lib.tman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		var status=0;
		this.q1btna.addEventListener("click", fl_MouseClickHandler_60.bind(this));
		selected = 0;
		function fl_MouseClickHandler_60()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				score+=1;
				selected=1
			   this.currentmcs.gotoAndStop(1);
			   this.gotoAndPlay(32);
				status=1;
				
			
				
				
				}
			// 结束您的自定义代码
		}
		
		
		
		this.q1btnb.addEventListener("click", b.bind(this));
		
		function b()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				score+=2;
				selected=2
			this.currentmcs.gotoAndStop(2);
			this.gotoAndPlay(32);
			status=1;
				
			}
			// 结束您的自定义代码
		}
		
		this.q1btnc.addEventListener("click", c.bind(this));
		
		function c()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				score+=3;
				selected=3
			this.currentmcs.gotoAndStop(3);
			this.gotoAndPlay(31);
			status=1;
				
			}
			// 结束您的自定义代码
		}
		this.q1btnd.addEventListener("click", d.bind(this));
		
		function d()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				score+=4;
				selected=4
			this.currentmcs.gotoAndStop(4);
			this.gotoAndPlay(32);
			status=1;
			
			}
			// 结束您的自定义代码
		}
	}
	this.frame_36 = function() {
		if(selected==4){
			this.currentmcs.gotoAndStop(0)
		}
	}
	this.frame_41 = function() {
		if(selected==3){
			this.currentmcs.gotoAndStop(0)
			}
	}
	this.frame_46 = function() {
		if(selected==2){
			this.currentmcs.gotoAndStop(0)
			}
	}
	this.frame_52 = function() {
		if(selected==1){
			this.currentmcs.gotoAndStop(0)
			}
	}
	this.frame_65 = function() {
		this.stop();
		this.parent.gotoAndPlay(2)
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(6).call(this.frame_36).wait(5).call(this.frame_41).wait(5).call(this.frame_46).wait(6).call(this.frame_52).wait(13).call(this.frame_65).wait(1));

	// Actions
	this.aaa_q1 = new lib.aaa_q1();
	this.aaa_q1.setTransform(276.1,387,1,1,0,0,0,310.1,41);
	this.aaa_q1.alpha = 0.012;
	this.aaa_q1._off = true;
	new cjs.ButtonHelper(this.aaa_q1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.aaa_q1).wait(36).to({_off:false},0).wait(30));

	// currentmcs
	this.currentmcs = new lib.currentmcs();
	this.currentmcs.setTransform(-0.5,381.5,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmcs).wait(66));

	// q1btn
	this.q1btnd = new lib.q1btnd();
	this.q1btnd.setTransform(263.1,678,1,1,0,0,0,297.1,40);
	this.q1btnd.alpha = 0.012;
	new cjs.ButtonHelper(this.q1btnd, 0, 1, 1);

	this.q1btnc = new lib.q1btnc();
	this.q1btnc.setTransform(266.1,576,1,1,0,0,0,300.1,40);
	this.q1btnc.alpha = 0.012;
	new cjs.ButtonHelper(this.q1btnc, 0, 1, 1);

	this.q1btnb = new lib.q1btnb();
	this.q1btnb.setTransform(265.1,476,1,1,0,0,0,299.1,40);
	this.q1btnb.alpha = 0.012;
	new cjs.ButtonHelper(this.q1btnb, 0, 1, 1);

	this.q1btna = new lib.q1btna();
	this.q1btna.setTransform(265.1,387,1,1,0,0,0,299.1,41);
	this.q1btna.alpha = 0.012;
	new cjs.ButtonHelper(this.q1btna, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q1btna},{t:this.q1btnb},{t:this.q1btnc},{t:this.q1btnd}]},30).wait(36));

	// a
	this.instance = new lib.补间6("synched",0);
	this.instance.setTransform(248,885);
	this.instance._off = true;

	this.instance_1 = new lib.补间7("synched",0);
	this.instance_1.setTransform(246.5,383);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true,x:246.5,y:383},9).wait(33).to({_off:false,x:248,y:885},8).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},9).wait(33).to({startPosition:0},0).to({_off:true,x:248,y:885},8).wait(6));

	// b
	this.instance_2 = new lib.补间8("synched",0);
	this.instance_2.setTransform(248,870);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间9("synched",0);
	this.instance_3.setTransform(248,472);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({_off:true,y:472},8).wait(25).to({_off:false,y:870},8).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},8).wait(25).to({startPosition:0},0).to({_off:true,y:870},8).wait(12));

	// c
	this.instance_4 = new lib.补间12("synched",0);
	this.instance_4.setTransform(240,878);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间13("synched",0);
	this.instance_5.setTransform(248,572);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({_off:true,x:248,y:572},8).wait(17).to({_off:false,x:240,y:878},9).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},8).wait(17).to({startPosition:0},0).to({_off:true,x:240,y:878},9).wait(16));

	// d
	this.instance_6 = new lib.补间14("synched",0);
	this.instance_6.setTransform(238,878);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({x:246.5,y:675.6},7).wait(10).to({startPosition:0},0).to({x:238,y:878},7).to({_off:true},1).wait(22));

	// tpeople
	this.instance_7 = new lib.tpeople();
	this.instance_7.setTransform(276.5,-627.7,1,1,0,0,0,276.5,212.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({y:114.5},9).wait(38).to({y:-627.7},7).wait(1));

	// hongtop
	this.instance_8 = new lib.hongtop1();
	this.instance_8.setTransform(266,-402,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({y:-216},8).wait(46).to({y:-402},6).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-491,640,178);


(lib.result44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间57("synched",0);
	this.instance.setTransform(122,225);

	this.instance_1 = new lib.补间58("synched",0);
	this.instance_1.setTransform(122,225);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间59("synched",0);
	this.instance_2.setTransform(122,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.result33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间52("synched",0);
	this.instance.setTransform(72.5,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},6).to({rotation:180},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.result22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间50("synched",0);
	this.instance.setTransform(149.5,250.5);

	this.instance_1 = new lib.补间51("synched",0);
	this.instance_1.setTransform(149.5,250.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,299,517);


(lib.q5bgs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// q5_text
	this.q5_text = new lib.q5_text();
	this.q5_text.setTransform(338.5,616.5,1,1,0,0,0,129.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.q5_text).wait(1));

	// q5_man
	this.q5_man = new lib.q5_man();
	this.q5_man.setTransform(334,284,1,1,0,0,0,95,145);

	this.timeline.addTween(cjs.Tween.get(this.q5_man).wait(1));

	// bg
	this.instance = new lib.q5bgss();
	this.instance.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.q4top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.stop();
		var status=0;
		this.button_q4.addEventListener("click", fl_MouseClickHandler_59.bind(this));
		var selected=0;
		function fl_MouseClickHandler_59()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
			score+=1;
				selected=1;
			this.currentmc4.gotoAndStop(1);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
		
		this.button_q4b.addEventListener("click", b.bind(this));
		
		function b()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
			score+=2;
					selected=2;
			this.currentmc4.gotoAndStop(2);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
		
		this.button_q4c.addEventListener("click", c.bind(this));
		
		function c()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
			score+=3;
			selected=3;
			this.currentmc4.gotoAndStop(3);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
		
		this.button_q4d.addEventListener("click",d.bind(this));
		
		function d()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
			score+=4;
			selected=4;
			this.currentmc4.gotoAndStop(4);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
	}
	this.frame_34 = function() {
		if(	selected==4){
		this.currentmc4.gotoAndStop(0);	
			
			}
	}
	this.frame_39 = function() {
		if(selected==3){
		      this.currentmc4.gotoAndStop(0);		
				
			}
	}
	this.frame_44 = function() {
		if(selected==2){
		      this.currentmc4.gotoAndStop(0);		
				
			}
	}
	this.frame_49 = function() {
		if(selected==1){
			this.currentmc4.gotoAndStop(0);	
			
			}
	}
	this.frame_63 = function() {
		this.stop();
		this.parent.gotoAndPlay(5)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(14).call(this.frame_63).wait(1));

	// Actions
	this.d_q4 = new lib.d_q4();
	this.d_q4.setTransform(323.2,965.8,1,1.001,0,0,0,318.4,47.3);
	this.d_q4.alpha = 0.051;
	new cjs.ButtonHelper(this.d_q4, 0, 1, 1);

	this.c_q4 = new lib.c_q4();
	this.c_q4.setTransform(320,868.8,1,1,0,0,0,316.8,38.4);
	this.c_q4.alpha = 0.051;
	new cjs.ButtonHelper(this.c_q4, 0, 1, 1);

	this.b_q4 = new lib.b_q4();
	this.b_q4.setTransform(321.6,779.2,1,1,0,0,0,316.8,38.4);
	this.b_q4.alpha = 0.051;
	new cjs.ButtonHelper(this.b_q4, 0, 1, 1);

	this.button_14 = new lib.button_14();
	this.button_14.setTransform(316.9,681.5,1,1,0,0,0,288.9,48.9);
	this.button_14.alpha = 0.051;
	new cjs.ButtonHelper(this.button_14, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_14,p:{y:681.5}},{t:this.b_q4},{t:this.c_q4},{t:this.d_q4}]},34).to({state:[{t:this.button_14,p:{y:681.5}},{t:this.b_q4},{t:this.c_q4},{t:this.d_q4}]},5).to({state:[{t:this.button_14,p:{y:681.5}},{t:this.b_q4},{t:this.c_q4},{t:this.d_q4}]},5).to({state:[{t:this.button_14,p:{y:691.1}}]},5).to({state:[{t:this.button_14,p:{y:691.1}}]},14).wait(1));

	// currentmc4
	this.currentmc4 = new lib.currentmc4();
	this.currentmc4.setTransform(63.5,687.5,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmc4).wait(64));

	// button_q4
	this.button_q4d = new lib.button_q4d();
	this.button_q4d.setTransform(313.2,957,1,1,0,0,0,303.1,39);
	this.button_q4d.alpha = 0.012;
	new cjs.ButtonHelper(this.button_q4d, 0, 1, 1);

	this.button_q4c = new lib.button_q4c();
	this.button_q4c.setTransform(311.2,868.5,1,1,0,0,0,305.1,38.5);
	this.button_q4c.alpha = 0.012;
	new cjs.ButtonHelper(this.button_q4c, 0, 1, 1);

	this.button_q4b = new lib.button_q4b();
	this.button_q4b.setTransform(316.2,778.5,1,1,0,0,0,304.1,38.5);
	this.button_q4b.alpha = 0.012;
	new cjs.ButtonHelper(this.button_q4b, 0, 1, 1);

	this.button_q4 = new lib.button_q4();
	this.button_q4.setTransform(320.2,691,1,1,0,0,0,306.1,39);
	this.button_q4.alpha = 0.012;
	new cjs.ButtonHelper(this.button_q4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_q4},{t:this.button_q4b},{t:this.button_q4c},{t:this.button_q4d}]},29).wait(35));

	// d
	this.instance = new lib.补间41("synched",0);
	this.instance.setTransform(311,1190);
	this.instance._off = true;

	this.instance_1 = new lib.补间42("synched",0);
	this.instance_1.setTransform(311,956);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true,y:956},9).wait(9).to({_off:false,y:1190},9).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},9).wait(9).to({startPosition:0},0).to({_off:true,y:1190},9).wait(21));

	// c
	this.instance_2 = new lib.补间39("synched",0);
	this.instance_2.setTransform(311,1182);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间40("synched",0);
	this.instance_3.setTransform(311,868);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true,y:868},8).wait(17).to({_off:false,y:1182},9).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},8).wait(7).to({y:870},0).wait(10).to({y:868},0).to({_off:true,y:1182},9).wait(16));

	// b
	this.instance_4 = new lib.补间37("synched",0);
	this.instance_4.setTransform(311,1190);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间38("synched",0);
	this.instance_5.setTransform(311,778);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({_off:true,y:778},9).wait(23).to({_off:false,y:1190},9).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},9).wait(8).to({y:780},0).wait(15).to({y:778},0).to({_off:true,y:1190},9).wait(11));

	// a
	this.instance_6 = new lib.补间35("synched",0);
	this.instance_6.setTransform(311,1184);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间36("synched",0);
	this.instance_7.setTransform(311,689.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true,y:689.1},8).wait(32).to({_off:false,y:1184},10).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},8).wait(12).to({y:692},0).wait(20).to({y:689.1},0).to({_off:true,y:1184},10).wait(5));

	// q4man
	this.instance_8 = new lib.q4man();
	this.instance_8.setTransform(308,-321.7,1,1,0,0,0,280,223.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({y:408.5},9).wait(30).to({y:-321.7},8).wait(1));

	// q4top
	this.instance_9 = new lib.补间34("synched",0);
	this.instance_9.setTransform(320,-97);

	this.instance_10 = new lib.补间33("synched",0);
	this.instance_10.setTransform(320,89);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,y:89},9).wait(40).to({_off:false,y:-97},6).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:false},9).wait(40).to({startPosition:0},0).to({_off:true,y:-97},6).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-186,640,178);


(lib.q3mans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.setTransform(300.5,194,1,1,0,0,0,300.5,194);

	this.instance_1 = new lib.topic_3_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.q3man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q3mans:12,"q3mans":59});

	// timeline functions:
	this.frame_29 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		var status=0;
		this.buttonss.addEventListener("click", fl_MouseClickHandler_58.bind(this));
		var selected=0;
		function fl_MouseClickHandler_58()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=1;
			selected=1;
			this.currentmc3s.gotoAndStop(1);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
		this.buttonssb.addEventListener("click", b.bind(this));
		
		function b()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=2;
				selected=2;
			this.currentmc3s.gotoAndStop(2);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
		
		this.buttonssc.addEventListener("click", c.bind(this));
		
		function c()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=3;
				selected=3;
			this.currentmc3s.gotoAndStop(3);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
		
		this.buttonssd.addEventListener("click",d.bind(this));
		
		function d()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=4;
				selected=4;
			this.currentmc3s.gotoAndStop(4);
			this.gotoAndPlay(31);
			status=1;
			}
			// 结束您的自定义代码
		}
	}
	this.frame_34 = function() {
		if(selected==4){
			this.currentmc3s.gotoAndStop(0);
			
			}
	}
	this.frame_39 = function() {
		if(selected==3){
			this.currentmc3s.gotoAndStop(0);
			
			}
	}
	this.frame_44 = function() {
		if(selected==2){
			this.currentmc3s.gotoAndStop(0);
			
			}
	}
	this.frame_49 = function() {
		if(selected==1){
			this.currentmc3s.gotoAndStop(0);
			
			}
	}
	this.frame_59 = function() {
		this.stop();
		this.parent.gotoAndPlay(4)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(10).call(this.frame_59).wait(1));

	// currentmc3s
	this.currentmc3s = new lib.currentmc3s();
	this.currentmc3s.setTransform(48.5,435.5,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmc3s).wait(60));

	// buttonss
	this.buttonssd = new lib.buttonssd();
	this.buttonssd.setTransform(293.2,719,1,1,0,0,0,303.1,41);
	this.buttonssd.alpha = 0.012;
	new cjs.ButtonHelper(this.buttonssd, 0, 1, 1);

	this.buttonssc = new lib.buttonssc();
	this.buttonssc.setTransform(296.2,627,1,1,0,0,0,302.1,40);
	this.buttonssc.alpha = 0.012;
	new cjs.ButtonHelper(this.buttonssc, 0, 1, 1);

	this.buttonssb = new lib.buttonssb();
	this.buttonssb.setTransform(293.2,534,1,1,0,0,0,299.1,40);
	this.buttonssb.alpha = 0.012;
	new cjs.ButtonHelper(this.buttonssb, 0, 1, 1);

	this.buttonss = new lib.buttonss();
	this.buttonss.setTransform(295.2,436.5,1,1,0,0,0,299.1,40.5);
	this.buttonss.alpha = 0.012;
	new cjs.ButtonHelper(this.buttonss, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buttonss},{t:this.buttonssb},{t:this.buttonssc},{t:this.buttonssd}]},29).wait(31));

	// d
	this.instance = new lib.补间31("synched",0);
	this.instance.setTransform(296,956);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:715.9},9).wait(5).to({startPosition:0},0).to({y:956},9).to({_off:true},1).wait(16));

	// c
	this.instance_1 = new lib.补间28("synched",0);
	this.instance_1.setTransform(296,948);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间29("synched",0);
	this.instance_2.setTransform(296,626);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({_off:true,y:626},10).wait(14).to({_off:false,y:948},9).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},10).wait(14).to({startPosition:0},0).to({_off:true,y:948},9).wait(12));

	// b
	this.instance_3 = new lib.补间26("synched",0);
	this.instance_3.setTransform(296,950);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间27("synched",0);
	this.instance_4.setTransform(296,534);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({_off:true,y:534},10).wait(24).to({_off:false,y:950},9).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},10).wait(24).to({startPosition:0},0).to({_off:true,y:950},9).wait(7));

	// a
	this.instance_5 = new lib.补间24("synched",0);
	this.instance_5.setTransform(296,950);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间25("synched",0);
	this.instance_6.setTransform(296,438);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true,y:438},10).wait(34).to({_off:false,y:950},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},10).wait(34).to({startPosition:0},0).to({_off:true,y:950},10).wait(1));

	// q3mans
	this.instance_7 = new lib.q3mans();
	this.instance_7.setTransform(300.5,-522.1,1,1,0,0,0,300.5,194);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({y:156},9).wait(28).to({y:-522.1},10).wait(1));

	// q3top
	this.instance_8 = new lib.q3tops();
	this.instance_8.setTransform(295,-332,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-148},10).wait(37).to({y:-332},9).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-421,640,178);


(lib.补间76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.duilian_right = new lib.duilian_right();
	this.duilian_right.setTransform(-1.7,1.5,1,1,0,0,0,70.5,269.5);

	this.instance = new lib.dl_top();
	this.instance.setTransform(-71.8,-287);

	this.instance_1 = new lib.dl_bottom();
	this.instance_1.setTransform(-71.8,253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.duilian_right}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.2,-287,144.4,574);


(lib.补间56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.result33 = new lib.result33();
	this.result33.setTransform(-29,-0.5,1,1,0,0,0,72.5,72);

	this.instance = new lib.r_man_3();
	this.instance.setTransform(-165.5,-250.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.result33}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-250.5,331,501);


(lib.补间48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_1();
	this.instance.setTransform(-168,-208.5);

	this.result1 = new lib.result1();
	this.result1.setTransform(-13,0,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.result1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-208.5,362,417);


(lib.denglong2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.denglong11();
	this.instance.setTransform(65,228,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop()
		var status=0;
		this.q2_a.addEventListener("click", fl_MouseClickHandler_54.bind(this));
		var selected = 0;
		function fl_MouseClickHandler_54()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=1;
			selected = 1;
			this.currentmc2.gotoAndStop(1);
			this.gotoAndPlay(31);
			status=1;
				
			}
			// 结束您的自定义代码
		}
		this.q2_b.addEventListener("click",bb.bind(this));
		
		function bb()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=1;
			selected = 2;
			this.currentmc2.gotoAndStop(2);
			this.gotoAndPlay(31);
			status=1;
			}
			
			// 结束您的自定义代码
		}
		this.q2_c.addEventListener("click",cc.bind(this));
		
		function cc()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			if(status==0){
				
			score+=1;
			selected = 3;
			this.currentmc2.gotoAndStop(3);
			this.gotoAndPlay(31);
			status=1;
			}
			
			// 结束您的自定义代码
		}
		
		this.q2_d.addEventListener("click",dd.bind(this));
		
		function dd()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
				if(status==0){
				
			score+=1;
			selected = 4;
			this.currentmc2.gotoAndStop(4);
			this.gotoAndPlay(31);
			status=1;
			}
			
			// 结束您的自定义代码
		}
		this.stop()
	}
	this.frame_37 = function() {
		if(selected==4){
		this.currentmc2.gotoAndStop(0);
			}
	}
	this.frame_40 = function() {
		if(selected==3){
		this.currentmc2.gotoAndStop(0);
			}
	}
	this.frame_44 = function() {
		if(selected==2){
		this.currentmc2.gotoAndStop(0);
			}
	}
	this.frame_48 = function() {
		if(selected==1){
		this.currentmc2.gotoAndStop(0);
			}
	}
	this.frame_59 = function() {
		this.stop();
		this.parent.gotoAndPlay(3)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(8).call(this.frame_37).wait(3).call(this.frame_40).wait(4).call(this.frame_44).wait(4).call(this.frame_48).wait(11).call(this.frame_59).wait(1));

	// Actions
	this.q2_d = new lib.q2_d_1();
	this.q2_d.setTransform(315.6,962.5,1,1,0,0,0,312.9,41.5);
	this.q2_d.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_d, 0, 1, 1);

	this.q2_c = new lib.q2_c_1();
	this.q2_c.setTransform(318.2,870,1,1,0,0,0,318.2,40);
	this.q2_c.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_c, 0, 1, 1);

	this.q2_b = new lib.q2_b_1();
	this.q2_b.setTransform(320.1,780,1,1,0,0,0,317.4,42);
	this.q2_b.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_b, 0, 1, 1);

	this.text = new cjs.Text("if(score==4){\nthis.currentmc2.gotoAndStop(0);\n}", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 144;
	this.text.setTransform(867.8,-179.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},29).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},8).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},3).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},4).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d},{t:this.text,p:{x:867.8,y:-179.7,lineWidth:144}}]},4).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d},{t:this.text,p:{x:811.7,y:-255.7,lineWidth:435}}]},11).wait(1));

	// q2_btn
	this.q2_a = new lib.q2_a_1();
	this.q2_a.setTransform(318.1,685.3,1,1,0,0,0,319.4,41.1);
	this.q2_a.alpha = 0.012;
	this.q2_a._off = true;
	new cjs.ButtonHelper(this.q2_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q2_a).wait(29).to({_off:false},0).wait(31));

	// currentmc2
	this.currentmc2 = new lib.currentmc2();
	this.currentmc2.setTransform(73.5,683.5,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmc2).wait(60));

	// d
	this.instance = new lib.补间22("synched",0);
	this.instance.setTransform(321,1404);
	this.instance._off = true;

	this.instance_1 = new lib.补间23("synched",0);
	this.instance_1.setTransform(321,962);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true,y:962},10).wait(8).to({_off:false,y:1404},10).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},10).wait(8).to({startPosition:0},0).to({_off:true,y:1404},10).wait(13));

	// c
	this.instance_2 = new lib.补间20("synched",0);
	this.instance_2.setTransform(321,1324);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间21("synched",0);
	this.instance_3.setTransform(321,870);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true,y:870},10).wait(16).to({_off:false,y:1324},10).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},10).wait(16).to({startPosition:0},0).to({_off:true,y:1324},10).wait(10));

	// b
	this.instance_4 = new lib.补间18("synched",0);
	this.instance_4.setTransform(321,1198.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间19("synched",0);
	this.instance_5.setTransform(321,782);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true,y:782},10).wait(25).to({_off:false,y:1198.1},9).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},10).wait(25).to({startPosition:0},0).to({_off:true,y:1198.1},9).wait(7));

	// a
	this.instance_6 = new lib.补间17("synched",0);
	this.instance_6.setTransform(321,1204.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({y:686.2},9).wait(35).to({startPosition:0},0).to({y:1204.3},8).to({_off:true},1).wait(3));

	// q2man
	this.q2man = new lib.q2man();
	this.q2man.setTransform(298,-232.5,1,1,0,0,0,260,210.5);
	this.q2man._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q2man).wait(12).to({_off:false},0).to({y:427.7},10).wait(30).to({y:-232.5},7).wait(1));

	// top
	this.q2top = new lib.q2top();
	this.q2top.setTransform(320,-107,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.q2top).to({y:89},9).wait(39).to({y:-107},8).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-196,640,178);


(lib.cove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop()
		this.button_6.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			
			this.gotoAndPlay(16);
			// 结束您的自定义代码
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// btn
	this.button_6 = new lib.coverbtn2();
	this.button_6.setTransform(330.2,870.3,1,1,0,0,0,308.1,182.1);
	this.button_6.alpha = 0.012;
	this.button_6._off = true;
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(14).to({_off:false},0).wait(16));

	// font
	this.instance = new lib.font();
	this.instance.setTransform(336.5,-222.5,1,1,0,0,0,262.5,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:422.6},14).wait(1).to({y:-222.5},14).wait(1));

	// people
	this.instance_1 = new lib.people();
	this.instance_1.setTransform(320,1479.7,1,1,0,0,0,320,338.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:797.5},14).wait(1).to({y:1479.7},14).wait(1));

	// hong
	this.instance_2 = new lib.hong();
	this.instance_2.setTransform(320,-105,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:89},14).wait(1).to({y:-105},14).wait(1));

	// denglong2
	this.instance_3 = new lib.denglong2();
	this.instance_3.setTransform(825.2,118,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:501.1},14).wait(1).to({x:825.2},14).wait(1));

	// denglong1
	this.instance_4 = new lib.denglong11();
	this.instance_4.setTransform(-193,106,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:139},14).wait(1).to({x:-193},14).wait(1));

	// covebg
	this.covebg = new lib.covebg();
	this.covebg.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.covebg).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258,-429,1148.3,2247.3);


(lib.result11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间48("synched",0);
	this.instance.setTransform(194,208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:135},19).to({rotation:270,y:208.6},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,0,362,417);


(lib.q5mans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// result3
	this.instance = new lib.补间56("synched",0);
	this.instance.setTransform(219.5,167.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// result2
	this.result22 = new lib.result22();
	this.result22.setTransform(207.5,157.3,1,1,0,0,0,149.5,258.5);
	this.result22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result22).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// result4
	this.result44 = new lib.result44();
	this.result44.setTransform(208,201,1,1,0,0,0,122,225);
	this.result44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result44).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// result1
	this.result11 = new lib.result11();
	this.result11.setTransform(194,208.5,1,1,0,0,0,194,208.5);

	this.timeline.addTween(cjs.Tween.get(this.result11).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388,417);


(lib.lastbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		console.log(score);
		var selected=0;
		if(score<=4){
			 //this.gotoAndPlay(2);
		     this.duilian_right.gotoAndStop(0);
			 this.duilian_left.gotoAndStop(0);
			  //this.result11.gotoAndStop(0);
				  this.q5mans.gotoAndStop(0);
			
			
			}
			if(score>4 && score<=8){
			 //this.gotoAndPlay(2);
		     this.duilian_right.gotoAndStop(1);
			 this.duilian_left.gotoAndStop(1);
			  this.q5mans.gotoAndStop(1);
			
			
			}
			if(score>8 && score<=12){
			 //this.gotoAndPlay(2);
		     this.duilian_right.gotoAndStop(2);
			 this.duilian_left.gotoAndStop(2);
			  this.q5mans.gotoAndStop(2);
			
			
			}
			if(score>12 && score<=16){
			 //this.gotoAndPlay(2);
		     this.duilian_right.gotoAndStop(3);
			 this.duilian_left.gotoAndStop(3);
			  this.q5mans.gotoAndStop(3);
			
			
			}
	}
	this.frame_14 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		this.temp = 0
		this.btn_agains.addEventListener("click", fl_MouseClickHandler_62.bind(this));
		
		function fl_MouseClickHandler_62()
		{ 
			// 开始您的自定义代码
			this.gotoAndPlay(17);
		window.location.href="http://weibo.com/6004408573/profile?topnav=1&wvr=6&is_all=1"
			// 结束您的自定义代码
		}
		
		
		this.btn_bufus.addEventListener("click", bufu.bind(this));
		
		function bufu()
		{
			this.temp = 1;
			selected=0;
			score = 0
			// 开始您的自定义代码
			this.gotoAndPlay(17)
			// 结束您的自定义代码
		}
		
		this.btn_huhuans.addEventListener("click", huhuan.bind(this));
		
		function huhuan()
		{
		this.gotoAndPlay(17);
		 window.location.href="http://service.weibo.com/share/share.php?url="
		
		
			}
	}
	this.frame_25 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		console.log(this.temp);
		if(this.temp ===1){
			this.parent.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(11).call(this.frame_25).wait(1));

	// Actions
	this.huhuan = new lib.huhuan();
	this.huhuan.setTransform(460,959.2,1,1,0,0,0,141.6,42.4);
	this.huhuan.alpha = 0.051;
	new cjs.ButtonHelper(this.huhuan, 0, 1, 1);

	this.bufu = new lib.bufu();
	this.bufu.setTransform(173.8,956.9,1,1,0,0,0,132.2,40.1);
	this.bufu.alpha = 0.051;
	new cjs.ButtonHelper(this.bufu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bufu},{t:this.huhuan}]},25).wait(1));

	// btn_result
	this.btn_huhuans = new lib.btn_huhuans();
	this.btn_huhuans.setTransform(466.1,960.1,1,1,0,0,0,142,44.1);
	this.btn_huhuans.alpha = 0.051;
	new cjs.ButtonHelper(this.btn_huhuans, 0, 1, 1);

	this.btn_bufus = new lib.btn_bufus();
	this.btn_bufus.setTransform(168,956.5,1,1,0,0,0,138,40.5);
	this.btn_bufus.alpha = 0.051;
	new cjs.ButtonHelper(this.btn_bufus, 0, 1, 1);

	this.btn_agains = new lib.btn_agains();
	this.btn_agains.setTransform(319,848,1,1,0,0,0,289,44);
	this.btn_agains.alpha = 0.051;
	new cjs.ButtonHelper(this.btn_agains, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_agains},{t:this.btn_bufus},{t:this.btn_huhuans}]},1).wait(25));

	// hover_right (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AvHJoIAAzOIeOAAIAATOg");
	var mask_graphics_5 = new cjs.Graphics().p("Au9NJIAA6RId7AAIAAaRg");
	var mask_graphics_6 = new cjs.Graphics().p("AuzQrMAAAghVIdnAAMAAAAhVg");
	var mask_graphics_7 = new cjs.Graphics().p("AuqUMMAAAgoXIdVAAMAAAAoXg");
	var mask_graphics_8 = new cjs.Graphics().p("AugXuMAAAgvbIdBAAMAAAAvbg");
	var mask_graphics_9 = new cjs.Graphics().p("AuWbPMAAAg2dIctAAMAAAA2dg");
	var mask_graphics_10 = new cjs.Graphics().p("AuNexMAAAg9hIcbAAMAAAA9hg");
	var mask_graphics_11 = new cjs.Graphics().p("EgODAiTMAAAhElIcHAAMAAABElg");
	var mask_graphics_12 = new cjs.Graphics().p("EgN6Al0MAAAhLnIb1AAMAAABLng");
	var mask_graphics_13 = new cjs.Graphics().p("EgNwApWMAAAhSrIbhAAMAAABSrg");
	var mask_graphics_14 = new cjs.Graphics().p("EgNnAs4MAAAhZuIbPAAMAAABZug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:543.2,y:279.2}).wait(1).to({graphics:mask_graphics_5,x:544.3,y:301.8}).wait(1).to({graphics:mask_graphics_6,x:545.4,y:324.3}).wait(1).to({graphics:mask_graphics_7,x:546.6,y:346.9}).wait(1).to({graphics:mask_graphics_8,x:547.7,y:369.5}).wait(1).to({graphics:mask_graphics_9,x:548.8,y:392}).wait(1).to({graphics:mask_graphics_10,x:549.9,y:414.6}).wait(1).to({graphics:mask_graphics_11,x:551,y:437.1}).wait(1).to({graphics:mask_graphics_12,x:552.2,y:459.7}).wait(1).to({graphics:mask_graphics_13,x:553.3,y:482.3}).wait(1).to({graphics:mask_graphics_14,x:554.4,y:504.8}).wait(12));

	// duilian_right
	this.duilian_right = new lib.duilian_right();
	this.duilian_right.setTransform(553.5,507.5,1,1,0,0,0,70.5,269.5);

	this.instance = new lib.dl_top();
	this.instance.setTransform(483,219);

	this.instance_1 = new lib.dl_bottom();
	this.instance_1.setTransform(483,759);

	this.instance_2 = new lib.补间76("synched",0);
	this.instance_2.setTransform(721.8,506);

	this.duilian_right.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.duilian_right}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.duilian_right}]},4).to({state:[{t:this.instance_1},{t:this.instance},{t:this.duilian_right}]},10).to({state:[{t:this.instance_1},{t:this.instance},{t:this.duilian_right}]},2).to({state:[{t:this.instance_2}]},9).wait(1));

	// hover_left (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("Ar2JhIAAzBIXuAAIAATBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ar6NeIAA67IX1AAIAAa7g");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ar9RcMAAAgi3IX7AAMAAAAi3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AsAVZMAAAgqxIYBAAMAAAAqxg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AsDZXMAAAgytIYHAAMAAAAytg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AsGdUMAAAg6oIYNAAMAAAA6og");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgMKAhSMAAAhCjIYVAAMAAABCjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgMNAlQMAAAhKfIYbAAMAAABKfg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgMQApNMAAAhSZIYhAAMAAABSZg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgMTAtLMAAAhaVIYnAAMAAABaVg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgMWAxIMAAAhiQIYuAAMAAABiQg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:92,y:279.9}).wait(1).to({graphics:mask_1_graphics_5,x:92.3,y:305.3}).wait(1).to({graphics:mask_1_graphics_6,x:92.7,y:330.6}).wait(1).to({graphics:mask_1_graphics_7,x:93,y:356}).wait(1).to({graphics:mask_1_graphics_8,x:93.3,y:381.4}).wait(1).to({graphics:mask_1_graphics_9,x:93.6,y:406.7}).wait(1).to({graphics:mask_1_graphics_10,x:93.9,y:432.1}).wait(1).to({graphics:mask_1_graphics_11,x:94.3,y:457.4}).wait(1).to({graphics:mask_1_graphics_12,x:94.6,y:482.8}).wait(1).to({graphics:mask_1_graphics_13,x:94.9,y:508.2}).wait(1).to({graphics:mask_1_graphics_14,x:95.2,y:533.5}).wait(12));

	// duilian_left
	this.duilian_left = new lib.duilian_left();
	this.duilian_left.setTransform(88,506,1,1,0,0,0,72,287);

	this.duilian_left.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.duilian_left).wait(16).to({x:-72},9).wait(1));

	// huhuan
	this.instance_3 = new lib.result_b_3();
	this.instance_3.setTransform(333,1173);

	this.instance_4 = new lib.补间68("synched",0);
	this.instance_4.setTransform(465,1194);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间69("synched",0);
	this.instance_5.setTransform(465,960);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true,y:960},10).wait(2).to({_off:false,y:1194},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},10).wait(2).to({startPosition:0},0).to({_off:true,y:1194},9).wait(1));

	// bufu
	this.instance_6 = new lib.result_b_2();
	this.instance_6.setTransform(42,1173);

	this.instance_7 = new lib.补间70("synched",0);
	this.instance_7.setTransform(174,1186);
	this.instance_7._off = true;

	this.instance_8 = new lib.补间71("synched",0);
	this.instance_8.setTransform(174,957);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_7}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({_off:true,y:957},10).wait(2).to({_off:false,y:1186},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},10).wait(2).to({startPosition:0},0).to({_off:true,y:1186},9).wait(1));

	// more
	this.instance_9 = new lib.补间66("synched",0);
	this.instance_9.setTransform(323.5,1188);
	this.instance_9._off = true;

	this.instance_10 = new lib.补间67("synched",0);
	this.instance_10.setTransform(323.5,850);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({_off:true,y:850},10).wait(2).to({_off:false,y:1188},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},10).wait(2).to({startPosition:0},0).to({_off:true,y:1188},9).wait(1));

	// q5people
	this.q5mans = new lib.q5mans();
	this.q5mans.setTransform(297,-208.5,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.q5mans).wait(4).to({y:518.5},10).wait(2).to({y:-208.5},9).wait(1));

	// lasttop
	this.instance_11 = new lib.补间72("synched",0);
	this.instance_11.setTransform(320,-89);

	this.instance_12 = new lib.补间73("synched",0);
	this.instance_12.setTransform(320,89);

	this.instance_13 = new lib.cover_bg_top();

	this.instance_14 = new lib.补间74("synched",0);
	this.instance_14.setTransform(320,89);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_11}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,y:89},4).wait(12).to({_off:false,y:-89},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off:false},0).to({_off:true,y:-89},9).wait(1));

	// 图层 1
	this.instance_15 = new lib.cover_bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-417,640,1672);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_6 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// lastpage
	this.lastbg = new lib.lastbg();
	this.lastbg.setTransform(320,568,1,1,0,0,0,320,568);
	this.lastbg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lastbg).wait(6).to({_off:false},0).wait(1));

	// question5
	this.q5bgs = new lib.q5bgs();
	this.q5bgs.setTransform(320,568,1,1,0,0,0,320,568);
	this.q5bgs._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q5bgs).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// question4
	this.instance = new lib.q4top();
	this.instance.setTransform(320,89,1,1,0,0,0,320,89);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgGFAjFIAAlAIXJAAIDGAAIAAFAgAn602IjfAAIAAAAIkZAAIAAkEIkXAAIAAqKIW8AAIAAOOg");
	this.shape.setTransform(-581.1,-192.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},4).to({state:[]},1).wait(2));

	// question3
	this.instance_1 = new lib.q3man();
	this.instance_1.setTransform(326.5,432,1,1,0,0,0,300.5,194);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	// question2
	this.instance_2 = new lib.cover();
	this.instance_2.setTransform(320,89,1,1,0,0,0,320,89);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

	// question1
	this.instance_3 = new lib.tman();
	this.instance_3.setTransform(330.5,514.5,1,1,0,0,0,276.5,212.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

	// cove
	this.instance_4 = new lib.cove();
	this.instance_4.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.9,139,1148.3,2247.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;