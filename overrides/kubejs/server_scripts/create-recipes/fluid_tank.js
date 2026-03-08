ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:fluid_tank', 1),
  [
    ' A ',
    ' B ',
    ' A '
  ],
  {
    A: '#c:plates/copper',
    B: 'minecraft:glass'
  }
)})