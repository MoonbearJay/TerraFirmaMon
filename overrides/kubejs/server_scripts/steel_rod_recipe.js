ServerEvents.recipes(event => {
event.custom({
 "type": "immersiveengineering:metal_press",
  "mold": "immersiveengineering:mold_rod",
  "input": {
    "tag": "c:ingots/steel"
  },
  "result": {
    "item": "tfc:metal/rod/steel",
    "count": 2
  },
  "energy": 2400
})})