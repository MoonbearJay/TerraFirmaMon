ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:slate_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:slate_ball_lid',
    B: 'cobblemonparts:iron_base',
  }
)})