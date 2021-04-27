// function for service


function check(){
  if(document.getElementById('radio').checked){
    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+500+ ".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp"+150+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+350 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+350 +".00 Rs";

  }
  else{
    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+498+ ".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp"+249+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+249 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+249 +".00 Rs";
  }
}

// function for AMC
function checkAMC(){
  // var old =document.getElementById('r');
  // var new =document.getElementById('radioN');
  // var mrp=document.getElementById('mrp').value;
  // // var one =document.getElementById('radio1');
  // // var two = document.getElementById('radio2');
  // var rate1 = mrp*(15/100);
  // var rate2 = mrp*(22/100);

  if(document.getElementById('r').checked){

      document.getElementById('Machine-MRP').innerHTML="&nbsp&nbsp"+document.getElementById('mrp').value+".00 Rs";
      document.getElementById('amc-price').innerHTML="&nbsp&nbsp&nbsp&nbsp"+(document.getElementById('mrp').value)*(22/100)+".00 Rs";
      document.getElementById('final-price').innerHTML ="&nbsp&nbsp&nbsp&nbsp"+(document.getElementById('mrp').value)*(22/100)+".00 Rs";
      document.getElementById('total-bill').innerHTML ="&nbsp&nbsp&nbsp&nbsp"+(document.getElementById('mrp').value)*(22/100)+".00 Rs";
      document.getElementById('discount').innerHTML ="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+".00 Rs";
      document.getElementById('tax').innerHTML ="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+".00 Rs";


  }
  else{

    document.getElementById('Machine-MRP').innerHTML="&nbsp&nbsp"+document.getElementById('mrp').value+".00 Rs";
    document.getElementById('amc-price').innerHTML="&nbsp&nbsp&nbsp&nbsp"+(document.getElementById('mrp').value)*(15/100)+".00 Rs";
    document.getElementById('final-price').innerHTML ="&nbsp&nbsp&nbsp&nbsp"+(document.getElementById('mrp').value)*(15/100)+".00 Rs";
    document.getElementById('total-bill').innerHTML ="&nbsp&nbsp&nbsp&nbsp"+(document.getElementById('mrp').value)*(15/100)+".00 Rs";
    document.getElementById('discount').innerHTML ="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+".00 Rs";
    document.getElementById('tax').innerHTML ="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+".00 Rs";

  }

}

function checkService(){

  if(document.getElementById('sixMonth').checked){

    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+299 +".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('tax').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+299 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+299 +".00 Rs";


  }
  if(document.getElementById('one').checked){

    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+399 +".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('tax').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+399 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+399 +".00 Rs";


  }

  if(document.getElementById('two').checked){
    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+699 +".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('tax').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+699 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+699 +".00 Rs";


  }
  if(document.getElementById('three').checked){
    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+999 +".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('tax').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+999 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+999 +".00 Rs";


  }
  if(document.getElementById('four').checked){
    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+1299 +".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('tax').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+1299 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+1299 +".00 Rs";


  }
  if(document.getElementById('five').checked){
    document.getElementById('price').innerHTML= "&nbsp&nbsp&nbsp"+1599 +".00 Rs";
    document.getElementById('discount').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('tax').innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+0+ ".00 Rs";
    document.getElementById('final-price').innerHTML= "&nbsp&nbsp&nbsp"+1599 +".00 Rs";
    document.getElementById('total-bill').innerHTML= "&nbsp&nbsp&nbsp"+1599 +".00 Rs";


  }
}
