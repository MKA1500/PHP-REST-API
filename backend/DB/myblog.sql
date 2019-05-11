-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 11 Maj 2019, 17:07
-- Wersja serwera: 10.1.30-MariaDB
-- Wersja PHP: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `myblog`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(1, 'Technology', '2019-04-20 16:38:39'),
(2, 'Gaming', '2019-04-20 16:38:39'),
(3, 'Auto', '2019-04-20 16:38:39'),
(4, 'Entertainment', '2019-04-20 16:38:39'),
(5, 'Books', '2019-04-20 16:38:39');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `lead` text NOT NULL,
  `image` text NOT NULL,
  `body` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `title`, `lead`, `image`, `body`, `author`, `created_at`) VALUES
(1, 1, 'Technology Post One', 'Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Abies_koreana_%28poprawione%29.jpg/630px-Abies_koreana_%28poprawione%29.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Sam Smith', '2019-04-20 16:38:39'),
(2, 2, 'Gaming Post One', 'Consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis.', 'https://upload.wikimedia.org/wikipedia/commons/a/aa/SP-ASJ_Douglas_DC-2-115D_in_Almaza_1937.JPG', 'Adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque.', 'Kevin Williams', '2019-04-20 16:38:39'),
(3, 1, 'Technology Post Two', 'Adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swietoslawska.jpg/640px-Swietoslawska.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Sam Smith', '2019-04-20 16:38:39'),
(4, 4, 'Entertainment Post One', 'Elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis.', 'https://upload.wikimedia.org/wikipedia/commons/6/61/Woodstock-kids.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Mary Jackson', '2019-04-20 16:38:39'),
(5, 4, 'Entertainment Post Two', 'Consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Buchla_200e_with_Passive_Frame.jpg/640px-Buchla_200e_with_Passive_Frame.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Mary Jackson', '2019-04-20 16:38:39'),
(6, 1, 'Technology Post Three', 'Consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CDC_HDR_I.jpg/640px-CDC_HDR_I.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Sam Smith', '2019-04-20 16:38:39');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
