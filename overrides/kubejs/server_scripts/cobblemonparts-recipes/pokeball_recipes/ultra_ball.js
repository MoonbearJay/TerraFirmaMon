ServerEvents.recipes(event => {
    event.custom({
  "type": "tfc:barrel_sealed",
  "duration": 1200,
  "input_fluid": {
    "amount": 250,
    "fluid": "tfc:yellow_dye"
  },
  "input_item": {
    "count": 1,
    "item": "cobblemon:slate_ball"
  },
  "output_item": {
    "count": 1,
    "id": "cobblemon:ultra_ball"
  }
})
.id('terrafirmamon:custom/ultra_ball')
}
)