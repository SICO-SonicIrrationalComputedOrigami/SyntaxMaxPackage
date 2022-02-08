
0) ISTRUZIONI SULL'USO DEL FILTRO

syntax.filter.maxpat

Abstraction che permette di richiamare una serie di cinque filtri per adattare l'exciter allo strumento sul quale viene applicato. 
I filtri sono sviluppati in gen~ e la lista contenente i preset é il file "filterSelection.js"

1) COME SI USA

L'argomento che può essere scritto nell'oggetto é lo strumento e l'eventuale lato di applicazione dell'exciter. 
L'abstraction è mono e presenta un inlet e un outlet per il segnale audio.

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

Questa abstraction in gen~ processa segnali mono al fine di controllare la dinamica del segnale inviata agli exciter.
Attualmente sono presenti tre salvataggi dei parametri di controllo della dinamica richiamabili attraverso l'oggetto preset:

1) bypassed
2) soft limiter
3) hard limiter

