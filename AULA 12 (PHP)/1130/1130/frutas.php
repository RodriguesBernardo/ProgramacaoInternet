<?php
    $frutas = ['Melão', 'Maçã', 'Abacaxi', 'Limão', 'Morango', 'Laranja'];

    $frutas2 = [
        ['nome' => 'Melão', 'cor' => 'yellow'],
        ['nome' => 'Maçã', 'cor' => 'red'],
        ['nome' => 'Abacaxi', 'cor' => 'yellow'],
        ['nome' => 'Limão', 'cor' => 'green'],
        ['nome' => 'Morango', 'cor' => 'red'],
        ['nome' => 'Banana', 'cor' => 'yellow']

    ];

    print json_encode($frutas2);
?>