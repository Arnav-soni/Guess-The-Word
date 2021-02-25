function back(){
    window.location="activity_1.html"
}
function get_score(){
 score = localStorage.getItem("score");
 console.log("test");
 document.getElementById("update").innerHTML="<h1> score :"+score+"</h1>";
}
