const user = {
    username: "Suprim",
    isLoggedIn: true,
    isActive:true,
    currentState: "Inactive",
    Proto : function(){
        console.log(this.username);
        
    }
}

// console.log(user.Proto());

function User(username,isLoggedIn,loggedInDays){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loggedInDays = loggedInDays;
}
const userOne = new User("Suprim",false,77);
console.log(userOne);

