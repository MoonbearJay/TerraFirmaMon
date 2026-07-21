ServerEvents.recipes(event => {
event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#c:stones/raw'),
event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:furnace', 'minecraft:blast_furnace'),

// Add Wrought Iron to PneumaticCraft's Explosion Crafting recipes
event.custom({
  "type": "pneumaticcraft:explosion_crafting",
  "input": {
    "count": 1,
    "tag": "c:ingots/wrought_iron"
  },
  "loss_rate": 20,
  "results": [
    {
      "count": 1,
      "id": "pneumaticcraft:ingot_iron_compressed"
    }
  ]
}
)
})