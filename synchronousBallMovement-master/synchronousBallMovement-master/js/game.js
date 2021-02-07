class Game{
    constructor(){
        }

    getState(){
        var getStateref = database.ref('gameState')
        getStateref.on("value", function(data){
        gameState = data.val()
        })
    }
    updateState(state){
        database.ref('gameState').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form1 = new Form ()
            form1.display()

        }
    }
}   