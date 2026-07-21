BlockEvents.rightClicked("cobblemon:saccharine_log", (event) => {
  const {
    item,
    block,
    block: { properties },
    facing,
  } = event;
  
  if (item.id == "firmalife:jar/honey") {
    item.count--;

    properties.put("facing", facing.toString());

    block.set("cobblemon:saccharine_log_slathered", properties);
  }
    });