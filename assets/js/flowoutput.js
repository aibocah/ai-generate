let data=localStorage.getItem('fotoPrompt')||localStorage.getItem('videoPrompt');
document.getElementById('flowOutput').value='FLOW_OPTIMIZED:\n'+data;