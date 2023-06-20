-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 20, 2023 alle 14:54
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lineshare`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `feedbackTesto` text DEFAULT NULL,
  `voto` int(11) NOT NULL,
  `idGuidatore` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `feedback`
--

INSERT INTO `feedback` (`id`, `feedbackTesto`, `voto`, `idGuidatore`, `idCliente`) VALUES
(1, NULL, 5, 2, 1),
(2, NULL, 4, 2, 1),
(3, NULL, 1, 3, 1),
(4, NULL, 3, 4, 1),
(5, NULL, 5, 6, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `prenotazione`
--

CREATE TABLE `prenotazione` (
  `idViaggio` int(11) NOT NULL,
  `idUtente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `numeroCellulare` varchar(20) DEFAULT NULL,
  `dataNascita` date DEFAULT NULL,
  `sesso` tinyint(1) DEFAULT NULL,
  `fotoProfilo` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`id`, `email`, `pass`, `nome`, `cognome`, `numeroCellulare`, `dataNascita`, `sesso`, `fotoProfilo`) VALUES
(1, 't38@libero.it', '$2y$10$LLF45YPSVFcUiz966eowMe4SUcgdGtXjoMtZIQ8rl/uy.yikdm9Ri', 'Thomas', 'Pernice', NULL, NULL, NULL, 0x2f6c696e6573686172652f67656e6572616c2f6173736574732f757365722f363439313832653663386664325f746f6d6d61736f2e6a7067),
(2, 'cassatagianlu@gmail.com', '$2y$10$NE9Zfb1RR3qc0gbaoQ4csecLtpC8wj7rZTDR9gLkViIqZ13Dmdcn6', 'Gianluca', 'Cassata', NULL, NULL, NULL, 0x2f6c696e6573686172652f67656e6572616c2f6173736574732f757365722f363439313961616432396465375f63617373692e6a7067),
(3, 'samuelelucia993@gmail.com', '$2y$10$ppQY4Ggym7mIePuLCMJjpOxZQQf22sHFBGJemAQSIIXkSI1g9YejC', 'Samuele', 'Lucia', NULL, NULL, NULL, 0x2f6c696e6573686172652f67656e6572616c2f6173736574732f757365722f363439313834303863356232385f73616d752e6a7067),
(4, 'clarissa.vetromile@gmail.com', '$2y$10$yIgv.8XGinUzefWSDKRbeuMeIZVnQ.XptlL8WRGZgIm3NizTGOfe2', 'Clarissa', 'Vetromile', NULL, NULL, NULL, 0x2f6c696e6573686172652f67656e6572616c2f6173736574732f757365722f363439313834663065376231655f636c6172692e6a7067),
(5, 'giuseppe.palagonia@gmail.com', '$2y$10$NIhfstv8AiyQ1IdGTVgFgOG15QIylQi3S8y3xkTUrtZMz//3uqOK6', 'Giuseppe', 'Palagonia', NULL, NULL, NULL, 0x2f6c696e6573686172652f67656e6572616c2f6173736574732f757365722f363439313837616539633866395f70657070652e6a7067),
(6, 'francesco.tuzzolino@gmail.com', '$2y$10$8dpwxcjyuSs8AOJEXVsrXuc4tslh7CUv2iAq4yUt/Pryk4zPapF16', 'Francesco', 'Tuzzolino', NULL, NULL, NULL, 0x2f6c696e6573686172652f67656e6572616c2f6173736574732f757365722f363439313935343164326264395f66696c652e6a7067);

-- --------------------------------------------------------

--
-- Struttura della tabella `viaggio`
--

