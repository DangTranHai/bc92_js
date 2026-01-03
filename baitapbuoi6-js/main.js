let arr = [];

/* ===== ACCORDION ===== */
function toggle(i){
  const box = document.getElementById("content" + i);
  box.classList.toggle("hidden");
}

/* ===== THÊM SỐ ===== */
const btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = function(){
  const n = document.getElementById("numberInput").value * 1;
  arr.push(n);
  document.getElementById("arrayDisplay").innerHTML = "👉 " + arr.join(", ");
};

/** ===== 1 ===== */
const btn1 = document.getElementById("btn1");
btn1.onclick = function(){
  let sum = 0;
  for(let i=0;i<arr.length;i++) if(arr[i]>0) sum+=arr[i];
  document.getElementById("result1").innerHTML = sum;
};

/** ===== 2 ===== */
const btn2 = document.getElementById("btn2");
btn2.onclick = function(){
  let c=0;
  for(let i=0;i<arr.length;i++) if(arr[i]>0) c++;
  document.getElementById("result2").innerHTML = c;
};

/** ===== 3 ===== */
const btn3 = document.getElementById("btn3");
btn3.onclick = function(){
  let min=arr[0];
  for(let i=1;i<arr.length;i++) if(arr[i]<min) min=arr[i];
  document.getElementById("result3").innerHTML = min;
};

/**  ===== 4 ===== */
const btn4 = document.getElementById("btn4");
btn4.onclick = function(){
  let min=-1;
  for(let i=0;i<arr.length;i++)
    if(arr[i]>0 && (min===-1||arr[i]<min)) min=arr[i];
  document.getElementById("result4").innerHTML = min;
};

/** ===== 5 ===== */
const btn5 = document.getElementById("btn5");
btn5.onclick = function(){
  let last=-1;
  for(let i=0;i<arr.length;i++) if(arr[i]%2===0) last=arr[i];
  document.getElementById("result5").innerHTML = last;
};

/** ===== 6 ===== */
const btn6 = document.getElementById("btn6");
btn6.onclick = function(){
  const i1=document.getElementById("index1").value*1;
  const i2=document.getElementById("index2").value*1;
  const t=arr[i1]; arr[i1]=arr[i2]; arr[i2]=t;
  document.getElementById("arrayDisplay").innerHTML="👉 "+arr.join(", ");
};

/** ===== 7 ===== */
const btn7 = document.getElementById("btn7");
btn7.onclick = function(){
  for(let i=0;i<arr.length-1;i++)
    for(let j=i+1;j<arr.length;j++)
      if(arr[i]>arr[j]){
        const t=arr[i]; arr[i]=arr[j]; arr[j]=t;
      }
  document.getElementById("result7").innerHTML=arr.join(", ");
};

/** ===== 8 ===== */
const btn8 = document.getElementById("btn8");
btn8.onclick = function(){
  function prime(n){
    if(n<2) return false;
    for(let i=2;i<n;i++) if(n%i===0) return false;
    return true;
  }
  let r=-1;
  for(let i=0;i<arr.length;i++) if(prime(arr[i])){r=arr[i];break;}
  document.getElementById("result8").innerHTML=r;
};

/**  ===== 9 ===== */
const btn9 = document.getElementById("btn9");
btn9.onclick = function(){
  let c=0;
  for(let i=0;i<arr.length;i++) if(Number.isInteger(arr[i])) c++;
  document.getElementById("result9").innerHTML=c;
};

/** ===== 10 ===== */
const btn10 = document.getElementById("btn10");
btn10.onclick = function(){
  let p=0,n=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0)p++;
    else if(arr[i]<0)n++;
  }
  document.getElementById("result10").innerHTML =
    p>n?"Dương nhiều hơn":n>p?"Âm nhiều hơn":"Bằng nhau";
};
