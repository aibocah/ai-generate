
const preview=document.getElementById('preview');
document.querySelectorAll('input,select').forEach(el=>el.oninput=build);

const boosts={
face:`Film still look, 50mm portrait lens, professional studio + cinematic hybrid lighting, realistic skin texture, ultra detailed.`,
product:`Film still look, studio lighting, precise product reflections, ultra detailed.`,
fashion:`Film still look, cinematic studio lighting, micro-detail fabric weave, ultra detailed.`
};

function build(){
let text=`scene:
A ${val('theme')} scene featuring ${val('subject')||'a subject'} ${val('action')} in ${val('location')}.

visual_style:
${val('style')} ${val('mood')} ${val('theme')} aesthetic.

camera:
${val('shot')} shot, ${val('ratio')} aspect ratio.

lighting:
${val('lighting')}.

quality:
${boosts[val('boost')]||'high resolution, sharp focus.'}

negative:
no blur, no flat lighting, no watermark, no text, no logo.
`;
preview.value=text;
}

function val(id){return document.getElementById(id).value||''}
function copy(){preview.select();document.execCommand('copy')}
build();
