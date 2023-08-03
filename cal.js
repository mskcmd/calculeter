function display (value){
var outputScreen = document.getElementById("output-screen").value+=value;

}
function cleardisplay(){
    document.getElementById("output-screen").value=""; 
}
function dels(){
    document.getElementById("output-screen").value.slice(0.-1); 
}

function calculate(){
    var text=document.getElementById("output-screen").value; 
    
    var result=eval(text)
    
    document.getElementById("output-screen").value=result;
}
