// create a class called pet

class Pet{

}

//2 give the class 3 properties called givenName, age and ownerId

/*class Pet { 

    givenName; 
    Age;
    ownerId;
}*/

//3 create a constructor to assign the above 3 prop.

// class Pet{
//     constructor (givenName, age, ownerId) {
//          this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     } 
     
// }
// console.log(new Pet ("Rex", 4, 28))


// 4 Create a class called Owner with 3 properties: givenName, familyName and id
// // class Owner {
//     givenName;
//     familyName;
//     id;
//  }


// 5 Create a constructor for the Owner class that assigns the values above.
// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
// console.log(new Owner("Elizabeth", "Samatepo", 25))


//6

   class Owner {
    constructor (givenName, familyName, id){

        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
        getFullName(){
            return `${this.givenName} ${this.familyName}`;
//         }    
}
   }

// 7 Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.
class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }

    static getOwnerById(pet, owners) {
        // non-anonymous function
        // function findOwner(owner) {
        //     return owner.id == pet.ownerId;
        // }
        // let foundOwner = owners.find(findOwner);

        // anonymous function
        let foundOwner = owners.find(function (owner) {
            return owner.id == pet.ownerId;
        });

        if (!foundOwner) {
            // Owner was not found
            return "ERROR: Owner not found";
        }

        // Call the getFullName method of the owner and return that value
        return foundOwner.getFullName();
    }
}

let owners = [
    new Owner("Luke", "Parker", 12),
    new Owner("Dan", "Williams", 13),
    new Owner("Sally", "Jones", 19)
];

let myPet = new Pet("Rex", 4, 12);

console.log(Pet.getOwnerById(myPet, owners));

// 8 Create a class called Square with a single property, sideLength and create a constructor that assigns that value

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    get area(){
        return this.sideLength ** 2;
    }
}

let sq = new Square(10)
console.log(sq.area);