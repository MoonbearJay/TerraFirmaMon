LootJS.lootTables(event => {
    event.modifyEntityTables("cobblemon:entity/combee").createPool(pool => {
        pool.remove("minecraft:honey_jar")
        pool.add("firmalife:jar/honey", 1, [1, 1])
    })
})