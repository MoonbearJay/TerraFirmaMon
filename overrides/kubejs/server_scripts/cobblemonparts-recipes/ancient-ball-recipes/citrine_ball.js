ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:ancient_citrine_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:ancient_citrine_ball_lid',
    B: 'cobblemonparts:ancient_wooden_base',
  }
)})