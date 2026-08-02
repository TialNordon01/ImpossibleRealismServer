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
  event.add(`forge:nuggets/iron`, `tfc_nugs:wrought_iron_nugget`)
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
  event.add(`forge:dusts/nickel`, 'creatingspace:nickel_dust')
  event.add('forge:dusts/coal_coke', 'tfc:powder/coke')
  //Флюс
  event.add('tfmg:flux', 'tfc:powder/flux')
  event.add('tfmg:flux', 'tfc:powder/lime')
  //Кокс
  event.add('tfmg:blast_furnace_fuel', 'immersiveengineering:dust_coke')
  //Битум
  event.add('forge:bitumen', 'tfmg:bitumen')

  // Добавляем чёрную сталь TFC в тег nethersteel
  event.add('forge:ingots/nethersteel', 'tfc:metal/ingot/black_steel')

  //Пластик
  event.add('forge:plates/plastic', 'tfmg:plastic_sheet')
  event.add('forge:ingots/plastic', 'immersiveengineering:plate_duroplast')

  //Кварц и кремний
  event.add('forge:gems/quartz', 'minecraft:flint')

  //Радиопассивный и радиоактивный уран
  event.add('forge:ingots/uranium', 'create_mixed_nuclear:reactive_uranium_ingot')
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

  // МОД НА КРЮКИ
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
  // Промышленное прессование 9 отдельных магнитов TFMG в единый мощный блок
  event.shaped('create_new_age:magnetite_block', [
    'MMM',
    'MMM',
    'MMM'
  ], {
    M: 'tfmg:magnet' // 9 магнитов TFMG
  })

  // Светокамень
  event.shapeless('3x minecraft:glowstone_dust', [
    'tfcoreprocessing:refined/sphalerite',
    '#forge:dusts/sulfur',
    'immersiveengineering:dust_copper'
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

  // Физический подшипник
  event.remove({ output: 'vs_clockwork:phys_bearing' })
  event.shaped('vs_clockwork:phys_bearing', [
    ' T ',
    ' M ',
    ' C '
  ], {
    T: 'create:turntable',
    M: 'create:mechanical_bearing',
    C: 'create:brass_casing'
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

  // Вещи из create: new age
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
    'PSP'
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
  event.shapeless('minecraft:amethyst_shard', [
    '#forge:gems/quartz'
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

  // БИНТЫ
  event.shapeless('6x tfc_medicine:dressing', [
    'tfc:glue',
    '#tfc:high_quality_cloth',
    '#tfc:high_quality_cloth'
  ])

  // БУМАГА ИЗ ОПИЛОК КОРЫ (Замачивание в бочке TFC)
  // Реалистичный процесс: кора + вода + время = бумага
  // Герметичная бочка (требует закрытой крышки)
  event.recipes.tfc.barrel_sealed(1000) // 1000 тиков = 50 секунд
    .outputItem('2x minecraft:paper') // Выход: 2 листа бумаги
    .inputs(
      '4x #forge:bark_powder', // Вход: 4 порошка коры
      TFC.fluidStackIngredient('#minecraft:water', 1000) // Вход: 1000 мБ воды (правильный синтаксис TFC!)
    )
  event.recipes.create.mixing(
    ['2x minecraft:paper'], // Выход: 2 листа бумаги
    [
      '#forge:bark_powder', 
      '#forge:bark_powder', 
      '#forge:bark_powder', 
      '#forge:bark_powder',
      Fluid.of('minecraft:water', 1000) // 1000 мБ воды (миксер сам заберет её из любого ведра или трубы)
    ]
  ).processingTime(200) // 10 секунд работы миксера (быстрее бочки, но требует энергии)

  // ЭЛЕКТРОНИКА PROJECT RED
  event.remove({ output: 'projectred_core:plate' })

  //Печатная плата для редстоун компонентов
  event.shapeless(
    'projectred_core:plate',
    ['immersiveengineering:circuit_board']
  )
  event.shapeless(
    'projectred_core:plate',
    ['tfmg:coated_circuit_board']
  )

  //Провода
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

  // Кристаллы
  // Удаляем нереалистичные ванильные крафты
  event.remove({ output: 'projectred_core:infused_silicon' })
  event.remove({ output: 'projectred_core:energized_silicon' })
  // 1. INFUSED SILICON (Базовый полупроводниковый кристалл)
  // Используется в обычных логических схемах, повторителях, компараторах
  // ШАГ 1: Создание p-n перехода (легирование)
  // Кремний + p-тип полупроводник + n-тип полупроводник → базовый кристалл
  event.recipes.create.sequenced_assembly(
    'projectred_core:infused_silicon',              // Финальный результат
    'tfmg:silicon_ingot',                           // Стартовый предмет: кремниевый слиток
    [
      // ШАГ 2.1: Нанесение p-типа (бор/алюминий как легирующая добавка)
      event.recipes.create.deploying(
        'tfmg:silicon_ingot',
        ['tfmg:silicon_ingot', 'tfmg:p_semiconductor']
      ),
      // ШАГ 2.2: Нанесение n-типа (фосфор/мышьяк как легирующая добавка)
      event.recipes.create.deploying(
        'tfmg:silicon_ingot',
        ['tfmg:silicon_ingot', 'tfmg:n_semiconductor']
      ),
      // ШАГ 2.3: Термический отжиг для активации легирующих атомов
      event.recipes.create.pressing(
        'projectred_core:infused_silicon',
        'tfmg:silicon_ingot'
      )
    ]
  )
    .transitionalItem('tfmg:silicon_ingot')
    .loops(1)
  // 2. ENERGIZED SILICON (Светоактивный кристалл)
  // Используется в рандомайзерах, детекторах, светоизлучающих компонентах
  // ШАГ 1: Создание светоактивного кристалла на базе infused silicon
  // Базовый кристалл + транзистор (усилитель света) + конденсатор (накопитель энергии)
  event.recipes.create.sequenced_assembly(
    'projectred_core:energized_silicon',              // Финальный результат
    'projectred_core:infused_silicon',                // Стартовый предмет: базовый кристалл
    [
      // ШАГ 1.1: Интеграция транзистора (усиление электролюминесценции)
      event.recipes.create.deploying(
        'projectred_core:infused_silicon',
        ['projectred_core:infused_silicon', 'tfmg:transistor_item']
      ),
      // ШАГ 1.2: Добавление конденсатора (накопление и быстрая отдача энергии)
      event.recipes.create.deploying(
        'projectred_core:infused_silicon',
        ['projectred_core:infused_silicon', 'tfmg:capacitor_item']
      ),
      // ШАГ 1.3: Нанесение люминофорного слоя (светоизлучающий материал)
      event.recipes.create.deploying(
        'projectred_core:infused_silicon',
        ['projectred_core:infused_silicon', 'minecraft:glowstone_dust']
      ),
      // ШАГ 1.4: Электрическая активация редстоуном
      event.recipes.create.deploying(
        'projectred_core:infused_silicon',
        ['projectred_core:infused_silicon', 'minecraft:redstone']
      ),
      // ШАГ 1.5: Герметизация и формовка корпуса
      event.recipes.create.pressing(
        'projectred_core:energized_silicon',
        'projectred_core:infused_silicon'
      )
    ]
  )
    .transitionalItem('projectred_core:infused_silicon')
    .loops(1)

  // ПРОИЗВОДСТВО ЛОГИЧЕСКИХ ЭЛЕМЕНТОВ
  // ПРОИЗВОДСТВО АНОДА И КАТОДА (Project Red)
  // Удаляем нереалистичные ванильные крафты
  event.remove({ output: 'projectred_core:anode' })
  event.remove({ output: 'projectred_core:cathode' })
  // 1. АНОД (p-тип электрод)
  // Положительный электрод для диодов и выпрямителей
  // Вариант А: Простой крафт в верстаке (ручная сборка)
  event.shaped('projectred_core:anode', [
    ' W ',
    'PPP',
    ' M '
  ], {
    W: '#forge:wires/copper',        // Медный провод (токоподвод)
    P: 'tfmg:p_semiconductor',       // p-тип полупроводник (основа анода)
    M: '#forge:plates/aluminum'      // Алюминиевая пластина (контакт, легко отдает электроны)
  })
  // 2. КАТОД (n-тип электрод)
  // Отрицательный электрод для диодов и выпрямителей
  // Вариант А: Простой крафт в верстаке (ручная сборка)
  event.shaped('projectred_core:cathode', [
    ' W ',
    'NNN',
    ' C '
  ], {
    W: '#forge:wires/copper',        // Медный провод (токоподвод)
    N: 'tfmg:n_semiconductor',       // n-тип полупроводник (основа катода)
    C: '#forge:plates/nickel'        // Никелевая пластина (контакт, высокая работа выхода)
  })
  // ПРОИЗВОДСТВО POINTER (Декодер адреса / Мультиплексор)
  // Используется в таймерах, секвенсерах, счётчиках, state selectors
  // Удаляем нереалистичные ванильные крафты
  event.remove({ output: 'projectred_core:pointer' })
  // ВАРИАНТ 1: Простой крафт в верстаке (ручная сборка)
  // Для ранней-средней игры, когда игрок ещё не построил линию
  event.shaped('projectred_core:pointer', [
    ' R ',
    'TPT',
    ' C '
  ], {
    R: 'tfmg:resistor',              // Резистор (подтяжка сигнала, стабилизация)
    T: 'tfmg:transistor_item',       // Транзисторы (логические переключатели, 2 шт.)
    P: 'projectred_core:plate',      // Печатная плата (основа схемы)
    C: 'tfmg:capacitor_item'         // Конденсатор (фильтрация тактового сигнала)
  })
  // Удаляем нереалистичные ванильные крафты
  event.remove({ output: 'minecraft:repeater' })
  event.remove({ output: 'minecraft:comparator' })
  event.remove({ output: 'projectred_integration:light_sensor_gate' })
  event.remove({ output: 'projectred_integration:rain_sensor_gate' })
  // 1. REPEATER (Повторитель сигнала)
  // Усиливает и восстанавливает форму редстоун-сигнала
  // Задержка создается RC-цепочкой (резистор + конденсатор)
  // Простой крафт в верстаке
  event.shaped('minecraft:repeater', [
    'T T',
    'RPR',
    'CCC'
  ], {
    T: 'tfmg:transistor_item',       // 2 транзистора (усилительный каскад)
    R: 'tfmg:resistor',              // Резистор (подтяжка сигнала)
    P: 'projectred_core:plate',      // Печатная плата (основа)
    C: '#forge:nuggets/copper'       // 3 медных самородка (контакты ввода/вывода)
  })
  // 2. COMPARATOR (Компаратор)
  // Сравнивает два сигнала и выдает разницу
  // Состоит из дифференциального усилителя на 4 транзисторах
  // Простой крафт в верстаке
  event.shaped('minecraft:comparator', [
    ' T ',
    'TPT',
    'RRR'
  ], {
    T: 'tfmg:transistor_item',       // 4 транзистора (дифференциальный усилитель)
    P: 'projectred_core:plate',      // Печатная плата
    R: 'tfmg:resistor'               // 3 резистора (настройка порогов сравнения)
  })
  // 3. LIGHT SENSOR GATE (Датчик света)
  // Фоторезистор меняет сопротивление в зависимости от освещенности
  // Glowstone = абстракция фоторезистора (светится = проводит ток)
  // Простой крафт в верстаке
  event.shaped('projectred_integration:light_sensor_gate', [
    ' G ',
    'TPT',
    'RRR'
  ], {
    G: 'minecraft:glowstone',        // Фоторезистор (светочувствительный элемент)
    T: 'tfmg:transistor_item',       // 2 транзистора (усилитель сигнала)
    P: 'projectred_core:plate',      // Печатная плата
    R: 'tfmg:resistor'               // 3 резистора (настройка чувствительности)
  })
  // 4. RAIN SENSOR GATE (Датчик дождя)
  // Два электрода: когда между ними вода - проводимость растет
  // Простой крафт в верстаке
  event.shaped('projectred_integration:rain_sensor_gate', [
    ' C ',
    'CPC',
    'TRT'
  ], {
    C: '#forge:plates/copper',       // 3 медных электрода (датчик влажности)
    P: 'projectred_core:plate',      // Печатная плата
    T: 'tfmg:transistor_item',       // 2 транзистора (усилитель сигнала)
    R: 'tfmg:resistor'               // Резистор (настройка чувствительности)
  })

  // Чип
  // 1. Удаляем любые скрытые или ванильные рецепты
  event.remove({ output: 'create_connected:control_chip' })
  // 2. Создаем многоступенчатую сборку
  event.recipes.create.sequenced_assembly(
    'create_connected:control_chip',          // Финальный результат
    'projectred_core:plate',              // Стартовый предмет: медная печатная плата
    [
      // ШАГ 1: Die Attach (Крепление кристалла)
      // Деплойер устанавливает кремниевый чип (мозг контроллера) на плату
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', 'projectred_core:infused_silicon']
      ),
      
      // ШАГ 2: Wire Bonding (Микромонтаж)
      // Деплойер добавляет золотые самородки. В реальности золото используется для 
      // тончайших проводников, соединяющих кристалл с контактами платы (не окисляется).
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', '#forge:nuggets/gold']
      ),
      
      // ШАГ 3: Монтаж пассивных компонентов
      // Деплойер добавляет миниатюрную плату с резисторами/конденсаторами 
      // (используем projectred_core:plate как универсальный компонентный модуль)
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', 'projectred_core:plate']
      ),

      // ШАГ 4: Инкапсуляция (Encapsulation)
      // Деплойер накладывает слой дюропласта/пластика сверху для защиты 
      // хрупкого кремния от влаги, пыли и механических повреждений
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', '#forge:ingots/plastic']
      ),

      // ШАГ 5: Отверждение и формовка (Molding & Curing)
      // Механический пресс под давлением и температурой спрессовывает слои, 
      // превращая мягкий пластик в твердый черный корпус чипа с контактами
      event.recipes.create.pressing(
        'create_connected:control_chip',
        'projectred_core:plate'
      )
    ]
  )
    .transitionalItem('projectred_core:plate') // Визуально на ленте всё это время движется плата
    .loops(1)
  
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

  // Нотный блок
  event.remove({ output: 'minecraft:note_block' })
  event.shaped('minecraft:note_block', [
    'CCC',  // Медные пластины (звучащий элемент)
    'PMP',  // Доски + молоточек
    'PRP'   // Доски + источник питания
  ], {
    C: 'tfc:metal/sheet/copper',      // Медные листы (как ксилофонные пластины)
    P: '#minecraft:planks',
    M: 'tfc:metal/rod/copper',
    R: 'create:electron_tube'
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
      C: 'createaddition:electric_motor',
      E: 'create:electron_tube',
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
      R: 'create:electron_tube'
    }
  )

  //Раздатчик
  event.remove({ output: 'minecraft:dispenser' })
  event.shapeless('minecraft:dispenser', [
    'minecraft:dropper',
    'create:deployer'
  ])

  //Наблюдатель
  event.remove({ output: 'minecraft:observer' })
  event.shaped(
    'minecraft:observer',
    [
      'CCC',
      'RRT',
      'CCC'
    ],
    {
      C: '#forge:cobblestone',
      R: 'minecraft:redstone',
      T: 'create:electron_tube'
    }
  )

  // Микросхема
  event.remove({ output: 'integrated_circuit:integrated_circuit' })
  event.shaped('integrated_circuit:integrated_circuit', [
    'RCR',
    'PPP'
  ], {
    R: 'minecraft:redstone',
    C: 'create_connected:control_chip',
    P: 'projectred_core:plate'
  })

  // Редстоун блок
  event.remove({ output: 'minecraft:redstone_block' })
  event.shaped('minecraft:redstone_block', [
    ' R ',
    'RER',
    ' R '
  ], {
    R: 'minecraft:redstone',
    E: 'create:electron_tube'
  })

  // Редстоун факел
  event.remove({ output: 'minecraft:redstone_torch' })
  event.shapeless('minecraft:redstone_torch', [
    'create:electron_tube'
  ])

  // Передатчик
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

  // Генератор пульса
  event.remove({ output: 'create:pulse_timer' })
  event.shaped('create:pulse_timer', [
    'ABR',
    'PPP'
  ], {
    A: 'minecraft:amethyst_shard',
    B: '#forge:sheets/brass',
    R: 'minecraft:redstone_torch',
    P: 'projectred_core:plate'
  })

  // Повторитель импульса
  event.remove({ output: 'create:pulse_repeater' })
  event.shaped('create:pulse_repeater', [
    'RBR',
    'PPP'
  ], {
    R: 'minecraft:redstone',
    B: '#forge:sheets/brass',
    P: 'projectred_core:plate'
  })

  // Редстоун-триггер
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

  // Триггер-защёлка
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

  // Удлинитель импульса
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

  // Солнечная панель
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

  // Поршень
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
    S: 'create:electron_tube'
  })

  // Последовательный генератор импульса
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

  // Удаляем лишнее из Project RED
  event.remove({ output: 'projectred_core:red_ingot' })
  event.remove({ output: 'projectred_core:red_iron_comp' })

  // Электрическая трубка
  event.shapeless('create:electron_tube', [
    'create:polished_rose_quartz',
    '#forge:plates/copper'
  ])

  // Удаляем колокола и пилы
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
    '#forge:bitumen'
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
  // 3. БИТУМНО-ЛАТЕКСНАЯ МАСТИКА (Поздняя игра)
  event.recipes.tfmg.vat_machine_recipe(
    [
      '#forge:bitumen',               // Вход 1: Битум (жидкость)
      Fluid.of('afc:latex', 250),     // Вход 2: Латекс (жидкость)
      'tfc:powder/lime'               // Вход 3: Известь (предмет)
    ],
    [
      'tfc:glue', 'tfc:glue', 'tfc:glue' // Выход: 3 клея (строго по отдельности, как в доках!)
    ]
  )
    .heated()                                // Требуется базовый нагрев для эмульгирования
    .machines("tfmg:mixing")                 // Требуется мешалка сверху
    .allowedVatTypes("tfmg:steel_vat", "tfmg:firebrick_lined_vat") // Сталь или огнеупорный кирпич (битум горячий)
    .minSize(1)                              // Минимальный размер ванны
    .processingTime(300)                     // 15 секунд
  // БОНУС: Альтернативный рецепт без латекса (только нефть)
  event.recipes.create.mixing('2x tfc:glue', [
    '#forge:bitumen',
    '#minecraft:sand',          // Песок как наполнитель
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
    ['tfc:metal/double_sheet/wrought_iron', 'tfc:fire_bricks',]
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

  // Дополнительный крафт резины
  // 1. СИНТЕТИЧЕСКАЯ РЕЗИНА (Поздняя игра, Нефтехимия)
  // Массивы доступных жидкостей из разных модов
  const naphthas = [
    'immersivepetroleum:naphtha',
    'tfmg:naphtha'
  ];
  const lubricants = [
    'immersivepetroleum:lubricant',
    'tfmg:lubrication_oil'
  ];
  // Вложенный цикл создаст 4 комбинации рецептов (2 x 2 = 4)
  naphthas.forEach(naphtha => {
    lubricants.forEach(lubricant => {
      event.recipes.tfmg.vat_machine_recipe(
        [
          Fluid.of(naphtha, 500),       // 500 мБ нафты (из IP или TFMG)
          Fluid.of(lubricant, 100),     // 100 мБ смазки (из IP или TFMG)
          '#forge:dusts/sulfur'         // Сера для вулканизации/инициации
        ],
        [
          'afc:rubber_bar',              // Выход 1 (строго по отдельности!)
          'afc:rubber_bar'               // Выход 2
        ]
      )
        .heated()
        .machines("tfmg:mixing")
        .allowedVatTypes("tfmg:steel_vat")
        .minSize(2)
        .processingTime(400);
    });
  });
  // 2. ВУЛКАНИЗАЦИЯ НАТУРАЛЬНОГО КАУЧУКА (Средняя-Поздняя игра) 
  event.recipes.create.mixing(
    [
      'afc:rubber_bar' // Выход: 1 готовый резиновый стержень
    ],
    [
      Fluid.of('afc:latex', 1000), // Вход 1: Сырой латекс (1 ведро)
      '#forge:dusts/sulfur'        // Вход 2: Сера для сшивания полимерных цепей
    ]
  )
  .heated()            // КРИТИЧЕСКИ ВАЖНО: Вулканизация требует нагрева (имитирует огонь под горшком)
  .processingTime(200) // 10 секунд на цикл

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

  //Переделываем крафт кирпичей для коксовой печи
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
  //Удаляем TFMG
  event.remove({ output: 'tfmg:steel_nugget' })
  event.remove({ output: 'tfmg:cast_iron_nugget' })
  event.remove({ output: 'tfmg:nickel_nugget' })

  //Делаем замену самородков на TFC Nuggets
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
  
  //Работа над самородками IE
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
    const fluid = `tfc_ie_addon:metal/${metal}`
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
    // 3. Плавка
    event.recipes.tfc.heating(nugget, temp)
      .resultFluid(Fluid.of(fluid, 25)) // 25 мБ жидкого металла
  })
  //Добавление крафтов из самородков для IE
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
  event.replaceInput({}, 'minecraft:gold_nugget', '#forge:nuggets/gold')

  //Замена Create самородков
  event.replaceInput({}, 'create:brass_nugget', `#forge:nuggets/brass`)
  event.replaceInput({}, 'create:zinc_nugget', '#forge:nuggets/zinc')

  //Плавка самородков для Big Cannons
  event.recipes.tfc.heating('createbigcannons:cast_iron_nugget', 1540)
    .resultFluid(Fluid.of('tfc:metal/cast_iron', 25)) // 25 мБ жидкого металла
  event.recipes.tfc.heating('createbigcannons:nethersteel_nugget', 1540)
    .resultFluid(Fluid.of('tfc:metal/black_steel', 25)) // 25 мБ жидкого металла
  

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

  //Create
  event.remove({
    mod: 'create',
    output: [
      'create:wrench',
      'create:wand_of_symmetry',
      'create:mechanical_press',
      'create:netherite_backtank',
      'create:copper_backtank',
      'create:schematic_table'
    ]
  })
  // Удаляем оригинальный рецепт создания шоколада
  event.remove({ type: 'create:mixing', output: 'create:chocolate' })
  // Создаем новый рецепт
  event.recipes.create.mixing(
    Fluid.of('create:chocolate', 250), // Выход: 250 мБ шоколада (стандарт Create)
    [
      'firmalife:food/cocoa_beans',  // Какао-бобы из Firmalife
      '#tfc:sweetener'               // Сахар (обычно требуется в рецепте Create)
    ]
  )
    .heated() // Важно: шоколад в Create плавится только в нагретой чаше (от Горелки всполоха)
  // Создаем рецепт плавки в Чаше (Basin)
  event.recipes.create.mixing(
    Fluid.of('create:honey', 250), // Выход: 1000 мБ (1 ведро) жидкого мёда Create
    'firmalife:raw_honey'          // Вход: Банка мёда из Firmalife
  ).heated() // Требование: Чаша должна быть нагрета (Blaze Burner на уровне Heated или выше)
  //Тесто
  event.replaceInput({}, 'create:dough', '#firmalife:foods/extra_dough')

  //Дробление слитков
  // Массив металлов, для которых есть пыль в Immersive Engineering
  const ieDustMetals = [
    'iron',
    'gold',
    'copper',
    'silver',
    'lead',
    'nickel',
    'uranium',
    'aluminum',
    'electrum',
    'constantan',
    'steel'
  ]
  ieDustMetals.forEach(metal => {
    // Вход: любой слиток из тега #forge:ingots/{metal}
    // Выход: пыль IE immersiveengineering:dust_{metal}
    event.recipes.create.crushing(
      `immersiveengineering:dust_${metal}`,
      `#forge:ingots/${metal}`
    )
      .processingTime(200) // Время обработки в тиках (100 = 5 секунд)
  })

  //Добавляем новый рецепт: 6 палок + 1 нить = 6 строительных лесов
  event.shaped('6x minecraft:scaffolding', [
    'PTP',
    'P P',
    'P P'
  ], {
    P: '#forge:rods/wooden', // Используем тег палок (включает minecraft:stick и аналоги из TFC)
    T: '#forge:string'       // Нить
  })

  //Ядерная энергия
  // ШАГ 1: Химическое выщелачивание (Урановая пыль + Кислота = Жёлтый кек)
  event.remove({ output: 'createnuclear:yellowcake' })
  event.recipes.tfmg.vat_machine_recipe(
    [
      '#forge:dusts/uranium',         // Вход 1: Урановая пыль
      Fluid.of('artisanal:sulfuric_acid', 250) // Вход 2: Серная кислота
    ],
    [
      'createnuclear:yellowcake'      // Выход: Жёлтый кек (U3O8)
    ]
  )
    .heated() // Нагрев ускоряет выщелачивание
    .machines("tfmg:mixing") // Перемешивание обязательно
    .allowedVatTypes("tfmg:firebrick_lined_vat") // Агрессивная химическая среда
    .minSize(1)
    .processingTime(300)
  event.recipes.tfmg.vat_machine_recipe(
    [
      '#forge:dusts/uranium',         // Вход 1: Урановая пыль
      Fluid.of('tfmg:sulfuric_acid', 250) // Вход 2: Серная кислота
    ],
    [
      'createnuclear:yellowcake'      // Выход: Жёлтый кек (U3O8)
    ]
  )
    .heated() // Нагрев ускоряет выщелачивание
    .machines("tfmg:mixing") // Перемешивание обязательно
    .allowedVatTypes("tfmg:firebrick_lined_vat") // Агрессивная химическая среда
    .minSize(1)
    .processingTime(300)


  // ШАГ 2: Сублимация (Жёлтый кек + Нагрев = Урановый "Газ")
  event.remove({ output: Fluid.of('createnuclear:uranium') })
  event.recipes.create.mixing(
    Fluid.of('createnuclear:uranium', 500), // Выход: 500 мБ условного уранового газа
    'createnuclear:yellowcake'              // Вход: Жёлтый кек из Шага 1
  )
    .heated() // Требуется нагрев для испарения/сублимации
    .processingTime(150)

  // ШАГ 3: Каскадное обогащение (Газ + МАКСИМАЛЬНЫЙ нагрев = Обогащённый кек)
  event.remove({ output: 'createnuclear:enriched_yellowcake' })
  event.recipes.create.mixing(
    [
      // РЕДКИЙ ВЫХОД: Обогащённый жёлтый кек (маленький шанс, например, 10%)
      // Игрок должен прогнать газ через несколько миксеров или рециркулировать пыль, чтобы получить его
      Item.of('createnuclear:enriched_yellowcake').withChance(0.1),

      // ОСНОВНОЙ ВЫХОД: обычная урановая пыль (гарантированно 1 шт.)
      // Это "хвосты" процесса. Игрок должен вернуть их обратно в начало цикла!
      'createnuclear:yellowcake'
    ],
    Fluid.of('createnuclear:uranium', 500) // Вход: Урановый "газ" из Шага 2
  )
    .heated() // ТРЕБУЕТСЯ МАКСИМАЛЬНЫЙ НАГРЕВ (Seething / Кипящий режим Горелки Всполоха!)
    .processingTime(400) // Долгий процесс "разделения изотопов"

  // ШАГ 4: Плавка обогащённого жёлтого кека в реактивный урановый слиток
  // Используем TFC-нагрев для реалистичности (высокая температура плавления)
  event.remove({ output: 'create_mixed_nuclear:reactive_uranium_ingot' })
  event.recipes.tfc.heating(
    'createnuclear:enriched_yellowcake',  // Что плавим
    1400                                  // Температура (число!)
  )
    .resultItem('create_mixed_nuclear:reactive_uranium_ingot') // Результат-предмет

  // ШАГ 5: Механическая сборка уранового стержня (5 слитков по диагонали)
  // Механическая сборка Create поддерживает сетки до 9x9. 
  // Делаем диагональ из 5 слитков в сетке 5x5 для эпичности и соответствия ТЗ.
  event.remove({ output: 'createnuclear:uranium_rod' })
  event.recipes.create.mechanical_crafting('createnuclear:uranium_rod', [
    'I    ',
    ' I   ',
    '  I  ',
    '   I ',
    '    I'
  ], {
    I: 'create_mixed_nuclear:reactive_uranium_ingot'
  })

  // ШАГ 6: Прессование графена
  event.remove({ output: 'createnuclear:graphene' })
  event.recipes.create.pressing(
    'createnuclear:graphene',
    '#forge:dusts/graphite'
  )

  // ШАГ 7: Последовательная сборка (Sequenced Assembly) ядерного топлива
  event.remove({ output: 'create_new_age:nuclear_fuel' })
  event.recipes.create.sequenced_assembly(
    'create_new_age:nuclear_fuel',             // Финальный результат
    'create_mixed_nuclear:empty_nuclear_fuel', // Стартовый предмет на конвейере
    [
      // Шаг 1: Устанавливаем 1-й графитовый стержень
      event.recipes.create.deploying(
        'create_mixed_nuclear:empty_nuclear_fuel',
        ['create_mixed_nuclear:empty_nuclear_fuel', 'createnuclear:graphite_rod']
      ),
      // Шаг 2: Устанавливаем 2-й графитовый стержень
      event.recipes.create.deploying(
        'create_mixed_nuclear:empty_nuclear_fuel',
        ['create_mixed_nuclear:empty_nuclear_fuel', 'createnuclear:graphite_rod']
      ),
      // Шаг 3: Устанавливаем 3-й графитовый стержень
      event.recipes.create.deploying(
        'create_mixed_nuclear:empty_nuclear_fuel',
        ['create_mixed_nuclear:empty_nuclear_fuel', 'createnuclear:graphite_rod']
      ),
      // Шаг 4: Устанавливаем 4-й графитовый стержень
      event.recipes.create.deploying(
        'create_mixed_nuclear:empty_nuclear_fuel',
        ['create_mixed_nuclear:empty_nuclear_fuel', 'createnuclear:graphite_rod']
      ),
      // Шаг 5: Финальный штрих - установка уранового стержня (превращает предмет в готовое топливо)
      event.recipes.create.deploying(
        'create_new_age:nuclear_fuel',
        ['create_mixed_nuclear:empty_nuclear_fuel', 'createnuclear:uranium_rod']
      )
    ]
  )
    .transitionalItem('create_mixed_nuclear:empty_nuclear_fuel') // Визуально на ленте всё это время лежит пустой корпус
    .loops(1)                                                     // 1 полный проход конвейера = 1 готовое топливо

  //Удаляем лишнее
  event.remove({ output: 'createnuclear:coal_dust' })
  event.remove({ output: 'createnuclear:steel_ingot' })

  //Крафт корзинки в начале игры
  event.remove({ output: 'sns:straw_basket' })
  event.shapeless('sns:straw_basket', [
    'tfc:straw',
    'tfc:straw',
    'tfc:thatch',
    '#tfc:knives'
  ]).damageIngredient('#tfc:knives')

  // Умножение металлов через Create
  // Массив минералов TFC (порошки)
  const minerals = [
    'native_copper',
    'native_gold',
    'native_silver',
    'cassiterite',      // Олово (tin)
    'bismuthinite',
    'malachite',        // Медь
    'tetrahedrite',     // Медь
    'limonite',         // Железо
    'hematite',         // Железо  
    'magnetite',        // Железо
    'sphalerite',       // Цинк
    'garnierite'        // Никель
  ]

  minerals.forEach(mineral => {
    const powder = `tfc:powder/${mineral}`
    const slurry = `tfcoreprocessing:slurry_${mineral}`
    const refined = `tfcoreprocessing:refined/${mineral}`
    const compressed = `tfcoreprocessing:compressed/${mineral}`
    const roastedBrick = `tfcoreprocessing:roasted_brick/${mineral}`

    // ЭТАП 1: Создание шлама (Slurry)
    // Порошок минерала + 250 мБ воды = Шлам
    event.recipes.create.mixing(
      Fluid.of(slurry, 250), // Выход: 1000 мБ шлама
      [
        powder,
        Fluid.of('minecraft:water', 250) // Вход: 250 мБ воды
      ]
    )
      .processingTime(150) // 7.5 секунд

    // ЭТАП 2: Очистка шлама (Refined)
    // 1000 мБ шлама + Нагрев = 4 очищенных материала
    event.recipes.create.mixing(
      Item.of(refined, 4), // Выход: 4 очищенных материала
      Fluid.of(slurry, 1000) // Вход: 1000 мБ шлама
    )
      .heated() // Требуется нагрев (Blaze Burner на уровне Heated)
      .processingTime(200) // 10 секунд

    // ЭТАП 3: Обжиг кирпича (Roasted Brick)
    // 1 сжатых материалов + 100 мБ воды + Пресс = 1 обожжённых кирпичей
    event.recipes.create.compacting(
      Item.of(roastedBrick, 1), // Выход: 1 обожжённых кирпичей
      [
        Item.of(compressed, 1), // Вход: 1 сжатых материалов
        Fluid.of('minecraft:water', 100) // Вход: 100 мБ воды
      ]
    )
      .heated()
      .processingTime(100) // 5 секунд

    //Заменяем незерсталь
    // Получаем все предметы из тега #forge:ingots/nethersteel
    const stacksIterator = Ingredient.of('#forge:ingots/nethersteel').stacks
    const itemsInTag = []
    for (const stack of stacksIterator) {
      itemsInTag.push(stack.id)
    }
    // Заменяем каждый конкретный предмет на тег во всех рецептах
    itemsInTag.forEach(itemId => {
      event.replaceInput({}, itemId, '#forge:ingots/nethersteel')
    })
  })

  //Факела и спички
  event.shapeless('tfc_aol:lit_match', [
    'tfc:torch'
  ])
  event.shapeless('tfc_aol:flaming_stake', [
    'tfc:torch',
    'tfc:torch',
  ])

  //Нитки из травы
  event.remove({ output: 'tfc_items:plant_string' })
  event.shapeless('tfc_items:plant_string', [
    'tfc:straw',
    'tfc:straw',
    '#tfc:knives'
  ]).damageIngredient('#tfc:knives')

  //Телеги
  woods_tfc.forEach(wood => {
    // === SUPPLY CART (тележка с сундуками) ===
    event.remove({ output: `tfcastikorcarts:supply_cart/${wood}` })
    event.shaped(`tfcastikorcarts:supply_cart/${wood}`, [
      'SSS',
      'LLL',
      'WPW'
    ], {
      S: '#forge:chests/wooden',
      L: `tfc:wood/lumber/${wood}`,
      W: `tfcastikorcarts:wheel/${wood}`,
      P: '#forge:rods/wooden'
    })

    // === PLOW (плуг) ===
    event.remove({ output: `tfcastikorcarts:plow/${wood}` })
    event.shaped(`tfcastikorcarts:plow/${wood}`, [
      'PPP',
      'LLL',
      'WPW'
    ], {
      P: '#forge:rods/wooden',
      L: `tfc:wood/lumber/${wood}`,
      W: `tfcastikorcarts:wheel/${wood}`
    })

    // === ANIMAL CART (тележка для животных) ===
    event.remove({ output: `tfcastikorcarts:animal_cart/${wood}` })
    event.shaped(`tfcastikorcarts:animal_cart/${wood}`, [
      'LLL',
      'LLL',
      'WPW'
    ], {
      L: `tfc:wood/lumber/${wood}`,
      W: `tfcastikorcarts:wheel/${wood}`,
      P: '#forge:rods/wooden'
    })
  })
  event.remove({ output: 'astikorcarts:wheel' })
  woods_afc.forEach(wood => {
    // Колесо
    event.shaped('astikorcarts:wheel', [
      'PPP',
      'PLP',
      'PPP'
    ], {
      P: '#forge:rods/wooden',
      L: `afc:wood/lumber/${wood}`
    })

    // === SUPPLY CART (тележка с сундуками) ===
    event.shaped(`tfcastikorcarts:supply_cart/oak`, [
      'SSS',
      'LLL',
      'WPW'
    ], {
      S: '#forge:chests/wooden',
      L: `afc:wood/lumber/${wood}`,
      W: 'astikorcarts:wheel',
      P: '#forge:rods/wooden'
    })

    // === PLOW (плуг) ===
    event.shaped(`tfcastikorcarts:plow/oak`, [
      'PPP',
      'LLL',
      'WPW'
    ], {
      P: '#forge:rods/wooden',
      L: `afc:wood/lumber/${wood}`,
      W: 'astikorcarts:wheel'
    })

    // === ANIMAL CART (тележка для животных) ===
    event.shaped(`tfcastikorcarts:animal_cart/oak`, [
      'LLL',
      'LLL',
      'WPW'
    ], {
      L: `afc:wood/lumber/${wood}`,
      W: 'astikorcarts:wheel',
      P: '#forge:rods/wooden'
    })
  })

  // Удаляем все оригинальные рецепты угольного блока
  // (из ванильного угля, charcoal и т.д.)
  event.remove({ output: 'minecraft:coal_block' })
  // Добавляем новый рецепт: 9 битумного угля TFC → 1 угольный блок
  event.shaped('minecraft:coal_block', [
    'CCC',
    'CCC',
    'CCC'
  ], {
    C: 'tfc:ore/bituminous_coal'
  })
  // Обратный рецепт: угольный блок → 9 битумного угля
  event.remove({ output: 'minecraft:coal' })
  event.shapeless('9x tfc:ore/bituminous_coal', [
    'minecraft:coal_block'
  ])

  // Андезитовый сплав
  // Рецепт через Deployer: камешек андезита TFC + зубило TFC → андезитовый сплав Create
  // 100% шанс на 1 сплав + 25% шанс на дополнительный сплав
  event.recipes.create.deploying(
    ['create:andesite_alloy', Item.of('create:andesite_alloy').withChance(0.25)],
    ['tfc:rock/loose/andesite', '#tfc:chisels']
  )

  // Нефть из artisanal
  event.replaceInput({}, 'artisanal:sour_crude_oil', '#forge:crude_oil')
  // Рецепт для artisanal:distillery
  // Вход: 1000 мБ #forge:crude_oil
  // Выход: tfc:powder/sulfur + artisanal:sweet_crude_oil
  event.custom({
    type: "artisanal:distillery",
    min_temp: 400,
    duration: 200,
    input_fluid: {
      ingredient: {
        tag: "forge:crude_oil",
        amount: 1000
      }
    },
    result_fluid: {
      fluid: "artisanal:sweet_crude_oil",
      amount: 900
    },
    result_item: {
      item: '#forge:dusts/sulfur',
      count: 1
    }
  })

  //Переходники от TFC механики к Create механике
  //От TFC в Create 
  event.remove({ output: 'woodencog:wooden_generator' })
  event.shapeless('woodencog:wooden_generator', [
    '#tfc:axles', 'create:shaft'
  ])
  //От Create в TFC
  event.remove({ output: 'woodencog:ct_transformer' })
  event.shapeless('woodencog:ct_transformer', [
    'create:andesite_casing', '#tfc:axles'
  ])

  //Редактируем рецепт стали в чаше
  event.remove({ type: 'create:mixing', output: 'immersiveengineering:ingot_steel' })

  //Кокс
  event.replaceInput({}, 'tfmg:coal_coke_block', 'immersiveengineering:coke')
  event.replaceOutput({}, 'tfmg:coal_coke_block', 'immersiveengineering:coke')
  event.replaceInput({}, 'tfmg:coal_coke', 'immersiveengineering:coal_coke')  
  event.replaceOutput({}, 'tfmg:coal_coke', 'immersiveengineering:coal_coke')

  //Графит
  event.remove({ type: 'create:milling', input: 'tfc:ore/graphite' })
  event.remove({ type: 'tfc:quern', input: 'tfc:ore/graphite' })
  event.recipes.create.milling(
      '4x tfc:powder/graphite',       // Выход: Графитовая пыль TFC
      'tfc:ore/graphite'           // Вход: Графит
  ).processingTime(150)
  event.recipes.tfc.quern(
      '4x tfc:powder/graphite',       // Выход: Графитовая пыль TFC
      'tfc:ore/graphite'           // Вход: Графит
  )

  // Графитизация кокса (Процесс Ачесона)
  // ШАГ 1: Смешиваем каменноугольный кокс и креозот (связующее) при СВЕРХНАГРЕВЕ (~3000°C)
  event.recipes.create.mixing(
      'immersiveengineering:ingot_hop_graphite', // Выход: Графитовый слиток (HOP-графит)
      [
          'immersiveengineering:coal_coke',      // Вход: Каменноугольный кокс
          Fluid.of('tfmg:creosote', 250)        // Вход: Креозот (побочный продукт коксовой печи)
      ]
  ).heated() // Критически важно: требует максимального нагрева горелки!
  event.recipes.create.mixing(
      'immersiveengineering:ingot_hop_graphite', // Выход: Графитовый слиток (HOP-графит)
      [
          'immersiveengineering:coal_coke',      // Вход: Каменноугольный кокс
          Fluid.of('immersiveengineering:creosote', 250)        // Вход: Креозот (побочный продукт коксовой печи)
      ]
  ).heated() // Критически важно: требует максимального нагрева горелки!

  // ШАГ 2: Помол графитового слитка в пыль
  // Создаем рецепт для Create (Механический жернов)
  event.recipes.create.milling(
      '4x tfc:powder/graphite',       // Выход: Графитовая пыль TFC (4 шт. для баланса)
      'immersiveengineering:ingot_hop_graphite' // Вход: Графитовый слиток
  ).processingTime(150)
  // Создаем рецепт для TFC (Ручной жернов / Quern)
  event.recipes.tfc.quern(
      '4x tfc:powder/graphite',       // Выход: Графитовая пыль TFC
      'immersiveengineering:ingot_hop_graphite' // Вход: Графитовый слиток
  )

  //=====
  //TFMG
  //=====

  //КОКСОВАЯ ПЕЧЬ
  event.remove({ type: 'tfmg:coking' })
  //Коксовый уголь
  event.recipes.tfmg.coking(
      'minecraft:charcoal',
      ['immersiveengineering:coal_coke', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 30)],
      1000
  )
  event.recipes.tfmg.coking(
    'tfc:ore/lignite',
      ['immersiveengineering:coal_coke', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 30)],
      1000
  )
  event.recipes.tfmg.coking(
      'tfc:ore/bituminous_coal',
      ['immersiveengineering:coal_coke', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 30)],
      1000
  )
  //Древесный уголь
  event.recipes.tfmg.coking(
      '#minecraft:logs',
      ['minecraft:charcoal', Fluid.of('immersiveengineering:creosote', 2), Fluid.of('tfmg:carbon_dioxide', 20)],
      1000
  )

  //ДОМЕННАЯ ПЕЧЬ
  event.remove({ output: 'tfmg:fireproof_bricks' })
  event.shapeless('tfmg:fireproof_bricks', [
    'tfc:fire_bricks', 'tfc:metal/double_sheet/wrought_iron',
    'tfc:fire_bricks', 'tfc:metal/double_sheet/wrought_iron'
  ])
  event.replaceInput({}, 'tfmg:fireproof_brick', 'tfc:ceramic/fire_brick')

  //Трассер для снарядов из пушек
  event.remove({ output: 'createbigcannons:tracer_tip' })
  event.shaped('createbigcannons:tracer_tip', [
    ' A ',
    ' P ',
    ' C '
  ], {
    A: '#forge:dusts/aluminum',  // Алюминиевая пыль (горит ярким белым светом)
    P: 'minecraft:gunpowder',     // Порох (воспламенитель)
    C: '#forge:plates/copper'     // Медная гильза
  })
  //Сварка для пушек
  event.remove({ output: 'createbigcannons:cannon_welder' })
  event.shaped('createbigcannons:cannon_welder', [
    ' F ',
    ' S ',
    ' W '
  ], {
    F: 'minecraft:flint_and_steel',     // Огниво (источник огня)
    S: '#forge:ingots/steel',           // Стальной корпус (выдерживает жар)
    W: '#forge:rods/wooden'             // Деревянная рукоять (изоляция)
  })

  //Крафт подшипника вертолёта
  event.remove({ output: 'vs_clockwork:copter_bearing' })
  event.shaped('vs_clockwork:copter_bearing', [
    ' P ',
    'GMG',
    ' B '
  ], {
    P: 'create:precision_mechanism',    // Прецизионный механизм (точное выравнивание)
    G: 'vs_clockwork:gyro',             // Латунные шестерни (гироскопический эффект)
    M: 'create_connected:brass_gearbox',// Латунный механизм (подшипниковый узел)
    B: 'create:mechanical_bearing'      // Механический подшипник (основа вращения)
  })
  //Гироскоп
  event.remove({ output: 'vs_clockwork:gyro' })
  event.shapeless('vs_clockwork:gyro', [
    'create:turntable', 'create:flywheel'
  ])
  event.shapeless('vs_clockwork:gyro', [
    'create:turntable', 'tfmg:steel_flywheel'
  ])
  event.shapeless('vs_clockwork:gyro', [
    'create:turntable', 'tfmg:lead_flywheel'
  ])
  event.shapeless('vs_clockwork:gyro', [
    'create:turntable', 'tfmg:cast_iron_flywheel'
  ])
  event.shapeless('vs_clockwork:gyro', [
    'create:turntable', 'tfmg:aluminum_flywheel'
  ])
  event.shapeless('vs_clockwork:gyro', [
    'create:turntable', 'tfmg:nickel_flywheel'
  ])

  //Горелка вполоха - угольная яма в железной упаковке с роботом
  //(не спрашивайте про реалистичность, это нужно для нефти из TFMG)
  event.remove({ output: 'create:blaze_burner' })
  event.shaped('create:blaze_burner', [
    'SHS',
    'SBS',
    'STS'
  ], {
    S: '#forge:coal',
    H: '#railways:conductor_caps',
    B: '#create:casing',
    T: 'create:empty_blaze_burner'
  })

  // Удаляем нереалистичный ванильный крафт соломинки
  event.remove({ output: 'createaddition:straw' })
  event.shapeless('createaddition:straw', [
    '#tfc:tuyeres'
  ])

  //Замена резины
  event.replaceInput({}, 'tfmg:rubber_sheet', 'afc:rubber_bar')
  event.replaceOutput({}, 'tfmg:rubber_sheet', 'afc:rubber_bar')

  //Замена сот на воск
  event.replaceInput({}, 'minecraft:honeycomb', 'firmalife:beeswax')
  //Парафин и воск
  event.shapeless('firmalife:beeswax', [
    'immersivepetroleum:paraffin_wax'
  ])
  event.shapeless('immersivepetroleum:paraffin_wax', [
    'firmalife:beeswax'
  ])

  //Битум
  event.replaceOutput({}, 'immersivepetroleum:bitumen', '#forge:bitumen')
  event.replaceOutput({}, 'tfmg:bitumen', '#forge:bitumen')

  //Фильтрация воды
  event.recipes.create.mixing(
    [Fluid.of('purified_water:purified_water', 1000)],
    [Fluid.of('minecraft:water', 1000)]
  )
  .heated() // Требуется нагрев для дистилляции
  .processingTime(200)
  event.recipes.create.mixing(
    [
      Fluid.of('purified_water:purified_water', 1000) // Выход: 1000 мБ очищенной воды
    ],
    [
      Fluid.of('minecraft:water', 1000), // Вход: 1000 мБ обычной воды
      'minecraft:charcoal' // Активированный уголь как фильтр (не расходуется)
    ]
  )
  .processingTime(100) // 5 секунд на фильтрацию

  //Асфальт
  event.remove({ output: 'immersivepetroleum:asphalt' })
  event.remove({ output: 'tfmg:asphalt' })
  event.remove({ output: 'createdieselgenerators:asphalt_block' })
  // Горячий асфальтобетон в механическом миксере Create
  event.recipes.create.mixing(
    [
      Item.of('createdieselgenerators:asphalt_block', 4) // Выход: 4 блока асфальта
    ],
    [
      '#forge:bitumen',      // 250 мБ битума (вяжущее вещество)
      '#forge:gravel',                      // Гравий (крупный заполнитель)
      '#minecraft:sand',                    // Песок (мелкий заполнитель)
      Fluid.of('minecraft:water', 100)      // Немного воды для контроля вязкости
    ]
  )
  .heated() // КРИТИЧЕСКИ ВАЖНО: Битум должен быть нагрет до 150-180°C для смешивания
  .processingTime(200) // 10 секунд на замес
  event.recipes.create.mixing(
    [
      Item.of('createdieselgenerators:asphalt_block', 6) // Выход: 6 блока асфальта
    ],
    [
      '#forge:bitumen',      // 250 мБ битума (вяжущее вещество)
      '#forge:gravel',                      // Гравий (крупный заполнитель)
      'tfmg:slag',                    // Шлак (мелкий заполнитель)
      Fluid.of('minecraft:water', 100)      // Немного воды для контроля вязкости
    ]
  )
  .heated() // КРИТИЧЕСКИ ВАЖНО: Битум должен быть нагрет до 150-180°C для смешивания
  .processingTime(200) // 10 секунд на замес
  //Удаление лишнего
  event.remove({ output: 'tfmg:asphalt_mixture' })
  event.remove({ output: Fluid.of('tfmg:liquid_asphalt') })

  // ОГНЕУПОРНОЕ ПОКРЫТИЕ ДЛЯ ТРУБ (Глина + Металлические плиты)
  // Массив металлических труб и соответствующих металлов
  const metalPipes = [
    { pipe: 'create:fluid_pipe', metal: 'copper' },       // Медная труба Create
    { pipe: 'tfmg:brass_pipe', metal: 'brass' },          // Латунная труба TFMG
    { pipe: 'tfmg:steel_pipe', metal: 'steel' },          // Стальная труба TFMG
    { pipe: 'tfmg:cast_iron_pipe', metal: 'cast_iron' },  // Чугунная труба TFMG
    { pipe: 'tfmg:aluminum_pipe', metal: 'aluminum' }     // Алюминиевая труба TFMG
  ]
  
  // Создаём крафты для металлических труб
  metalPipes.forEach(data => {
    event.remove({ output: data.pipe })
    event.shaped(data.pipe, [
      'P',
      'C',
      'P'
    ], {
      P: `#forge:plates/${data.metal}`,  // Плита из соответствующего металла
      C: 'minecraft:clay_ball'            // Глина (огнеупорный изолятор)
    })
  })
  // Отдельный крафт для пластиковой трубы
  event.remove({ output: 'tfmg:plastic_pipe' })
  event.shaped('tfmg:plastic_pipe', [
    'P',
    'C',
    'P'
  ], {
    P: '#forge:ingots/plastic',  // Пластиковый лист TFMG
    C: 'minecraft:clay_ball'  // Глина (огнеупорный изолятор)
  })

  //Печатная плата
  event.remove({ output: 'tfmg:empty_circuit_board' })
  event.shaped('tfmg:empty_circuit_board', [
    'PPP'
  ], {
    P: '#forge:ingots/plastic',  // Пластиковый лист TFMG
  })

  //Шлакоблок
  event.remove({ output: 'tfmg:cinder_block' })
  event.shaped('8x tfmg:cinder_block', [
    'SSS',
    'ASA',
    'SSS'
  ], {
    S: 'tfmg:cinderblock',  // Шлак (заполнитель, 7 штук) — побочный продукт доменной печи
    A: 'tfmg:rebar',        // Арматура (2 штуки) — стальное усиление конструкции
  })

  // Удаляем все цветные бетоны и бетонные порошки
  const colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 
    'lime', 'pink', 'gray', 'light_gray', 'cyan', 
    'purple', 'blue', 'brown', 'green', 'red', 'black'
  ]
  colors.forEach(color => {
    // Удаляем рецепты создания цветного бетона
    event.remove({ output: `minecraft:${color}_concrete` })
    event.remove({ output: `minecraft:${color}_concrete_powder` })
    
    // Удаляем рецепты, где они используются как ингредиент
    event.remove({ input: `minecraft:${color}_concrete` })
    event.remove({ input: `minecraft:${color}_concrete_powder` })

    // Удаляем цветной цемент и вёдра из Create Diesel Generators
    event.remove({ output: `createdieselgenerators:${color}_cement` })
    event.remove({ output: `createdieselgenerators:${color}_cement_bucket` })
    event.remove({ input: `createdieselgenerators:${color}_cement` })
    event.remove({ input: `createdieselgenerators:${color}_cement_bucket` })
  })
  //Цемент
  event.remove({ output: 'tfmg:cement' })
  // ВАРИАНТ 1: Флюс TFC + Глина → Цемент
  // Флюс в TFC — это известняковая порода, основа для кальция в цементе
  event.recipes.create.mixing(
    [
      '4x tfmg:cement'
    ],
    [
      'tfc:powder/flux',       // Флюс (источник CaO)
      'minecraft:clay_ball'    // Глина (источник SiO2 и Al2O3)
    ]
  )
  .heated() // Обжиг клинкера при высокой температуре
  .processingTime(200)
  // ВАРИАНТ 2: Известь TFC + Глина → Цемент
  // Известь — уже обожженный известняк, более быстрый путь
  event.recipes.create.mixing(
    [
      '4x tfmg:cement'
    ],
    [
      'tfc:powder/lime',       // Гашёная известь (готовый CaO)
      'minecraft:clay_ball'    // Глина (источник SiO2 и Al2O3)
    ]
  )
  .heated() // Спекание клинкера
  .processingTime(200)
  //Бетон
  event.remove({ output: 'tfmg:concrete_mixture' })
  event.recipes.create.mixing(
    [
      '16x tfmg:concrete_mixture'
    ],
    [
      '2x tfmg:cement',
      '4x #minecraft:sand',
      '4x #forge:gravel'
    ]
  )
  .processingTime(150)
  event.recipes.create.mixing(
    [
      '32x tfmg:concrete_mixture'
    ],
    [
      '2x tfmg:cement',        // Цемент (связующее вещество)
      '4x tfmg:slag',          // Шлак (заполнитель, побочный продукт металлургии)
      '4x #forge:gravel'       // Гравий (крупный заполнитель)
    ]
  )
  .processingTime(150)
  //Через сухой бетон
  event.recipes.create.mixing(
    [
      '16x tfmg:concrete_mixture'
    ],
    [
      '2x tfc:aggregate',
      '4x #minecraft:sand',
      '4x #forge:gravel'
    ]
  )
  .processingTime(150)
  event.recipes.create.mixing(
    [
      '32x tfmg:concrete_mixture'
    ],
    [
      '2x tfc:aggregate',        // Цемент (связующее вещество)
      '4x tfmg:slag',          // Шлак (заполнитель, побочный продукт металлургии)
      '4x #forge:gravel'       // Гравий (крупный заполнитель)
    ]
  )
  .processingTime(150)

  //Пластик
  event.recipes.tfmg.vat_machine_recipe(
    [
      Fluid.of('immersivepetroleum:naphtha', 500) // Вход: 1 ведро (1000 мБ) нафты
    ],
    [
      Fluid.of('tfmg:ethylene', 250),    // Выход 1: Этилен (основа для полиэтилена и синт. каучука)
      Fluid.of('tfmg:propylene', 250)    // Выход 2: Пропилен (основа для полипропилена)
      // Оставшиеся 200 мБ "теряются" в виде кокса или легких газов, что реалистично
    ]
  )
    .heated()
    .machines("tfmg:mixing")             // Требуется интенсивное перемешивание/циркуляция для равномерного нагрева
    .allowedVatTypes("tfmg:firebrick_lined_vat", "tfmg:steel_vat") // Обычный чугун расплавится или прогорит
    .minSize(2)                          // Промышленный процесс требует ванны минимум 2-го уровня
    .processingTime(200)                 // 15 секунд на цикл крекинга
  event.replaceInput({}, 'tfmg:plastic_sheet', '#forge:ingots/plastic')
  //Печатная плата
  event.recipes.create.deploying(
    'tfmg:coated_circuit_board', // Выход: Покрытая медью плата
    [
      'tfmg:empty_circuit_board', // Основа: пустая печатная плата (подложка)
      '#forge:plates/copper'      // Медная пластина (токопроводящий слой)
    ]
  )
  //Серная кислота
  event.remove({ output: 'tfmg:sulfuric_acid' })
  event.recipes.tfmg.vat_machine_recipe(
    [
      Fluid.of('artisanal:sulfuric_acid', 1) // Вход: 1000 мБ кислоты из Artisanal
    ],
    [
      Fluid.of('tfmg:sulfuric_acid', 1) // Выход: 1000 мБ кислоты TFMG (1:1)
    ]
  )
    .allowAllVatTypes() // Работает в любой ванне
    .processingTime(10) // Мгновенная конвертация (0.5 секунды)
  event.recipes.tfmg.vat_machine_recipe(
    [
      'tfc:powder/saltpeter',              // Селитра (источник азотной кислоты как катализатора)
      '#forge:dusts/sulfur',               // Сера 1 (источник SO2)
      '#forge:dusts/sulfur',               // Сера 2
      '#forge:dusts/sulfur',               // Сера 3
      Fluid.of('minecraft:water', 1000)    // Вода (растворитель)
    ],
    [
      Fluid.of('tfmg:sulfuric_acid', 1000) // Выход: 1000 мБ серной кислоты TFMG
    ]
  )
    .machines("tfmg:mixing")               // Требуется перемешивание
    .allowAllVatTypes()                    // Работает

  //Креозот
  event.replaceInput({}, 'tfmg:hardened_planks', 'immersiveengineering:treated_wood_horizontal')

  // TOM'S SIMPLE STORAGE - ДЕРЕВЯННЫЕ КОРПУСА
  // Ранняя промышленная электроника в деревянной изоляции

  // 1. INVENTORY CABLE (Кабель передачи данных)
  // Медные провода в деревянной изоляции (коробе)
  event.remove({ output: 'toms_storage:ts.inventory_cable' })
  event.shaped('8x toms_storage:ts.inventory_cable', [
    'PPP',
    'WWW',
    'PPP'
  ], {
    P: '#minecraft:planks',      // Деревянная изоляция/короб (6 шт.)
    W: '#forge:wires/copper'     // Медные провода (3 шт. - передача данных)
  })
  // 2. INVENTORY CABLE CONNECTOR (Разъем кабеля)
  // Деревянная монтажная плата с железными контактами
  event.remove({ output: 'toms_storage:ts.inventory_cable_connector' })
  event.shaped('4x toms_storage:ts.inventory_cable_connector', [
    ' C ',
    'IPI',
    ' W '
  ], {
    C: 'toms_storage:ts.inventory_cable', // Кабель
    P: '#minecraft:planks',               // Деревянная основа (изолятор)
    I: '#forge:plates/iron',              // Железные контакты (2 шт.)
    W: '#forge:wires/copper'              // Медный провод подключения
  })
  // 3. INVENTORY CABLE CONNECTOR FILTERED (Фильтрованный разъем)
  // Деревянный разъем с встроенной платой фильтрации
  event.remove({ output: 'toms_storage:ts.inventory_cable_connector_filtered' })
  event.shaped('toms_storage:ts.inventory_cable_connector_filtered', [
    ' F ',
    'CCC',
    ' P '
  ], {
    F: 'create_connected:control_chip',    // Контроллер фильтрации
    C: 'toms_storage:ts.inventory_cable_connector', // 3 базовых разъема
    P: '#minecraft:planks'                 // Деревянный корпус
  })
  // 4. INVENTORY CONNECTOR (Главный коннектор сети)
  // Деревянный ящик с основной электронной начинкой
  event.remove({ output: 'toms_storage:ts.inventory_connector' })
  event.shaped('toms_storage:ts.inventory_connector', [
    'PLP',
    'RCR',
    'PFP'
  ], {
    P: '#minecraft:planks',              // Деревянный корпус (4 шт.)
    C: 'create_connected:control_chip',  // Главный контроллер сети
    R: 'tfmg:resistor',                  // Резисторы (стабилизация сигнала, 2 шт.)
    F: 'projectred_core:plate',           // Печатная плата (основа)
    L: 'create:electron_tube'
  })
  // 5. STORAGE TERMINAL (Терминал доступа)
  // Ранний монитор в деревянном корпусе (как первые ЭВМ)
  event.remove({ output: 'toms_storage:ts.storage_terminal' })
  event.recipes.create.sequenced_assembly(
    'toms_storage:ts.storage_terminal',
    'projectred_core:plate',
    [
      // ШАГ 1: Установка контроллера интерфейса
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', 'create_connected:control_chip']
      ),
      // ШАГ 2: Установка источника энергии и дисплея
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', 'create:electron_tube']
      ),
      // ШАГ 3: Установка транзистора (усилитель видеосигнала)
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', 'tfmg:transistor_item']
      ),
      // ШАГ 4: Установка резистора (настройка яркости)
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', 'tfmg:resistor']
      ),
      // ШАГ 5: Деревянный корпус (вместо стального!)
      event.recipes.create.deploying(
        'projectred_core:plate',
        ['projectred_core:plate', '#minecraft:planks']
      ),
      // ШАГ 6: Финальная сборка под прессом
      event.recipes.create.pressing(
        'toms_storage:ts.storage_terminal',
        'projectred_core:plate'
      )
    ]
  )
    .transitionalItem('projectred_core:plate')
    .loops(1)
  // 6. CRAFTING TERMINAL (Крафт-терминал)
  // Терминал, встроенный в деревянный верстак
  event.remove({ output: 'toms_storage:ts.crafting_terminal' })
  event.shaped('toms_storage:ts.crafting_terminal', [
    ' T ',
    'CWC',
    ' P '
  ], {
    T: 'toms_storage:ts.storage_terminal', // Терминал
    C: 'create_connected:control_chip',    // 2 контроллера (для логики крафта)
    W: 'minecraft:crafting_table',         // Верстак
    P: '#minecraft:planks'                 // Деревянная подложка/корпус
  })
  // 7. INVENTORY PROXY (Прокси/Ретранслятор)
  // Деревянная коробка с усилителем сигнала
  event.remove({ output: 'toms_storage:ts.inventory_proxy' })
  event.shaped('toms_storage:ts.inventory_proxy', [
    'PLP',
    'RCR',
    'PLP'
  ], {
    P: '#minecraft:planks',              // Деревянный корпус (4 шт.)
    R: 'tfmg:resistor',                  // Резисторы (усиление сигнала, 2 шт.)
    C: 'create_connected:control_chip',  // Контроллер ретрансляции
    L: 'create:electron_tube'            // Источник энергии
  })
  // 8. LEVEL EMITTER (Датчик уровня)
  // Деревянный корпус с компаратором внутри
  event.remove({ output: 'toms_storage:ts.level_emitter' })
  event.shaped('toms_storage:ts.level_emitter', [
    ' C ',
    'TPT',
    'PRP'
  ], {
    C: 'create_connected:control_chip',  // Контроллер подсчета
    T: 'tfmg:transistor_item',           // 2 транзистора (компаратор)
    P: '#minecraft:planks',              // Деревянный корпус (3 шт.)
    R: 'tfmg:resistor'                   // Резистор (настройка порога)
  })
  // 9. TRIM (Декоративная деревянная накладка)
  // Соединяет соседние блоки эстетичными деревянными планками
  event.remove({ output: 'toms_storage:ts.trim' })
  event.shaped('4x toms_storage:ts.trim', [
    'PPP',
    'PCP',
    'PPP'
  ], {
    C: 'toms_storage:ts.inventory_cable',
    P: '#minecraft:planks'               // 8 деревянных досок/планок
  })
  // ФИЛЬТРЫ ПРЕДМЕТОВ (В деревянных корпусах)
  // 10. ITEM FILTER (Базовый фильтр)
  event.remove({ output: 'toms_storage:ts.item_filter' })
  event.shaped('toms_storage:ts.item_filter', [
    ' C ',
    'RPR',
    'PPP'
  ], {
    C: 'create_connected:control_chip',  // Контроллер сравнения ID
    R: 'tfmg:resistor',                  // 2 резистора (настройка порогов)
    P: '#minecraft:planks'               // Деревянный корпус (5 шт.)
  })
  // 11. TAG ITEM FILTER (Фильтр по тегам)
  event.remove({ output: 'toms_storage:ts.tag_item_filter' })
  event.shaped('toms_storage:ts.tag_item_filter', [
    ' T ',
    'FIF',
    'PPP'
  ], {
    T: 'tfmg:transistor_item',           // Транзистор (переключение между тегами)
    F: 'toms_storage:ts.item_filter',    // Базовый фильтр (основа)
    I: 'create_connected:control_chip',  // Доп. контроллер (база тегов)
    P: '#minecraft:planks'               // Усиленный деревянный корпус
  })
  // 12. POLYMORPHIC ITEM FILTER (Полиморфный фильтр)
  event.remove({ output: 'toms_storage:ts.polymorphic_item_filter' })
  event.shaped('toms_storage:ts.polymorphic_item_filter', [
    ' D ',
    'TFT',
    'PPP'
  ], {
    D: 'projectred_core:pointer',        // Декодер типов предметов
    T: 'tfmg:transistor_item',           // 2 транзистора (усилители сигнала)
    F: 'toms_storage:ts.tag_item_filter',// Тег-фильтр (основа)
    P: '#minecraft:planks'               // Усиленный деревянный корпус
  })

  //Кварц и кремний
  event.replaceInput({}, 'minecraft:quartz', '#forge:gems/quartz')

  // ТЕРМИТОВЫЙ ПОРОШОК (Термитная смесь)
  // Классическая реакция: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe + 2500°C
  // Смешивание алюминиевой пудры с оксидом железа (гематитом)
  event.remove({ output: 'tfmg:thermite_powder' })
  // 1. Промышленное смешивание в миксере (массовое производство)
  event.recipes.create.mixing(
    ['4x tfmg:thermite_powder'],
    [
      '#forge:dusts/aluminum',        // Алюминиевый порошок (восстановитель)
      'tfc:powder/hematite',          // Гематит (Fe₂O₃ — оксид железа)
      'tfc:powder/hematite'           // Второй гематит для баланса пропорции
    ]
  ).processingTime(200)
  // 2. Ручное смешивание (shapeless, для ранней игры или малых партий)
  event.shapeless('2x tfmg:thermite_powder', [
    '#forge:dusts/aluminum',
    'tfc:powder/hematite'
  ])
  // 3. Альтернатива: Использование магнетита или лимонита (другие оксиды железа)
  event.recipes.create.mixing(
    ['4x tfmg:thermite_powder'],
    [
      '#forge:dusts/aluminum',
      'tfc:powder/magnetite'          // Магнетит (Fe₃O₄)
    ]
  ).processingTime(200)
  event.recipes.create.mixing(
    ['4x tfmg:thermite_powder'],
    [
      '#forge:dusts/aluminum',
      'tfc:powder/limonite'           // Лимонит (FeO(OH)·nH₂O)
    ]
  ).processingTime(200)

  // ИЗВЛЕЧЕНИЕ ЛИТИЯ ИЗ ГРАНИТА 
  // Химическое выщелачивание следовых количеств лития
  // 1. МЕХАНИЧЕСКОЕ ИЗМЕЛЬЧЕНИЕ (Низкий шанс, ранняя игра)
  // При дроблении гранита иногда выкрашиваются микроскопические включения лития
  event.remove({ input: 'tfc:rock/cobble/granite' })
  event.recipes.create.crushing(
    [
      Item.of('tfc:rock/gravel/granite', 1),
      Item.of('tfmg:lithium_nugget', 1).withChance(0.05) // 5% шанс на 1 кусочек
    ],
    'tfc:rock/cobble/granite',
    200
  )
  // 2. ХИМИЧЕСКОЕ ВЫЩЕЛАЧИВАНИЕ (Промышленный метод, основной источник) 'artisanal:sulfuric_acid'
  // Серная кислота разрушает силикатную решетку гранита, высвобождая ионы лития
  event.recipes.create.mixing(
    [
      Item.of('tfmg:lithium_nugget', 2), // 2 кусочка лития за цикл
      Item.of('tfmg:slag', 1).withChance(0.5) // Побочный шлак
    ],
    [
      'tfc:rock/gravel/granite',          // Измельченный гранит (увеличивает площадь реакции)
      Fluid.of('tfmg:sulfuric_acid', 250) // Серная кислота (реагент)
    ]
  )
    .heated() // Нагрев ускоряет химическую реакцию выщелачивания
    .processingTime(400) // 20 секунд (длительный процесс)
  event.recipes.create.mixing(
    [
      Item.of('tfmg:lithium_nugget', 2), // 2 кусочка лития за цикл
      Item.of('tfmg:slag', 1).withChance(0.5) // Побочный шлак
    ],
    [
      'tfc:rock/gravel/granite',          // Измельченный гранит (увеличивает площадь реакции)
      Fluid.of('artisanal:sulfuric_acid', 250) // Серная кислота (реагент)
    ]
  )
    .heated() // Нагрев ускоряет химическую реакцию выщелачивания
    .processingTime(400) // 20 секунд (длительный процесс)
  // 3. АЛЬТЕРНАТИВА: ИЗ СОЛЯНОЙ РАПЫ (Если есть галит/соль TFC)
  // В реальности 60% лития добывают из солевых озер, а не из камня!
  // Если у тебя есть tfc:ore/halite, это более реалистичный источник.
  event.recipes.create.mixing(
    [
      Item.of('tfmg:lithium_nugget', 3)
    ],
    [
      'tfc:ore/halite',                   // Каменная соль (источник рассола)
      Fluid.of('minecraft:water', 500),   // Вода для растворения
      Fluid.of('tfmg:sulfuric_acid', 100) // Кислота для осаждения лития
    ]
  )
    .heated()
    .processingTime(300)
  event.recipes.create.mixing(
    [
      Item.of('tfmg:lithium_nugget', 3)
    ],
    [
      'tfc:ore/halite',                   // Каменная соль (источник рассола)
      Fluid.of('minecraft:water', 500),   // Вода для растворения
      Fluid.of('artisanal:sulfuric_acid', 100) // Кислота для осаждения лития
    ]
  )
    .heated()
    .processingTime(300)

  // МОДУЛЬНЫЙ АККУМУЛЯТОР - ДВА ТИПА (Верстак)
  // Свинцово-кислотный и литий-ионный
  event.remove({ output: 'createaddition:modular_accumulator' })
  // 1. СВИНЦОВО-КИСЛОТНЫЙ АККУМУЛЯТОР (с серной кислотой)
  // Классическая технология: свинцовые пластины + электролит
  event.shaped('createaddition:modular_accumulator', [
    'BCB',
    'LRL',
    'PSP'
  ], {
    B: '#forge:plates/brass',              // Латунные контакты (верх)
    C: 'createaddition:copper_spool',      // Медная катушка (токопровод)
    L: '#forge:plates/lead',               // Свинцовые пластины (электроды)
    R: 'tfmg:resistor',                    // Резистор (защита от КЗ)
    P: '#forge:plates/iron',               // Железные пластины (корпус)
    S: 'tfmg:sulfuric_acid_bucket'         // Ведро с серной кислотой (электролит)
  })
  event.shaped('createaddition:modular_accumulator', [
    'BCB',
    'LRL',
    'PSP'
  ], {
    B: '#forge:plates/brass',              // Латунные контакты (верх)
    C: 'createaddition:copper_spool',      // Медная катушка (токопровод)
    L: '#forge:plates/lead',               // Свинцовые пластины (электроды)
    R: 'tfmg:resistor',                    // Резистор (защита от КЗ)
    P: '#forge:plates/iron',               // Железные пластины (корпус)
    S: 'artisanal:bucket/sulfuric_acid'    // Ведро с серной кислотой (электролит)
  })
  //Фикс кислоты для крафта TFMG аккумулятора
  event.shaped('tfmg:accumulator', [
    'PWP',
    'BLB',
    'PCP'
  ], {
    P: '#forge:plates/lead',
    W: '#forge:wires/copper',
    B: 'artisanal:bucket/sulfuric_acid',
    C: 'tfmg:industrial_aluminum_casing'
  })
  // 2. ЛИТИЙ-ИОННЫЙ АККУМУЛЯТОР (с литием)
  // Современная технология: литиевые электроды + контроллер
  event.shaped('createaddition:modular_accumulator', [
    'BCB',
    'LRL',
    'PSP'
  ], {
    B: '#forge:plates/brass',              // Латунные контакты (верх)
    C: 'create_connected:control_chip',    // Контроллер BMS (Battery Management System)
    L: 'tfmg:lithium_ingot',               // Литиевые кусочки (электроды)
    R: 'tfmg:capacitor_item',              // Конденсатор (сглаживание пульсаций)
    P: '#forge:plates/steel',              // Стальные пластины (легкий корпус)
    S: 'create:electron_tube'              // Электронная лампа (регулятор напряжения)
  })
  //Литиевый меч
  event.remove({ output: 'tfmg:lithium_blade' })
  event.shaped('tfmg:lithium_blade', [
    ' S ',
    'AWP',
    'ABC'
  ], {
    S: '#forge:plates/steel',
    A: '#forge:plates/aluminum',
    W: Item.of('tfc:metal/sword/steel', '{Damage:0}'),
    B: 'tfmg:circuit_board',
    C: '#forge:wires/copper',
    P: 'tfmg:spark_plug'
  })
  //Литиевый слиток и его кусочки
  event.remove({ output: 'tfmg:lithium_ingot' })
  event.remove({ output: 'tfmg:lithium_nugget' })
  event.shapeless('4x tfmg:lithium_nugget', [
    'tfmg:lithium_ingot'
  ])
  event.shaped('tfmg:lithium_ingot', [
    'NN',
    'NN'
  ], {
    N: 'tfmg:lithium_nugget'
  })

  //Ведро
  event.remove({ output: 'minecraft:bucket' })
  event.shaped('minecraft:bucket', [
    'STS',  // Два слитка формируют верхние стенки ведра Тигель как формовочная основа
    ' S '  // Слиток формирует дно
  ], {
    S: 'tfc:metal/ingot/wrought_iron',  // Слиток кованого железа (3 шт.)
    T: 'tfc:crucible'                    // Тигель (не расходуется)
  })

  //Урановый блок
  event.remove({ output: 'immersiveengineering:storage_uranium' })
  event.shaped('immersiveengineering:storage_uranium', [
    'III',
    'III',
    'III'
  ], {
    I: '#forge:ingots/uranium'
  })
  //Магмовый блок
  event.shapeless('minecraft:magma_block', [
    '#forge:magma_block'
  ])

  // КРИОГЕННОЕ РАЗДЕЛЕНИЕ ВОЗДУХА (Расширенный рецепт)
  // Добавляем CO₂ и LOX к существующему процессу получения неона
  event.remove({ output: Fluid.of('tfmg:neon') })
  // Создаём новый рецепт с полным набором газов
  event.recipes.tfmg.vat_machine_recipe(
    [
      Fluid.of('tfmg:air', 1000) // Вход: 1000 мБ воздуха (ПРОВЕРЬ ТОЧНЫЙ ID В JEI!)
    ],
    [
      Fluid.of('tfmg:neon', 10),              // Выход: Неон (сохраняем оригинальный выход)
      Fluid.of('creatingspace:liquid_co2', 10),     // Выход: CO₂ (для метана)
      Fluid.of('creatingspace:liquid_oxygen', 200), // Выход: Жидкий кислород (LOX)
    ]
  )
    .machines("tfmg:centrifuge") // Центрифуга для разделения газов
    .allowedVatTypes("tfmg:steel_vat") // Стальная ванна для криогенных температур
    .minSize(2) // Требуется установка 2-го уровня
    .processingTime(300) // 15 секунд на цикл
  // ПОЛУЧЕНИЕ МЕТАНА ИЗ СЖИЖЕННОГО ГАЗА (LPG)
  // Перегонка LPG для выделения чистого метана
  // Из TFMG LPG
  event.recipes.tfmg.vat_machine_recipe(
    [
      Fluid.of('tfmg:lpg', 1000) // Вход: 1000 мБ сжиженного газа TFMG
    ],
    [
      Fluid.of('creatingspace:liquid_methane', 800) // Выход: 800 мБ чистого метана
    ]
  )
    .heated() // Требуется нагрев для испарения и разделения
    .machines("tfmg:centrifuge") // Центрифуга для разделения газов
    .allowedVatTypes("tfmg:steel_vat")
    .minSize(1)
    .processingTime(200) // 10 секунд
  // Из Immersive Petroleum Petroleum Gas
  event.recipes.tfmg.vat_machine_recipe(
    [
      Fluid.of('immersivepetroleum:petroleum_gas', 1000) // Вход: 1000 мБ нефтяного газа IP
    ],
    [
      Fluid.of('creatingspace:liquid_methane', 800) // Выход: 800 мБ чистого метана
    ]
  )
    .heated() // Требуется нагрев для испарения и разделения
    .machines("tfmg:centrifuge") // Центрифуга для разделения газов
    .allowedVatTypes("tfmg:steel_vat")
    .minSize(1)
    .processingTime(200) // 10 секунд

  //Замена костра на уголёк
  event.replaceInput({}, 'minecraft:campfire', '#forge:coal')
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


