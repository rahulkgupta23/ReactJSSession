class Customer {
    constructor(cName, cAge) {
        this.cName = cName;
        this.cAge = cAge;
    }

    save() {
        console.log(`Customer Name ${this.cName} and age is ${this.cAge}`);
    }
}


let c = new Customer('Rahul', 23)
c.save()