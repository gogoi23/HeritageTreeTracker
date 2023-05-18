//import currentUser from "./login.js"
//const fs = require('fs');
$(document).ready(function(){
    if(sessionStorage.getItem("userName") === null){
        $("#currentUser").text("");
    }
    else{
        console.log(console.log(sessionStorage.getItem("ID")));
        $("#currentUser").text(sessionStorage.getItem("userName"));
    }

    if(sessionStorage.getItem("userName") === null || sessionStorage.getItem("userName") === ""){
        $("#loginButton").text("Log in");
    }
    else{
        $("#loginButton").text("Log out");
    }

    $("#loginButton").click(function(){
        
        if(sessionStorage.getItem("userName") === null || sessionStorage.getItem("userName") === ""){
            window.location.href = "login.html";
        }
        else{
            sessionStorage.setItem("userName","");
            sessionStorage.setItem("ID","-1");
            $("#loginButton").text("Log in");
            alert("You has been logged out");
            $("#currentUser").text(sessionStorage.getItem("userName"));
            
        }     
    });


})