ServerEvents.recipes(event => {
    event.shaped(
  Item.of('cobblemonparts:ancient_poke_ball_lid', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'cobblemonparts:poke_ball_lid',
    B: 'cobblemon:tumblestone',
  }
)})