$(document).ready(function(){
    
    $("#login").click(function(){
        console.log("hello");
        let username = $("#userName").val();
        let password = $("#Password").val();
        if(username.length<5 ){
            alert("The username must be at least 5 characters");
        }
        else if(username.includes(" ")){
            alert("User name can not contain spaces.");
        }
        else if (password.length <7){
            alert("The password must be at least 7 characters");
        }

        else if(password.includes(" ")){
            alert("Password can not contain spaces.");
        }
        

        else{
            valid = true;
            $.post('/newUser', {Username:username, Password:password},function(data,status){
                //console.log(data);
                let id = parseInt(data);
                if(id === -1){
                    alert("This username is taken.");
                    valid = false;
                    
                }
                else{

                    sessionStorage.setItem("userName", username);
                    sessionStorage.setItem("ID", id);
                    window.location.replace("index.html");
                    alert("Welcome "+username+"!");
                    
                    
                }
                
                
            });
        }
    });
})