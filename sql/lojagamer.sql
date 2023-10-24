CREATE DATABASE lojagamer;

USE lojagamer;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    description TEXT,
    rating INT,
    new BOOLEAN,
    on_sale BOOLEAN,
    part_type VARCHAR(45),
    date_added DATETIME,
    manufacturer VARCHAR(45),
    model VARCHAR(45),
);
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),1
    FOREIGN KEY (product_id) REFERENCES product (id)
);


1,GeForce RTX 3060,NVIDIA,2099.99,5,"12GB GDDR6, LHR, DLSS, Ray Tracing - DUAL-RTX3060-O12G-V2",5,1,1,graphics_card,2023-10-20 02:31:13,Asus,DUAL-RTX3060-O12G-V2
2,GeForce RTX 4090 ROG Strix,NVIDIA,12999.99,3," 24 GB GDDR6X, ARGB, DLSS, Ray Tracing - ROG-STRIX-RTX4090-O24G-GAMING",4,1,0,graphics_card,2023-10-20 02:31:13,Asus,ROG Strix,ROG-STRIX-RTX4090-O24G-GAMING
3,GeForce GTX 1080,NVIDIA,1920,1,G1 Gaming 8G GV-N1080G1 GAMING-8GD,2,0,0,graphics_card,2023-10-20 04:36:16,GIGABYTE,GV-N1080G1 GAMING-8GD

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    description TEXT,
    rating INT,
    new BOOLEAN,
    on_sale BOOLEAN,
    part_type VARCHAR(45),
    date_added DATETIME,
    manufacturer VARCHAR(45),
    product_line VARCHAR(45)
    model VARCHAR(45)
);



