$(document).ready(function(){
    

    document.getElementById("btn").addEventListener('click', function(){
    var oUrl=document.getElementById('oUrl').value;
        $.ajax({
            url:`https://test123mihir.herokuapp.com/${oUrl}`,
            success:function(response){
            document.getElementById("sUrl").innerHTML=response   
            }
        })
    })
})