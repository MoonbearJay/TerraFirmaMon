ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:mechanical_saw', 1),
  [
    ' A ',
    'ABA',
    ' C '
  ],
  {
    A: 'immersiveengineering:plate_iron',
    B: 'tfc:metal/ingot/wrought_iron',
    C: 'create:andesite_casing'
  }
)})