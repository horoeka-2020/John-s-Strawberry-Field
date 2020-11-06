const plants = {
  Spring: [
    {
      id: 1,
      name: 'Spinach',
      type: 'vegetable',
      planting: 'Spinach: The best times to plant are early in the morning or late in the day, so the plants aren’t exposed to the hot sun straight away. Always water plants well before and after planting. Spinach is a powerhouse of vegetable packed with nutrients and vitamins. It’s a fast-growing but short-lived crop that is very easy to grow and is equally happy in the garden or container.',
      image: '/spinach.jpg'
    },
    {
      id: 2,
      name: 'Avocados',
      type: 'vegetable',
      planting: 'Avocados: The best time to plant avocados is late winter through spring. We suggest buying an grafted avocado tree from a garden centre, as seed grown avocados are unreliable and will take a long time to produce fruit. Make sure that the tree is healthy, and the graft has healed. Like building a house a good foundation is the key to success in your garden. The better the soil, the better your plants will grow. Avocados prefer sandy, well-drained soil.',
      image: '/avocados.jpg'
    },
    {
      id: 3,
      name: 'Blueberries',
      type: 'fruit',
      planting: 'Blueberries: The blueberry is a good example of a fruit taken from the wild and transformed into an easy to grow edible delight. They thrive in New Zealand’s varying climatic conditions. Blueberries can be planted year-round. The better the soil, the better your berries will grow. Blueberries prefer a free draining, more acidic soil with a high proportion of organic matter. They are best planted in a sheltered, well drained position in full sun. ',
      image: '/blueberries.jpg'
    },
    {
      id: 4,
      name: 'Mandarins',
      type: 'fruit',
      planting: 'Mandarins: Mandarin trees are the most cold-resistant of the citrus trees.  Their fruit, however, is thin-skinned and small in size, which makes them more susceptible to cold damage than the larger orange and grapefruit. Mandarins grow better when the weather is hot and humid. The trees need protection from frost. Like building a house a good foundation is the key to success in your garden. The better the soil, the better your plants will grow. If you are starting with an existing garden bed dig in organic matter like Tui Sheep Pellets and Tui Compost to your soil. Then you can add a layer of Tui Garden Mix',
      image: '/mandarins.jpg'
    },
    {
      id: 5,
      name: 'Daffodils',
      type: 'flower',
      planting: 'Daffodils: Nothing quite says spring has arrived like Daffodil’s do. These well-known garden treasures come in a wide range of shapes, sizes, colours and types. The days of only bright yellow Daffodils being available are gone; now you can find numerous shades of white, orange, lemon, cream and ivory. There is bound to be a Daffodil to suit most gardens, and they’re almost fool proof. Ideal for picking for the vase as they last for over a week. Growing Daffodil’s is easy, generally all they need is a good, fertile, free-draining soil and plenty of sun. Choose a well-drained site for your Daffodil’s as they loathe wet feet. They thrive in pots & containers too, so you have lots of options about where you can place and plant your bulbs. Daffodils need plenty of sun to flower, but will flower well if planted under deciduous trees, as the sunlight will be able to get through the branches when the tree has no leaves.',
      image: '/daffodils.jpg'
    },
    {
      id: 6,
      name: 'Tulips',
      type: 'flower',
      planting: 'Tulips: The absolute diamonds of the spring garden, nothing can match Tulips for uniformity, colour, perfection and style. Tulips come in a wide range of shapes, sizes, colours and types. Nearly every colour of the rainbow can be found in the Tulip family, from the strong primary colours through to pastel, two-toned and multi-shades. Tulips are ideal for picking for the vase as they last for over a week. Growing Tulips is generally straightforward. Choose a well-drained site, as they loathe wet feet. Plant into a fertile, free-draining soil. It’s essential Tulips have plenty of sun to flower; rarely do they thrive when planted under deciduous trees. They do well in pots and containers too, hence you have many options about where to pant your bulbs.',
      image: '/tulip.jpg'
    },
  ],
  Summer: [
    {
      id: 7,
      name: 'Sweet Potatoes',
      type: 'vegetable',
      planting: 'Sweet Potatoes: They require a long warm growing season. Plant in free draining loose soil . Fertilise before planting but no more when the plants are growing as it will encourage vine growth. They will go for miles and you will get no tubers. If they do start spreading, lift the vines off the ground to prevent them rooting. Mound up the soil about 20cm (8 in) before planting Let the plants die down, (leaves die or turn yellow) before harvesting the tubers. Dry them in the sun for a few days . then store in a cool dry place for up to five months.',
      image: '/sweet potato.jpg'
    },
    {
      id: 8,
      name: 'Tomatoes',
      type: 'vegetable',
      planting: 'Tomatoes: Once the cold weather has passed, and the soils have warmed up its time to plant tomatoes. Labour weekend is known as the traditional tomato planting time but tomato seedlings are usually available in garden centres from August. Choose a variety that suits how you like to enjoy your tomatoes. If you’re growing from seed rather than seedlings, you’ll need to get started about a month earlier to give your seeds time to grow. The best times to plant are early in the morning or late in the day, so the plants aren’t exposed to the hot sun straight away.',
      image: '/tomatoes.jpg'
    },
    {
      id: 9,
      name: 'Watermelons',
      type: 'fruit',
      planting: 'Watermelons: They are a summer favourite! Vast and sprawling, they are grown the same way as their vege relatives from the curubit family - pumpkin, squash and cucumber, but the flesh is much sweeter. With their delicious red flesh and glossy green rind, watermelons are a refreshing summer snack and can range in weight from 2-3kg up to a gigantic 20kg. If you’re sowing seeds, watermelon seeds can be sown monthly from spring to early summer. Sow your seeds in Tui Seed Raising Mix indoors as they will have more chance of germination. If temperatures are below 15°C, they may not germinate properly.',
      image: '/watermelon.jpg'
    },
    {
      id: 10,
      name: 'Mangoes',
      type: 'fruit',
      planting: 'Mangoes: Depending on the variety mango trees can grow huge, to 35 m/over 100 feet high and 15 m/45 feet across for seedling trees of older varieties. But you can (and should!) keep a mango tree small by pruning it regularly. Mangoes are a strictly tropical fruit. They love the tropics. The best climate to grow mangoes is frost free with cool, dry winters and steamy, hot summers. You can get many different varieties of mangoes suited to different climatic conditions. If you live in a less than ideal climate (you know your climate is ideal when mangoes are growing everywhere), speak to other growers or speak to competent staff in a nursery to make sure you use varieties suited to your climate.',
      image: '/mango.jpg'
    },
    {
      id: 11,
      name: 'Marigolds',
      type: 'flower',
      planting: 'Marigolds: They are well-known for the riot of colour they produce for around six months of the year. They are available in a wide range of colours from yellows, limes and creams to just about every shade thinkable of orange and bronze. Marigolds are a reliable companion plant as they help keep away aphids. Plant marigolds close to crops that suffer from aphids and greenfly. Marigolds emit a scent that repels aphids and attracts hoverflies, which are a predator of aphids. Like building a house a good foundation is the key to success in your garden. The better the soil, the better your plants will grow. If you are starting with an existing garden bed dig in organic matter like Tui Sheep Pellets and Tui Compost to your soil',
      image: '/marigolds.jpg'
    },
    {
      id: 12,
      name: ' Gaillardia',
      type: 'flower',
      planting: 'Gaillardia: Sow gaillardia seeds atop moist seed starting mix and gently press them into the surface. You also can sow seeds where you want the plants to grow at about the time of your last spring frost. In most areas, gaillardia needs a head start indoors if the plants are to bloom well their first year. Gaillardias, also known as blanket flowers, are good news for the gardener who has poor, dry soil and hot, sunny conditions. These bright, cheery flowers actually prefer poor soil and heat and are short-lived when planted in heavy, moist soil.',
      image: '/Gaillardia.jpg'
    },
  ],
  Autumn: [
    {
      id: 13,
      name: 'Broccoli',
      type: 'vegetable',
      planting: 'Broccoli: Bursting with goodness, these hardy no fuss vegetables are brilliant crops to plant in the winter garden. This superfood is jam-packed with valuable nutrients and minerals. The best times to plant are early in the morning or late in the day, so the plants aren’t exposed to the hot sun straight away. Always water plants well before and after planting. ',
      image: '/broccoli.jpg'
    },
    {
      id: 14,
      name: 'Brussel Sprouts',
      type: 'vegetable',
      planting: 'Brussel Sprouts: Bursting with goodness, these hardy no fuss vegetables are brilliant crops to plant in the winter garden. Adored by many yet loathed by others, Brussels sprouts are one of the easiest and most rewarding vegetables to grow. Bad childhood memories of being forced to eat overcooked Brussels sprouts will be banished once you grow and cook your own! Brussels sprouts are the perfect crop for areas with cold winters, as the lower temperatures generally result in sweeter sprouts. What’s more they produce a bumper yield for the amount of space they take up in the garden. Harvested in the cooler months of the year, they are the perfect staple crop for winter and spring.',
      image: '/brussels sprouts.jpg'
    },
    {
      id: 15,
      name: 'Apples',
      type: 'fruit',
      planting: 'Apples: They are an excellent source of vitamin A, folic acid and vitamin C. They are high in fibre and a good source of calcium. Most of an apple’s goodness is just below the skin, so eat unpeeled if you can! Whether you create your own mini-orchard, or choose to grow a tree in a pot, apple trees are fun to grow and can provide years of fresh, juicy homegrown fruit. Choose an open, sunny spot sheltered from strong winds for your apple tree. It is a good idea to find out how big the tree is going to grow to ensure it will have enough room. Dwarf varieties of apples are good options if you have a small space or are planting in pots and containers. ',
      image: '/apples.jpg'
    },
    {
      id: 16,
      name: 'Pears',
      type: 'fruit',
      planting: 'Pears: Choose an open, sunny position sheltered from strong winds for your pear tree. Pears are partially self-fertile. Prepare your soil with organic matter like compost and sheep pellets.',
      image: '/pears.jpg'
    },
    {
      id: 17,
      name: 'Chrysanthemums',
      type: 'flower',
      planting: 'Chrysanthemums: They are susceptible to mildew, so keeping the plants dry is a priority. They need plenty of air circulation, water drainage, and morning sun to dry the dew on the leaves and stems.',
      image: '/chrysanthemum.jpg'
    },
    {
      id: 18,
      name: 'Asters',
      type: 'flower',
      planting: 'Asters: They grow best in full sun. They will handle partial shade but flowering will be less-prolific. To avoid the likelihood of powdery mildew affecting plants ensure a sunny, open position with good airflow.',
      image: ''
    },
  ],
  Winter: [
    {
      id: 19,
      name: 'Kale',
      type: 'vegetable',
      planting: 'Kale: The best times to plant are early in the morning or late in the day, so the plants aren’t exposed to the hot sun straight away. Find a full sun, sheltered position to plant and space at least 30cm - 50cm apart, to ensure the crops can fully mature and are not fighting for space, fertiliser and water.',
      image: '/kale.jpg'
    },
    {
      id: 20,
      name: 'Carrots',
      type: 'vegetable',
      planting: 'Carrots: Sow seed for the winter carrot crop in mid-summer, and deep mulch the bed in November with shredded leaves or straw. This insulating layer should be topped with an old row cover or bed sheet to hold it in place.',
      image: '/carrots.jpg'
    },
    {
      id: 21,
      name: 'Strawberries',
      type: 'fruit',
      planting: 'Strawberries: There are three main types. Plant June-bearing for one big crop in late spring or early summer, everbearing for spring and fall crops, and day-neutral for a large crop in spring and smaller harvests all summer.',
      image: '/strawberries.jpg'
    },
    {
      id: 22,
      name: 'Peaches',
      type: 'fruit',
      planting: 'Peaches: Plant trees against a southfacing wall under an eave, and prune them into a fan shape. And if you’re short on space, plant three or four varieties in one hole, pruning off all but the outwardfacing branches.',
      image: '/peaches.jpg'
    },
    {
      id: 23,
      name: 'Pansies',
      type: 'flower',
      planting: 'Pansies: They like full or partial sun, but need cooler temperatures to thrive. The ideal planting site will get morning sun but avoid the heat of the late afternoon.',
      image: '/pansies.jpg'
    },
    {
      id: 24,
      name: 'Hellebores',
      type: 'flower',
      planting: 'Hellebores: They prefer to grow in rich well-drained soil in full to part shade and whilst they are shade lovers most do better with a little sun, under the canopy of a deciduous tree or shrub is an ideal location.',
      image: '/hellebores.jpg'
    },
    ]
  }
  
  export default plants
  