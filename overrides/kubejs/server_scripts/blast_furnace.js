ServerEvents.recipes(event => {
event.shaped(
    Item.of("minecraft:blast_furnace", 1),
    [
        'BBB',
        'BCB',
        'AAA'
    ],
    {
        A: '#c:stones/smooth',
        B: '#c:plates/steel',
        C: 'immersiveengineering:fluid_placer'
    }
)
})