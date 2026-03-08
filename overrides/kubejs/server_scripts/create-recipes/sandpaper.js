ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:sand_paper', 1),
  [
    'AB ',
    '   ',
    '   '
  ],
  {
    A: 'minecraft:paper',
    B: '#c:sands',
  }
)})