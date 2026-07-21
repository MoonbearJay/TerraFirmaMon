ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:verdant_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:verdant_ball_lid',
    B: 'cobblemonparts:iron_base',
  }
)})