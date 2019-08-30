// var hpage=document.getElementById("sep");
// var tpage=document.getElementById("sep1");

$(document).ready(function(){
   var hpage=document.getElementById("sep");
   var tpage=document.getElementById("sep1");
  // var cpage=document.getElementById("contact");
    $("#tnc").click(function() {
        console.log("entered!");
        hpage.style.display="none";
        tpage.style.display="block";
    }); 
    $("#tnc1").click(function() {
        console.log("entered!");
        hpage.style.display="none";
        tpage.style.display="block";
    });
    $("#ot").click(function() {
        console.log("entered!");
        hpage.style.display="block";
        tpage.style.display="none";
    }); 
    $("#ot1").click(function() {
        console.log("entered!");
        hpage.style.display="block";
        tpage.style.display="none";
    }); 
    $("#ot2").click(function() {
        console.log("entered!");
        hpage.style.display="block";
        tpage.style.display="none";
    }); 
    $("#ot3").click(function() {
        console.log("entered!");
        hpage.style.display="block";
        tpage.style.display="none";
    }); 
    $("#ot4").click(function() {
        console.log("entered!");
        hpage.style.display="block";
        tpage.style.display="none";
    }); 
    $('.preloader').delay(3000).fadeOut('slow');
    $('.rest').delay(2990).fadeIn('fast');
    
   
});
