ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:ancient_verdant_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:ancient_verdant_ball_lid',
    B: 'cobblemonparts:ancient_wooden_base',
  }
)})