class Player {
    constructor(){

    }
    getCount(){
        var getCountref = database.ref('playerCount')
        getCountref.on("value",function(data){
        playerCount = data.val()
        })

    }
    updateCount(count){
      database.ref('playerCount').update({
        playerCount:count
        
      })  
    }
    update(name){
    var updateIndex="player"+playerCount
    database.ref(updateIndex).set({
        name:name
    })    



    }



}