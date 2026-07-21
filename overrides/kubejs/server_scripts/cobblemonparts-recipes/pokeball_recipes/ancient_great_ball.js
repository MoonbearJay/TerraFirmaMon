ServerEvents.recipes(event => {
    event.custom({
  "type": "tfc:barrel_sealed",
  "duration": 1200,
  "input_fluid": {
    "amount": 250,
    "fluid": "tfc:red_dye"
  },
  "input_item": {
    "count": 1,
    "item": "cobblemon:ancient_azure_ball"
  },
  "output_item": {
    "count": 1,
    "id": "cobblemon:ancient_great_ball"
  }
})
.id('terrafirmamon:custom/ancient_great_ball')
}
)