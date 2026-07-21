ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:premier_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:premier_ball_lid',
    B: 'cobblemonparts:iron_base',
  }
)})