ServerEvents.recipes(event => {
    event.shaped(
  Item.of('waystones:waystone', 1),
  [
    ' E ',
    'ECE',
    'AAA'
  ],
  {
    A: 'minecraft:obsidian',
    C: 'waystones:warp_stone',
    E: '#c:stones/raw',
  }
)})