ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:citrine_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:citrine_ball_lid',
    B: 'cobblemonparts:iron_base',
  }
)})