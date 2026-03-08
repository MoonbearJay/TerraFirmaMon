ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:chute', 4),
  [
    ' A ',
    ' B ',
    ' A '
  ],
  {
    A: '#c:plates/iron',
    B: 'tfc:metal/ingot/wrought_iron',
  }
)})