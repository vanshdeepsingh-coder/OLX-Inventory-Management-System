const fs=require('fs')

module.exports=function updateInventory(filepath){
    var file_content=fs.readFileSync(filepath);
    var content=JSON.parse(file_content);

    for(let i in content.inventory){
        if(content.inventory[i].stockKeepUnit==100){
            content.inventory[i].status='inactive'
            fs.writeFileSync('data.json',JSON.stringify(content));
            break;
        }
    }
}