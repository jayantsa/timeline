var obj;
function request(url)
{
	console.log("request");
  obj=new XMLHttpRequest();
  obj.responseType="json";
  obj.open("GET",url,true);
  obj.send();
  console.log(obj);
}
function createimage(){
	var url=document.getElementById("token");
	request("https://graph.facebook.com/v2.3/me/photos?access_token="+url.value);
  obj.onreadystatechange=change;
  console.log(obj.readyState);
}
var fbPhotosInfScroll=(function(){
  var url="";
  var accessToken,imgWidth,containerEL;
  function render(response)
  {
    var list=response.data;
    for(var i=0;i<list.length;i++){
      var img_el=document.createElement('img');
      img_el.setAttribute("src",listi[i].source);
      containerEL.appendChild(img_el);
}
  
function change(){
  var ele=document.getElementById("images");
  var arr=obj.response.data;
    for(var i=0;i<arr.length;i++)
    {
      var li=document.createElement('li');
      var img=document.createElement('img');
      img.setAttribute("src",arr[i].source);
      li.appendChild(img);
      ele.appendChild(li);
    }
  }

function sendRequest(){
  var xmlobj=new XMLHttpRequest();
  xmlobj.open('GET',url,true);
  xmlobj.responseType='json';
  xmlobj.onreadystatechange=function(){
    if(this.readyState===4){
      render(this.response);
    }
  }
  xmlobj.send();
}


  }
  return{
    init:function(config){
      if(config.access_token===undefined||config.id===undefined){
        console.log("provide access token");
        return;
      }
      containerEL=document.getElementById(config.id);
      if(!containerEL){
        console.log()
      }
      }

    }
  };
}
