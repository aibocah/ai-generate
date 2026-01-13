document.getElementById('fotoForm').onsubmit=e=>{
e.preventDefault();
let prompt={
id:{subjek:subjek.value,objek:objek.value,lokasi:lokasi.value},
en:{ratio:rasio.value,theme:tema.value,mood:mood.value,style:style.value,lighting:lighting.value,composition:komposisi.value,shot:shot.value}
};
let boost='';
if(boostWajah.checked) boost+=' film still look, 50mm portrait lens...';
if(boostProduk.checked) boost+=' precise product reflections...';
if(boostFashion.checked) boost+=' micro-detail fabric weave...';
prompt.boost=boost;
localStorage.setItem('fotoPrompt',JSON.stringify(prompt,null,2));
location='outputfoto.html';
};