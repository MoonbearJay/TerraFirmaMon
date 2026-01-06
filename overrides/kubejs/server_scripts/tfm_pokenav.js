ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblenav:pokenav_item_base', 1),
  [
    'ABA',
    'ECD',
    'AFA'
  ],
  {
    A: 'tfc:metal/ingot/copper',
    B: 'tfc:metal/ingot/wrought_iron',
    C: '#tfcobblemon:gemstones',
    E: 'cobblemon:electirizer',
    D: 'cobblemon:upgrade',
    F: 'minecraft:redstone'
  }
)})