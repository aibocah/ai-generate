
const scenesDiv=document.getElementById('scenes');
const out=document.getElementById('output');

function addScene(){
 if(scenesDiv.children.length>=5) return;
 const i=scenesDiv.children.length+1;
 const d=document.createElement('div');
 d.className='scene';
 d.innerHTML=`
  <h4>Scene ${i}</h4>
  <input class="focus" placeholder="Scene fokus">
  <select class="mood">
   <option>Auto</option><option>Warm</option><option>Epic</option>
   <option>Dramatic</option><option>Dark</option><option>Romantic</option>
  </select>
  <select class="shot">
   <option>Auto</option><option>Wide Shot</option>
   <option>Medium Shot</option><option>Close-Up</option>
  </select>
  <select class="move">
   <option>Auto</option><option>Static</option>
   <option>Dolly In</option><option>Tracking</option>
   <option>Gimbal</option><option>Whip Pan</option>
  </select>
  <textarea class="vo" placeholder="Voice Over (video)"></textarea>
 `;
 scenesDiv.appendChild(d);
 bind(); build();
}

function autoMood(text){
 if(text.includes('hangat')) return 'warm cinematic';
 if(text.includes('gelap')) return 'dark dramatic';
 return 'cinematic';
}

function bind(){
 document.querySelectorAll('textarea,input,select').forEach(e=>e.oninput=build);
}

function build(){
 let result='';
 const idea=document.getElementById('idea').value;
 const type=document.getElementById('type').value;
 const boost=[];
 if(boostFace.checked) boost.push('FACE');
 if(boostProduct.checked) boost.push('PRODUCT');
 if(boostFashion.checked) boost.push('FASHION');

 [...scenesDiv.children].forEach((s,i)=>{
  const focus=s.querySelector('.focus').value||idea;
  const mood=s.querySelector('.mood').value==='Auto'?autoMood(idea):s.querySelector('.mood').value;
  const shot=s.querySelector('.shot').value;
  const move=s.querySelector('.move').value;
  const vo=s.querySelector('.vo').value;

  result+=`scene_${i+1}:
${focus}.
Mood: ${mood}

camera:
${shot}, ${move}.

${type==='video' && vo?`voice_over:\n${vo}\n`:''}
boost:
${boost.join(', ')||'none'}

quality:
flow ultra pro cinematic.

negative:
no blur, no watermark, no text.\n\n`;
 });

 out.value=result;
}

function copy(){out.select();document.execCommand('copy')}

addScene(); bind();
