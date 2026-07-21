BlockEvents.rightClicked('cobblemon:saccharine_log', event => {
        if(event.item.id == 'tfc:empty_jar') {
            event.item.count--
            event.player.tell('why are you smashing jars on a tree?')
}
}
)