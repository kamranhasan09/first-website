var imgno=0;
var imgarr=["AB1.jpg","AB2.jpg","AdministrativeBlock.jfif","IIMS&R.jfif","Polytechnic.jpg","Pharmacy.jpg"];
function slider()
{
var img=document.getElementById("slide");
img.src="images/"+imgarr[imgno];
imgno++;
if(imgno==6)
{
  imgno=0;
}
window.setTimeout("slider()",4000);
} 