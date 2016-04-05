# taroko-gorge-tracery

This is a port of [Taroko Gorge](http://nickm.com/taroko_gorge/original.html), Nick Montford's iconic algorithmic poem, into [Tracery](https://github.com/galaxykate/tracery).

[See it in action](http://oncomouse.github.io/taroko-gorge-tracery/).

## Why Tracery?

I wanted a simpler structure so that students in my class, with little programming experience, could learn how to do variations on Montford's poem.

By using an expanding grammar, Tracery is much easier to understand and reprogram. Essentially, it turns this:

```javascript
var above='brow,mist,shape,layer,the crag,stone,forest,height'.split(',');
var below='flow,basin,shape,vein,rippling,stone,cove,rock'.split(',');
var trans='command,pace,roam,trail,frame,sweep,exercise,range'.split(',');
var imper='track,shade,translate,stamp,progress through,direct,run,enter';
imper=imper.split(',');
var intrans='linger,dwell,rest,relax,hold,dream,hum'.split(',');
var s='s,'.split(',');
var texture='rough,fine'.split(',');
```

Into this:

```javascript
{
	"above": ["brow", "mist", "shape", "layer", "the crag", "stone", "forest", "height"],
	"below": ["flow", "basin", "shape", "vein", "rippling", "stone", "cove", "rock"],
	"trans": ["command", "pace", "roam", "trail", "frame", "sweep", "exercise", "range"],
	"imper": ["track", "shade", "translate", "stamp", "progress through", "direct", "run", "enter"],
	"intrans": ["linger", "dwell", "rest", "relax", "hold", "dream", "hum"],
	"adjs": ["encompassing", "rough", "fine", "sinuous", "straight", "objective", "arched", "cool", "clear", "dim", "driven"],
	"cave": ["#imper# #adjs# #adjs#", "#imper# #adjs# #adjs# #adjs#", "#imper# #adjs# #adjs# #adjs# #adjs#"],
	"site": ["#above.s# #intrans#", "#below.s# #intrans#"],
	"path_below": ["#below.s#", "#below#"],
	"path": ["#above.s# #trans# the #path_below#", "#above# #trans.s# the #path_below#"],
	"paths": ["#path# / #site# / #site# / #path#", "#path# / #site# / #site# / #site# / #path#", "#path# / #site# / #site# / #site# / #site# / #path#"],
	"origin": ["#paths# /  / \u00a0\u00a0 #cave#  \u2014 /  "]
}
```

## To Use To Make Your Own

You can either edit the `./javascript/app.js` file and set `var tracery_grammar;` equal to a tracery grammar or you can edit the `data/grammar.json` file to include your grammar (the Tracery port uses Zepto, required by Tracery, to load external grammars via AJAX).

From there, just upload all the files to a webserver and you're done.
