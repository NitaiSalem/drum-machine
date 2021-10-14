(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),o=(n(9),n(10),n(2)),m=[{letter:"Q",source:"http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/49-drum%20sticks.wav",name:"sticks"},{letter:"W",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",name:"Heater-2"},{letter:"E",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",name:"Heater-3"},{letter:"A",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",name:"Heater-4"},{letter:"S",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",name:"Clap"},{letter:"D",source:"http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20WAV%20samples/Snare%20Drum.wav",name:"drum hit"},{letter:"Z",source:"https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drum%20Fill%204-1233-Free-Loops.com.mp3",name:"drum fill"},{letter:"X",source:"http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/34-low%20conga%20slap.wav",name:"conga drum"},{letter:"C",source:"https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/808%20Drum%20Kick%20038-2484-Free-Loops.com.mp3",name:"synth bass drum"}],u=[{letter:"Q",source:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",name:"Chord-1"},{letter:"W",source:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",name:"Chord-2"},{letter:"E",source:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",name:"Chord-3"},{letter:"A",source:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",name:"Shaker"},{letter:"S",source:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",name:"Open-HH"},{letter:"D",source:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",name:"Closed-HH"},{letter:"Z",source:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",name:"Punchy-Kick"},{letter:"X",source:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",name:"Side-Stick"},{letter:"C",source:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",name:"Snare"}],d={backgroundColor:"black",width:"30%",height:"25px",display:"flex",flexDirection:"row",justifyContent:"flex-start"},i={backgroundColor:"black",width:"30%",height:"25px",display:"flex",flexDirection:"row",justifyContent:"flex-end"},l=n(0),p=function(e){return e.drumSounds.map((function(t,n){return Object(l.jsxs)("button",{onClick:function(){return e.handleClick(t)},className:"drum-pad",id:t.name,children:[t.letter,Object(l.jsx)("audio",{tabIndex:"0",src:t.source,className:"clip",id:t.letter})]},"key"+n)}))},h=function(e){return e.pianoSounds.map((function(t,n){return Object(l.jsxs)("button",{onClick:function(){return e.handleClick(t)},className:"drum-pad",id:t.name,children:[t.letter,Object(l.jsx)("iframe",{tabIndex:"0",src:t.source,className:"clip",id:t.letter})]},"key"+n)}))},b=function(e){var t=e.classes,n=e.onChange,a=e.value;return Object(l.jsx)("div",{className:"volume-slider",children:Object(l.jsx)("input",{min:"0",max:"1",type:"range",value:a,step:.02,className:"slider ".concat(t),id:"myRange",onChange:n})})},f=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),f=s[0],j=s[1],x=Object(a.useState)(!0),w=Object(o.a)(x,2),k=w[0],O=w[1],v=Object(a.useState)(.5),y=Object(o.a)(v,2),C=y[0],g=y[1],E=["Q","W","E","A","S","D","Z","X","C"];Object(a.useEffect)((function(){return k&&document.addEventListener("keydown",S),function(){document.removeEventListener("keydown",S)}}),[k,C]),Object(a.useEffect)((function(){j(k?"POWER ON":"POWER OFF")}),[k]),Object(a.useEffect)((function(){k&&j(n?"Piano kit":"Drum kit")}),[n]);var N=function(e){if(k){document.getElementById(e.letter).volume=C;var t=document.getElementById(e.letter);t.parentElement.className="colorButton",setTimeout((function(){return t.parentElement.className="drum-pad"}),150),t.currentTime=0,t.play(),j(e.name)}},S=function(e){if(k&&E.includes(e.key.toUpperCase())){document.getElementById(e.key.toUpperCase()).volume=C;var t=document.getElementById(e.key.toUpperCase());t.currentTime=0,t.play(),t.parentElement.className="colorButton",setTimeout((function(){return t.parentElement.className="drum-pad"}),150),j(t.parentElement.id)}};return Object(l.jsxs)("div",{id:"drum-machine",children:[Object(l.jsx)("div",{id:"buttons",children:n?Object(l.jsx)(h,{value:C,handleClick:N,handleKeyDown:S,pianoSounds:u}):Object(l.jsx)(p,{value:C,handleClick:N,handleKeyDown:S,drumSounds:m})}),Object(l.jsxs)("div",{id:"controls",children:[Object(l.jsxs)("p",{id:"power-text",className:"button-text",children:["Power"," "]}),Object(l.jsx)("div",{id:"power-box",className:"button-box",style:k?d:i,children:Object(l.jsx)("button",{id:"power-button",className:"button",onClick:function(){O((function(e){return!e}))}})}),Object(l.jsx)("div",{id:"display",children:f}),Object(l.jsx)(b,{classes:"",onChange:function(e){k&&(g(e.target.valueAsNumber),j("Volume: "+Math.round(100*e.target.valueAsNumber)),setTimeout((function(){return j("")}),1e3))},value:C}),Object(l.jsx)("p",{id:"bank-text",className:"button-text",children:"Bank"}),Object(l.jsx)("div",{id:"bank-box",className:"button-box",style:n?i:d,children:Object(l.jsx)("button",{id:"bank-button",onClick:function(){k&&c(!n)},className:"button"})})]})]})};var j=function(){return Object(l.jsx)(f,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),x()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8bfccbfb.chunk.js.map