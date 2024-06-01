// dialog boxes :

alert
prompt
confirm

/*
if (20==20){
    alert(" u r now alerted ")
}
*/


var women = confirm("are u a women")

if(women){
    let name = prompt("pls enter ur name")

    document.write("hello madam" + name + "welcome to my page")
}

else {
    let name = prompt("pls enter ur name");
    document.write("hello mr"+name+"welcome to my page")
}