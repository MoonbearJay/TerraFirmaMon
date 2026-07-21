ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:roseate_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:roseate_ball_lid',
    B: 'cobblemonparts:iron_base',
  }
)})