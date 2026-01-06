ServerEvents.recipes(event => {
    event.shaped(
  Item.of('waystones:warp_stone', 1),
  [
    'AEA',
    'ECE',
    'AEA'
  ],
  {
    A: 'tfc:gem/amethyst',
    C: 'tfc:gem/emerald',
    E: 'minecraft:ender_pearl',
  }
)})