//Крюк для цепляния
craftingTable.addShapeless(
	"item_grapplemod_grapplinghook", 
	<item:grapplemod:grapplinghook> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:tfc:metal/fish_hook/wrought_iron>, <item:minecraft:lead>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Магниты для create
craftingTable.addShapeless(
	"block_create_new_age_magnetite_block", 
	<item:create_new_age:magnetite_block> * 1, 
	[<item:tfc:ore/rich_magnetite>, <item:tfc:ore/rich_magnetite>, <item:tfc:ore/rich_magnetite>, 
	<item:tfc:ore/rich_magnetite>, <item:tfc:ore/rich_magnetite>, <item:tfc:ore/rich_magnetite>, 
	<item:tfc:ore/rich_magnetite>, <item:tfc:ore/rich_magnetite>, <item:tfc:ore/rich_magnetite>]);
craftingTable.addShapeless(
	"item_tfc_ore_rich_magnetite",
	<item:tfc:ore/rich_magnetite> * 9, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:create_new_age:magnetite_block>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Уран для реактора
craftingTable.addShapeless(
	"item_create_small_crushed_raw_uranium", 
	<item:create_mixed_nuclear:raw_reactive_uranium> * 1, 
	[<item:tfc_ie_addon:ore/small_uraninite>, <item:tfc_ie_addon:ore/small_uraninite>, <item:tfc_ie_addon:ore/small_uraninite>, 
	<item:tfc_ie_addon:ore/small_uraninite>, <item:tfc_ie_addon:ore/small_uraninite>, <item:tfc_ie_addon:ore/small_uraninite>, 
	<item:tfc_ie_addon:ore/small_uraninite>, <item:tfc_ie_addon:ore/small_uraninite>, <item:tfc_ie_addon:ore/small_uraninite>]);
craftingTable.addShapeless(
	"item_create_poor_crushed_raw_uranium", 
	<item:create_mixed_nuclear:raw_reactive_uranium> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:tfc_ie_addon:ore/poor_uraninite>, <item:tfc_ie_addon:ore/poor_uraninite>, <item:tfc_ie_addon:ore/poor_uraninite>, 
	<item:tfc_ie_addon:ore/poor_uraninite>, <item:tfc_ie_addon:ore/poor_uraninite>, <item:tfc_ie_addon:ore/poor_uraninite>]);
craftingTable.addShapeless(
	"item_create_normal_crushed_raw_uranium", 
	<item:create_mixed_nuclear:raw_reactive_uranium> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:tfc_ie_addon:ore/normal_uraninite>, <item:tfc_ie_addon:ore/normal_uraninite>, 
	<item:minecraft:air>, <item:tfc_ie_addon:ore/normal_uraninite>, <item:tfc_ie_addon:ore/normal_uraninite>]);
craftingTable.addShapeless(
	"item_create_rich_crushed_raw_uranium", 
	<item:create_mixed_nuclear:raw_reactive_uranium> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:tfc_ie_addon:ore/rich_uraninite>, <item:tfc_ie_addon:ore/rich_uraninite>, 
	<item:minecraft:air>, <item:tfc_ie_addon:ore/rich_uraninite>, <item:minecraft:air>]);
	
