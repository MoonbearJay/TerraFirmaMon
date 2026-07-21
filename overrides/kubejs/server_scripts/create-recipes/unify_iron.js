ServerEvents.recipes(event => {
    event.replaceInput({type: 'minecraft:crafting_shaped'},'create:iron_sheet', 'immersiveengineering:plate_iron'),
    event.replaceInput({type: 'minecraft:crafting_shaped'},'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron'),
    event.replaceInput({type: 'minecraft:crafting_shaped'},'minecraft:copper_ingot', 'tfc:metal/ingot/copper'),
    event.replaceInput({type: 'minecraft:crafting_shaped'},'minecraft:amethyst_shard', 'tfc:gem/amethyst'),
    event.replaceInput({type: 'minecraft:crafting_shaped'},'minecraft:diamond', 'tfc:gem/diamond'),
    event.replaceInput({type: 'minecraft:crafting_shaped'},'minecraft:gold_ingot', 'tfc:metal/ingot/gold'),
    event.replaceInput({type: 'minecraft:stonecutting'},'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
    event.replaceInput({type: 'immersiveengineering:metal_press'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron'),
    event.replaceInput({id: 'cobblemonparts:iron_base'},'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
})