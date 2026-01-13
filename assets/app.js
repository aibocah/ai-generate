
const preview=document.getElementById('preview');
document.querySelectorAll('input,select,textarea').forEach(el=>el.oninput=build);

function build(){
  const moves=[...document.getElementById('movement').selectedOptions].map(o=>o.value).join(', ');
  let text=`scene:
A ${val('mood')} scene featuring ${val('subject')||'a subject'} ${val('action')} in ${val('location')}.

camera:
${val('shot')}${moves?`, combined with ${moves}`:''}.

lighting:
${val('lighting')}.

${val('intent')==='video' && val('vo')?`voice_over:
${val('vo')}

`:''}quality:
cinematic realism, high resolution, sharp focus.

negative:
no blur, no flat lighting, no watermark, no text, no logo.
`;
  preview.value=text;
}

function val(id){return document.getElementById(id).value||''}
function copy(){preview.select();document.execCommand('copy')}
build();
