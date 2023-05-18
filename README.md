# HeritageTreeTracker
Intro 
    This is an npm based website that that was hosted on a droplet virtual machine. This website's main feature is to display a map of 
    Portland which shows all the herritage trees in Portland. A Heritage tree is a tree that is considered irreparable due to historical 
    or other reasons that make the tree unique. On the map are tree icons that indicate the location of a tree. The user can click on this 
    icon to bring up information about that tree. 

# User Login System
    Users can log into the website or make an account with the website. To make an account an account the user has to submit a password 
    and username. Each username has to be unique otherwise it will be rejected. To log in the user has to write their password and username.
    If the credentials are wrong they can not log in.

# Favoriting a Tree
    The user can favorite a tree if they find it interesting or want to look at it later. To do this the user must be logged in. Once they 
    are logged in they should go to the map and click the tree icon of the tree they want to favorite. When they click the icon a window    
    will appear that displays information about the tree. The user can click the star icon in the top right corner of this window to 
    favorite this tree. The user can go to the favorites section to view all the trees they favorited. 

# MySql Database
    All the user and tree information as well as all the trees that each user has favorited is stored in a mysql database. This data base is 
    in the same virtual machine that is hosting the website. When the map is displayed it makes a call to the database which stores all the
    coordinates of the trees. 

# Google Mapping Api
    We used a google map api for the map. 

# Issues     
    This website is no longer functional becuase I stopped paying for the virtual machine that hosted this website. 
    This virtual machine also hosted the mysql database which stored all the info on the trees as well as the users login info. 
    Now that this virtual machine no longer runs the website can not make calls the data base which is also another reason that this website
    can not function properly. The google mapping api is also no longer being payed for so that feature does not work either. 
