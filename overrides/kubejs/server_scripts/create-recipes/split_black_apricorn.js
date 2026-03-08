ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_clicking",
        "comment": "find solid stone and split the apricorn",
        "post": [
            {"type": "add_item_cooldown", "s": 2},
            {"type": "drop_item", "if": {"type": "chance", "chance": 0.85}, "id": "create_encapsulated:split_black_apricorn", count: 2 }
        ],
        "item_in": {"item": "cobblemon:black_apricorn"},
        "block_in": {"blocks": "#c:stones"}
    })
})
