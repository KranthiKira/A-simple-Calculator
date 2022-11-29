function clrscreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value +=value;
}
function Backspace(){
    var p=document.getElementById("result").value;
    document.getElementById("result").value=p.substring(0,p.length -1);
}
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}