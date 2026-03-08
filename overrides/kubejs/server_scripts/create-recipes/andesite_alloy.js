ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:andesite_alloy', 3),
  [
    'AB ',
    'BA ',
    '   '
  ],
  {
    A: 'create:zinc_nugget',
    B: 'tfc:rock/cobble/andesite'
  }
)})