CREATE TABLE `viaggio` (
  `id` int(11) NOT NULL,
  `partenza` varchar(50) NOT NULL,
  `arrivo` varchar(50) NOT NULL,
  `data` date NOT NULL,
  `orarioPartenza` varchar(10) NOT NULL,
  `orarioArrivo` varchar(10) NOT NULL,
  `nPasseggeri` int(11) NOT NULL,
  `nMaxPasseggeri` int(11) NOT NULL,
  `prezzoTotale` float NOT NULL,
  `note` tinytext DEFAULT NULL,
  `idGuidatore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `viaggio`
--

INSERT INTO `viaggio` (`id`, `partenza`, `arrivo`, `data`, `orarioPartenza`, `orarioArrivo`, `nPasseggeri`, `nMaxPasseggeri`, `prezzoTotale`, `note`, `idGuidatore`) VALUES
(1, 'Ficarazzi', 'Palermo', '2023-06-28', '8:00', '09:00', 2, 4, 5, NULL, 2),
(2, 'Marineo', 'Palermo', '2023-06-28', '08:00', '09:00', 1, 3, 7.5, NULL, 4),
(3, 'Ficarazzi', 'Palermo', '2023-06-28', '08:20', '09:00', 0, 1, 0.2, NULL, 3),
(4, 'Marineo', 'Palermo', '2023-06-28', '07:45', '08:45', 0, 3, 6.3, NULL, 1),
(5, 'Mezzojuso', 'Palermo', '2023-06-28', '12:00', '13:00', 2, 4, 3.8, NULL, 5),
(7, 'Palermo', 'Mezzojuso', '2023-06-28', '19:00', '20:20', 0, 4, 6.3, NULL, 5),
(8, 'Palermo', 'Mezzojuso', '2023-06-28', '21:00', '22:30', 1, 3, 10, NULL, 1),
(9, 'Mezzojuso', 'Marineo', '2023-06-29', '12:00', '12:30', 0, 3, 5, NULL, 1),
(10, 'Marineo', 'Palermo', '2023-06-28', '07:20', '07:50', 0, 4, 3.8, NULL, 6),
(11, 'Palermo', 'Ficarazzi', '2023-06-28', '18:40', '19:00', 2, 4, 2.5, NULL, 6),
(12, 'Ficarazzi', 'Mezzojuso', '2023-06-29', '06:40', '07:20', 0, 6, 7.5, NULL, 6),
(13, 'Mezzojuso', 'Marineo', '2023-06-29', '15:00', '15:20', 0, 4, 7.5, NULL, 6),
(14, 'Palermo', 'Ficarazzi', '2023-06-28', '15:30', '16:00', 1, 3, 1.3, NULL, 4),
(15, 'Ficarazzi', 'Palermo', '2023-06-28', '20:00', '21:00', 3, 4, 5, NULL, 4),
(16, 'Palermo', 'Marineo', '2023-06-29', '19:20', '20:00', 1, 4, 6.3, NULL, 4),
(17, 'Palermo', 'Marineo', '2023-06-28', '21:20', '21:50', 0, 4, 7.5, NULL, 2);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGuidatore` (`idGuidatore`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Indici per le tabelle `prenotazione`
--
ALTER TABLE `prenotazione`
  ADD KEY `idViaggio` (`idViaggio`),
  ADD KEY `idUtente` (`idUtente`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `viaggio`
--
ALTER TABLE `viaggio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGuidatore` (`idGuidatore`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `utente`
--
ALTER TABLE `utente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `viaggio`
--
ALTER TABLE `viaggio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`idGuidatore`) REFERENCES `utente` (`id`),
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`idCliente`) REFERENCES `utente` (`id`);

--
-- Limiti per la tabella `prenotazione`
--
ALTER TABLE `prenotazione`
  ADD CONSTRAINT `prenotazione_ibfk_1` FOREIGN KEY (`idViaggio`) REFERENCES `viaggio` (`id`),
  ADD CONSTRAINT `prenotazione_ibfk_2` FOREIGN KEY (`idUtente`) REFERENCES `utente` (`id`);

--
-- Limiti per la tabella `viaggio`
--
ALTER TABLE `viaggio`
  ADD CONSTRAINT `viaggio_ibfk_1` FOREIGN KEY (`idGuidatore`) REFERENCES `utente` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
