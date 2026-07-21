ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:ancient_roseate_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:ancient_roseate_ball_lid',
    B: 'cobblemonparts:ancient_wooden_base',
  }
)})