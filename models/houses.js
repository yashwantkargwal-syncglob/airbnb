const homes = [];

module.exports = class Home{
    constructor(houseName,price,location,rating,photo){
        this.houseName = houseName,
        this.price= price,
        this.location = location,
        this.rating = rating,
        this.photo = photo
    }

    save(){
        homes.push(this);
    }

    static fetchAll(){
        return homes;
    }
}