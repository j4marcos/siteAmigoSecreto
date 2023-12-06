<?php

$usuario = 'id21601686_j4marcos';
$senha = 'Dados!2023';
$database = 'id21601686_users_database';
$host = 'localhost';

$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->error) {
    die("Falha ao conectar ao banco de dados: " . $mysqli->error);
}