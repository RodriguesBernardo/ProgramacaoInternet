<?php
$livros = [
    ['nome' => 'O Lado feio do Amor', 'quantidade' => 0],
    ['nome' => 'O Diario de Anne Frank', 'quantidade' => 2],
    ['nome' => 'Assim que acaba', 'quantidade' => 1],
    ['nome' => 'Todas as suas imprefeições', 'quantidade' => 0],
    ['nome' => '9 de Novembro', 'quantidade' => 3],
    ['nome' => 'É assim que começa', 'quantidade' => 6],
    ['nome' => 'Doutor Sono', 'quantidade' => 4],
    ['nome' => 'O Mundo de Sofia', 'quantidade' => 0],
];

echo json_encode($livros);
?>
