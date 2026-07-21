ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:ancient_slate_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:ancient_slate_ball_lid',
    B: 'cobblemonparts:ancient_wooden_base',
  }
)})