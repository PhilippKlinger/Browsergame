const level1 = new Level(
    [
        new Boar(),
        new Boar(),
        
        new Boar(),
        new Endboss()
    ],
    [
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird()
    ],
    [
       
    ],
    [
        new BackgroundObject('./img/5_background/l1_background.png', 0),
        new BackgroundObject('./img/5_background/l2_trees01.png', 0),
        new BackgroundObject('./img/5_background/l3_trees02.png', 0),
        new BackgroundObject('./img/5_background/l4_grass01.png', 0),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 0),
        new BackgroundObject('./img/5_background/l6_fog.png', 0),
        new BackgroundObject('./img/5_background/l7_ground_0.png', 0),
        new BackgroundObject('./img/5_background/l8_foreground_1.png', 0),

        new BackgroundObject('./img/5_background/l1_background.png', 720),
        new BackgroundObject('./img/5_background/l2_trees01.png', 720),
        new BackgroundObject('./img/5_background/l3_trees02.png', 720),
        new BackgroundObject('./img/5_background/l4_grass01.png', 720),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 720),
        new BackgroundObject('./img/5_background/l6_fog.png', 720),
        new BackgroundObject('./img/5_background/l7_ground_3.png', 720),
        new BackgroundObject('./img/5_background/l8_foreground_2.png', 720),
    
        new BackgroundObject('./img/5_background/l1_background.png', 1440),
        new BackgroundObject('./img/5_background/l2_trees01_1.png', 1440),
        new BackgroundObject('./img/5_background/l3_trees02_1.png', 1440),
        new BackgroundObject('./img/5_background/l4_grass01_1.png', 1440),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 1440),
        new BackgroundObject('./img/5_background/l6_fog.png', 1440),
        new BackgroundObject('./img/5_background/l7_ground_2.png', 1440),
        new BackgroundObject('./img/5_background/l8_foreground_0.png', 1440),

        new BackgroundObject('./img/5_background/l1_background.png', 2160),
        new BackgroundObject('./img/5_background/l2_trees01_1.png', 2160),
        new BackgroundObject('./img/5_background/l3_trees02_1.png', 2160),
        new BackgroundObject('./img/5_background/l4_grass01_1.png', 2160),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 2160),
        new BackgroundObject('./img/5_background/l6_fog.png', 2160),
        new BackgroundObject('./img/5_background/l7_ground_1.png', 2160),
        new BackgroundObject('./img/5_background/l8_foreground_3.png', 2160),

        new BackgroundObject('./img/5_background/l1_background.png', 2880),
        new BackgroundObject('./img/5_background/l2_trees01.png', 2880),
        new BackgroundObject('./img/5_background/l3_trees02.png', 2880),
        new BackgroundObject('./img/5_background/l4_grass01.png', 2880),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 2880),
        new BackgroundObject('./img/5_background/l6_fog.png', 2880),
        new BackgroundObject('./img/5_background/l7_ground_0.png', 2880),
        new BackgroundObject('./img/5_background/l8_foreground_1.png', 2880),

        new BackgroundObject('./img/5_background/l1_background.png', 3600),
        new BackgroundObject('./img/5_background/l2_trees01.png', 3600),
        new BackgroundObject('./img/5_background/l3_trees02.png', 3600),
        new BackgroundObject('./img/5_background/l4_grass01.png', 3600),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 3600),
        new BackgroundObject('./img/5_background/l6_fog.png', 3600),
        new BackgroundObject('./img/5_background/l7_ground_3.png', 3600),
        new BackgroundObject('./img/5_background/l8_foreground_2.png', 3600),

        new BackgroundObject('./img/5_background/l1_background.png', 4320),
        new BackgroundObject('./img/5_background/l2_trees01_1.png', 4320),
        new BackgroundObject('./img/5_background/l3_trees02_1.png', 4320),
        new BackgroundObject('./img/5_background/l4_grass01_1.png', 4320),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 4320),
        new BackgroundObject('./img/5_background/l6_fog.png', 4320),
        new BackgroundObject('./img/5_background/l7_ground_3.png', 4320),
        new BackgroundObject('./img/5_background/l8_foreground_3.png', 4320),

        new BackgroundObject('./img/5_background/l1_background.png', 5040),
        new BackgroundObject('./img/5_background/l2_trees01_1.png', 5040),
        new BackgroundObject('./img/5_background/l3_trees02_1.png', 5040),
        new BackgroundObject('./img/5_background/l4_grass01_1.png', 5040),
        new BackgroundObject('./img/5_background/l5_grass02_1.png', 5040),
        new BackgroundObject('./img/5_background/l6_fog.png', 5040),
        new BackgroundObject('./img/5_background/l7_ground_1.png', 5040),
        new BackgroundObject('./img/5_background/l8_foreground_2.png', 5040),
    ],
    [
        new SpearCollect('./img/6_spear/spear_ground1.png', 580),
        new SpearCollect('./img/6_spear/spear_ground1.png', 1120),
        new SpearCollect('./img/6_spear/spear_ground2.png', 1540),
        new SpearCollect('./img/6_spear/spear_ground1.png', 2780),
        new SpearCollect('./img/6_spear/spear_ground2.png', 3510),
        new SpearCollect('./img/6_spear/spear_ground2.png', 4200)
    ],
    [
        new CoinCollect('./img/8_coin/Gold_21.png', 680, 180),
        new CoinCollect('./img/8_coin/Gold_21.png', 760, 170),
        new CoinCollect('./img/8_coin/Gold_21.png', 840, 160),
        new CoinCollect('./img/8_coin/Gold_21.png', 920, 170),
        new CoinCollect('./img/8_coin/Gold_21.png', 1000, 180),
        new CoinCollect('./img/8_coin/Gold_21.png', 1580, 180),
        new CoinCollect('./img/8_coin/Gold_21.png', 1660, 170),
        new CoinCollect('./img/8_coin/Gold_21.png', 1740, 160),
        new CoinCollect('./img/8_coin/Gold_21.png', 1820, 170), 
    ],
);