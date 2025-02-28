<?php

$login = $_POST['login'];
$senha = $_POST['senha'];

$resposta = [];

if ($login === "admin" && $senha === "admin"){
    $resposta['sucesso'] = "Autenticação realizada com sucesso";
}else {
    $resposta['erro'] = "Erro ao realizar autenticação!";
}

print json_encode($resposta);

?>