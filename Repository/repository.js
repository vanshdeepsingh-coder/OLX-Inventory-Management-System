let creationDate,startDate,endDate,displayName,description,stockLevel;

class InventoryRepository{

    constructor(){
        creationDate='15-04-2024';
        startDate='16-04-2024';
        endDate='22-04-2024';
        displayName='OLX-Inventory-Management System';
        description=`Inventory for olx dealing with creation,updation
        and deletion operations on its attributes, Inventory is having an SKU (Stock Keep Unit) Identifier, 
        a type, a primary status, a primary location, and also set of attributes for a car 
        type inventory having - VIN (Vehicle Identification Number ) & attributes like make, model, trim & year, 
        and some pricing details (ie. cost & selling price), it is additionally having 
        metadata like created_at_time, last_updated_at_time, and also which user 
        created inventory and last updated by which user.`
        stockLevel=100;
    }

    getcreationDate(){
        return creationDate;
    }

    getstartDate(){
        return startDate;
    }

    getendDate(){
        return endDate;
    }

    getdisplayName(){
        return displayName;
    }

    getDescription(){
        return description;
    }
};

const repository=new InventoryRepository;
export default repository;