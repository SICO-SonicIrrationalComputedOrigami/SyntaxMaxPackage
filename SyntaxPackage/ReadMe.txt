
0) ISTRUZIONI SULL'USO DEL FILTRO

syntax.filter.maxpat

abscration per richiamare una serie di cinque filtri per adattare l'exciter con il relativo strumento sul quale viene applicato. I filtri sono costruiti in gen~ e la lista coi preset é il file js "filterSelection.js"

1) COME SI USA

L'argomento che bisogna scrivere nell'oggetto é lo strumento e l'eventuale lato di applicazione dell'exciter. L'abstracrtion è mono e presenta un inlet e un outlet per il segnale audio.

Lista degli argomenti		Exciter Applicato Dayton Audio


 violin_front				10 W 
               
 violin_back				10 W  
  
 alto_front				24 W        

 alto_back				24 W
              
 cello_front				40 W
        
 cello_back				40 W

 piano					40 W

 piano2					40 W

 pianoSUB				40-50-60 W
               
 perc_TamTam				40 W
             
 perc_Cassa				40 W
              


2) Limiter/Compressore del segnale

syntax.compressor.maxpat

Questa abstraction in gen~ processa segnali mono e serve a correggere la risposta audio con 3 modalità, poi personalizzabili:

1) bypassed
2) soft limiter
3) hard limiter

