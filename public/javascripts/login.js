let currentUser = {
    Uname : "nu",
    id : -1
    
};


export default currentUser;

$(document).ready(function(){
    
    $("#login").click(function(){
        let username = $("#userName").val();
        let password = $("#Password").val(); 

        $.post('/users',{Username:username, Password:password},function(data,status){
            
            let user = JSON.parse(data);
            let valid = false;
            
            // for (let i = 0; i < user.length; i++) {
                
            //     if(user[i].USERNAME === username && user[i].PASSWORD === password){
            //         currentUser.id = user[i].ID;
            //         currentUser.Uname = username;
            //         valid = true;
            //     }
            // }

            if(user.length == 2){
                //valid = false;
                alert("Username not found.");
            }
            else if(user.length == 3){
                alert("This password is wrong");
            }
            else {
                currentUser.id = user[0].ID;
                username = user[0].USERNAME;
                console.log(currentUser.id);
                //valid = true;
                //alert("helloworld");
                sessionStorage.setItem("userName", username);
                sessionStorage.setItem("ID", user[0].ID);

                window.location.href = "index.html";
                alert("Welcome Back "+username+"!");
            }

            if(valid){
                // window.location.replace("index.html");
                // alert("Welcome Back "+username+"!");
            }
            else{
                //alert("Username not found.");
            }

        });



    });


})

