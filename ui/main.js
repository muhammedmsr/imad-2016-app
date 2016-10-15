var button=document.getElementById('counter');
button.onclick=function()
{  
 var request=new XMLHttpRequest();
 request.onreadystatechange=function()
  {if(request.readystate===XMLHttpRequest,DONE)
     if(request.status==200)
      {
      }
  };
    counter=counter+1;
    var span =document.getElementById('count');
    span.innerHTML=counter.toString();
};