ServerEvents.tags('fluid', event => {
  // Нефть из artisanal
  event.add('forge:crude_oil', 'artisanal:sour_crude_oil')
  // Креозот для доменной печи
  event.add('tfmg:blast_stove_fuel', 'immersiveengineering:creosote')
  // Делаем серную кислоту TFMG совместимой с механиками TFC и Artisanal
  event.add('tfc:usable_in_jug', 'tfmg:sulfuric_acid')
  event.add('artisanal:sulfuric_acid', 'tfmg:sulfuric_acid')
  event.add('artisanal:acids', 'tfmg:sulfuric_acid')
  event.add('artisanal:usable_in_lava_drum', 'tfmg:sulfuric_acid')
  event.add('artisanal:usable_in_drum', 'tfmg:sulfuric_acid')
  // Нефтяной газ (попутный газ нефтепереработки)
  event.add('tfmg:gas', 'immersivepetroleum:petroleum_gas')
  event.add('forge:lpg', 'immersivepetroleum:petroleum_gas')
  event.add('tfmg:flammable', 'immersivepetroleum:petroleum_gas')
  event.add('forge:fuel', 'immersivepetroleum:petroleum_gas')
  event.add('tfmg:firebox_fuel', 'immersivepetroleum:petroleum_gas')
  // LPG (сжиженный пропан-бутан)
  event.add('forge:petroleum_gas', 'tfmg:lpg')
  event.add('firmalife:usable_in_hollow_shell', 'tfmg:lpg')
  event.add('artisanal:usable_in_drum', 'tfmg:lpg')
  event.add('tfc:usable_in_barrel', 'tfmg:lpg')
  event.add('immersivepetroleum:burnable_in_flarestack', 'tfmg:lpg')
  event.add('artisanal:usable_in_lava_drum', 'tfmg:lpg')
  event.add('tfc:usable_in_red_steel_bucket', 'tfmg:lpg')
  event.add('tfc:usable_in_wooden_bucket', 'tfmg:lpg')
  event.add('forge:gaseous', 'tfmg:lpg')
})

// ЗАПРЕТ ВЗАИМОДЕЙСТВИЯ С ВАНИЛЬНЫМ ВЕДРОМ ВОДЫ
// 1. Запрет выливания воды из ванильного ведра
ItemEvents.rightClicked(event => {
  const player = event.player
  if (player.isCreative()) return // Пропускаем креатив
  const item = event.item
  const block = event.block // Блок, по которому кликают (может быть null, если клик в воздух)
  // 1. ЗАПРЕТ на выливание воды (клик в воздух или по любому блоку)
  if (item.id === 'minecraft:water_bucket') {
    event.cancel()
    return
  }
  // 2. ЗАПРЕТ на набор воды (клик по блоку воды пустым ведром)
  // Проверяем, что клик был по блоку, и этот блок - источник воды
  if (item.id === 'minecraft:bucket' && block && block.id === 'minecraft:water') {
    event.cancel()
    return
  }
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
})