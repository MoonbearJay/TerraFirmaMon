BlockEvents.rightClicked('cobblemon:saccharine_leaves', event => {
    if(event.block.properties.age == 2) {
        if(event.item.id == 'tfc:empty_jar') {
            event.item.count--
            event.block.set('cobblemon:saccharine_leaves')
            event.player.give('firmalife:jar/honey')
        }
    }
})