ServerEvents.tags('item', event => {
  //Массив металлов TFC
  const metals = [
    "bismuth",          // Висмут
    "bismuth_bronze",   // Висмутовая бронза
    "black_bronze",     // Чёрная бронза
    "bronze",           // Бронза
    "brass",            // Латунь
    "copper",           // Медь
    "gold",             // Золото
    "nickel",           // Никель
    "rose_gold",        // Розовое золото
    "silver",           // Серебро
    "sterling_silver",  // Стерлинговое серебро
    "tin",              // Олово
    "zinc",             // Цинк
    "cast_iron",        // Чугун (литое железо)
    "wrought_iron",     // Кованое железо
    "steel",            // Сталь
    "black_steel",      // Чёрная сталь
    "blue_steel",       // Синяя сталь
    "red_steel",        // Красная сталь

    "stainless_steel",  // Нержавеющая сталь
    "chromium",         // Хром

    "aluminum",         // Аллюминий
    "constantan",       // Константан
    "electrum",         // Электрум
    "lead",             // Свинец
    "uranium"           // Уран
  ]

  //Слитки
  event.remove('forge:ingots/cast_iron', 'minecraft:iron_ingot')

  //Пластины
  metals.forEach(metal => {
    //Удаляем 
    event.remove(`forge:plates/${metal}`, `tfc:metal/sheet/${metal}`)
    //Добавляем
    event.add(`forge:plates/${metal}`, `tfc_items:${metal}_foil`)
  })
  event.remove(`forge:plates/iron`, `tfc:metal/sheet/wrought_iron`)
  event.add(`forge:plates/iron`, `tfc_items:wrought_iron_foil`)

  //Стержни
  event.add('forge:rods/wrought_iron', '#forge:rods/iron')

  //С проводами всё норм

  //Кусочки
  metals.forEach(metal => {
    //Добавляем
    event.add(`forge:nuggets/${metal}`, `tfc_nugs:${metal}_nugget`)
  })
  event.add(`forge:nuggets/iron`, `minecraft:iron_nugget`)
  //Удаляем ванильные
  event.remove(`forge:nuggets/iron`, `minecraft:iron_nugget`)
  event.remove(`forge:nuggets/gold`, `minecraft:gold_nugget`)
  //Удаляем IE
  event.remove(`forge:nuggets/copper`, `immersiveengineering:nugget_copper`)
  event.remove(`forge:nuggets/silver`, `immersiveengineering:nugget_silver`)
  event.remove(`forge:nuggets/nickel`, `immersiveengineering:nugget_nickel`)
  event.remove(`forge:nuggets/steel`, `immersiveengineering:nugget_steel`)
  //Удаляем Big Cannons
  event.remove(`forge:nuggets/bronze`, `createbigcannons:bronze_scrap`)
  event.remove(`forge:nuggets/nethersteel`, `createbigcannons:nethersteel_nugget`)
  event.remove(`forge:nuggets/steel`, `createbigcannons:steel_scrap`)
  event.remove(`forge:nuggets/cast_iron`, `createbigcannons:cast_iron_nugget`)
  //Удаляем Creating space
  event.remove(`forge:nuggets/aluminum`, `creatingspace:aluminum_nugget`)
  event.remove(`forge:nuggets/nickel`, `creatingspace:nickel_nugget`)
  //Удаляем Create и Additions
  event.remove(`forge:nuggets/electrum`, `createaddition:electrum_nugget`)
  event.remove(`forge:nuggets/brass`, `create:brass_nugget`)
  event.remove(`forge:nuggets/copper`, `create:copper_nugget`)
  event.remove(`forge:nuggets/zinc`, `create:zinc_nugget`)

  //Пыль и порошок
  event.add(`forge:dusts/charcoal`, 'creatingspace:coal_dust')
  event.add(`forge:dusts/coal_coke`, 'creatingspace:coal_dust')
  event.add(`forge:dusts/coal_coke`, 'tfc:powder/charcoal')
  event.add(`forge:dusts/nickel`, 'creatingspace:nickel_dust')
  event.add('forge:dusts/coal_coke', 'tfc:powder/coke')
})

