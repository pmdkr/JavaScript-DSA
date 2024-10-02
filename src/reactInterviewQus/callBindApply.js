const name1 = {
    firstName: "pramod",
    lastName: "lohra",
    printFullName: function () {
        console.log(`Full name is: ${this.firstName} ${this.lastName}`)
    }

}


const name2 = {
    firstName: "keshav",
    lastName: "kumar",


}

name1.printFullName();
name1.printFullName.call(name2);