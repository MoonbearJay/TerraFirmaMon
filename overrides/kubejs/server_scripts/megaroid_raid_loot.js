LootJS.lootTables(event => {
    event
        .getLootTable("cobblemonraiddens:raid/tier/tier_five")
        .firstPool()
        .addEntry(LootEntry.of("mega_showdown:mega_stone").withWeight(10))
})