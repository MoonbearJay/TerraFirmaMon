ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_clicking",
        "comment": "find solid stone and split the apricorn",
        "post": [
            {"type": "add_item_cooldown", "s": 2},
            {"type": "drop_item", "if": {"type": "chance", "chance": 0.85}, "id": "cobblemonparts:roseate_ball_lid", count: 2 }
        ],
        "item_in": {"item": "cobblemon:pink_apricorn"},
        "block_in": {"blocks": "#c:stones"}
    })
})
