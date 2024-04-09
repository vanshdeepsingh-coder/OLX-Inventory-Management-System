const fs=require('fs');

let olxInventory={
"inventory":[{
    stockKeepUnit:100,
    status:"active",
    location:"Gurgao",
    vehicleIdentificationNumber:"UK07EF2425",
    make:"Maruti",
    model:"Baleno",
    year:"2023",
    costPrice:"1000000 Lakhs",
    sellingPrice:"600000 Lakhs",
    createdAtTime:"01-11-2023",
    lastUpdatedTime:"10-11-2023",
    lastUpdatedByUser:"Vanshdeep Singh"
}]
}

module.exports= function createInventory(file){
    fs.writeFileSync(file,JSON.stringify(olxInventory));
}