ServerEvents.recipes(event => {
  //Массив камней TFC
  const rocks = [
    'granite', 'diorite', 'gabbro', 'shale', 'claystone',
    'limestone', 'conglomerate', 'dolomite', 'chert', 'chalk',
    'rhyolite', 'basalt', 'andesite', 'dacite', 'quartzite',
    'slate', 'phyllite', 'schist', 'gneiss', 'marble'
  ]
  //Массив песков tfc
  const rockToSand = {
    // Коричневые пески
    'granite': 'brown',
    'claystone': 'brown',
    'slate': 'brown',
    'phyllite': 'brown',
    // Белые пески
    'diorite': 'white',
    'limestone': 'white',
    'chalk': 'white',
    'marble': 'white',
    // Чёрные пески
    'gabbro': 'black',
    'shale': 'black',
    'dolomite': 'black',
    // Красные пески
    'rhyolite': 'red',
    'basalt': 'red',
    'andesite': 'red',
    'dacite': 'red',
    // Жёлтые пески
    'chert': 'yellow',
    'quartzite': 'yellow',
    //Зелёные пески
    'conglomerate': 'green',
    'schist': 'green',
    'gneiss': 'green'
  }
  //Массив дерева tfc и afc
  const woods_tfc = [
    // --- TerraFirmaCraft (TFC) Woods (20 пород) ---
    'acacia', 'ash', 'aspen', 'birch', 'blackwood',
    'chestnut', 'douglas_fir', 'hickory', 'kapok', 'mangrove',
    'maple', 'oak', 'palm', 'pine', 'rosewood',
    'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow'
  ]
  const woods_afc = [
    // --- ArborFirmaCraft (AFC) Woods (10 пород) ---
    'baobab', 'eucalyptus', 'mahogany', 'hevea', 'tualang',
    'teak', 'cypress', 'fig', 'ironwood', 'ipe'
  ]
  //Массив металлов TFC
  const metals = [
    "bismuth",          // Висмут
    "bismuth_bronze",   // Висмутовая бронза
    "black_bronze",     // Чёрная бронза
    "bronze",           // Бронза
    "brass",            // Латунь
    "copper",           // Медь
    "gold",             // Золото
    "nickel",           // Никель
    "rose_gold",        // Розовое золото
    "silver",           // Серебро
    "sterling_silver",  // Стерлинговое серебро
    "tin",              // Олово
    "zinc",             // Цинк
    "cast_iron",        // Чугун (литое железо)
    "wrought_iron",     // Кованое железо
    "steel",            // Сталь
    "black_steel",      // Чёрная сталь
    "blue_steel",       // Синяя сталь
    "red_steel",        // Красная сталь

    "stainless_steel",  // Нержавеющая сталь
    "chromium",         // Хром

    "aluminum",         // Аллюминий
    "constantan",       // Константан
    "electrum",         // Электрум
    "lead",             // Свинец
    "uranium"           // Уран
  ]
  // Удаление рецептов
  event.remove({
    output: [
      'minecraft:blaze_rod',
      'minecraft:bucket',
      'create:sturdy_sheet',
      'createbigcannons:steel_ingot',
      'createbigcannons:nethersteel_ingot',
      'minecraft:netherite_ingot'
    ]
  })


  // ============
  // МОД НА КРЮКИ
  // ============
  event.remove({
    output: [
      'grapplemod:grapplinghook',
      'grapplemod:rocketupgradeitem',
      'grapplemod:limitsupgradeitem',
      'grapplemod:throwupgradeitem',
      'grapplemod:swingupgradeitem',
      'grapplemod:staffupgradeitem',
      'grapplemod:ropeupgradeitem',
      'grapplemod:motorupgradeitem',
      'grapplemod:forcefieldupgradeitem',
      'grapplemod:magnetupgradeitem',
      'grapplemod:doubleupgradeitem',
      'grapplemod:baseupgradeitem',
      'grapplemod:repeller',
      'grapplemod:launcheritem',
      'grapplemod:baseupgradeitem',
      'grapplemod:block_grapple_modifier'
    ]
  })
  event.shapeless('grapplemod:grapplinghook', [
    'tfc:metal/fish_hook/wrought_iron',
    'minecraft:lead'
  ])
  event.shaped('grapplemod:motorupgradeitem', [
    'LLL',
    'SES',
    'LLL'
  ], {
    L: 'create:electron_tube',
    S: 'createbigcannons:recoil_spring',
    E: 'createaddition:electric_motor'
  })

  // Магнитный блок из богатого магнетита (9 → 1)
  event.shapeless('create_new_age:magnetite_block', [
    'tfc:ore/rich_magnetite', 'tfc:ore/rich_magnetite', 'tfc:ore/rich_magnetite',
    'tfc:ore/rich_magnetite', 'tfc:ore/rich_magnetite', 'tfc:ore/rich_magnetite',
    'tfc:ore/rich_magnetite', 'tfc:ore/rich_magnetite', 'tfc:ore/rich_magnetite'
  ])
  // Обратный рецепт: магнитный блок → 9 богатого магнетита
  event.shapeless('9x tfc:ore/rich_magnetite', [
    'create_new_age:magnetite_block'
  ])

  // Уран для реактора (разные качества руды)
  event.shapeless('create_mixed_nuclear:raw_reactive_uranium', [
    'tfc_ie_addon:ore/small_uraninite', 'tfc_ie_addon:ore/small_uraninite', 'tfc_ie_addon:ore/small_uraninite',
    'tfc_ie_addon:ore/small_uraninite', 'tfc_ie_addon:ore/small_uraninite', 'tfc_ie_addon:ore/small_uraninite',
    'tfc_ie_addon:ore/small_uraninite', 'tfc_ie_addon:ore/small_uraninite', 'tfc_ie_addon:ore/small_uraninite'
  ])
  event.shapeless('create_mixed_nuclear:raw_reactive_uranium', [
    'tfc_ie_addon:ore/poor_uraninite', 'tfc_ie_addon:ore/poor_uraninite', 'tfc_ie_addon:ore/poor_uraninite',
    'tfc_ie_addon:ore/poor_uraninite', 'tfc_ie_addon:ore/poor_uraninite', 'tfc_ie_addon:ore/poor_uraninite'
  ])
  event.shapeless('create_mixed_nuclear:raw_reactive_uranium', [
    'tfc_ie_addon:ore/normal_uraninite', 'tfc_ie_addon:ore/normal_uraninite',
    'tfc_ie_addon:ore/normal_uraninite', 'tfc_ie_addon:ore/normal_uraninite',
    'tfc_ie_addon:ore/normal_uraninite'
  ])
  event.shapeless('create_mixed_nuclear:raw_reactive_uranium', [
    'tfc_ie_addon:ore/rich_uraninite', 'tfc_ie_addon:ore/rich_uraninite',
    'tfc_ie_addon:ore/rich_uraninite'
  ])

  // Светокамень
  event.shapeless('minecraft:glowstone_dust', [
    'tfc_ie_addon:powder/uraninite',
    'tfc:powder/native_gold'
  ])

  // Физическая матрица
  event.shapeless('vs_clockwork:wanderlite_matrix', [
    'minecraft:redstone'
  ])

  // Палка для выделения физических объектов
  event.shapeless('vs_clockwork:wanderwand', [
    '#tfc:lumber',
    'minecraft:stick'
  ])

  // Физический сборщик
  event.shaped('vs_clockwork:physics_infuser', [
    'LSL',
    'STS',
    'LSL'
  ], {
    L: '#tfc:lumber',
    S: 'minecraft:stick',
    T: 'minecraft:crafting_table'
  })

  // Воздущный шар
  event.shaped('vs_clockwork:balloon_casing', [
    'SWS',
    'W W',
    'SWS'
  ], {
    S: 'minecraft:stick',
    W: 'minecraft:white_wool'
  })

  // Поводки
  event.shaped('2x minecraft:lead', [
    'SS ',
    'SS ',
    '  S'
  ], {
    S: '#forge:string'
  })

  // Удаление рецептов из clockwork
  event.remove({
    output: [
      'vs_clockwork:physics_infuser',
      'vs_clockwork:wanderwand',
      'vs_clockwork:balloon_casing',
      'vs_clockwork:gravitron'
    ]
  })

  // Удаление нереалистичных коннекторов
  event.remove({
    output: [
      'create_new_age:electrical_connector',
      'createaddition:connector',
      'createaddition:small_light_connector',
      'createaddition:large_connector'
    ]
  })

  // Инструменты из дизельных генераторов
  event.remove({
    output: [
      'createdieselgenerators:hammer',
      'createdieselgenerators:wire_cutters'
    ]
  })
  event.shapeless('createdieselgenerators:wire_cutters', [
    'immersiveengineering:wirecutter'
  ]).damageIngredient('immersiveengineering:wirecutter', 999)
  event.shapeless('createdieselgenerators:hammer', [
    'immersiveengineering:hammer'
  ]).damageIngredient('immersiveengineering:hammer', 999)

  // ==========================================
  // Вещи из create: new age
  // ==========================================
  event.remove({
    output: [
      'create_new_age:reinforced_motor',
      'create_new_age:advanced_motor',
      'create_new_age:basic_motor',
      'create_new_age:redstone_magnet',
      'create_new_age:layered_magnet',
      'create_new_age:fluxuated_magnetite',
      'create_new_age:netherite_magnet',
      'create_new_age:basic_energiser',
      'create_new_age:advanced_energiser',
      'create_new_age:reinforced_energiser',
      'create_new_age:advanced_motor_extension',
      'create_new_age:basic_motor_extension',
    ]
  })

  // МАГНИТЫ
  // 1. Редстоуновый магнит (базовый электромагнит)
  // Реальность: железный сердечник + медная обмотка + источник тока
  event.shaped('create_new_age:redstone_magnet', [
    'CRC',
    'IMI',
    'CRC'
  ], {
    C: 'immersiveengineering:wirecoil_copper',        // Медная катушка (обмотка)
    R: 'minecraft:redstone',         // Редстоун (источник энергии)
    I: '#forge:ingots/iron', // Железный сердечник
    M: 'create_new_age:magnetite_block' //Магнетитовый железняк
  })

  // 2. Слоёный магнит (усиленный электромагнит)
  // Реальность: многослойная обмотка для увеличения индукции
  event.shaped('create_new_age:layered_magnet', [
    'CMC',
    'ISI',
    'CMC'
  ], {
    C: 'immersiveengineering:wirecoil_copper',         // Двойная обмотка
    I: 'tfc:metal/sheet/wrought_iron', // Железные листы (сердечник)
    S: '#forge:ingots/steel',        // Стальной сердечник для лучшей магнитной проницаемости
    M: 'create_new_age:magnetite_block' //Магнетитовый железняк
  })

  // 3. Флуктуирующий магнетит (постоянный магнит)
  // Реальность: ферритовый магнит (оксид железа + керамика + намагничивание)
  event.shaped('create_new_age:fluxuated_magnetite', [
    'MNM',
    'RFR',
    'MNM'
  ], {
    M: 'create_new_age:magnetite_block',      // Магнетит (природный магнитный минерал)
    N: '#forge:ingots/nickel',      // Никель (улучшает магнитные свойства)
    R: 'minecraft:redstone',          // Редстоун (для "зарядки" магнита)
    F: 'tfc:powder/flux'              // Флюс (керамический связующий материал)
  })

  // 4. Незеритовый магнит (сверхсильный постоянный магнит)
  // Реальность: неодимовый магнит (Nd-Fe-B), в игре → незерит как "сверхматериал"
  event.shaped('create_new_age:netherite_magnet', [
    'NMN',
    'MSM',
    'NMN'
  ], {
    N: 'create_new_age:magnetite_block',   // Магнетитовый железняк
    M: 'create_new_age:fluxuated_magnetite', // Основа — магнетитовый магнит
    S: '#forge:ingots/steel'        // Стальная арматура
  })

  // МОТОРЫ
  // 5. Базовый мотор
  // Реальность: простой коллекторный мотор с медной обмоткой и железным ротором
  event.shaped('create_new_age:basic_motor', [
    'PCP',
    'MRM',
    'PBP'
  ], {
    P: '#forge:plates/iron',          // Железный корпус
    C: 'immersiveengineering:wirecoil_copper',         // Медная обмотка (статор)
    M: 'create_new_age:redstone_magnet', // Магнит (ротор)
    R: '#forge:rods/iron',  // Вал ротора
    B: '#forge:plates/brass'           // Латунные подшипники
  })

  // 6. Продвинутый мотор
  // Реальность: бесщёточный мотор с усиленными магнитами и лучшей обмоткой
  event.shaped('create_new_age:advanced_motor', [
    'SCS',
    'MRM',
    'SBS'
  ], {
    S: '#forge:plates/steel',         // Стальной корпус (прочнее железа)
    C: 'immersiveengineering:wirecoil_electrum',       // Электрумовая обмотка (лучшая проводимость)
    M: 'create_new_age:layered_magnet', // Слоёный магнит (сильнее)
    R: '#forge:rods/steel',         // Стальной вал (меньше биение)
    B: '#forge:plates/brass'           // Латунные подшипники
  })

  // 7. Усиленный мотор
  // Реальность: промышленный сервомотор с мощными магнитами и охлаждением
  event.shaped('create_new_age:reinforced_motor', [
    'ACA',
    'NRN',
    'ABA'
  ], {
    A: 'create_new_age:advanced_motor', // Основа — продвинутый мотор
    C: 'immersiveengineering:wirecoil_copper',         // Дополнительная обмотка
    N: 'create_new_age:netherite_magnet', // Незеритовый магнит (сверхсильный)
    R: '#forge:rods/steel',         // Усиленный вал
    B: '#forge:plates/brass'            // Подшипники
  })

  // РАСШИРЕНИЯ МОТОРА
  // 11. Базовое расширение мотора (дополнительная обмотка)
  // Реальность: модуль для увеличения мощности через дополнительные витки
  event.shaped('create_new_age:basic_motor_extension', [
    ' C ',
    'CMC',
    ' C '
  ], {
    C: 'immersiveengineering:wirecoil_copper',         // Медная обмотка (дополнительные витки)
    M: 'create_new_age:redstone_magnet' // Магнит для синхронизации
  })

  // 12. Продвинутое расширение мотора (усиленный модуль)
  // Реальность: модуль с мощными магнитами и улучшенным охлаждением
  event.shaped('create_new_age:advanced_motor_extension', [
    'SCS',
    'NEN',
    'SCS'
  ], {
    S: '#forge:plates/steel',         // Стальной корпус модуля
    C: 'immersiveengineering:wirecoil_electrum',       // Электрумовая обмотка (лучше меди)
    N: 'create_new_age:layered_magnet', // Слоёный магнит
    E: 'create_new_age:basic_motor_extension' // Основа — базовое расширение
  })

  // 13. Механическая горелка
  event.remove({ output: 'create_new_age:heater' })
  event.shaped('create_new_age:heater', [
    'I I',
    'IEI',
    'PWP'
  ], {
    I: '#forge:nuggets/wrought_iron',
    E: 'create:empty_blaze_burner',
    P: 'create_new_age:heat_pipe',
    W: '#forge:ingots/iron'
  })

  // 14. Добавляем реалистичный рецепт продвинутого теплового коллектора
  event.remove({ output: 'create_new_age:advanced_solar_heating_plate' })
  event.shaped('create_new_age:advanced_solar_heating_plate', [
    'LLL',
    'CHC',
    'FHF'
  ], {
    L: 'tfc:lens', // Линзы Френеля для фокусировки солнечного света, вместо обычного стекла
    C: 'tfc:metal/sheet/copper', // Медь проводит тепло в 5 раз лучше железа
    H: 'create_new_age:heat_pipe', // Специальная труба для тепла из New Age
    F: 'tfc:ceramic/fire_brick' //Огнеупорный кирпич удерживает тепло и не даёт ему уходить назад
  })

  // 15. Теплотрубки
  event.remove({ output: 'create_new_age:heat_pump' })
  event.shaped('create_new_age:heat_pump', [
    '   ',
    'PSP',
    '   '
  ], {
    P: 'create_new_age:heat_pipe',
    S: 'tfc:metal/sheet/nickel'
  })

  // Убираем изменение погоды
  event.remove({ output: 'weather2:weather_item' })

  // Убираем крафты для лишних лодок
  event.remove({
    output: [
      'afc:wood/boat/baobab',
      'afc:wood/boat/eucalyptus',
      'afc:wood/boat/mahogany',
      'afc:wood/boat/hevea',
      'afc:wood/boat/tualang',
      'afc:wood/boat/teak',
      'afc:wood/boat/cypress',
      'afc:wood/boat/fig',
      'afc:wood/boat/ironwood',
      'afc:wood/boat/ipe'
    ]
  })

  // Крафты для динамита
  event.remove({ output: 'bombs:demolition_table' })
  event.shaped('bombs:demolition_table', [
    'CCC',
    'B B',
    'BBB'
  ], {
    C: '#forge:ingots/copper',
    B: 'minecraft:brick'
  })

  event.remove({ output: 'minecraft:tnt' })
  event.shaped('minecraft:tnt', [
    'PPP',
    'SGS',
    'PPP'
  ], {
    P: 'minecraft:paper',
    S: 'tfc:powder/salt',
    G: 'minecraft:gunpowder'
  })

  // Дополнительные крафты для совместимости
  event.shaped('minecraft:campfire', [
    ' C ',
    'CSC',
    'LLL'
  ], {
    S: 'tfc:metal/double_ingot/red_steel',
    C: 'minecraft:charcoal',
    L: '#minecraft:logs'
  })
  event.shapeless('minecraft:amethyst_shard', [
    'tfc_ie_addon:mineral/quartz_shard'
  ])
  event.shaped('minecraft:sponge', [
    'W W',
    ' C ',
    'W W'
  ], {
    W: 'tfc:wool',
    C: 'minecraft:clay_ball'
  })
  event.shapeless('minecraft:amethyst_shard', [
    'tfc:lens'
  ])
  event.remove({ output: 'minecraft:amethyst_block' })
  event.remove({ output: 'minecraft:tinted_glass' })

  // ============================================================
  // БИНТЫ
  // ============================================================
  event.shapeless('6x tfc_medicine:dressing', [
    'tfc:glue',
    '#tfc:high_quality_cloth',
    '#tfc:high_quality_cloth'
  ])

  // ============================================================
  // БУМАГА ИЗ ОПИЛОК КОРЫ
  // ============================================================
  event.shapeless('2x minecraft:paper', [
    '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder',
    Item.of('tfc:metal/bucket/blue_steel', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}')
  ])

  event.shapeless('2x minecraft:paper', [
    '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder',
    Item.of('tfc:metal/bucket/red_steel', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}')
  ])

  event.shapeless('2x minecraft:paper', [
    '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder',
    Item.of('tfc:wooden_bucket', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}')
  ])

  event.shapeless('2x minecraft:paper', [
    '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder',
    Item.of('tfc:ceramic/jug', '{Fluid:{FluidName:"minecraft:water",Amount:100}}')
  ])

  event.shapeless('2x minecraft:paper', [
    '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder', '#forge:bark_powder',
    'minecraft:water_bucket'
  ])

  // ============================================================
  // ЭЛЕКТРОНИКА PROJECT RED
  // ============================================================
  event.remove({ output: 'projectred_core:plate' })

  //Печатная плата для редстоун компонентов
  event.shapeless(
    Item.of('projectred_core:plate', 1),
    ['immersiveengineering:circuit_board',]
  )
  event.shapeless(
    Item.of('immersiveengineering:circuit_board', 1),
    ['projectred_core:plate',]
  )

  event.shapeless('projectred_transmission:orange_insulated_wire', [
    '#forge:wires/copper'
  ])

  event.shapeless('projectred_transmission:yellow_insulated_wire', [
    '#forge:wires/electrum'
  ])

  event.shapeless('projectred_transmission:white_insulated_wire', [
    '#forge:wires/aluminum'
  ])

  event.shapeless('projectred_transmission:gray_insulated_wire', [
    '#forge:wires/lead'
  ])

  event.shapeless('projectred_transmission:black_insulated_wire', [
    '#forge:wires/steel'
  ])

  event.shapeless('projectred_core:infused_silicon', [
    'afc:rubber_bar',
    'minecraft:redstone'
  ])

  event.shapeless('projectred_core:energized_silicon', [
    'afc:rubber_bar',
    'minecraft:glowstone_dust'
  ])

  // Мультиметр
  event.remove({ output: 'projectred_core:multimeter' })
  event.shaped('projectred_core:multimeter', [
    'WCW',
    ' G ',
    ' W '
  ], {
    W: '#forge:wires',
    C: 'create_connected:control_chip',
    G: 'minecraft:glass_pane'
  })

  // Отвёртка для редстоун-компонентов
  event.remove({ output: 'projectred_core:screwdriver' })
  event.shapeless('projectred_core:screwdriver', ['immersiveengineering:screwdriver'])

  // =====================================
  // ПЕРЕДЕЛКА ДРУГИХ РЕДСТОУН КОМПОНЕНТОВ
  // =====================================
  rocks.forEach(rock => {
    event.remove({ output: `tfc:rock/button/${rock}` })
    event.remove({ output: `tfc:rock/pressure_plate/${rock}` })
    event.shapeless(`tfc:rock/button/${rock}`, [
      '#tfc:chisels',
      `tfc:brick/${rock}`,
      'create:electron_tube'
    ]).damageIngredient('#tfc:chisels')
    event.shapeless(`tfc:rock/pressure_plate/${rock}`, [
      '#tfc:chisels',
      `tfc:brick/${rock}`,
      `tfc:brick/${rock}`,
      'create:electron_tube'
    ]).damageIngredient('#tfc:chisels')
  })

  woods_tfc.forEach(wood => {
    event.remove({ output: `tfc:wood/planks/${wood}_button` })
    event.remove({ output: `tfc:wood/planks/${wood}_pressure_plate` })
    event.shapeless(`tfc:wood/planks/${wood}_button`, [
      `tfc:wood/lumber/${wood}`,
      'create:electron_tube'
    ])
    event.shapeless(`tfc:wood/planks/${wood}_pressure_plate`, [
      `tfc:wood/lumber/${wood}`,
      `tfc:wood/lumber/${wood}`,
      'create:electron_tube'
    ])
  })

  woods_afc.forEach(wood => {
    event.remove({ output: `afc:wood/planks/${wood}_button` })
    event.remove({ output: `afc:wood/planks/${wood}_pressure_plate` })
    event.shapeless(`afc:wood/planks/${wood}_button`, [
      `afc:wood/lumber/${wood}`,
      'create:electron_tube'
    ])
    event.shapeless(`afc:wood/planks/${wood}_pressure_plate`, [
      `afc:wood/lumber/${wood}`,
      `afc:wood/lumber/${wood}`,
      'create:electron_tube'
    ])
  })

  // Нотный блок
  event.remove({ output: 'minecraft:note_block' })
  event.shaped('minecraft:note_block', [
    'CCC',  // Медные пластины (звучащий элемент)
    'PMP',  // Доски + молоточек
    'PRP'   // Доски + редстоун
  ], {
    C: 'tfc:metal/sheet/copper',      // Медные листы (как ксилофонные пластины)
    P: '#minecraft:planks',
    M: 'tfc:metal/rod/copper',
    R: 'minecraft:redstone'
  })

  // Проигрыватель
  event.remove({ output: 'minecraft:jukebox' })
  event.shaped(
    'minecraft:jukebox',
    [
      'LD ',
      'PCP',
      'PEP'
    ],
    {
      L: '#forge:plates/brass',
      D: 'tfc:gem/diamond',
      P: '#minecraft:planks',
      C: 'create:cogwheel',
      E: 'createaddition:electric_motor',
    }
  )

  // Выбрасыватель
  event.remove({ output: 'minecraft:dropper' })
  event.shaped(
    'minecraft:dropper',
    [
      'CCC',
      'C C',
      'EPR'
    ],
    {
      C: '#forge:cobblestone/normal',
      E: 'createaddition:electric_motor',
      P: 'create:weighted_ejector',
      R: 'minecraft:redstone'
    }
  )

  //Раздатчик
  event.remove({ output: 'minecraft:dispenser' })
  event.shapeless('minecraft:dispenser', [
    'minecraft:dropper',
    'create:deployer'
  ])

  // Integrated Circuit
  event.remove({ output: 'integrated_circuit:integrated_circuit' })
  event.shaped('integrated_circuit:integrated_circuit', [
    '   ',
    'RCR',
    'PPP'
  ], {
    R: 'minecraft:redstone',
    C: 'create_connected:control_chip',
    P: 'projectred_core:plate'
  })

  // Repeater
  event.remove({ output: 'minecraft:repeater' })
  event.shaped('minecraft:repeater', [
    'TRT',
    'PPP',
    '   '
  ], {
    T: 'minecraft:redstone_torch',
    R: 'minecraft:redstone',
    P: 'projectred_core:plate'
  })

  // Comparator
  event.remove({ output: 'minecraft:comparator' })
  event.shaped('minecraft:comparator', [
    ' T ',
    'TRT',
    'PPP'
  ], {
    T: 'minecraft:redstone_torch',
    R: 'minecraft:redstone',
    P: 'projectred_core:plate'
  })

  // Redstone Block
  event.remove({ output: 'minecraft:redstone_block' })
  event.shaped('minecraft:redstone_block', [
    ' R ',
    'RER',
    ' R '
  ], {
    R: 'minecraft:redstone',
    E: 'create:electron_tube'
  })

  // Tripwire Hook
  event.remove({ output: 'minecraft:tripwire_hook' })
  event.shapeless('minecraft:tripwire_hook', [
    'tfc:metal/fish_hook/copper',
    'create:electron_tube',
    'minecraft:stick'
  ])
  event.shapeless('minecraft:tripwire_hook', [
    'tfc:metal/fish_hook/wrought_iron',
    'create:electron_tube',
    'minecraft:stick'
  ])
  event.shapeless('minecraft:tripwire_hook', [
    'tfc:metal/fish_hook/bronze',
    'create:electron_tube',
    'minecraft:stick'
  ])
  event.shapeless('minecraft:tripwire_hook', [
    'tfc:metal/fish_hook/black_bronze',
    'create:electron_tube',
    'minecraft:stick'
  ])
  event.shapeless('minecraft:tripwire_hook', [
    'tfc:metal/fish_hook/bismuth_bronze',
    'create:electron_tube',
    'minecraft:stick'
  ])

  // Redstone Torch (shapeless)
  event.remove({ output: 'minecraft:redstone_torch' })
  event.shapeless('minecraft:redstone_torch', [
    'create:electron_tube'
  ])

  // Lever
  event.remove({ output: 'minecraft:lever' })
  event.shapeless('minecraft:lever', [
    'minecraft:stick',
    'create:electron_tube'
  ])

  // Transmitter (Create)
  event.remove({ output: 'create:transmitter' })
  event.shaped('create:transmitter', [
    ' L ',
    'CCC',
    ' E '
  ], {
    L: 'minecraft:lightning_rod',
    C: '#forge:plates/copper',
    E: 'create:electron_tube'
  })

  // Pulse Timer
  event.remove({ output: 'create:pulse_timer' })
  event.shaped('create:pulse_timer', [
    'ABR',
    'PPP',
    '   '
  ], {
    A: 'minecraft:amethyst_shard',
    B: '#forge:sheets/brass',
    R: 'minecraft:redstone_torch',
    P: 'projectred_core:plate'
  })

  // Pulse Repeater
  event.remove({ output: 'create:pulse_repeater' })
  event.shaped('create:pulse_repeater', [
    'RBR',
    'PPP',
    '   '
  ], {
    R: 'minecraft:redstone',
    B: '#forge:sheets/brass',
    P: 'projectred_core:plate'
  })

  // Powered Latch
  event.remove({ output: 'create:powered_latch' })
  event.shaped('create:powered_latch', [
    ' T ',
    'RLR',
    'PPP'
  ], {
    T: 'minecraft:redstone_torch',
    R: 'minecraft:redstone',
    L: 'minecraft:lever',
    P: 'projectred_core:plate'
  })

  // Powered Toggle Latch
  event.remove({ output: 'create:powered_toggle_latch' })
  event.shaped('create:powered_toggle_latch', [
    ' R ',
    ' L ',
    'PPP'
  ], {
    R: 'minecraft:redstone_torch',
    L: 'minecraft:lever',
    P: 'projectred_core:plate'
  })

  // Pulse Extender
  event.remove({ output: 'create:pulse_extender' })
  event.shaped('create:pulse_extender', [
    '  T',
    'RBT',
    'PPP'
  ], {
    T: 'minecraft:redstone_torch',
    R: 'minecraft:redstone',
    B: '#forge:sheets/brass',
    P: 'projectred_core:plate'
  })

  // Daylight Detector
  event.remove({ output: 'minecraft:daylight_detector' })
  event.shaped('minecraft:daylight_detector', [
    'LLL',
    'EEE',
    'WWW'
  ], {
    L: 'tfc:lens',
    E: 'create:electron_tube',
    W: '#tfc:lumber'
  })

  // Piston
  event.remove({ output: 'minecraft:piston' })
  event.shaped('minecraft:piston', [
    'WWW',
    'CRC',
    'EMS'
  ], {
    W: '#tfc:lumber',
    C: '#forge:cobblestone',
    R: '#forge:rods/iron',
    E: 'createaddition:electric_motor',
    M: 'tfc:brass_mechanisms',
    S: 'minecraft:redstone'
  })

  // Analog Lever
  event.remove({ output: 'create:analog_lever' })
  event.shaped('create:analog_lever', [
    ' S ',
    'TCA',
    '   '
  ], {
    S: 'minecraft:stick',
    T: 'create:electron_tube',
    C: 'projectred_core:conductive_plate',
    A: 'projectred_core:anode'
  })

  // Sequenced Pulse Generator
  event.remove({ output: 'create_connected:sequenced_pulse_generator' })
  event.shaped('create_connected:sequenced_pulse_generator', [
    'TC ',
    'TBR',
    'PPP'
  ], {
    T: 'create:electron_tube',
    C: 'create_connected:control_chip',
    B: '#forge:sheets/brass',
    R: 'minecraft:redstone_torch',
    P: 'projectred_core:plate'
  })

  // ProjectRed removals
  event.remove({ output: 'projectred_core:red_ingot' })
  event.remove({ output: 'projectred_core:red_iron_comp' })

  // Integrated Circuit removals (all colors)
  event.remove({
    output: [
      'integrated_circuit:white_integrated_circuit',
      'integrated_circuit:light_gray_integrated_circuit',
      'integrated_circuit:orange_integrated_circuit',
      'integrated_circuit:magenta_integrated_circuit',
      'integrated_circuit:light_blue_integrated_circuit',
      'integrated_circuit:yellow_integrated_circuit',
      'integrated_circuit:lime_integrated_circuit',
      'integrated_circuit:pink_integrated_circuit',
      'integrated_circuit:gray_integrated_circuit',
      'integrated_circuit:cyan_integrated_circuit',
      'integrated_circuit:purple_integrated_circuit',
      'integrated_circuit:blue_integrated_circuit',
      'integrated_circuit:brown_integrated_circuit',
      'integrated_circuit:green_integrated_circuit',
      'integrated_circuit:red_integrated_circuit',
      'integrated_circuit:black_integrated_circuit'
    ]
  })

  // Electron Tube (Shapeless)
  event.shapeless('create:electron_tube', [
    'create:polished_rose_quartz',
    '#forge:plates/copper'
  ])

  // Remove bells and saws
  event.remove({
    output: [
      'create:haunted_bell',
      'create:peculiar_bell',
      'cb_microblock:diamond_saw',
      'cb_microblock:stone_saw'
    ]
  })

  //Добавляю крафт для пилы по блокам
  event.remove({ output: 'cb_microblock:iron_saw' })
  event.shapeless('cb_microblock:iron_saw', [
    'minecraft:stick', 'minecraft:stick',
    'minecraft:stick', 'tfc:metal/saw_blade/wrought_iron'
  ])

  //Крафты для редстоун-провода в микросхемах
  event.remove({ output: 'projectred_transmission:red_alloy_wire' })
  event.shapeless('projectred_transmission:red_alloy_wire', [
    'projectred_transmission:orange_insulated_wire', 'minecraft:redstone'
  ])
  event.shapeless('projectred_transmission:red_alloy_wire', [
    'projectred_transmission:gray_insulated_wire', 'minecraft:redstone'
  ])
  event.shapeless('projectred_transmission:red_alloy_wire', [
    'projectred_transmission:white_insulated_wire', 'minecraft:redstone'
  ])
  event.shapeless('projectred_transmission:red_alloy_wire', [
    'projectred_transmission:light_gray_insulated_wire', 'minecraft:redstone'
  ])

  //Рецепты для настила для сушки
  event.shapeless('firmalife:drying_mat', [
    '#tfc:fallen_leaves', '#tfc:fallen_leaves', '#tfc:fallen_leaves'
  ])

  event.shapeless('firmalife:drying_mat', [
    '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves'
  ])

  event.shapeless('firmalife:drying_mat', [
    '#tfc:sewing_dark_cloth', '#tfc:sewing_dark_cloth', '#tfc:sewing_dark_cloth'
  ])

  event.shapeless('firmalife:drying_mat', [
    '#tfc:high_quality_cloth', '#tfc:high_quality_cloth', '#tfc:high_quality_cloth'
  ])

  event.shapeless('firmalife:drying_mat', [
    '#tfc:plants', '#tfc:plants', '#tfc:plants'
  ])

  event.shapeless('firmalife:drying_mat', [
    'minecraft:dried_kelp', 'minecraft:dried_kelp', 'minecraft:dried_kelp'
  ])

  //Крафт прочного листа
  event.shapeless('create:sturdy_sheet', ['tfc:metal/sheet/steel'])
  event.shapeless('tfc:metal/sheet/steel', ['create:sturdy_sheet'])

  // УДАЛЕНИЕ РЕЦЕПТОВ баганых печи и ящика из розовой стали
  event.remove({ output: 'tfc_kac:purple_steel_crate' })
  event.remove({ output: 'tfc_kac:purple_steel_kiln' })

  // Скрап для сплава
  event.shapeless('minecraft:netherite_scrap', [
    'tfc:metal/ingot/black_bronze',
    'tfc:metal/ingot/black_bronze',
    'tfc:metal/ingot/nickel',
    'tfc:metal/ingot/nickel'
  ])


  // ========================
  // ИСПРАВЛЕНИЕ РЕЦЕПТОВ ДВС
  // ========================
  event.remove({
    output: [
      'createdieselgenerators:diesel_engine',
      'createdieselgenerators:large_diesel_engine',
      'createdieselgenerators:huge_diesel_engine',
      'createdieselgenerators:engine_piston'
    ]
  })

  // Обычный двигатель
  event.shaped('createdieselgenerators:diesel_engine', [
    ' F ',
    'PBP',
    'ATA'
  ], {
    F: 'minecraft:flint_and_steel',
    P: 'createdieselgenerators:engine_piston',
    B: 'immersiveengineering:storage_steel',
    A: 'create:andesite_alloy',
    T: 'create:fluid_tank'
  })
  event.shaped('createdieselgenerators:diesel_engine', [
    ' F ',
    'PBP',
    'ATA'
  ], {
    F: 'minecraft:flint_and_steel',
    P: 'createdieselgenerators:engine_piston',
    B: 'createbigcannons:cast_iron_block',
    A: 'create:andesite_alloy',
    T: 'create:fluid_tank'
  })
  event.shaped('createdieselgenerators:diesel_engine', [
    ' F ',
    'PBP',
    'ATA'
  ], {
    F: 'minecraft:flint_and_steel',
    P: 'createdieselgenerators:engine_piston',
    B: 'minecraft:iron_block',
    A: 'create:andesite_alloy',
    T: 'create:fluid_tank'
  })

  //Большой дизель
  event.shaped('createdieselgenerators:large_diesel_engine', [
    ' A ',
    'SDS',
    ' A '
  ], {
    A: 'create:andesite_alloy',
    S: 'tfc:metal/sheet/steel',
    D: 'createdieselgenerators:diesel_engine'
  })
  event.shaped('createdieselgenerators:large_diesel_engine', [
    ' A ',
    'SDS',
    ' A '
  ], {
    A: 'create:andesite_alloy',
    S: 'tfc:metal/sheet/cast_iron',
    D: 'createdieselgenerators:diesel_engine'
  })
  event.shaped('createdieselgenerators:large_diesel_engine', [
    ' A ',
    'SDS',
    ' A '
  ], {
    A: 'create:andesite_alloy',
    S: 'tfc:metal/sheet/wrought_iron',
    D: 'createdieselgenerators:diesel_engine'
  })

  //Огромный дизель
  event.shaped(
    'createdieselgenerators:huge_diesel_engine',
    [
      'AFA',
      'SES',
      'TBT'
    ], {
    F: 'minecraft:flint_and_steel',
    E: 'create:steam_engine',
    B: 'immersiveengineering:storage_steel',
    A: 'create:andesite_alloy',
    T: 'create:fluid_pipe',
    S: 'tfc:metal/sheet/steel'
  })
  event.shaped(
    'createdieselgenerators:huge_diesel_engine', [
    'AFA',
    'SES',
    'TBT'
  ], {
    A: 'create:andesite_alloy',
    B: 'createbigcannons:cast_iron_block',
    E: 'create:steam_engine',
    T: 'create:fluid_pipe',
    F: 'minecraft:flint_and_steel',
    S: 'tfc:metal/sheet/cast_iron'
  })
  event.shaped(
    'createdieselgenerators:huge_diesel_engine', [
    'AFA',
    'SES',
    'TBT'
  ], {
    A: 'create:andesite_alloy',
    B: 'minecraft:iron_block',
    E: 'create:steam_engine',
    T: 'create:fluid_pipe',
    F: 'minecraft:flint_and_steel',
    S: 'tfc:metal/sheet/wrought_iron'
  })

  //Поршень
  event.shaped(
    'createdieselgenerators:engine_piston', [
    'I  ',
    ' S ',
    '  N'
  ], {
    I: '#forge:ingots/steel',
    S: '#forge:rods/steel',
    N: '#forge:nuggets/steel'
  })
  event.shaped(
    'createdieselgenerators:engine_piston', [
    'I  ',
    ' S ',
    '  N'
  ], {
    I: '#forge:ingots/cast_iron',
    S: '#forge:rods/cast_iron',
    N: '#forge:nuggets/cast_iron'
  })
  event.shaped(
    'createdieselgenerators:engine_piston', [
    'I  ',
    ' S ',
    '  N'
  ], {
    I: '#forge:ingots/iron',
    S: '#forge:rods/wrought_iron',
    N: '#forge:nuggets/iron'
  })

  // Глушитель
  event.remove({ output: 'createdieselgenerators:engine_silencer' })
  event.shaped('createdieselgenerators:engine_silencer', [
    'SCS',
    'SIS',
    'SCS'
  ], {
    S: '#forge:plates/steel',          // СТАЛЬНОЙ корпус (жаропрочный, выдерживает вибрации)
    C: '#forge:plates/cast_iron',      // ЧУГУННЫЕ торцы/фланцы (отлично держат форму и жар)
    I: 'create:fluid_pipe'               // Внутренняя перфорированная труба для прохождения газов
  })

  // Турбонаддув
  event.remove({ output: 'createdieselgenerators:engine_turbocharger' })
  event.shaped('createdieselgenerators:engine_turbocharger', [
    ' P ',
    'CBC',
    ' P '
  ], {
    P: 'create:propeller',               // Крыльчатки (пропеллер Create идеально символизирует компрессорное и турбинное колесо)
    C: '#forge:plates/cast_iron',        // ЧУГУН (горячая часть/улитка турбины. Выдерживает 900°C+, заменяет цинк!)
    B: '#forge:rods/steel'               // СТАЛЬНОЙ вал и подшипниковый узел (выдерживает 100 000+ RPM)
  })

  // НОВЫЕ РЕЦЕПТЫ ДЛЯ ЧАНА (Молот теряет 1 прочность)
  event.remove({ output: 'firmalife:vat' })
  const vatMetals = [
    'copper', 'bronze', 'black_bronze', 'bismuth_bronze', 'brass',
    'gold', 'silver', 'wrought_iron', 'cast_iron', 'steel',
    'black_steel', 'blue_steel', 'red_steel'
  ]
  // Используем цикл, чтобы не писать 13 одинаковых рецептов
  vatMetals.forEach(metal => {
    event.shapeless('firmalife:vat', [
      '#tfc:hammers',
      `tfc:metal/sheet/${metal}`,
      `tfc:metal/double_sheet/${metal}`
    ]).damageIngredient('#tfc:hammers')
  })

  // РЕЦЕПТ ДРЕВЕСНОГО УГЛЯ ДЛЯ ВСЕХ ОСТАЛЬНЫХ УГЛЕЙ
  event.shapeless('minecraft:charcoal', [
    'tfc:ore/lignite'
  ])
  event.shapeless('minecraft:charcoal', [
    'tfc:ore/bituminous_coal'
  ])

  // ФИКС КРАФТА ЧАШИ ИЗ CREATE
  event.remove({ output: 'create:basin' })
  event.shapeless('create:basin', [
    'create:andesite_alloy', 'tfc:crucible', 'create:andesite_alloy',
    'create:andesite_alloy', 'create:andesite_alloy', 'create:andesite_alloy'
  ])

  // РЕЦЕПТЫ ДЛЯ BIG CANNONS
  event.shapeless('createbigcannons:casting_sand', [
    '#minecraft:sand', '#minecraft:sand',
    'minecraft:clay_ball', '#minecraft:dirt'
  ])

  // СЕРА
  event.shapeless('tfc:powder/sulfur', [
    'immersiveengineering:dust_sulfur'
  ])
  event.shapeless('immersiveengineering:dust_sulfur', [
    'tfc:powder/sulfur'
  ])

  // РЕЦЕПТЫ ДЛЯ РЕАКТОРА
  event.shapeless('create_new_age:reactor_casing', [
    'tfc_ie_addon:metal/block/lead'
  ])
  event.shapeless('tfc_ie_addon:metal/block/lead', [
    'create_new_age:reactor_casing'
  ])

  // БИТУМ
  event.shapeless('artisanal:bitumen', [
    'immersivepetroleum:bitumen'
  ])
  event.shapeless('immersivepetroleum:bitumen', [
    'artisanal:bitumen'
  ])

  //Клей
  //Замена сгустков слизи на клей
  event.shapeless('minecraft:slime_ball', [
    'tfc:glue'
  ])
  event.shapeless('tfc:glue', [
    'minecraft:slime_ball'
  ])
  event.replaceInput({}, 'minecraft:slime_ball', 'tfc:glue')
  //Рецепты клея
  // 1. НАТУРАЛЬНЫЙ КЛЕЙ (Ранняя игра)
  event.recipes.create.mixing('2x tfc:glue', [
    Fluid.of('afc:latex', 500),
    Fluid.of('tfc:vinegar', 100) // Уксус как коагулянт
  ])
  // 2. РЕЗИНОВЫЙ ГЕРМЕТИК (Средняя игра)
  event.recipes.create.mixing('tfc:glue', [
    Fluid.of('afc:latex', 250),
    '#forge:dusts/coal'
  ])
  event.recipes.create.mixing('tfc:glue', [
    Fluid.of('afc:latex', 250),
    'tfc:powder/charcoal'
  ])
  // 3. БИТУМНО-ЛАТЕКСНАЯ МАСТИКА (Поздняя игра, Immersive Petroleum)
  event.recipes.create.mixing('3x tfc:glue', [
    'immersivepetroleum:bitumen',           // Битум из перегонки нефти
    Fluid.of('afc:latex', 250),             // Латекс из гевеи
    'tfc:powder/lime'                       // Гашёная известь как наполнитель
  ]).heated()
  // БОНУС: Альтернативный рецепт без латекса (только нефть)
  event.recipes.create.mixing('2x tfc:glue', [
    'immersivepetroleum:bitumen',
    'tfc:powder/sand',          // Песок как наполнитель
    'tfc:powder/lime'           // Известь для отверждения
  ]).heated()

  // Шерстяная ткань
  // Пропитка ткани жиром/ланолином для получения свойств шерстяной ткани
  event.shapeless('tfc:wool_cloth', [
    '#tfc:sewing_dark_cloth',
    'tfc:powder/wood_ash',
    '#artisanal:fats'
  ])
  event.shapeless('tfc:wool_cloth', [
    '#tfc:sewing_light_cloth',
    'tfc:powder/wood_ash',
    '#artisanal:fats'
  ])

  // Крафт ванильной бочки
  event.shapeless('minecraft:barrel', [
    '#tfc:barrels',
  ])

  //Крафт ванильного камнереза
  event.remove({ output: 'minecraft:stonecutter' })
  event.shaped('minecraft:stonecutter', [
    ' S ',
    'SIS',
    'RMR'
  ],
    {
      S: '#forge:plates/iron',
      R: '#tfc:rock/raw',
      M: 'tfc:brass_mechanisms',
      I: '#c:iron_ingots'
    }
  )

  //Крафт газового генератора
  event.remove({ output: 'vs_clockwork:coal_burner' })
  event.shapeless('vs_clockwork:coal_burner',
    ['vs_clockwork:duct', 'create:industrial_iron_block',]
  )

  //Кремень и кресало из чугуна
  event.shapeless(
    'artisanal:stone/flint_and/cut_pyrite',
    ['#forge:ingots/cast_iron', 'minecraft:flint']
  )

  // Рецепты для жернова из create
  event.custom({
    type: 'create:milling',
    ingredients: [
      { item: 'tfc_medicine:crumpled_milkweed' }
    ],
    results: [
      { item: 'tfc_medicine:milkweed_powder', count: 2 }
    ],
    processingTime: 100
  }).id('my_realism:milkweed_to_powder')
  event.custom({
    type: 'create:milling',
    ingredients: [
      { item: 'tfc:plant/artists_conk' }
    ],
    results: [
      { item: 'tfc_medicine:mushroom_shreds', count: 4 }
    ],
    processingTime: 100
  }).id('my_realism:artists_conk_to_powder')
  event.custom({
    type: 'create:milling',
    ingredients: [
      { item: 'tfc:food/garlic' }
    ],
    results: [
      { item: 'tfc_medicine:garlic_puree' }
    ],
    processingTime: 100
  }).id('my_realism:garlic_to_powder')

  // Рецепт мытья посуды в миксере Create
  event.recipes.create.mixing(
    'minecraft:bowl',
    [
      '#tfc:dynamic_bowl_items',
      Fluid.of('minecraft:water', 250)
    ]
  )

  //Реалистичный сыродутный горн
  event.remove({ output: 'tfc:bloomery' })
  event.shaped(
    Item.of('tfc:bloomery', 1),
    [
      'BCB',
      'CGC',
      'BCB'
    ],
    {
      B: '#tfc:rock/bricks',
      C: 'minecraft:clay_ball',
      G: '#forge:fence_gates'
    }
  )

  //Крафт для доменной печи из IE
  event.shapeless(
    Item.of('immersiveengineering:blastbrick_reinforced', 1),
    ['#forge:plates/iron', 'tfc:fire_bricks',]
  )

  //Ковырялка для червей
  event.remove({ output: 'creepycrawlies:wormstick' })
  event.shapeless(
    'creepycrawlies:wormstick',
    ['#forge:rods/wooden', '#forge:rods/wooden', '#forge:rods/wooden', '#forge:tools/knives',]
  ).damageIngredient('#forge:tools/knives')

  //Кровать
  event.remove({ output: 'tfcsleep:straw_bed' })
  event.shapeless(
    'tfcsleep:straw_bed',
    ['tfc:straw', 'tfc:straw', '#tfc:dirt', '#tfc:dirt']
  )

  //Алмазное напыление приклеивается клеем
  //на пилку
  event.remove({ output: 'createaddition:diamond_grit_sandpaper' })
  event.shapeless(
    'createaddition:diamond_grit_sandpaper',
    ['minecraft:paper', 'tfc:glue', 'tfc:powder/diamond']
  )
  //на наждачку
  event.remove({ output: 'tfc:gem_saw' })
  event.shapeless(
    'tfc:gem_saw',
    ['#forge:rods/brass', 'tfc:glue', '#tfc:gem_powders']
  )

  //Заменяем ламинарию на резину
  event.remove({ output: 'minecraft:dried_kelp' })
  event.replaceInput(
    { mod: 'trackwork' },
    'minecraft:dried_kelp',
    'afc:rubber_bar'
  )
  event.replaceInput(
    { mod: 'create' },
    'minecraft:dried_kelp',
    'afc:rubber_bar'
  )
  event.replaceInput(
    { mod: 'vs_clockwork' },
    'minecraft:dried_kelp',
    'afc:rubber_bar'
  )
  event.replaceInput(
    { mod: 'createdieselgenerators' },
    'minecraft:dried_kelp',
    'afc:rubber_bar'
  )
  event.replaceInput(
    { mod: 'petrolsparts' },
    'minecraft:dried_kelp',
    'afc:rubber_bar'
  )

  //Заменяем блок сушёных ламинарий на ремень
  event.replaceInput(
    { mod: 'trackwork' },
    'minecraft:dried_kelp_block',
    'create:belt_connector'
  )
  event.replaceInput(
    { mod: 'create' },
    'minecraft:dried_kelp_block',
    'create:belt_connector'
  )
  event.replaceInput(
    { mod: 'creatingspace' },
    'minecraft:dried_kelp_block',
    'create:belt_connector'
  )

  //Резина в универсальном вале
  event.remove({ id: 'vs_clockwork:sequenced_assembly/universal_shaft_item' })
  event.recipes.create.sequenced_assembly([
    Item.of('vs_clockwork:universal_shaft_item')
  ], 'create:shaft', [
    event.recipes.create.deploying('vs_clockwork:universal_shaft_item', [
      Item.of('vs_clockwork:universal_shaft_item'),
      'afc:rubber_bar'  // Резина вместо ламинарии!
    ]),
    event.recipes.create.deploying('vs_clockwork:universal_shaft_item', [
      Item.of('vs_clockwork:universal_shaft_item'),
      'afc:rubber_bar'  // Резина вместо ламинарии!
    ]),
    event.recipes.create.deploying('vs_clockwork:universal_shaft_item', [
      Item.of('vs_clockwork:universal_shaft_item'),
      '#forge:plates/iron'
    ]),
    event.recipes.create.cutting('vs_clockwork:universal_shaft_item',
      'vs_clockwork:universal_shaft_item'
    ),
  ]).transitionalItem('vs_clockwork:universal_shaft_item').loops(5)

  //Резина в шланге продвигателя
  event.remove({ id: 'vs_clockwork:sequenced_assembly/extendon_hose' })
  event.recipes.create.sequenced_assembly([
    Item.of('vs_clockwork:extendon_hose')
  ], 'vs_clockwork:duct', [
    event.recipes.create.deploying('vs_clockwork:extendon_hose', [
      Item.of('vs_clockwork:extendon_hose'),
      'afc:rubber_bar'  // Резина вместо ламинарии!
    ]),
    event.recipes.create.deploying('vs_clockwork:extendon_hose', [
      Item.of('vs_clockwork:extendon_hose'),
      'afc:rubber_bar'  // Резина вместо ламинарии!
    ]),
    event.recipes.create.deploying('vs_clockwork:extendon_hose', [
      Item.of('vs_clockwork:extendon_hose'),
      '#forge:plates/iron'
    ]),
    event.recipes.create.cutting('vs_clockwork:extendon_hose',
      'vs_clockwork:extendon_hose'
    ),
  ]).transitionalItem('vs_clockwork:extendon_hose').loops(5)

  //Дополнительный крафт резины
  event.recipes.create.mixing(
    'afc:rubber_bar',
    [
      Fluid.of('immersivepetroleum:naphtha', 500),  // Нафта из IP
      Fluid.of('immersivepetroleum:lubricant', 100), // Смазка как пластификатор
      'tfc:powder/sulfur'                            // Сера
    ]
  ).heated()

  //Убираем крафты из aleki ships
  event.remove({ mod: 'alekiships', type: 'minecraft:crafting_shaped' })
  event.remove({ mod: 'alekiships', type: 'minecraft:crafting_shapeless' })

  //Убираем крафты из immersive aircraft
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:hull' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:engine' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:propeller' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:boiler' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:quadrocopter' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:rotary_cannon' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:telescope' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:bomb_bay' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:enhanced_propeller' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:eco_engine' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:nether_engine' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:steel_boiler' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:industrial_gears' })
  event.remove({ mod: 'immersive_aircraft', output: 'immersive_aircraft:sturdy_pipes' })
  //Фиксим

  //Бамбуковый самолёт
  // event.remove({ output: 'immersive_aircraft:bamboo_hopper' })
  event.shaped(
    'immersive_aircraft:bamboo_hopper',
    [
      'BHB',
      'PEP',
      'PPP'
    ],
    {
      B: 'immersive_aircraft:biplane',
      H: 'immersive_aircraft:hull',
      E: 'immersive_aircraft:engine',
      P: '#minecraft:planks'
    }
  )
  //Усиление корпуса
  event.remove({ output: 'immersive_aircraft:hull_reinforcement' })
  event.shaped(
    'immersive_aircraft:hull_reinforcement',
    [
      'SSS',
      'HHH',
      'SSS'
    ],
    {
      S: '#forge:sheets/any_bronze',
      H: 'immersive_aircraft:hull'
    }
  )
  //Улучшение шасси
  event.remove({ output: 'immersive_aircraft:improved_landing_gear' })
  event.shaped(
    'immersive_aircraft:improved_landing_gear',
    [
      ' II',
      'RRI',
      'RR '
    ],
    {
      I: '#forge:ingots/iron',
      R: 'afc:rubber_bar'
    }
  )

  //Кузнечные меха из резины
  event.shaped(
    'tfc:bellows',
    [
      'PPP',
      'RRR',
      'PPP'
    ],
    {
      P: '#tfc:lumber',
      R: 'afc:rubber_bar'
    }
  )

  //Переделываем крафт коксовых кирпичей
  event.remove({ output: 'immersiveengineering:cokebrick' })
  event.shapeless('immersiveengineering:cokebrick', [
    'tfc:fire_bricks'
  ])

  //В генераторе должен быть магнит
  event.remove({ output: 'createaddition:alternator' })
  event.recipes.create.mechanical_crafting(
    'createaddition:alternator',
    [
      '  A  ',
      ' PSP ',
      'PSMSP',
      ' PCP '
    ],
    {
      A: 'create:andesite_alloy',
      P: '#forge:plates/iron',
      S: 'createaddition:copper_spool',
      M: 'create_new_age:magnetite_block',
      C: 'createaddition:capacitor'
    }
  )

  //Крафт ванильной печки
  event.recipes.create.mechanical_crafting(
    'minecraft:furnace',
    [
      'FFF',
      'F F',
      'FFF',
    ],
    {
      F: 'tfc:fire_bricks'
    }
  )

  //Графитовые щётки в динамомашине
  event.remove({ output: 'create_new_age:carbon_brushes' })
  event.shaped(
    'create_new_age:carbon_brushes',
    [
      'AAA',
      'GSG',
      'AAA'
    ],
    {
      A: 'create:andesite_alloy',
      G: 'immersiveengineering:ingot_hop_graphite',
      S: 'create:shaft'
    }
  )

  //Соль
  event.shapeless('tfc:powder/salt', [
    'immersivetechnology:salt'
  ])

  //Кинетический генератор
  event.remove({ output: 'immersiveengineering:dynamo' })
  event.shaped(
    'immersiveengineering:dynamo',
    [
      'MCM',
      'ILI',
    ],
    {
      M: 'create_new_age:magnetite_block',
      C: 'immersiveengineering:component_iron',
      I: '#forge:ingots/iron',
      L: 'immersiveengineering:coil_lv'
    }
  )

  //Удаляю ванильные песок и гравий
  event.remove({
    output: [
      'minecraft:sand',
      'minecraft:gravel'
    ]
  })

  //Электрический дробитель
  rocks.forEach(rock => {
    const sandColor = rockToSand[rock]
    //Булыжник
    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 2400,
      input: { item: `tfc:rock/raw/${rock}` },
      result: { item: `tfc:rock/cobble/${rock}`, count: 1 },
      secondaries: [
        {
          output: { item: `tfc:rock/loose/${rock}`, count: 1 },
          chance: 0.2
        }
      ]
    })
    //Гравий
    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 2400,
      input: { item: `tfc:rock/cobble/${rock}` },
      result: { item: `tfc:rock/gravel/${rock}`, count: 1 },
      secondaries: [
        {
          output: { item: `tfc:rock/loose/${rock}`, count: 1 },
          chance: 0.2
        }
      ]
    })
    //Песок
    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 1600,
      input: { item: `tfc:rock/gravel/${rock}` },
      result: { item: `tfc:sand/${sandColor}`, count: 1 },
      secondaries: [
        {
          output: { item: `tfc:rock/loose/${rock}`, count: 1 },
          chance: 0.1
        },
        {
          output: { item: 'minecraft:flint', count: 1 },
          chance: 0.05
        }
      ]
    })
  })

  //Механический дробитель
  rocks.forEach(rock => {
    const sandColor = rockToSand[rock]

    event.recipes.create.crushing(
      [
        // Основной выход: песок нужного цвета
        Item.of(`tfc:sand/${sandColor}`, 1),

        // Побочный продукт: обломки камня (каменная пыль)
        Item.of(`tfc:rock/loose/${rock}`, 1).withChance(0.15),

        // Кремний (как в реальной геологии — в песке часто есть кремень)
        Item.of('minecraft:flint', 1).withChance(0.05)
      ],
      `tfc:rock/gravel/${rock}`,  // Вход: гравий конкретной породы
      150                        // Время обработки (7.5 секунд)
    )
  })

  //=========================
  //Нефть из CDG через сталь
  //=========================
  event.remove({ output: 'createdieselgenerators:distillation_controller' })
  //Геофизический прибор для разведки недр
  event.remove({ output: 'createdieselgenerators:oil_scanner' })
  event.shaped('createdieselgenerators:oil_scanner', [
    'LGL',  // Линзы + стекло (оптическая система индикации)
    'SCS',  // Сталь + компас (сенсор + корпус)
    'WPW'   // Медная проводка + механика (передача сигнала)
  ], {
    L: 'tfc:lens',                           // Линзы (для оптического сенсора)
    G: 'create:precision_mechanism',         // Точный механизм (сердце прибора
    S: 'tfc:metal/sheet/steel',              // Стальной корпус (прочность)
    C: 'minecraft:compass',                  // Компас (геофизический сенсор)
    W: '#forge:wires/copper',                // Медная проволока (проводка)
    P: 'create:cogwheel'                     // Шестерня (механика вращения)
  })

  //Подшипник станка качалки
  event.remove({ output: 'createdieselgenerators:pumpjack_bearing' })
  event.shaped('createdieselgenerators:pumpjack_bearing', [
    'ASA',
    'SPS',
    'ASA'
  ], {
    A: 'create:andesite_alloy',
    S: '#forge:plates/obsidian',
    P: 'create:mechanical_bearing'
  })

  //Кривошип
  event.remove({ output: 'createdieselgenerators:pumpjack_crank' })
  event.recipes.create.mechanical_crafting(
    'createdieselgenerators:pumpjack_crank',
    [
      'AWA',
      ' I ',
      'AWA',
      'SIS',
      'ASA'
    ],
    {
      A: 'create:andesite_alloy',
      W: '#forge:plates/iron',
      S: '#forge:plates/obsidian',
      I: 'create:shaft'
    }
  )

  //Головка балансира
  event.remove({ output: 'createdieselgenerators:pumpjack_head' })
  event.shaped('createdieselgenerators:pumpjack_head', [
    'A A',
    'SRS',
    'A A'
  ], {
    A: 'create:andesite_alloy',
    S: '#forge:plates/obsidian',
    R: 'afc:rubber_bar'
  })


  //Фикс крафта арбалета
  event.remove({ output: 'minecraft:crossbow' })
  event.shaped('minecraft:crossbow', [
    'LRL',
    'SHS',
    ' L '
  ], {
    R: '#forge:rods/iron',
    L: '#tfc:lumber',
    H: 'tfc:metal/fish_hook/wrought_iron',
    S: '#c:string'
  })
  event.remove({ output: 'immersive_aircraft:heavy_crossbow' })
  event.shapeless('immersive_aircraft:heavy_crossbow', [
    'minecraft:crossbow',
    'tfc:metal/fish_hook/wrought_iron',
    '#minecraft:logs'
  ])

  //======
  //Замены
  //======
  //Бочка
  event.replaceInput({}, 'minecraft:barrel', '#tfc:barrels')

  //Слитки
  metals.forEach(metal => {
    const stacksIteratorIngots = Ingredient.of(`#forge:ingots/${metal}`).stacks
    const ingotsInTag = []
    for (const stack of stacksIteratorIngots) {
      ingotsInTag.push(stack.id)
    }
    ingotsInTag.forEach(itemId => {
      event.replaceInput({}, itemId, `#forge:ingots/${metal}`)
    })
  })
  const stacksIteratorIngotsIron = Ingredient.of(`#forge:ingots/iron`).stacks
  const ingotsIronInTag = []
  for (const stack of stacksIteratorIngotsIron) {
    ingotsIronInTag.push(stack.id)
  }
  ingotsIronInTag.forEach(itemId => {
    event.replaceInput({}, itemId, `#forge:ingots/iron`)
  })

  //Пластины
  metals.forEach(metal => {
    const stacksIteratorPlates = Ingredient.of(`#forge:plates/${metal}`).stacks
    const platesInTag = []
    for (const stack of stacksIteratorPlates) {
      platesInTag.push(stack.id)
    }
    platesInTag.forEach(itemId => {
      event.replaceInput({}, itemId, `#forge:plates/${metal}`)
    })
  })
  const stacksIteratorPlatesIron = Ingredient.of(`#forge:plates/iron`).stacks
  const platesIronInTag = []
  for (const stack of stacksIteratorPlatesIron) {
    platesIronInTag.push(stack.id)
  }
  platesIronInTag.forEach(itemId => {
    event.replaceInput({}, itemId, `#forge:plates/iron`)
  })

  //Стержни
  metals.forEach(metal => {
    const stacksIteratorRods = Ingredient.of(`#forge:rods/${metal}`).stacks
    const rodsInTag = []
    for (const stack of stacksIteratorRods) {
      rodsInTag.push(stack.id)
    }
    rodsInTag.forEach(itemId => {
      event.replaceInput({}, itemId, `#forge:rods/${metal}`)
    })
  })
  const stacksIteratorRodsIron = Ingredient.of(`#forge:rods/iron`).stacks
  const rodsIronInTag = []
  for (const stack of stacksIteratorRodsIron) {
    rodsIronInTag.push(stack.id)
  }
  rodsIronInTag.forEach(itemId => {
    event.replaceInput({}, itemId, `#forge:rods/iron`)
  })


  //Провода
  metals.forEach(metal => {
    const stacksIteratorWires = Ingredient.of(`#forge:wires/${metal}`).stacks
    const wiresInTag = []
    for (const stack of stacksIteratorWires) {
      wiresInTag.push(stack.id)
    }
    wiresInTag.forEach(itemId => {
      event.replaceInput({}, itemId, `#forge:wires/${metal}`)
    })
  })
  const stacksIteratorWiresIron = Ingredient.of(`#forge:wires/iron`).stacks
  const wiresIronInTag = []
  for (const stack of stacksIteratorWiresIron) {
    wiresIronInTag.push(stack.id)
  }
  wiresIronInTag.forEach(itemId => {
    event.replaceInput({}, itemId, `#forge:wires/iron`)
  })

  //Кусочки
  metals.forEach(metal => {
    const stacksIteratorNugs = Ingredient.of(`#forge:nuggets/${metal}`).stacks
    const nugsInTag = []
    for (const stack of stacksIteratorNugs) {
      nugsInTag.push(stack.id)
    }
    nugsInTag.forEach(itemId => {
      event.replaceInput({}, itemId, `#forge:nuggets/${metal}`)
    })
  })
  const stacksIteratorNugsIron = Ingredient.of(`#forge:nuggets/iron`).stacks
  const nugsIronInTag = []
  for (const stack of stacksIteratorNugsIron) {
    nugsIronInTag.push(stack.id)
  }
  nugsIronInTag.forEach(itemId => {
    event.replaceInput({}, itemId, `#forge:nuggets/wrought_iron`)
  })
  //Удаляем излишки из рецептов
  //Удаляем ванильные
  event.remove({ output: 'minecraft:iron_nugget' })
  event.remove({ output: 'minecraft:gold_nugget' })
  //Удаляем IE
  event.remove({ output: 'immersiveengineering:nugget_copper' })
  event.remove({ output: 'immersiveengineering:nugget_silver' })
  event.remove({ output: 'immersiveengineering:nugget_nickel' })
  event.remove({ output: 'immersiveengineering:nugget_steel' })
  //Удаляем Big Cannons
  event.remove({ output: 'createbigcannons:bronze_scrap' })
  event.remove({ output: 'createbigcannons:nethersteel_nugget' })
  event.remove({ output: 'createbigcannons:steel_scrap' })
  event.remove({ output: 'createbigcannons:cast_iron_nugget' })
  //Удаляем Creating space
  event.remove({ output: 'creatingspace:aluminum_nugget' })
  event.remove({ output: 'creatingspace:nickel_nugget' })
  //Удаляем Create и Additions
  event.remove({ output: 'createaddition:electrum_nugget' })
  event.remove({ output: 'create:brass_nugget' })
  event.remove({ output: 'create:copper_nugget' })
  event.remove({ output: 'create:zinc_nugget' })
  //Работа над самородками из IE
  const ieNuggets = [
    { metal: 'aluminum', temp: 660 },
    { metal: 'constantan', temp: 1170 },
    { metal: 'electrum', temp: 1000 },
    { metal: 'lead', temp: 327 },
    { metal: 'uranium', temp: 1132 }
  ]
  ieNuggets.forEach(entry => {
    const metal = entry.metal
    const temp = entry.temp
    const nugget = `immersiveengineering:nugget_${metal}`
    const ingotTag = `#forge:ingots/${metal}`
    // 1. Удаляем ВСЕ старые рецепты самородка
    event.remove({ output: nugget })
    // 2. Рецепт верстака: 1 слиток → 4 самородка
    const ingotsInTag = []
    for (const stack of Ingredient.of(ingotTag).stacks) {
      ingotsInTag.push(stack.id)
    }
    ingotsInTag.forEach(ingotId => {
      event.shapeless(`4x ${nugget}`, [ingotId])
    })
  })
  //Добавление крафтов ИЗ самородков
  const ieMetals = [
    'aluminum',
    'constantan',
    'electrum',
    'lead',
    'uranium'
  ];
  ieMetals.forEach(metal => {
    const nugget = `immersiveengineering:nugget_${metal}`;
    const ingot = `immersiveengineering:ingot_${metal}`;
    // Добавляем рецепт 2x2: 4 самородка -> 1 слиток
    event.shaped(ingot, [
      'AA',
      'AA'
    ], {
      A: nugget
    });
  });
  //Замена ванильных самородков
  event.replaceInput({}, 'minecraft:iron_nugget', `#forge:nuggets/wrought_iron`)
  event.replaceInput({}, 'create:brass_nugget', `#forge:nuggets/brass`)

  //Пыль и порошок
  //Уголь
  event.replaceInput({}, 'creatingspace:coal_dust', '#forge:dusts/charcoal')
  event.replaceInput({}, 'tfc:powder/charcoal', '#forge:dusts/charcoal')
  event.replaceInput({}, 'minecraft:coal', '#minecraft:coals')
  //Никель
  event.replaceInput({}, 'creatingspace:nickel_dust', '#forge:dusts/nickel')
  event.replaceInput({}, 'immersiveengineering:dust_nickel', '#forge:dusts/nickel')
  //Коксовая пыль
  event.replaceInput({}, 'immersiveengineering:dust_coke', '#forge:dusts/coal_coke')
  event.replaceInput({}, 'tfc:powder/coke', '#forge:dusts/coal_coke')
  //Алмазы
  event.remove({ output: 'createaddition:diamond_grit' })

  //Графит в HOP-графит (Высокоориентированный пиролитический графит)
  event.recipes.create.compacting('immersiveengineering:ingot_hop_graphite', '#forge:dusts/graphite')

  //Замена в сборке creating space
  const sturdySheet = 'create:sturdy_sheet'
  // Массив данных для генерации рецептов
  const injectors = [
    {
      output: 'creatingspace:iron_injector',
      plate: '#forge:plates/iron',
      nugget: '#forge:nuggets/wrought_iron'
    },
    {
      output: 'creatingspace:copper_injector',
      plate: '#forge:plates/copper',
      nugget: '#forge:nuggets/copper'
    },
    {
      output: 'creatingspace:brass_injector',
      plate: '#forge:plates/brass',
      nugget: '#forge:nuggets/brass'
    }
  ]
  // Генерируем рецепт для каждого инжектора
  injectors.forEach(data => {
    event.recipes.create.sequenced_assembly(
      data.output,          // 1. Конечный результат (готовый инжектор)
      sturdySheet,          // 2. Стартовый предмет (прочный лист на конвейере)
      [
        // ШАГ 1: Деплойер "тыкает" листом соответствующего металла
        event.recipes.create.deploying(sturdySheet, [sturdySheet, data.plate]),
        // ШАГ 2: Деплойер "тыкает" самородком соответствующего металла
        event.recipes.create.deploying(data.output, [sturdySheet, data.nugget])
      ]
    )
      .transitionalItem(sturdySheet) // Предмет, который физически лежит на конвейере между шагами
      .loops(1)                      // Количество полных циклов сборки (1 достаточно для 2 шагов)
  })

  const CS_INGOT_NUGGET_PAIRS = [
    ['creatingspace:inconel_ingot', 'creatingspace:inconel_nugget'],
    ['creatingspace:hastelloy_ingot', 'creatingspace:hastelloy_nugget'],
    ['creatingspace:cobalt_ingot', 'creatingspace:cobalt_nugget'],
    ['creatingspace:copronickel_ingot', 'creatingspace:copronickel_nugget'],
    ['creatingspace:monel_ingot', 'creatingspace:monel_nugget'],
    ['creatingspace:reinforced_copper_ingot', 'creatingspace:reinforced_copper_nugget']
  ]
  CS_INGOT_NUGGET_PAIRS.forEach(pair => {
    const ingot = pair[0]
    const nugget = pair[1]

    // Удаляем старые рецепты (и крафт, и shapeless), чтобы не было конфликтов с ванильными 9→1
    event.remove({ output: ingot, type: 'minecraft:crafting_shaped' })
    event.remove({ output: ingot, type: 'minecraft:crafting_shapeless' })
    event.remove({ output: nugget, type: 'minecraft:crafting_shaped' })
    event.remove({ output: nugget, type: 'minecraft:crafting_shapeless' })

    // Крафт: 4 самородка (2x2) -> 1 слиток
    event.shaped(ingot, [
      'AA',
      'AA'
    ], { A: nugget })

    // Раскрафт: 1 слиток -> 4 самородка
    event.shapeless(`4x ${nugget}`, [ingot])
  })

  //Скафандры
  //Обычная обшивка
  event.recipes.create.sequenced_assembly(
    'creatingspace:basic_spacesuit_fabric', // Выход: готовая обшивка
    'create:sturdy_sheet',                  // База на конвейере (прочный лист)
    [
      // Шаг 1: Деплойер наносит слой ткани/полотна
      event.recipes.create.deploying(
        'create:sturdy_sheet',
        ['create:sturdy_sheet', '#tfc:high_quality_cloth']
      ),
      // Шаг 2: Деплойер наносит слой резины/полимера
      event.recipes.create.deploying(
        'create:sturdy_sheet',
        ['create:sturdy_sheet', '#forge:rubber']
      ),
      // Шаг 3: Механический пресс спрессовывает и герметизирует → финальный предмет
      event.recipes.create.pressing(
        'creatingspace:basic_spacesuit_fabric',
        'create:sturdy_sheet'
      )
    ]
  )
    .transitionalItem('create:sturdy_sheet') // Предмет, который физически лежит на ленте
    .loops(1)                                // 1 полный цикл конвейера = 1 выход
  //Улучшенная обшивка
  event.recipes.create.sequenced_assembly(
    'creatingspace:advanced_spacesuit_fabric', // Выход: продвинутая обшивка
    'creatingspace:basic_spacesuit_fabric',    // База на конвейере: обычная обшивка
    [
      // Шаг 1: Деплойер "тыкает" кобальтовым самородком
      event.recipes.create.deploying(
        'creatingspace:basic_spacesuit_fabric',
        ['creatingspace:basic_spacesuit_fabric', 'creatingspace:cobalt_nugget']
      ),

      // Шаг 2: Деплойер "тыкает" белой шерстью
      event.recipes.create.deploying(
        'creatingspace:basic_spacesuit_fabric',
        ['creatingspace:basic_spacesuit_fabric', 'minecraft:white_wool']
      ),

      // Шаг 3: Механический пресс спрессовывает всё вместе → финальный результат
      event.recipes.create.pressing(
        'creatingspace:advanced_spacesuit_fabric',
        'creatingspace:basic_spacesuit_fabric'
      )
    ]
  )
    .transitionalItem('creatingspace:basic_spacesuit_fabric') // Предмет, который визуально лежит на ленте между шагами
    .loops(1)                                                 // 1 полный цикл = 1 готовая продвинутая обшивка


})