//Светокамень
craftingTable.addShapeless(
	"item_minecraft_glowstone_dust", 
	<item:minecraft:glowstone_dust> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:tfc_ie_addon:powder/uraninite>, <item:tfc:powder/native_gold>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Клокворк Clockwork - физика блоков
craftingTable.addShapeless(
	"item_vs_clockwork_wanderlite_matrix", 
	<item:vs_clockwork:wanderlite_matrix> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
recipes.remove(<item:vs_clockwork:physics_infuser>);
craftingTable.addShaped("physics_infuser", <item:vs_clockwork:physics_infuser> * 1, [
	[<tag:items:tfc:lumber>, <item:minecraft:stick>, <tag:items:tfc:lumber>], 
	[<item:minecraft:stick>, <item:minecraft:crafting_table>, <item:minecraft:stick>], 
	[<tag:items:tfc:lumber>, <item:minecraft:stick>, <tag:items:tfc:lumber>]]);
recipes.remove(<item:vs_clockwork:wanderwand>);
craftingTable.addShapeless("wanderwand", <item:vs_clockwork:wanderwand> * 1, 
	[<tag:items:tfc:lumber>, <item:minecraft:stick>]);
recipes.remove(<item:vs_clockwork:balloon_casing>);
craftingTable.addShaped("balloon_casing", <item:vs_clockwork:balloon_casing> * 1, [
	[<item:minecraft:stick>, <item:minecraft:white_wool>, <item:minecraft:stick>], 
	[<item:minecraft:white_wool>, <item:minecraft:air>, <item:minecraft:white_wool>], 
	[<item:minecraft:stick>, <item:minecraft:white_wool>, <item:minecraft:stick>]],
	null);

//Сушёная ламинария для шин
craftingTable.addShapeless("item_minecraft_dried_kelp", <item:minecraft:dried_kelp> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:afc:rubber_bar>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);

//Клей для поводков
craftingTable.addShaped("item_minecraft_lead", <item:minecraft:lead> * 2, 
	[[<tag:items:forge:string>, <tag:items:forge:string>, <item:minecraft:air>], 
	[<tag:items:forge:string>, <item:tfc:glue>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <tag:items:forge:string>]],
	null);

//Алмазная наждачка
craftingTable.addShapeless("item_createaddition_diamond_grit_sandpaper", 
	<item:createaddition:diamond_grit_sandpaper> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:paper>, <item:tfc:powder/diamond>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Убираем нефть из дизельных генераторов
recipes.remove(<item:createdieselgenerators:oil_scanner>);
recipes.remove(<item:createdieselgenerators:pumpjack_bearing>);
recipes.remove(<item:createdieselgenerators:pumpjack_crank>);
recipes.remove(<item:createdieselgenerators:pumpjack_head>);
recipes.remove(<item:createdieselgenerators:distillation_controller>);

//Убираем инструменты из дизельных генераторов
recipes.remove(<item:createdieselgenerators:hammer>);
recipes.remove(<item:createdieselgenerators:wire_cutters>);

//Убираем лишние вещи из create: new age и additions
recipes.remove(<item:create_new_age:reinforced_motor>);
recipes.remove(<item:create_new_age:advanced_motor>);
recipes.remove(<item:create_new_age:basic_motor>);

recipes.remove(<item:create_new_age:redstone_magnet>);
recipes.remove(<item:create_new_age:layered_magnet>);
recipes.remove(<item:create_new_age:fluxuated_magnetite>);
recipes.remove(<item:create_new_age:netherite_magnet>);

recipes.remove(<item:create_new_age:basic_energiser>);
recipes.remove(<item:create_new_age:advanced_energiser>);
recipes.remove(<item:create_new_age:reinforced_energiser>);

recipes.remove(<item:create_new_age:advanced_motor_extension>);
recipes.remove(<item:create_new_age:basic_motor_extension>);

recipes.remove(<item:createaddition:small_light_connector>);
recipes.remove(<item:createaddition:large_connector>);
recipes.remove(<item:createaddition:connector>);
recipes.remove(<item:create_new_age:electrical_connector>);

recipes.remove(<item:createaddition:modular_accumulator>);

//Фиксим крафты для предметов из new age
recipes.remove(<item:create_new_age:heater>);
craftingTable.addShaped(
	"block_create_new_age_heater", 
		<item:create_new_age:heater> * 1,
		[[<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>], 
		[<item:minecraft:iron_nugget>, <item:create:empty_blaze_burner>, <item:minecraft:iron_nugget>], 
		[<item:create_new_age:heat_pipe>, <item:tfc:metal/ingot/wrought_iron>, <item:create_new_age:heat_pipe>]],
		null);
recipes.remove(<item:create_new_age:heat_pump>);
craftingTable.addShaped("heat_pump", <item:create_new_age:heat_pump> * 1, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:create_new_age:heat_pipe>, <item:tfc:metal/sheet/nickel>, <item:create_new_age:heat_pipe>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShapeless("item_forge_magma_block", <item:minecraft:magma_block> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:magma_block>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Убираем изменение погоды
recipes.remove(<item:weather2:weather_item>);

//Убираем гравипушку
recipes.remove(<item:vs_clockwork:gravitron>);

//Убираем крафты для лишних лодок
recipes.remove(<item:afc:wood/boat/baobab>);
recipes.remove(<item:afc:wood/boat/eucalyptus>);
recipes.remove(<item:afc:wood/boat/mahogany>);
recipes.remove(<item:afc:wood/boat/hevea>);
recipes.remove(<item:afc:wood/boat/tualang>);
recipes.remove(<item:afc:wood/boat/teak>);
recipes.remove(<item:afc:wood/boat/cypress>);
recipes.remove(<item:afc:wood/boat/fig>);
recipes.remove(<item:afc:wood/boat/ironwood>);
recipes.remove(<item:afc:wood/boat/ipe>);

//Крафты для динамита
recipes.remove(<item:bombs:demolition_table>);
craftingTable.addShaped(
	"block_bombs_demolition_table", 
	<item:bombs:demolition_table> * 1, 
	[[<item:tfc:metal/ingot/copper>, <item:tfc:metal/ingot/copper>, <item:tfc:metal/ingot/copper>], 
	[<item:minecraft:brick>, <item:minecraft:air>, <item:minecraft:brick>], 
	[<item:minecraft:brick>, <item:minecraft:brick>, <item:minecraft:brick>]],
	null);
craftingTable.addShaped(
	"block_minecraft_tnt", 
	<item:minecraft:tnt> * 1, 
	[[<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>], 
	[<item:tfc:powder/salt>, <item:minecraft:gunpowder>, <item:tfc:powder/salt>], 
	[<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>]],
	null);

//Дополнительные крафты для совместимости
craftingTable.addShapeless(
	"item_minecraft_amethyst_shard", 
	<item:minecraft:amethyst_shard> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:tfc_ie_addon:mineral/quartz_shard>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShaped(
	"block_minecraft_sponge", 
	<item:minecraft:sponge> * 1, 
	[[<item:tfc:wool>, <item:minecraft:air>, <item:tfc:wool>], 
	[<item:minecraft:air>, <item:minecraft:clay_ball>, <item:minecraft:air>], 
	[<item:tfc:wool>, <item:minecraft:air>, <item:tfc:wool>]],
	null);
craftingTable.addShapeless(
	"item_minecraft_amethyst_shard", 
	<item:minecraft:amethyst_shard> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:tfc:lens>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
recipes.remove(<item:minecraft:amethyst_block>);
recipes.remove(<item:minecraft:tinted_glass>);

//Фикс крафта для бинтов
craftingTable.addShapeless(
	"item_tfc_medicine_dressing", 
	<item:tfc_medicine:dressing> * 6, 
	[<item:tfc:glue>, <tag:items:tfc:high_quality_cloth>, <item:minecraft:air>, 
	<tag:items:tfc:high_quality_cloth>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Бумага из опилок коры деревьев
craftingTable.addShapeless(
	"item_minecraft_paper_blue", 
	<item:minecraft:paper> * 2, 
	[<tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, 
	<tag:items:forge:bark_powder>, <item:tfc:metal/bucket/blue_steel>.withTag({fluid: {FluidName: "minecraft:water", Amount: 1000}}), <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_minecraft_paper_red", 
	<item:minecraft:paper> * 2, 
	[<tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, 
	<tag:items:forge:bark_powder>, <item:tfc:metal/bucket/red_steel>.withTag({fluid: {FluidName: "minecraft:water", Amount: 1000}}), <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_minecraft_paper_wood", 
	<item:minecraft:paper> * 2, 
	[<tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, 
	<tag:items:forge:bark_powder>, <item:tfc:wooden_bucket>.withTag({fluid: {FluidName: "minecraft:water", Amount: 1000}}), <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_minecraft_paper_jug", 
	<item:minecraft:paper> * 2, 
	[<tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, 
	<tag:items:forge:bark_powder>, <item:tfc:ceramic/jug>.withTag({fluid: {FluidName: "minecraft:water", Amount: 100}}), <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_minecraft_paper", 
	<item:minecraft:paper> * 2, 
	[<tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, <tag:items:forge:bark_powder>, 
	<tag:items:forge:bark_powder>, <item:minecraft:water_bucket>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);craftingTable.addShapeless("item_projectred_core_plate", <item:projectred_core:plate> * 1, [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:create:copper_sheet>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);

//Крафты для электроники
recipes.remove(<item:projectred_core:plate>);
craftingTable.addShapeless(
	"item_projectred_core_plate", 
	<item:projectred_core:plate> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:glass_pane>, <item:tfc:glue>, <tag:items:forge:sheets/copper>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_orange_insulated_wire", 
	<item:projectred_transmission:orange_insulated_wire> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:wires/copper>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_yellow_insulated_wire", 
	<item:projectred_transmission:yellow_insulated_wire> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:wires/electrum>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_white_insulated_wire", 
	<item:projectred_transmission:white_insulated_wire> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:wires/aluminum>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_gray_insulated_wire", 
	<item:projectred_transmission:gray_insulated_wire> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:wires/lead>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_black_insulated_wire", 
	<item:projectred_transmission:black_insulated_wire> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:wires/steel>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_core_infused_silicon", 
	<item:projectred_core:infused_silicon> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:afc:rubber_bar>, <item:minecraft:redstone>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_core_energized_silicon", <item:projectred_core:energized_silicon> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:afc:rubber_bar>, <item:minecraft:glowstone_dust>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
recipes.remove(<item:projectred_core:multimeter>);
craftingTable.addShaped(
	"item_projectred_core_multimeter", <item:projectred_core:multimeter> * 1, 
	[[<tag:items:forge:wires>, <item:create_connected:control_chip>, <tag:items:forge:wires>], 
	[<item:minecraft:air>, <item:minecraft:glass_pane>, <item:minecraft:air>], 
	[<item:minecraft:air>, <tag:items:forge:wires>, <item:minecraft:air>]],
	null);
recipes.remove(<item:projectred_core:screwdriver>);
craftingTable.addShaped(
	"item_projectred_core_screwdriver", 
	<item:projectred_core:screwdriver> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:tfc:metal/rod/wrought_iron>], 
	[<item:minecraft:air>, <item:tfc:metal/rod/wrought_iron>, <item:minecraft:air>], 
	[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
	
//Переделываю другие редстоун компоненты
recipes.remove(<item:integrated_circuit:integrated_circuit>);
craftingTable.addShaped("integrated_circuit", <item:integrated_circuit:integrated_circuit> * 1, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:redstone>, <item:create_connected:control_chip>, <item:minecraft:redstone>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>]]);

recipes.remove(<item:minecraft:repeater>);
craftingTable.addShaped(
	"block_minecraft_repeater", 
	<item:minecraft:repeater> * 1, 
	[[<item:minecraft:redstone_torch>, <item:minecraft:redstone>, <item:minecraft:redstone_torch>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
	
recipes.remove(<item:minecraft:comparator>);
craftingTable.addShaped(
	"block_minecraft_comparator", 
	<item:minecraft:comparator> * 1, 
	[[<item:minecraft:air>, <item:minecraft:redstone_torch>, <item:minecraft:air>], 
	[<item:minecraft:redstone_torch>, <item:minecraft:redstone>, <item:minecraft:redstone_torch>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>]],
	null);
	
recipes.remove(<item:minecraft:redstone_block>);
craftingTable.addShaped(
	"block_minecraft_redstone_block", 
	<item:minecraft:redstone_block> * 1, 
	[[<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>], 
	[<item:minecraft:redstone>, <item:create:electron_tube>, <item:minecraft:redstone>], 
	[<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>]],
	null);

recipes.remove(<item:minecraft:tripwire_hook>);
craftingTable.addShaped(
	"block_minecraft_tripwire_hook", 
	<item:minecraft:tripwire_hook> * 1, 
	[[<item:minecraft:air>, <item:tfc:metal/fish_hook/wrought_iron>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]],
	null);
	
recipes.remove(<item:minecraft:redstone_torch>);
craftingTable.addShapeless(
	"block_minecraft_redstone_torch", 
	<item:minecraft:redstone_torch> * 1, 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);

recipes.remove(<item:minecraft:lever>);
craftingTable.addShaped(
	"block_minecraft_lever", 
	<item:minecraft:lever> * 1, 
	[[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>], 
	[<item:projectred_core:anode>, <item:projectred_core:conductive_plate>, <item:projectred_core:cathode>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);

recipes.remove(<item:create:transmitter>);
craftingTable.addShaped(
	"item_create_transmitter", 
	<item:create:transmitter> * 1, 
	[[<item:minecraft:air>, <item:minecraft:lightning_rod>, <item:minecraft:air>], 
	[<tag:items:forge:plates/copper>, <tag:items:forge:plates/copper>, <tag:items:forge:plates/copper>], 
	[<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>]],
	null);
	
recipes.remove(<item:create:pulse_timer>);
craftingTable.addShaped(
	"block_create_pulse_timer", 
	<item:create:pulse_timer> * 1, 
	[[<item:minecraft:amethyst_shard>, <tag:items:forge:sheets/brass>, <item:minecraft:redstone_torch>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
	
recipes.remove(<item:create:pulse_repeater>);
craftingTable.addShaped(
	"block_create_pulse_repeater", 
	<item:create:pulse_repeater> * 1,
	[[<item:minecraft:redstone>, <tag:items:forge:sheets/brass>, <item:minecraft:redstone_torch>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
	
recipes.remove(<item:create:powered_latch>);
craftingTable.addShaped(
	"block_create_powered_latch", 
	<item:create:powered_latch> * 1, 
	[[<item:minecraft:air>, <item:minecraft:redstone_torch>, <item:minecraft:air>], 
	[<item:minecraft:redstone>, <item:minecraft:lever>, <item:minecraft:redstone>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>]],
	null);

recipes.remove(<item:create:powered_toggle_latch>);
craftingTable.addShaped(
	"block_create_powered_toggle_latch", 
	<item:create:powered_toggle_latch> * 1, 
	[[<item:minecraft:air>, <item:minecraft:redstone_torch>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:lever>, <item:minecraft:air>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>]],
	null);
	
recipes.remove(<item:create:pulse_extender>);
craftingTable.addShaped(
	"block_create_pulse_extender", 
	<item:create:pulse_extender> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:redstone_torch>], 
	[<item:minecraft:redstone>, <tag:items:forge:sheets/brass>, <item:minecraft:redstone_torch>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>]],
	null);
	
recipes.remove(<item:minecraft:daylight_detector>);
craftingTable.addShaped(
	"block_minecraft_daylight_detector", 
	<item:minecraft:daylight_detector> * 1, 
	[[<item:tfc:lens>, <item:tfc:lens>, <item:tfc:lens>], 
	[<item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>], 
	[<tag:items:tfc:lumber>, <tag:items:tfc:lumber>, <tag:items:tfc:lumber>]],
	null);

recipes.remove(<item:minecraft:piston>);
craftingTable.addShaped(
	"block_minecraft_piston", 
	<item:minecraft:piston> * 1, 
	[[<tag:items:tfc:lumber>, <tag:items:tfc:lumber>, <tag:items:tfc:lumber>], 
	[<tag:items:forge:cobblestone>, <item:tfc:metal/rod/wrought_iron>, <tag:items:forge:cobblestone>], 
	[<item:createaddition:electric_motor>, <item:tfc:brass_mechanisms>, <item:minecraft:redstone>]],
	null);
	
recipes.remove(<item:create:analog_lever>);
craftingTable.addShaped(
	"block_create_analog_lever", 
	<item:create:analog_lever> * 1, 
	[[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>], 
	[<item:create:electron_tube>, <item:projectred_core:conductive_plate>, <item:projectred_core:anode>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
	
recipes.remove(<item:create_connected:sequenced_pulse_generator>);
craftingTable.addShaped(
	"block_create_connected_sequenced_pulse_generator", 
	<item:create_connected:sequenced_pulse_generator> * 1, 
	[[<item:create:electron_tube>, <item:create_connected:control_chip>, <item:minecraft:air>], 
	[<item:create:electron_tube>, <tag:items:forge:sheets/brass>, <item:minecraft:redstone_torch>], 
	[<item:projectred_core:plate>, <item:projectred_core:plate>, <item:projectred_core:plate>]],
	null);
	
recipes.remove(<item:projectred_core:red_ingot>);
recipes.remove(<item:projectred_core:red_iron_comp>);

recipes.remove(<item:integrated_circuit:white_integrated_circuit>);
recipes.remove(<item:integrated_circuit:light_gray_integrated_circuit>);
recipes.remove(<item:integrated_circuit:orange_integrated_circuit>);
recipes.remove(<item:integrated_circuit:magenta_integrated_circuit>);
recipes.remove(<item:integrated_circuit:light_blue_integrated_circuit>);
recipes.remove(<item:integrated_circuit:yellow_integrated_circuit>);
recipes.remove(<item:integrated_circuit:lime_integrated_circuit>);
recipes.remove(<item:integrated_circuit:pink_integrated_circuit>);
recipes.remove(<item:integrated_circuit:gray_integrated_circuit>);
recipes.remove(<item:integrated_circuit:cyan_integrated_circuit>);
recipes.remove(<item:integrated_circuit:purple_integrated_circuit>);
recipes.remove(<item:integrated_circuit:blue_integrated_circuit>);
recipes.remove(<item:integrated_circuit:brown_integrated_circuit>);
recipes.remove(<item:integrated_circuit:green_integrated_circuit>);
recipes.remove(<item:integrated_circuit:red_integrated_circuit>);
recipes.remove(<item:integrated_circuit:black_integrated_circuit>);

//Дополненный крафт лампы
craftingTable.addShapeless(
	"item_create_electron_tube", 
	<item:create:electron_tube> * 1, 
	[<item:minecraft:air>, <item:create:polished_rose_quartz>, <item:minecraft:air>, 
	<item:minecraft:air>, <tag:items:forge:plates/copper>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
	
//Убираю лишние вещи
recipes.remove(<item:create:haunted_bell>);
recipes.remove(<item:create:peculiar_bell>);
recipes.remove(<item:cb_microblock:diamond_saw>);
recipes.remove(<item:cb_microblock:stone_saw>);

//Добавляю крафт для пилы по блокам
recipes.remove(<item:cb_microblock:iron_saw>);
craftingTable.addShapeless(
	"item_cb_microblock_iron_saw", 
	<item:cb_microblock:iron_saw> * 1, 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:stick>, 
	<item:minecraft:air>, <item:minecraft:stick>, <item:tfc:metal/saw_blade/wrought_iron>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);

//Крафты для редстоун-провода в микросхемах
recipes.remove(<item:projectred_transmission:red_alloy_wire>);
craftingTable.addShapeless(
	"item_projectred_transmission_red_alloy_wire_copper", 
	<item:projectred_transmission:red_alloy_wire> * 1, 
	[<item:projectred_transmission:orange_insulated_wire>, <item:minecraft:redstone>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_red_alloy_wire_steel", 
	<item:projectred_transmission:red_alloy_wire> * 1, 
	[<item:projectred_transmission:gray_insulated_wire>, <item:minecraft:redstone>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_red_alloy_wire_iron", 
	<item:projectred_transmission:red_alloy_wire> * 1, 
	[<item:projectred_transmission:white_insulated_wire>, <item:minecraft:redstone>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);
craftingTable.addShapeless(
	"item_projectred_transmission_red_alloy_wire_alluminium", 
	<item:projectred_transmission:red_alloy_wire> * 1, 
	[<item:projectred_transmission:light_gray_insulated_wire>, <item:minecraft:redstone>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, 
	<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]);

//Рецепты для настила для сушки
craftingTable.addShaped(
	"block_firmalife_drying_mat_fallen", 
	<item:firmalife:drying_mat> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<tag:items:tfc:fallen_leaves>, <tag:items:tfc:fallen_leaves>, <tag:items:tfc:fallen_leaves>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
craftingTable.addShaped(
	"block_firmalife_drying_mat_leaves", 
	<item:firmalife:drying_mat> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<tag:items:minecraft:leaves>, <tag:items:minecraft:leaves>, <tag:items:minecraft:leaves>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
craftingTable.addShaped(
	"block_firmalife_drying_mat_dark", 
	<item:firmalife:drying_mat> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<tag:items:tfc:sewing_dark_cloth>, <tag:items:tfc:sewing_dark_cloth>, <tag:items:tfc:sewing_dark_cloth>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
craftingTable.addShaped(
	"block_firmalife_drying_mat_light", 
	<item:firmalife:drying_mat> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<tag:items:tfc:high_quality_cloth>, <tag:items:tfc:high_quality_cloth>, <tag:items:tfc:high_quality_cloth>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
craftingTable.addShaped(
	"block_firmalife_drying_mat_plants", 
	<item:firmalife:drying_mat> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<tag:items:tfc:plants>, <tag:items:tfc:plants>, <tag:items:tfc:plants>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);
craftingTable.addShaped(
	"block_firmalife_drying_mat_kelp", 
	<item:firmalife:drying_mat> * 1, 
	[[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:dried_kelp>, <item:minecraft:dried_kelp>, <item:minecraft:dried_kelp>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]],
	null);

//Крафт прочного листа
craftingTable.addShapeless("strudy_sheet", <item:create:sturdy_sheet> * 1, 
[<item:tfc:metal/sheet/steel>]);
craftingTable.addShapeless("steel_sheet", <item:tfc:metal/sheet/steel> * 1, 
[<item:create:sturdy_sheet>]);

//Переделывание одних слитков в другие
//Бронза
craftingTable.addShapeless("bronze", <item:createbigcannons:bronze_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/bronze>]);
craftingTable.addShapeless("black_bronze", <item:createbigcannons:bronze_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/black_bronze>]);
craftingTable.addShapeless("bismuth_bronze", <item:createbigcannons:bronze_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/bismuth_bronze>]);

//Цинк
craftingTable.addShapeless("zinc_create", <item:create:zinc_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/zinc>]);
craftingTable.addShapeless("zinc_tfc", <item:tfc:metal/ingot/zinc> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:create:zinc_ingot>]);

//Никель
craftingTable.addShapeless("nickel_create", <item:creatingspace:nickel_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/nickel>]);
craftingTable.addShapeless("nickel_tfc", <item:tfc:metal/ingot/nickel> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:creatingspace:nickel_ingot>]);

//Медь
craftingTable.addShapeless("copper_minecraft", <item:minecraft:copper_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/copper>]);
craftingTable.addShapeless("copper_tfc", <item:tfc:metal/ingot/copper> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:minecraft:copper_ingot>]);

//Латунь
craftingTable.addShapeless("brass_create", <item:create:brass_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/brass>]);
craftingTable.addShapeless("brass_tfc", <item:tfc:metal/ingot/brass> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:create:brass_ingot>]);

//Кованное железо
craftingTable.addShapeless("iron_minecraft", <item:minecraft:iron_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/wrought_iron>]);
craftingTable.addShapeless("iron_tfc", <item:tfc:metal/ingot/wrought_iron> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:minecraft:iron_ingot>]);

//Уран
craftingTable.addShapeless("uranium_nuclear", <item:create_mixed_nuclear:reactive_uranium_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:immersiveengineering:ingot_uranium>]);
craftingTable.addShapeless("uranium_tfc", <item:immersiveengineering:ingot_uranium> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:create_mixed_nuclear:reactive_uranium_ingot>]);

//Чугун
craftingTable.addShapeless("cast_iron_create", <item:createbigcannons:cast_iron_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/cast_iron>]);
craftingTable.addShapeless("cast_iron_tfc", <item:tfc:metal/ingot/cast_iron> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:createbigcannons:cast_iron_ingot>]);

//Сталь
craftingTable.addShapeless("steel_create", <item:createbigcannons:steel_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/steel>]);
craftingTable.addShapeless("steel_tfc", <item:tfc:metal/ingot/steel> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:createbigcannons:steel_ingot>]);

//Черная сталь (незер-сталь)
recipes.remove(<item:minecraft:netherite_ingot>);
craftingTable.addShapeless("black_steel_create", <item:createbigcannons:nethersteel_ingot> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:tfc:metal/ingot/black_steel>]);
craftingTable.addShapeless("black_steel_tfc", <item:tfc:metal/ingot/black_steel> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(0), <item:createbigcannons:nethersteel_ingot>]);
//Скрап для сплава
craftingTable.addShapeless("scrap", <item:minecraft:netherite_scrap> * 1, 
[<item:tfc:metal/ingot/black_bronze>, <item:tfc:metal/ingot/black_bronze>, <item:tfc:metal/ingot/nickel>, <item:tfc:metal/ingot/nickel>]);



//Гладкий камень
craftingTable.addShapeless("smooth_stone", <item:minecraft:smooth_stone> * 1, 
[<tag:items:tfc:chisels>.asIIngredient().transformDamage(1), <item:tfc:rock/hardened/granite>]);

//Исправление рецептов двс
recipes.remove(<item:createdieselgenerators:diesel_engine>);
craftingTable.addShaped("diesel_engine", <item:createdieselgenerators:diesel_engine> * 1, [
	[<item:minecraft:air>, <item:minecraft:flint_and_steel>, <item:minecraft:air>], 
	[<item:createdieselgenerators:engine_piston>, <item:create:brass_block>, <item:createdieselgenerators:engine_piston>], 
	[<item:create:andesite_alloy>, <item:create:fluid_tank>, <item:create:andesite_alloy>]]);
recipes.remove(<item:createdieselgenerators:large_diesel_engine>);
craftingTable.addShaped("large_diesel_engine", <item:createdieselgenerators:large_diesel_engine> * 1, [
	[<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>], 
	[<item:tfc:metal/sheet/brass>, <item:createdieselgenerators:diesel_engine>, <item:tfc:metal/sheet/brass>], 
	[<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>]]);

//Убираем баганные рецепты из розовой стали
recipes.remove(<item:tfc_kac:purple_steel_crate>);
recipes.remove(<item:tfc_kac:purple_steel_kiln>);

// Новые рецепты для чана
recipes.remove(<item:firmalife:vat>);
//Медь
craftingTable.addShapeless("vat_copper", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/copper>, <item:tfc:metal/double_sheet/copper>]);

// Бронза
craftingTable.addShapeless("vat_bronze", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/bronze>, <item:tfc:metal/double_sheet/bronze>]);

// Черная бронза
craftingTable.addShapeless("vat_black_bronze", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/black_bronze>, <item:tfc:metal/double_sheet/black_bronze>]);

// Висмутовая бронза
craftingTable.addShapeless("vat_bismuth_bronze", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/bismuth_bronze>, <item:tfc:metal/double_sheet/bismuth_bronze>]);

// Латунь
craftingTable.addShapeless("vat_brass", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/brass>, <item:tfc:metal/double_sheet/brass>]);

// Золото
craftingTable.addShapeless("vat_gold", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/gold>, <item:tfc:metal/double_sheet/gold>]);

// Серебро
craftingTable.addShapeless("vat_silver", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/silver>, <item:tfc:metal/double_sheet/silver>]);

//Кованное железо
craftingTable.addShapeless("wrought_iron_vat", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/wrought_iron>, <item:tfc:metal/double_sheet/wrought_iron>]);

//Чугун
craftingTable.addShapeless("cast_iron_vat", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/cast_iron>, <item:tfc:metal/double_sheet/cast_iron>]);

// Обычная сталь
craftingTable.addShapeless("vat_steel", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/steel>, <item:tfc:metal/double_sheet/steel>]);

// Черная сталь
craftingTable.addShapeless("vat_black_steel", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/black_steel>, <item:tfc:metal/double_sheet/black_steel>]);

// Синяя сталь
craftingTable.addShapeless("vat_blue_steel", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/blue_steel>, <item:tfc:metal/double_sheet/blue_steel>]);

// Красная сталь
craftingTable.addShapeless("vat_red_steel", <item:firmalife:vat> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:tfc:metal/sheet/red_steel>, <item:tfc:metal/double_sheet/red_steel>]);


//Молот инженера
recipes.remove(<item:immersiveengineering:hammer>);
craftingTable.addShapeless("immersiveengineering", <item:immersiveengineering:hammer> * 1, 
[<tag:items:tfc:hammers>]);

//Огнеупорные кирпичи
craftingTable.addShapeless("blast_bricks_tfc", <item:tfc:fire_bricks> * 1, 
[<item:immersiveengineering:blastbrick>]);
craftingTable.addShapeless("blast_bricks_ie", <item:immersiveengineering:blastbrick> * 1, 
[<item:tfc:fire_bricks>]);

//Рецепт древесного угля для всех остальных углей
craftingTable.addShapeless("coal_lignite", <item:minecraft:charcoal> * 1, 
[<item:tfc:ore/lignite>]);
craftingTable.addShapeless("coal_bitum", <item:minecraft:charcoal> * 1, 
[<item:tfc:ore/bituminous_coal>]);

//Фикс крафта чаши из create
recipes.remove(<item:create:basin>);
craftingTable.addShapeless("chan", <item:create:basin> * 1, 
[<item:create:andesite_alloy>, <item:tfc:crucible>, <item:create:andesite_alloy>, 
<item:create:andesite_alloy>, <item:create:andesite_alloy>, <item:create:andesite_alloy>]);

//Рецепты для big canons
craftingTable.addShapeless("casting_sand", <item:createbigcannons:casting_sand> * 1, 
[<tag:items:minecraft:sand>, <tag:items:minecraft:sand>, 
<item:minecraft:clay_ball>, <tag:items:minecraft:dirt>]);

//Сера
craftingTable.addShapeless("sulfur_tfc", <item:tfc:powder/sulfur> * 1, 
[<item:immersiveengineering:dust_sulfur>]);
craftingTable.addShapeless("sulfur_ie", <item:immersiveengineering:dust_sulfur> * 1, 
[<item:tfc:powder/sulfur>]);

//Рецепты для реактора
craftingTable.addShapeless("reactor", <item:create_new_age:reactor_casing> * 1, 
[<item:tfc_ie_addon:metal/block/lead>]);
craftingTable.addShapeless("reactor_back", <item:tfc_ie_addon:metal/block/lead> * 1, 
[<item:create_new_age:reactor_casing>]);

//Сгусток слизи
craftingTable.addShapeless("slime_glue", <item:tfc:glue> * 1, 
[<item:minecraft:slime_ball>]);
craftingTable.addShapeless("glue_slime", <item:minecraft:slime_ball> * 1, 
[<item:tfc:glue>]);

//Битум
craftingTable.addShapeless("bitum_tfc", <item:artisanal:bitumen> * 1, 
[<item:immersivepetroleum:bitumen>]);
craftingTable.addShapeless("bitum_ie", <item:immersivepetroleum:bitumen> * 1, 
[<item:artisanal:bitumen>]);

//Клей
craftingTable.addShapeless("glue_ie", <item:tfc:glue> * 1, 
[<item:immersivepetroleum:bitumen>]);
craftingTable.addShapeless("glue_tfc", <item:tfc:glue> * 1, 
[<item:artisanal:bitumen>]);

craftingTable.addShapeless("glue_hevea", <item:tfc:glue> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:afc:wood/log/hevea>]);
craftingTable.addShapeless("glue_fig", <item:tfc:glue> * 1, 
[<tag:items:tfc:hammers>.asIIngredient().transformDamage(1), <item:afc:wood/log/rubber_fig>]);

