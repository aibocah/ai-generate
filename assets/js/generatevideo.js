document.getElementById('videoForm').onsubmit=e=>{
e.preventDefault();
let prompt={
id:{subjek:v_subjek.value,lokasi:v_lokasi.value},
en:{type:jenis.value,camera:kamera.value,duration:durasi.value+'s'}
};
localStorage.setItem('videoPrompt',JSON.stringify(prompt,null,2));
location='outputvideo.html';
};