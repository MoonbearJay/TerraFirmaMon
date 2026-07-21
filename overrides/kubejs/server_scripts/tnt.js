ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:tnt', 1),
  [
    'ABA',
    'BAB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:gunpowder',
    B: '#c:sands'
  }
)
})