
const res=document.getElementById('result');

function intentMap(goal){
return {
Hook:['fast intro','dramatic hook','whip pan'],
Problem:['slow tension','handheld','dark tone'],
Storytelling:['smooth gimbal','warm cinematic'],
'Product Reveal':['push in','high detail','studio light'],
CTA:['clean frame','static','bold']
}[goal];
}

function generate(){
const idea=document.getElementById('idea').value;
const goal=document.getElementById('goal').value;
const platform=document.getElementById('platform').value;

let scenes='';
const intent=intentMap(goal);

for(let i=1;i<=5;i++){
scenes+=`scene_${i}:
${idea} – ${goal} scene ${i}.

camera:
${intent.join(', ')}.

platform:
${platform}.

quality:
flow ultra cinematic render.

negative:
no blur, no watermark, no text.

`;
}

res.value=scenes;
}

function copy(){res.select();document.execCommand('copy')}
