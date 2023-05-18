$(document).ready(function() {
    
    
    if(sessionStorage.getItem("userName") === null ||sessionStorage.getItem("userName") === ""  ){
        $("#noVisitedMessage").text("Log in to see your visited trees");
    }
    else{
        
        $.post('/visitedTrees',{id: sessionStorage.getItem("ID"),notes:false},function(data,status){
            
            let tree = "";
            if(data === "You have not visited any trees yet."){
                tree = "You have not visited any trees yet. "
            }
            else{
                let vt = JSON.parse(data);
                //vt.sort((a, b) => a.commonName.localeCompare(b.commonName));
                //console.log(vt);
                
                for(let i = 0; i<vt.length;i++){
                    tree = tree + 
                    "<tr>"+
                        "<td>"+
                            "<img id='visitedTrees' src = 'https://www.iconpacks.net/icons/2/free-tree-icon-1578-thumb.png'"+
                            "width='150' height='150'>"+
                        "</td>"+
                        "<td>"+
                            "<b>"+vt[i].COMMON+"</b>"+
                            "<p>Address: "+ vt[i].SITE_ADRESS+"</p>"+
                            "<p>Tree Info: " +vt[i].NOTES+"</p>";
                           
                            $.post('/visitedtreenotes',{userID: sessionStorage.getItem("ID"), treeID: vt[i].OBJECTID},function(info,status){
                               console.log("info"+info);
                               let text = "";
                               if(info === ""){
                                    text = "none"; 
                               }
                               else{
                                   text = info;
                               }
                               tree = tree + "</td>" ;
                               tree = tree + "<p>Observations for "+ vt[i].COMMON+":\n "+ text +"</p>";
                               
                               let table = document.getElementById("treesVisited");
                                table.innerHTML = tree;
                            });

                            
                        
                }
            }
            
        });
        
    }

    // remove trees if clicked
    $('.visitedButton').click(function(){
        $(this).parent().parent().parent().parent().remove()
    });

    // print "no trees visited" if there are no trees on the screen
    // if ($('#treesVisited').length == null) {
    //     $("#noVisitedMessage").text("No Trees Visited");
    // }

    

});
