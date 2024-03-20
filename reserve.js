function checking(){
//First name
v1=document.getElementById("box1");
e1=document.getElementById("ers1");
exp1=/^[a-z A-Z]{3,8}$/;
if(v1.value==""){
	e1.innerText="Please enter your firstname";
	v1.focus();
	return false;
}
else if(exp1.test(v1.value)==false){
	e1.innerText="invalid";
	v1.focus();
	return false;
}
else
    {
     e1.innerText="";
    }
//Email
v2=document.getElementById("box2");
e2=document.getElementById("ers2");
if(v2.value==""){
	e2.innerText="Please enter your emailid";
	v2.focus();
	return false;
}
else{
        e2.innerText="";
}
//Phnno
v3=document.getElementById("box3");
e3=document.getElementById("ers3");
exp3=/^[6-9]{1}[0-9]{9}$/;
if(v3.value==""){
	e3.innerText="Please enter your Phnno";
	v3.focus();
	return false;
}
else if(exp3.test(v3.value)==false){
	e3.innerText="invalid";
	v3.focus();
	return false;
}	
else{
        e3.innerText="";
    }
//Persons
v4=document.getElementById("box4");
e4=document.getElementById("ers4");
if(v4.value==""){
	e4.innerText="Please fill out this field";
	v4.focus();
	return false;
}
else{
        e4.innerText="";
}
//date
v5=document.getElementById("box5");
e5=document.getElementById("ers5");
if(v5.value==""){
	e5.innerText="Please enter the Date!";
	v5.focus();
	return false;
}
else{
        e5.innerText="";
}
//Time
v6=document.getElementById("box6");
e6=document.getElementById("ers6");
if(v6.value==""){
	e6.innerText="Please enter Timing!";
	v6.focus();
	return false;
}
else{
        e6.innerText="";
}
//Special Request
v7=document.getElementById("box7");
e7=document.getElementById("ers7");
if(v7.value==""){
	e7.innerText="Please fill out this field";
	v7.focus();
	return false;
}
else{
        e7.innerText="";
}
}