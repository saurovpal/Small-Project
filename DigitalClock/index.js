let hrs=document.getElementById("hrs")
let min =document.getElementById("min")
let sec=document.getElementById("sec")



 setInterval(()=>{
    let courrentTime= new Date();

    hrs.innerHTML= (courrentTime.getHours()<10?"0":"")+courrentTime.getHours();
    min.innerHTML= (courrentTime.getMinutes()<10?"0":"")+courrentTime.getMinutes();
    sec.innerHTML= (courrentTime.getTime()<10?"0":"")+courrentTime.getSeconds();
  },1000)



