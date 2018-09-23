'use strict'


var XLSX = require('xlsx')
var workbook = XLSX.readFile('lista.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);



var FECHAS=26 //CANTIDAD DE FECHAS JUGADA, Se debe multiplicar por la cantidad de partidas semanales
var PARTIDAS=0 //Champ=14, Amateur=21, Novato=13
//son 14 por se cuenta desde Jornada + local vs visitante pero solo toma en cuenta a los jugadores
//CHAMPION = 0 , AMATEUR = 1, NOVATO = 2
var Liga = 2
var PLAYERSCHAMPIONS =["DarK","AmadeX","DarkUnnamed","Emer","XsLel","Skoger","Drake","PLaYoNe","MauK","Slarkpro","BeRnO","LeeHarveyOswald","Hydrago","FirebatHero","Chris","IIISHAKAIII","RENDER","COLD","QUICKSILVER","FideosUchu","FULGORMORTEM","Delcrimen","Virus","Sirus"]
var PLAYERSAMATEUR =["Alenidas","LuckY","GREMORY","BLADEMASTER","TRIPOD","BlueBullet","HadesSacred","JUNGKOOK","DEUS","NepGear","Dreicko","TOJORI","PARKJIMIN","SkulL","Wilyou","TROVAS","AMERKING","Reivaj","Hatef","Malditango","Ssshap","Cube","Nightmare","Maydhas","Rotceh25","Vildo","NomadaPj","Jackwin","Ivanovich","Kalef","Devi","Joker","LAZER","Chelomac","Artanis","Alanocatex","IRONMAN","GaboDMC"]
var PLAYERSNOVATO =["TTAZLLERECK","GGPLAY","Rivaul","Chepo","Draexx","Pipen","WALTERO","X3SamusX3","RoCrash","Korderao","XSuzumiyaX","GaeleX","Gran_Ronald","Juanjo","GaimerThief","Jakhuri","OSO","MrCrowley","Nimodo","InserTNamE","METALL"]



//Obtiene el libro, dando de parametro el numero de libro que queremos leer
var first_sheet_name = workbook.SheetNames[Liga];
console.log(PLAYERSCHAMPIONS)
//Coordenadas exactas
var letra1='B'
var numero='1'
var LETRA=['A','B','C','D','E']

var PLAYERS =[]
var fechasJugadas =[]
var seriesGanadas =[]
var seriesPerdidas =[]
var derrotasPorWo =[]
var juegosGanados =[]
var juegosPerdidos =[]
var Puntos =[]
participantes(Liga)
//////////////////////////////////////////////////////////////////////



//BLOQUE PARA CHAMPIONSHIP
// var PLAYERS =["DarK","AmadeX","DarkUnnamed","Emer","XsLel","Skoger","Drake","PLaYoNe","MauK","Slarkpro","BeRnO","LeeHarveyOswald","Hydrago","FirebatHero","Chris","IIISHAKAIII","RENDER","COLD","QUICKSILVER","FideosUchu","FULGORMORTEM","Delcrimen","Virus","Sirus"]
// PLAYERS.sort()
// var fechasJugadas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var seriesGanadas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var seriesPerdidas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var derrotasPorWo =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var juegosGanados =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var juegosPerdidos =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var Puntos =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//BLOQUE PARA AMATEUR
// var PLAYERS =["Alenidas","LuckY","GREMORY","BLADEMASTER","TRIPOD","BlueBullet","HadesSacred","JUNGKOOK","DEUS","NepGear","Dreicko","TOJORI","PARKJIMIN","SkulL","Wilyou","TROVAS","AMERKING","Reivaj","Hatef","Malditango","Ssshap","Cube","Nightmare","Maydhas","Rotceh25","Vildo","NomadaPj","Jackwin","Ivanovich","Kalef","Devi","Joker","LAZER","Chelomac","Artanis","Alanocatex","IRONMAN","GaboDMC"]
// PLAYERS.sort()

// var fechasJugadas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var seriesGanadas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var seriesPerdidas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var derrotasPorWo =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var juegosGanados =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var juegosPerdidos =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var Puntos =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//BLOQUE PARA NOVATO
//var PLAYERS =["TTAZLLERECK","GGPLAY","Rivaul","Chepo","Draexx","Pipen","WALTERO","X3SamusX3","RoCrash","Korderao","XSuzumiyaX","GaeleX","Gran_Ronald","Juanjo","GaimerThief","Jakhuri","OSO","MrCrowley","Nimodo","InserTNamE","METALL"]
// PLAYERS.sort()
// var fechasJugadas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var seriesGanadas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var seriesPerdidas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var derrotasPorWo =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var juegosGanados =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var juegosPerdidos =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// var Puntos =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


//Obtiene el libro
var worksheet = workbook.Sheets[first_sheet_name];

//Encuentra la coordenada exacta
var desired_cell = worksheet[letra1+numero];
 //Obtiene el valor de la coordenada
var desired_value = (desired_cell ? desired_cell.v : undefined);
//console.log(desired_value)
console.log("----------------------------------------------------------------")
console.log("SCORE - PLAYER")
for (let i = 0; i < FECHAS*PARTIDAS; i++) {
    var auxScore1 = worksheet[LETRA[0]+(i+1)];
    var auxPlayer1 = worksheet[LETRA[1]+(i+1)];
    var auxScore2 = worksheet[LETRA[4]+(i+1)];
    var auxPlayer2 = worksheet[LETRA[3]+(i+1)];
    //Obtiene el valor de la coordenada
    var score1 = (auxScore1 ? auxScore1.v : undefined);
    var player1 = (auxPlayer1 ? auxPlayer1.v : undefined);
    var score2 = (auxScore2 ? auxScore2.v : undefined);
    var player2 = (auxPlayer2 ? auxPlayer2.v : undefined);
    for (let j = 0; j < PLAYERS.length; j++) {
        if(player1==PLAYERS[j]){
            
            if(score1==2){
                //Puntos
                var auxi = Puntos[j]
                Puntos[j] = auxi+2
                //Fechas Jugadas
                var auxi2 = fechasJugadas[j]
                fechasJugadas[j] = auxi2+1

                //Series Ganadas
                var auxi3 = seriesGanadas[j]
                seriesGanadas[j] = auxi3+1

                //+2 por partida ganada
                var auxi4 = juegosGanados[j]
                juegosGanados[j] = auxi4+2
                if(score2==1){
                    //+1 por partida derrotada
                    var auxi5 = juegosPerdidos[j]
                    juegosPerdidos[j] = auxi5+1
                }
                
                
            }
            if(score1==1 || score1==0){
                //+ 1 punto, por jugar y perder
                var auxi = Puntos[j]
                Puntos[j] = auxi+1

                //Fechas Jugadas
                var auxi2 = fechasJugadas[j]
                fechasJugadas[j] = auxi2+1

                //+1 por serie perdida
                var auxi2 = seriesPerdidas[j]
                seriesPerdidas[j] = auxi2+1
                
                //si es 1, +1 por partida ganada
                if(score1==1){
                
                    var auxi4 = juegosGanados[j]
                    juegosGanados[j] = auxi4+1
                }

                //+2 por partida derrotada
                var auxi5 = juegosPerdidos[j]
                juegosPerdidos[j] = auxi5+2

                
                
            }
            if(score1=='w.o.' || score1=='w.o' ){
                var auxi = derrotasPorWo[j]
                derrotasPorWo[j] = auxi+1
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        if(player2==PLAYERS[j]){
            
            if(score2==2){
                //Puntos
                var auxi = Puntos[j]
                Puntos[j] = auxi+2
                //Fechas Jugadas
                var auxi2 = fechasJugadas[j]
                fechasJugadas[j] = auxi2+1

                //Series Ganadas
                var auxi3 = seriesGanadas[j]
                seriesGanadas[j] = auxi3+1

                //+2 por partida ganada
                var auxi4 = juegosGanados[j]
                juegosGanados[j] = auxi4+2
                if(score1==1){
                    //+1 por partida derrotada
                    var auxi5 = juegosPerdidos[j]
                    juegosPerdidos[j] = auxi5+1
                }
                
                
            }
            if(score2==1 || score2==0){
                
                //+ 1 punto, por jugar y perder
                var auxi = Puntos[j]
                Puntos[j] = auxi+1

                //Fechas Jugadas
                var auxi2 = fechasJugadas[j]
                fechasJugadas[j] = auxi2+1
                
                //+1 por serie perdida
                var auxi2 = seriesPerdidas[j]
                seriesPerdidas[j] = auxi2+1
                
                //si es 1, +1 por partida ganada
                if(score2==1){
                
                    var auxi4 = juegosGanados[j]
                    juegosGanados[j] = auxi4+1
                }

                //+2 por partida derrotada
                var auxi5 = juegosPerdidos[j]
                juegosPerdidos[j] = auxi5+2

                
                
            }
            if(score2=='w.o.' || score2=='w.o' ){
                var auxi = derrotasPorWo[j]
                derrotasPorWo[j] = auxi+1
            }
        }
        
    }

    //console.log(score1+"  -   "+player1 +"         VS      "+player2+"  -  "+score2)
    
    
}


console.log("PLAYERS    -     PUNTOS")
for (let i = 0; i < PLAYERS.length; i++) {
    
    //console.log(PLAYERS[i]+"       -      "+Puntos[i])
    
}
// console.log("PLAYERS---------------------------------------------------")
// console.log(PLAYERS)
// console.log("FECHAS JUGADAS---------------------------------------------------")
// console.log(fechasJugadas)
// console.log("SERIES GANADAS---------------------------------------------------")
// console.log(seriesGanadas)
// console.log("SERIES PERDIDAS---------------------------------------------------")
// console.log(seriesPerdidas)
// console.log("DERROTAS POR W.O.---------------------------------------------------")
// console.log(derrotasPorWo)
// console.log("JUEGOS GANADOS---------------------------------------------------")
// console.log(juegosGanados)
// console.log("JUEGOS PERDIDOS---------------------------------------------------")
// console.log(juegosPerdidos)
// console.log("PUNTOS---------------------------------------------------")
// console.log(Puntos)

for (let i = 0; i < PLAYERS.length; i++) {
    console.log(PLAYERS[i])
}
console.log("FECHAS JUGADAS---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(fechasJugadas[i])
}
console.log("SERIES GANADAS---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(seriesGanadas[i])
}
console.log("SERIES PERDIDAS---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(seriesPerdidas[i])
}
console.log("DERROTAS POR W.O.---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(derrotasPorWo[i])
}
console.log("JUEGOS GANADOS---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(juegosGanados[i])
}
console.log("JUEGOS PERDIDOS---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(juegosPerdidos[i])
}
console.log("PUNTOS---------------------------------------------------")
for (let i = 0; i < PLAYERS.length; i++) {
    console.log(Puntos[i])
}

async function participantes (liga){
    
    if(liga==0){
    
        PLAYERS = PLAYERSCHAMPIONS
        PLAYERS.sort()
        PARTIDAS=14
        
    }
    if(liga==1){
        PLAYERS = PLAYERSAMATEUR
        PLAYERS.sort()
        PARTIDAS=21
    }
    if(liga==2){
        PLAYERS = PLAYERSNOVATO
        PLAYERS.sort()
        PARTIDAS=13
    }
    for (let i = 0; i < PLAYERS.length; i++) {
        fechasJugadas.push(0)
        seriesGanadas.push(0)
        seriesPerdidas.push(0)
        derrotasPorWo.push(0)
        juegosGanados.push(0)
        juegosPerdidos.push(0)
        Puntos.push(0)
    }

}
//////////////////////////////////////////////////////////////////////