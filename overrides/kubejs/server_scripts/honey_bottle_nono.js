BlockEvents.rightClicked('cobblemon:saccharine_leaves', event => {
     if(event.block.properties.age == 2) {
        if(event.item.id == 'minecraft:glass_bottle') {
    event.player.tell('this bottle is too small to hold the honey, try using a jar instead!')
    event.cancel()
    
}
}})