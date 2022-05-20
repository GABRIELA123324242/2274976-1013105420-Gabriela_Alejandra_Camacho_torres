<?php

$jsonContenido='[
        {"nombre":"alison","apellido":"Uh" },
        {"nombre":"chaves","apellido":"Perez"}
    ]';

      $resultado= json_decode($jsonContenido);
    //print_r($resultado);

      foreach($resultado as $persona){
          echo($persona->nombre)." ".($persona->apellido)."<br/>";
   }
   

   
   ?>