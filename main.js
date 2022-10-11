var i = 0;
let toggle =true;
function postFunction()
{
    
    if(i==0){
        var post = document.getElementById("text1").value;
        document.getElementById("topic").innerHTML = post;
        document.getElementById("text1").value = ("");
        i++;
        
    }
    else if(i==1){
        var post = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = post;
        document.getElementById("text1").value = ("");
        i++
    }
    else if(i==2){
        var post = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = post;
        document.getElementById("text1").value = ("");
        i++
    }   
}

function clearFunction()
{   
    document.getElementById("text1").value = ("");
    document.getElementById("topic").innerHTML = ("");
    document.getElementById("comment1").innerHTML = ("");
    document.getElementById("comment2").innerHTML = ("");
    i = 0; 
    toggle =!toggle

}