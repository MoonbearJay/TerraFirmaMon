ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:mechanical_drill', 1),
  [
    ' A ',
    'ABA',
    ' C '
  ],
  {
    A: 'create:andesite_alloy',
    B: 'tfc:metal/ingot/wrought_iron',
    C: 'create:andesite_casing'
  }
)})