INSERT INTO product (name, brand, price, stock, description, rating, new, on_sale, part_type, date_added, manufacturer, model)
VALUES
    ('GeForce RTX 3060', 'NVIDIA', 2099.99, 5, '12GB GDDR6, LHR, DLSS, Ray Tracing - DUAL-RTX3060-O12G-V2', 5, 1, 1, 'graphics_card', '2023-10-20 02:31:13', 'Asus', 'DUAL-RTX3060-O12G-V2'),
    ('GeForce RTX 4090 ROG Strix', 'NVIDIA', 12999.99, 3, '24 GB GDDR6X, ARGB, DLSS, Ray Tracing - ROG-STRIX-RTX4090-O24G-GAMING', 4, 1, 0, 'graphics_card', '2023-10-20 02:31:13', 'Asus', 'ROG-STRIX-RTX4090-O24G-GAMING'),
    ('GeForce GTX 1080', 'NVIDIA', 1920, 1, 'G1 Gaming 8G GV-N1080G1 GAMING-8GD', 2, 0, 0, 'graphics_card', '2023-10-20 04:36:16', 'GIGABYTE', 'GV-N1080G1 GAMING-8GD'),
    ('AMD Radeon RX 6700 XT', 'AMD', 1899.99, 7, '12GB GDDR6, RDNA 2 Architecture, Ray Tracing - RX6700XT-12G', 4, 1, 1, 'graphics_card', '2023-10-20 08:15:24', 'ASRock', 'RX6700XT-12G'),
    ('GeForce RTX 3070 Super', 'NVIDIA', 2399.99, 4, '10GB GDDR6X, DLSS, Ray Tracing - RTX3070S-10G', 5, 0, 1, 'graphics_card', '2023-10-20 09:45:12', 'MSI', 'RTX3070S-10G'),
    ('AMD Radeon RX 6600', 'AMD', 1499.99, 10, '8GB GDDR6, RDNA 2 Architecture - RX6600-8G', 3, 1, 0, 'graphics_card', '2023-10-20 11:20:37', 'ASUS', 'RX6600-8G'),
    ('GeForce GTX 1660 Ti', 'NVIDIA', 999.99, 8, '6GB GDDR6, Turing Architecture - GTX1660TI-6G', 4, 0, 0, 'graphics_card', '2023-10-20 13:55:42', 'MSI', 'GTX1660TI-6G'),
    ('AMD Ryzen 9 5900X', 'AMD', 499.99, 6, '12 cores, 24 threads, 105W TDP - RYZEN9-5900X', 5, 1, 0, 'cpu', '2023-10-20 15:42:19', 'AMD', 'RYZEN9-5900X'),
    ('Intel Core i9-11900K', 'Intel', 549.99, 5, '8 cores, 16 threads, 125W TDP - I9-11900K', 4, 0, 1, 'cpu', '2023-10-20 17:18:56', 'Intel', 'I9-11900K'),
    ('AMD Ryzen 7 5800X', 'AMD', 399.99, 4, '8 cores, 16 threads, 105W TDP - RYZEN7-5800X', 4, 0, 0, 'cpu', '2023-10-20 19:03:11', 'AMD', 'RYZEN7-5800X'),
    ('Intel Core i7-11700K', 'Intel', 449.99, 3, '8 cores, 16 threads, 125W TDP - I7-11700K', 3, 1, 1, 'cpu', '2023-10-20 20:48:29', 'Intel', 'I7-11700K'),
    ('Corsair Vengeance RGB Pro 32GB', 'Corsair', 199.99, 12, 'DDR4 3200MHz, RGB Lighting - CMW32GX4M2E3200C16', 4, 1, 0, 'ram', '2023-10-20 22:30:04', 'Corsair', 'CMW32GX4M2E3200C16'),
    ('G.Skill Ripjaws V 16GB', 'G.Skill', 99.99, 8, 'DDR4 3200MHz - F4-3200C16S-16GVKB', 3, 0, 1, 'ram', '2023-10-21 00:15:21', 'G.Skill', 'F4-3200C16S-16GVKB'),
    ('Kingston HyperX Fury 8GB', 'Kingston', 69.99, 10, 'DDR4 2400MHz - HX424C15FB3/8', 3, 0, 0, 'ram', '2023-10-21 02:02:47', 'Kingston', 'HX424C15FB3/8'),
    ('Corsair MP600 1TB', 'Corsair', 149.99, 6, 'NVMe PCIe Gen4, 3D TLC NAND - CSSD-F1000GBMP600', 4, 1, 1, 'ssd', '2023-10-21 04:17:59', 'Corsair', 'CSSD-F1000GBMP600'),
    ('Samsung 970 EVO Plus 500GB', 'Samsung', 119.99, 8, 'NVMe PCIe Gen3, 3-bit MLC NAND - MZ-V7S500B/AM', 4, 0, 0, 'ssd', '2023-10-21 06:01:34', 'Samsung', 'MZ-V7S500B/AM'),
    ('Western Digital Blue 1TB', 'Western Digital', 99.99, 12, 'SATA III, 3D NAND - WDS100T2B0A', 3, 1, 1, 'ssd', '2023-10-21 08:23:52', 'Western Digital', 'WDS100T2B0A'),
    ('Seagate BarraCuda 2TB', 'Seagate', 79.99, 10, 'SATA III, 7200 RPM - ST2000DM008', 3, 0, 0, 'hdd', '2023-10-21 10:45:14', 'Seagate', 'ST2000DM008'),
    ('Toshiba X300 4TB', 'Toshiba', 129.99, 5, 'SATA III, 7200 RPM - HDWE140XZSTA', 4, 1, 1, 'hdd', '2023-10-21 12:59:02', 'Toshiba', 'HDWE140XZSTA'),
    ('Western Digital Red Pro 6TB', 'Western Digital', 199.99, 4, 'SATA III, 7200 RPM, NAS - WD6003FFBX', 5, 0, 0, 'hdd', '2023-10-21 15:22:09', 'Western Digital', 'WD6003FFBX'),
    ('Asus TUF Gaming X570-Plus', 'Asus', 179.99, 6, 'ATX, PCIe 4.0, Dual M.2, Aura Sync - TUF X570-PLUS', 4, 1, 1, 'motherboard', '2023-10-21 17:40:31', 'Asus', 'TUF X570-PLUS'),
    ('MSI B450 TOMAHAWK MAX', 'MSI', 99.99, 8, 'ATX, DDR4, Flash BIOS - B450 TOMAHAWK MAX', 3, 0, 0, 'motherboard', '2023-10-21 20:01:17', 'MSI', 'B450 TOMAHAWK MAX'),
    ('Gigabyte Z690 AORUS Elite', 'Gigabyte', 229.99, 3, 'ATX, DDR4, Dual M.2, RGB Fusion - Z690 AORUS ELITE', 5, 1, 1, 'motherboard', '2023-10-21 22:33:48', 'Gigabyte', 'Z690 AORUS ELITE'),
    ('Asus ROG Ryujin 360', 'Asus', 249.99, 5, '360mm Radiator, OLED Display, Aura Sync - ROG RYUJIN 360', 4, 1, 0, 'cooler', '2023-10-22 02:01:56', 'Asus', 'ROG RYUJIN 360'),
    ('Noctua NH-D15', 'Noctua', 99.99, 4, 'Dual Tower, 6 Heatpipes, Quiet - NH-D15', 5, 0, 1, 'cooler', '2023-10-22 05:45:33', 'Noctua', 'NH-D15'),
    ('Cooler Master Hyper 212 RGB', 'Cooler Master', 49.99, 6, '120mm RGB Fan, Direct Contact - RR-212S-20PC-R1', 4, 1, 0, 'cooler', '2023-10-22 09:22:01', 'Cooler Master', 'RR-212S-20PC-R1'),
    ('EVGA 850W Supernova', 'EVGA', 139.99, 4, '80+ Gold, Fully Modular - 220-GA-0850-X1', 4, 1, 1, 'psu', '2023-10-22 13:15:59', 'EVGA', '220-GA-0850-X1'),
    ('Corsair RM850x', 'Corsair', 129.99, 6, '80+ Gold, Fully Modular - CP-9020180-NA', 5, 0, 0, 'psu', '2023-10-22 17:12:45', 'Corsair', 'CP-9020180-NA'),
    ('Seasonic Focus GX-650', 'Seasonic', 89.99, 8, '80+ Gold, Fully Modular - SSR-650FX', 4, 0, 1, 'psu', '2023-10-22 21:05:13', 'Seasonic', 'SSR-650FX'),
    ('Corsair Crystal 680X', 'Corsair', 189.99, 3, 'ATX, Tempered Glass, RGB Lighting - CC-9011169-WW', 4, 1, 0, 'case', '2023-10-23 01:04:02', 'Corsair', 'CC-9011169-WW'),
    ('NZXT H510i', 'NZXT', 99.99, 7, 'ATX, Smart Device, RGB Lighting - CA-H510I-BR', 3, 1, 1, 'case', '2023-10-23 05:03:37', 'NZXT', 'CA-H510I-BR'),
    ('Fractal Design Meshify C', 'Fractal Design', 79.99, 10, 'ATX, Tempered Glass, Mesh Front - FD-CA-MESH-C-WT-TGC', 4, 0, 0, 'case', '2023-10-23 09:02:14', 'Fractal Design', 'FD-CA-MESH-C-WT-TGC'),
    ('Logitech G Pro X', 'Logitech', 129.99, 8, 'Hot-Swappable Switches, RGB Lighting - 920-009388', 4, 0, 1, 'keyboard', '2023-10-23 13:01:03', 'Logitech', '920-009388'),
    ('Razer Huntsman Elite', 'Razer', 169.99, 6, 'Opto-Mechanical Switches, RGB Lighting - RZ03-01870200-R3U1', 5, 1, 0, 'keyboard', '2023-10-23 17:00:48', 'Razer', 'RZ03-01870200-R3U1'),
    ('Corsair K70 RGB MK.2', 'Corsair', 129.99, 5, 'Cherry MX Red Switches, RGB Lighting - CH-9109010-NA', 4, 1, 1, 'keyboard', '2023-10-23 20:59:26', 'Corsair', 'CH-9109010-NA'),
    ('SteelSeries Rival 600', 'SteelSeries', 79.99, 7, 'Dual Sensor, Split-Trigger Buttons - 62446', 3, 0, 0, 'mouse', '2023-10-24 00:58:15', 'SteelSeries', '62446'),
    ('Logitech G Pro Wireless', 'Logitech', 129.99, 5, 'HERO Sensor, 16000 DPI - 910-005273', 4, 1, 0, 'mouse', '2023-10-24 04:57:49', 'Logitech', '910-005273'),
    ('Glorious Model O', 'Glorious', 59.99, 6, 'G-Skates, 12,000 DPI - GO-BLACK', 4, 0, 1, 'mouse', '2023-10-24 08:56:33', 'Glorious', 'GO-BLACK'),
    ('LG 27GL83A-B', 'LG', 349.99, 3, '27'' IPS, 1440p, 1ms, G-SYNC Compatible - 27GL83A-B', 5, 1, 1, 'monitor', '2023-10-24 12:55:20', 'LG', '27GL83A-B'),
    ('AOC CQ32G1', 'AOC', 299.99, 4, '32'' Curved, 1440p, 1ms, FreeSync - CQ32G1', 4, 0, 0, 'monitor', '2023-10-24 16:54:06', 'AOC', 'CQ32G1'),
    ('ASUS VG278Q', 'Asus', 249.99, 5, '27'' TN, 1080p, 1ms, FreeSync - VG278Q', 3, 1, 0, 'monitor', '2023-10-24 20:52:52', 'Asus', 'VG278Q'),
    ('Logitech C920 Pro', 'Logitech', 79.99, 8, '1080p, 30fps, Built-in Microphone - 960-000764', 4, 0, 1, 'webcam', '2023-10-25 00:51:37', 'Logitech', '960-000764'),
    ('Razer Kiyo', 'Razer', 99.99, 6, '1080p, 30fps, Ring Light - RZ19-02320100-R3U1', 4, 1, 0, 'webcam', '2023-10-25 04:50:23', 'Razer', 'RZ19-02320100-R3U1'),
    ('Blue Yeti X', 'Blue', 149.99, 4, 'Condenser Microphone, USB, RGB Lighting - 988-000105', 5, 0, 1, 'microphone', '2023-10-25 08:49:09', 'Blue', '988-000105'),
    ('Shure SM7B', 'Shure', 399.99, 3, 'Dynamic Microphone, XLR - SM7B', 5, 1, 0, 'microphone', '2023-10-25 12:47:55', 'Shure', 'SM7B'),
    ('AKG P220', 'AKG', 199.99, 4, 'Condenser Microphone, XLR - P220', 4, 0, 1, 'microphone', '2023-10-25 16:46:42', 'AKG', 'P220'),
    ('Focusrite Scarlett 2i2', 'Focusrite', 149.99, 5, 'USB Audio Interface, 2 Inputs - SCARLETT-2I2', 4, 1, 1, 'audio_interface', '2023-10-25 20:45:28', 'Focusrite', 'SCARLETT-2I2'),
    ('Presonus AudioBox USB', 'Presonus', 79.99, 6, 'USB Audio Interface, 2 Inputs - AUDIOBOX-USB', 3, 0, 0, 'audio_interface', '2023-10-25 23:56:14', 'Presonus', 'AUDIOBOX-USB'),
    ('Edifier R1280T', 'Edifier', 99.99, 7, '2.0 Bookshelf Speakers, RCA Input - R1280T', 4, 1, 0, 'speakers', '2023-10-26 03:54:59', 'Edifier', 'R1280T'),
    ('Bose SoundLink Mini II', 'Bose', 149.99, 4, 'Bluetooth Speaker, Portable - 725192-1110', 5, 0, 1, 'speakers', '2023-10-26 07:53:45', 'Bose', '725192-1110');



    SELECT * FROM lojagamer.product WHERE on_sale = 1
    ORDER BY RAND()
    LIMIT 5