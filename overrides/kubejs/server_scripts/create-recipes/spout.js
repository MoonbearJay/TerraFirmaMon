ServerEvents.recipes(event => {
    event.shaped(
  Item.of('create:spout', 1),
  [
    ' A ',
    ' B ',
    '   '
  ],
  {
    A: 'create:copper_casing',
    B: 'tfc:food/dried_kelp',
  }
)})