ServerEvents.tags('block', event => {
  // Список всех пород камня в TFC
  const rocks = [
    'granite', 'diorite', 'gabbro', 'shale', 'claystone',
    'limestone', 'conglomerate', 'dolomite', 'chert', 'chalk',
    'rhyolite', 'basalt', 'andesite', 'dacite', 'quartzite',
    'slate', 'phyllite', 'schist', 'gneiss', 'marble'
  ]

  // Мягкие минералы, которые должны добываться каменной/медной киркой
  // (по реальной твёрдости по Моосу)
  const softOres = [
    'halite',    // Твёрдость 2-2.5 (соль)
    'cryolite',  // Твёрдость 2.5-3 (криолит)
    'sulfur',    // Твёрдость 1.5-2.5 (сера)
    'saltpeter', // Твёрдость 2 (селитра)
    'borax',     // Твёрдость 2-2.5 (бура)
    'graphite'   // Твёрдость 1-2 (графит)
  ]

  // Применяем ко всем комбинациям пород и мягких минералов
  rocks.forEach(rock => {
    softOres.forEach(ore => {
      const oreBlock = `tfc:ore/${ore}/${rock}`

      // Убираем требования железной кирки
      event.remove('minecraft:needs_iron_tool', oreBlock)
    })
  })

})

//Убираем функциональность ванильной губки и редстоуна с бочонком
BlockEvents.placed('minecraft:redstone_wire', event => {
  event.cancel()
})

BlockEvents.placed('minecraft:sponge', event => {
  event.cancel()
})

BlockEvents.placed('minecraft:barrel', event => {
  event.cancel()
})

// Игрок получает все рецепты ракетных двигателей через /creatingspace addAllDesigns 
//(потестить)
PlayerEvents.loggedIn(event => {
  const username = event.player.username
  // 1. Временно выдаем игроку права OP (от имени консоли)
  event.server.runCommandSilent(`op ${username}`)
  // 2. Игрок выполняет команду разблокировки дизайнов
  event.player.runCommandSilent("creatingspace addAllDesigns")
  // 3. Сразу забираем права OP обратно для безопасности
  event.server.runCommandSilent(`deop ${username}`)
  // 4. Пишем красивое сообщение в чат
  event.player.tell("§a§l[Creating Space] §r§aВсе дизайны ракетных двигателей успешно разблокированы!")
})