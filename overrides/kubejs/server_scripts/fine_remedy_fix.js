ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:fine_remedy', 1),
  [
    '   ',
    'AC ',
    'CB '
  ],
  {
    A: 'cobblemon:remedy',
    B: 'cobblemon:pep_up_flower',
    C: '#c:foods/fruit'
  }
)})