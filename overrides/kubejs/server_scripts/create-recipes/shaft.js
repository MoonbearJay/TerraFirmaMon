ServerEvents.recipes(event => {
    event.custom({
  "type": "create:item_application",
  "ingredients": [
    { "tag": "tfc:support_beams" },
    { "item": "create:andesite_alloy" }
  ],
  "results": [ 
    {"id": "create:shaft", "item": "create:shaft" }
  ]
})
})