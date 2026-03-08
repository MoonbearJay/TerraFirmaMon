ServerEvents.recipes(event => {
    event.custom({
  "type": "create:item_application",
  "ingredients": [
    { "item": "create:gearbox" },
    { "item": "tfc:metal/double_ingot/wrought_iron" }
  ],
  "results": [ 
    {"id": "create:mechanical_press", "item": "create:mechanical_press" }
  ]
})
})