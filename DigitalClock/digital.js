 //assigning each element
 let hours =document.getElementById('hours');
 let minutes =document.getElementById('minutes');
 let seconds =document.getElementById('seconds');
 let ap =document.getElementById('ampm');

 //assigning date

 let H = new Date().getHours();
 let M = new Date().getMinutes();
 let S = new Date().getSeconds();

 hours.outerHTML=H;
 minutes.outerHTML=M;
 seconds.outerHTML=S;