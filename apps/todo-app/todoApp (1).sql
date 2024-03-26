-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 26, 2024 at 10:43 AM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todoApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `completed` tinyint(1) DEFAULT '0',
  `idUser` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `title`, `completed`, `idUser`) VALUES
(1, 'delectus aut autem', 0, 1),
(2, 'quis ut nam facilis et officia qui', 0, 1),
(3, 'fugiat veniam minus', 0, 1),
(4, 'et porro tempora', 1, 1),
(5, 'laboriosam mollitia et enim quasi adipisci quia provident illum', 0, 1),
(6, 'qui ullam ratione quibusdam voluptatem quia omnis', 0, 1),
(7, 'illo expedita consequatur quia in', 0, 1),
(8, 'quo adipisci enim quam ut ab', 1, 1),
(9, 'molestiae perspiciatis ipsa', 0, 1),
(10, 'illo est ratione doloremque quia maiores aut', 1, 1),
(11, 'vero rerum temporibus dolor', 1, 1),
(12, 'ipsa repellendus fugit nisi', 1, 1),
(13, 'et doloremque nulla', 0, 1),
(14, 'repellendus sunt dolores architecto voluptatum', 1, 1),
(15, 'ab voluptatum amet voluptas', 1, 1),
(16, 'accusamus eos facilis sint et aut voluptatem', 1, 1),
(17, 'quo laboriosam deleniti aut qui', 1, 1),
(18, 'dolorum est consequatur ea mollitia in culpa', 0, 1),
(19, 'molestiae ipsa aut voluptatibus pariatur dolor nihil', 1, 1),
(20, 'ullam nobis libero sapiente ad optio sint', 1, 1),
(21, 'suscipit repellat esse quibusdam voluptatem incidunt', 0, 2),
(22, 'distinctio vitae autem nihil ut molestias quo', 1, 2),
(23, 'et itaque necessitatibus maxime molestiae qui quas velit', 0, 2),
(24, 'adipisci non ad dicta qui amet quaerat doloribus ea', 0, 2),
(25, 'voluptas quo tenetur perspiciatis explicabo natus', 1, 2),
(26, 'aliquam aut quasi', 1, 2),
(27, 'veritatis pariatur delectus', 1, 2),
(28, 'nesciunt totam sit blanditiis sit', 0, 2),
(29, 'laborum aut in quam', 0, 2),
(30, 'nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis', 1, 2),
(31, 'repudiandae totam in est sint facere fuga', 0, 2),
(32, 'earum doloribus ea doloremque quis', 0, 2),
(33, 'sint sit aut vero', 0, 2),
(34, 'porro aut necessitatibus eaque distinctio', 0, 2),
(35, 'repellendus veritatis molestias dicta incidunt', 1, 2),
(36, 'excepturi deleniti adipisci voluptatem et neque optio illum ad', 1, 2),
(37, 'sunt cum tempora', 0, 2),
(38, 'totam quia non', 0, 2),
(39, 'doloremque quibusdam asperiores libero corrupti illum qui omnis', 0, 2),
(40, 'totam atque quo nesciunt', 1, 2),
(41, 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit', 0, 3),
(42, 'rerum perferendis error quia ut eveniet', 0, 3),
(43, 'tempore ut sint quis recusandae', 1, 3),
(44, 'cum debitis quis accusamus doloremque ipsa natus sapiente omnis', 1, 3),
(45, 'velit soluta adipisci molestias reiciendis harum', 0, 3),
(46, 'vel voluptatem repellat nihil placeat corporis', 0, 3),
(47, 'nam qui rerum fugiat accusamus', 0, 3),
(48, 'sit reprehenderit omnis quia', 0, 3),
(49, 'ut necessitatibus aut maiores debitis officia blanditiis velit et', 0, 3),
(50, 'cupiditate necessitatibus ullam aut quis dolor voluptate', 1, 3),
(51, 'distinctio exercitationem ab doloribus', 0, 3),
(52, 'nesciunt dolorum quis recusandae ad pariatur ratione', 0, 3),
(53, 'qui labore est occaecati recusandae aliquid quam', 0, 3),
(54, 'quis et est ut voluptate quam dolor', 1, 3),
(55, 'voluptatum omnis minima qui occaecati provident nulla voluptatem ratione', 1, 3),
(56, 'deleniti ea temporibus enim', 1, 3),
(57, 'pariatur et magnam ea doloribus similique voluptatem rerum quia', 0, 3),
(58, 'est dicta totam qui explicabo doloribus qui dignissimos', 0, 3),
(59, 'perspiciatis velit id laborum placeat iusto et aliquam odio', 0, 3),
(60, 'et sequi qui architecto ut adipisci', 1, 3),
(61, 'odit optio omnis qui sunt', 1, 4),
(62, 'et placeat et tempore aspernatur sint numquam', 0, 4),
(63, 'doloremque aut dolores quidem fuga qui nulla', 1, 4),
(64, 'voluptas consequatur qui ut quia magnam nemo esse', 0, 4),
(65, 'fugiat pariatur ratione ut asperiores necessitatibus magni', 0, 4),
(66, 'rerum eum molestias autem voluptatum sit optio', 0, 4),
(67, 'quia voluptatibus voluptatem quos similique maiores repellat', 0, 4),
(68, 'aut id perspiciatis voluptatem iusto', 0, 4),
(69, 'doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit', 0, 4),
(70, 'ut sequi accusantium et mollitia delectus sunt', 0, 4),
(71, 'aut velit saepe ullam', 0, 4),
(72, 'praesentium facilis facere quis harum voluptatibus voluptatem eum', 0, 4),
(73, 'sint amet quia totam corporis qui exercitationem commodi', 1, 4),
(74, 'expedita tempore nobis eveniet laborum maiores', 0, 4),
(75, 'occaecati adipisci est possimus totam', 0, 4),
(76, 'sequi dolorem sed', 1, 4),
(77, 'maiores aut nesciunt delectus exercitationem vel assumenda eligendi at', 0, 4),
(78, 'reiciendis est magnam amet nemo iste recusandae impedit quaerat', 0, 4),
(79, 'eum ipsa maxime ut', 1, 4),
(80, 'tempore molestias dolores rerum sequi voluptates ipsum consequatur', 1, 4),
(81, 'suscipit qui totam', 1, 5),
(82, 'voluptates eum voluptas et dicta', 0, 5),
(83, 'quidem at rerum quis ex aut sit quam', 1, 5),
(84, 'sunt veritatis ut voluptate', 0, 5),
(85, 'et quia ad iste a', 1, 5),
(86, 'incidunt ut saepe autem', 1, 5),
(87, 'laudantium quae eligendi consequatur quia et vero autem', 1, 5),
(88, 'vitae aut excepturi laboriosam sint aliquam et et accusantium', 0, 5),
(89, 'sequi ut omnis et', 1, 5),
(90, 'molestiae nisi accusantium tenetur dolorem et', 1, 5),
(91, 'nulla quis consequatur saepe qui id expedita', 1, 5),
(92, 'in omnis laboriosam', 1, 5),
(93, 'odio iure consequatur molestiae quibusdam necessitatibus quia sint', 1, 5),
(94, 'facilis modi saepe mollitia', 0, 5),
(95, 'vel nihil et molestiae iusto assumenda nemo quo ut', 1, 5),
(96, 'nobis suscipit ducimus enim asperiores voluptas', 0, 5),
(97, 'dolorum laboriosam eos qui iure aliquam', 0, 5),
(98, 'debitis accusantium ut quo facilis nihil quis sapiente necessitatibus', 1, 5),
(99, 'neque voluptates ratione', 0, 5),
(100, 'excepturi a et neque qui expedita vel voluptate', 0, 5),
(101, 'explicabo enim cumque porro aperiam occaecati minima', 0, 6),
(102, 'sed ab consequatur', 0, 6),
(103, 'non sunt delectus illo nulla tenetur enim omnis', 0, 6),
(104, 'excepturi non laudantium quo', 0, 6),
(105, 'totam quia dolorem et illum repellat voluptas optio', 1, 6),
(106, 'ad illo quis voluptatem temporibus', 1, 6),
(107, 'praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt', 0, 6),
(108, 'a eos eaque nihil et exercitationem incidunt delectus', 1, 6),
(109, 'autem temporibus harum quisquam in culpa', 1, 6),
(110, 'aut aut ea corporis', 1, 6),
(111, 'magni accusantium labore et id quis provident', 0, 6),
(112, 'consectetur impedit quisquam qui deserunt non rerum consequuntur eius', 0, 6),
(113, 'quia atque aliquam sunt impedit voluptatum rerum assumenda nisi', 0, 6),
(114, 'cupiditate quos possimus corporis quisquam exercitationem beatae', 0, 6),
(115, 'sed et ea eum', 0, 6),
(116, 'ipsa dolores vel facilis ut', 1, 6),
(117, 'sequi quae est et qui qui eveniet asperiores', 0, 6),
(118, 'quia modi consequatur vero fugiat', 0, 6),
(119, 'corporis ducimus ea perspiciatis iste', 0, 6),
(120, 'dolorem laboriosam vel voluptas et aliquam quasi', 0, 6),
(121, 'inventore aut nihil minima laudantium hic qui omnis', 1, 7),
(122, 'provident aut nobis culpa', 1, 7),
(123, 'esse et quis iste est earum aut impedit', 0, 7),
(124, 'qui consectetur id', 0, 7),
(125, 'aut quasi autem iste tempore illum possimus', 0, 7),
(126, 'ut asperiores perspiciatis veniam ipsum rerum saepe', 1, 7),
(127, 'voluptatem libero consectetur rerum ut', 1, 7),
(128, 'eius omnis est qui voluptatem autem', 0, 7),
(129, 'rerum culpa quis harum', 0, 7),
(130, 'nulla aliquid eveniet harum laborum libero alias ut unde', 1, 7),
(131, 'qui ea incidunt quis', 0, 7),
(132, 'qui molestiae voluptatibus velit iure harum quisquam', 1, 7),
(133, 'et labore eos enim rerum consequatur sunt', 1, 7),
(134, 'molestiae doloribus et laborum quod ea', 0, 7),
(135, 'facere ipsa nam eum voluptates reiciendis vero qui', 0, 7),
(136, 'asperiores illo tempora fuga sed ut quasi adipisci', 0, 7),
(137, 'qui sit non', 0, 7),
(138, 'placeat minima consequatur rem qui ut', 1, 7),
(139, 'consequatur doloribus id possimus voluptas a voluptatem', 0, 7),
(140, 'aut consectetur in blanditiis deserunt quia sed laboriosam', 1, 7),
(141, 'explicabo consectetur debitis voluptates quas quae culpa rerum non', 1, 8),
(142, 'maiores accusantium architecto necessitatibus reiciendis ea aut', 1, 8),
(143, 'eum non recusandae cupiditate animi', 0, 8),
(144, 'ut eum exercitationem sint', 0, 8),
(145, 'beatae qui ullam incidunt voluptatem non nisi aliquam', 0, 8),
(146, 'molestiae suscipit ratione nihil odio libero impedit vero totam', 1, 8),
(147, 'eum itaque quod reprehenderit et facilis dolor autem ut', 1, 8),
(148, 'esse quas et quo quasi exercitationem', 0, 8),
(149, 'animi voluptas quod perferendis est', 0, 8),
(150, 'eos amet tempore laudantium fugit a', 0, 8),
(151, 'accusamus adipisci dicta qui quo ea explicabo sed vero', 1, 8),
(152, 'odit eligendi recusandae doloremque cumque non', 0, 8),
(153, 'ea aperiam consequatur qui repellat eos', 0, 8),
(154, 'rerum non ex sapiente', 1, 8),
(155, 'voluptatem nobis consequatur et assumenda magnam', 1, 8),
(156, 'nam quia quia nulla repellat assumenda quibusdam sit nobis', 1, 8),
(157, 'dolorem veniam quisquam deserunt repellendus', 1, 8),
(158, 'debitis vitae delectus et harum accusamus aut deleniti a', 1, 8),
(159, 'debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis', 1, 8),
(160, 'et praesentium aliquam est', 0, 8),
(161, 'ex hic consequuntur earum omnis alias ut occaecati culpa', 1, 9),
(162, 'omnis laboriosam molestias animi sunt dolore', 1, 9),
(163, 'natus corrupti maxime laudantium et voluptatem laboriosam odit', 0, 9),
(164, 'reprehenderit quos aut aut consequatur est sed', 0, 9),
(165, 'fugiat perferendis sed aut quidem', 0, 9),
(166, 'quos quo possimus suscipit minima ut', 0, 9),
(167, 'et quis minus quo a asperiores molestiae', 0, 9),
(168, 'recusandae quia qui sunt libero', 0, 9),
(169, 'ea odio perferendis officiis', 1, 9),
(170, 'quisquam aliquam quia doloribus aut', 0, 9),
(171, 'fugiat aut voluptatibus corrupti deleniti velit iste odio', 1, 9),
(172, 'et provident amet rerum consectetur et voluptatum', 0, 9),
(173, 'harum ad aperiam quis', 0, 9),
(174, 'similique aut quo', 0, 9),
(175, 'laudantium eius officia perferendis provident perspiciatis asperiores', 1, 9),
(176, 'magni soluta corrupti ut maiores rem quidem', 0, 9),
(177, 'et placeat temporibus voluptas est tempora quos quibusdam', 0, 9),
(178, 'nesciunt itaque commodi tempore', 1, 9),
(179, 'omnis consequuntur cupiditate impedit itaque ipsam quo', 1, 9),
(180, 'debitis nisi et dolorem repellat et', 1, 9),
(181, 'ut cupiditate sequi aliquam fuga maiores', 0, 10),
(182, 'inventore saepe cumque et aut illum enim', 1, 10),
(183, 'omnis nulla eum aliquam distinctio', 1, 10),
(184, 'molestias modi perferendis perspiciatis', 0, 10),
(185, 'voluptates dignissimos sed doloribus animi quaerat aut', 0, 10),
(186, 'explicabo odio est et', 0, 10),
(187, 'consequuntur animi possimus', 0, 10),
(188, 'vel non beatae est', 1, 10),
(189, 'culpa eius et voluptatem et', 1, 10),
(190, 'accusamus sint iusto et voluptatem exercitationem', 1, 10),
(191, 'temporibus atque distinctio omnis eius impedit tempore molestias pariatur', 1, 10),
(192, 'ut quas possimus exercitationem sint voluptates', 0, 10),
(193, 'rerum debitis voluptatem qui eveniet tempora distinctio a', 1, 10),
(194, 'sed ut vero sit molestiae', 0, 10),
(195, 'rerum ex veniam mollitia voluptatibus pariatur', 1, 10),
(196, 'consequuntur aut ut fugit similique', 1, 10),
(197, 'dignissimos quo nobis earum saepe', 1, 10),
(198, 'quis eius est sint explicabo', 1, 10),
(199, 'numquam repellendus a magnam', 1, 10),
(200, 'ipsam aperiam voluptates qui', 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`) VALUES
(1, 'Micaela', 'Alva Beltrán', 'Micaela.AlvaBeltran@gmail.com'),
(2, 'Ester', 'Villa Barreto', 'Ester45@corpfolder.com'),
(3, 'Mercedes', 'Rojo Xenia', 'Mercedes24@nearbpo.com'),
(4, 'Francisco Javier', 'Cabrera Estrada', 'FranciscoJavier.CabreraEstrada@gmail.com'),
(5, 'Elsa', 'Ñañez Portillo', 'Elsa87@yahoo.com'),
(6, 'Agustín', 'Almaraz Serrato', 'Agustin_AlmarazSerrato@corpfolder.com'),
(7, 'Mario', 'Zambrano de Pantoja', 'Mario.ZambranodePantoja1@corpfolder.com'),
(8, 'Matías', 'Zarate Soto', 'Matias97@hotmail.com'),
(9, 'Irene', 'Correa Henríquez', 'Irene.CorreaHenriquez20@hotmail.com'),
(10, 'Kevin', 'Peres Barela', 'Kevin_PeresBarela6@gmail.com'),
(11, 'Rogelio', 'Trejo Estrada', 'test@test.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
