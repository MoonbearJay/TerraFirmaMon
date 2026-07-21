ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemon:poke_ball', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:poke_ball_lid',
    B: 'cobblemonparts:iron_base',
  }
)})