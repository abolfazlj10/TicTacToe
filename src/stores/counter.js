import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'Game',
  state: () => ({
    LevelUserHome : true,
    LevelUserChoseGird : false,
    GamePlay3 : false ,
    GamePlay5 : false ,
    GamePlay7 : false ,
    mode : '', 
    MovePlayerNumberGame : 'Player 1 to Move',
    PlaceNumberWithWin : '',
    infoBodyStyle : false ,
    tagPlayerOne : '<i class="fa-solid fa-xmark colorXmarkTag"></i>',
    tagPlatyerTwo : '<i class="fa-regular fa-circle colorCircleTag"></i>',
    MovePlayer : 'oneMove',
    CounterCopmuter : 0,
    CounterAllPlace : 0,
    RandomNumber : null,
    lastIndexArryGame : 0,
    WhiWinPlayer : 1,
    ShoeMoodalWin : false ,
    ShowModalDraw : false ,
    ISwinPlayerTwo : false ,
    IsWinPlayerOne : false,
    PlayedSound : true, 
    TagNoPlaySound : '<i class="fa-solid fa-volume-xmark"></i>',
    TagPlaySound : '<i class="fa-solid fa-volume-high"></i>',
    Grid33: [
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
    ],
    grid55 : [
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
    ],
    grid77 : [
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
      {ModeGrid : ''},
    ]
  }),

  actions : {
    

    ChoseGridPlayerOne1(){
      this.PlayEffect()
      this.LevelUserHome = false
      this.LevelUserChoseGird = true
      this.mode = 'one'
    },
    ChoseGridPlayerOne2 (){
      this.PlayEffect()
      this.LevelUserHome = false
      this.LevelUserChoseGird = true
      this.mode = 'two'
    },
    GamePlay3OnePlayer (){
      this.PlayEffect()
      this.LevelUserChoseGird = false
      this.GamePlay3 = true
      this.PlaceNumberWithWin = 'Place 3 In A Row!'
    },
    GamePlay5OnePlayer (){
      this.PlayEffect()
      this.LevelUserChoseGird = false
      this.GamePlay5 = true
      this.PlaceNumberWithWin = 'Place 4 In A Row!'
    },
    GamePlay7OnePlayer (){
      this.PlayEffect()
      this.LevelUserChoseGird = false
      this.GamePlay7 = true
      this.PlaceNumberWithWin = 'Place 4 In A Row!'
    },
    ComeHome (){
      this.PlayEffect()
      this.GamePlay3 = false
      this.GamePlay5 = false
      this.GamePlay7 = false
      this.LevelUserChoseGird = false
      this.LevelUserHome = true
      this.mode = ''
    },
    infoShow(bool){
      this.PlayEffect()
      this.infoBodyStyle = bool
    },
    WinShowPlayer (Player){
      if (this.PlayedSound){
        if (Player == 'two' && this.mode == 'one'){
          this.PlayErorrSound()
        }else {
          this.PlaySoundWin()
        }
      }
      
      this.MovePlayer = 'twoMove'
      setTimeout(() => {
        this.WhiWinPlayer = Player
        this.ShoeMoodalWin = true
      }, 1000);
    },
    CloseBoxWin (){
      this.PlayEffect()
      this.ShoeMoodalWin = false
      this.EndGame(9)
    },
    DrawShoeBox (){
      if (this.PlayedSound){
        this.PlayErorrSound()
      }
      this.ShowModalDraw = true
    },
    CloseBoxDraw (){
      this.PlayEffect()
      this.ShowModalDraw = false
      this.EndGame()
    },
    ComeHomeAndEndGame (endNumber){
      this.ComeHome()
      this.EndGame(endNumber)
    },
    IsPlayedSoung (){
      if (this.PlayedSound){
        this.PlayEffect()
        this.PlayedSound = false 
      }else {
        this.PlayedSound = true
      }
    },
    PlayEffect (){
      if (this.PlayedSound){
        var MuxicSound = document.getElementById('soundClick')
        MuxicSound.play()
      }
    },
    PlayErorrSound (){
      var soundErorr = document.getElementById('SoundDanger')
      soundErorr.play()
    },
    PlaySoundWin (){
      var SoundWInGame = document.getElementById('SoundWin')
      SoundWInGame.play()
    },
    EndGame (){
      this.MovePlayer = 'oneMove'
      this.CounterAllPlace = 0
      this.CounterCopmuter = 0
      this.RandomNumber = 0
      this.lastIndexArryGame = 0
      this.ISwinPlayerTwo = false
        this.IsWinPlayerOne = false
        this.MovePlayerNumberGame = 'Player 1 to Move'
        
        this.Grid33.forEach((item)=>{
          item.ModeGrid = ""
        })

        this.grid55.forEach((item)=>{
          item.ModeGrid = ""
        })
        
        this.grid77.forEach((item)=>{
          item.ModeGrid = ""
        })
    },
    StartGame (Place , TypeGrid){
      
      this.PlayEffect()
      if (this.MovePlayer == 'oneMove'){
        
        if (TypeGrid == 3){
          if (Place == '1.1' && this.Grid33[0].ModeGrid == ''){
            this.Grid33[0].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 0
            this.CounterAllPlace++
          }else if (Place == '1.2' && this.Grid33[1].ModeGrid == ''){
            this.Grid33[1].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 1
            this.CounterAllPlace++
          }else if (Place == '1.3' && this.Grid33[2].ModeGrid == ''){
            this.Grid33[2].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 2
            this.CounterAllPlace++
          }else if (Place == '2.1' && this.Grid33[3].ModeGrid == ''){
            this.Grid33[3].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 3
            this.CounterAllPlace++
          }else if (Place == '2.2' && this.Grid33[4].ModeGrid == ''){
            this.Grid33[4].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 4
            this.CounterAllPlace++
          }else if (Place == '2.3' && this.Grid33[5].ModeGrid == ''){
            this.Grid33[5].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 5
            this.CounterAllPlace++
          }else if (Place == '3.1' && this.Grid33[6].ModeGrid == ''){
            this.Grid33[6].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 6
            this.CounterAllPlace++
          }else if (Place == '3.2' && this.Grid33[7].ModeGrid == ''){
            this.Grid33[7].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 7
            this.CounterAllPlace++
          }else if (Place == '3.3' && this.Grid33[8].ModeGrid == ''){
            this.Grid33[8].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 8
            this.CounterAllPlace++
  
          }
          this.testWinPlayer3('one')

          this.MovePlayerNumberGame = 'Player 2 to Move'
          if (this.MovePlayer == 'twoMove' && this.mode == 'one'  && this.CounterCopmuter != 5 && this.IsWinPlayerOne == false ){
            setTimeout(() => {   
              if (this.CounterAllPlace == 9){
                this.DrawShoeBox()
              }else {
                  this.TwoPlayerComputer()
                  this.MovePlayerNumberGame = 'Player 1 to Move'
                this.CounterAllPlace++
              }
              this.testWinPlayer3('two')
            }, 500);
          }else {
            if (this.CounterAllPlace == 9 && this.IsWinPlayerOne == false ){
              this.DrawShoeBox()
            }
          }

        }else if (TypeGrid == 5){


          if (Place == '1.1' && this.grid55[0].ModeGrid == ''){

            this.grid55[0].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 0
            this.CounterAllPlace++
            
          }else if (Place == '1.2' && this.grid55[1].ModeGrid == ''){

            this.grid55[1].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 1
            this.CounterAllPlace++
            
          }else if (Place == '1.3' && this.grid55[2].ModeGrid == ''){

            this.grid55[2].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 2
            this.CounterAllPlace++
            
          }else if (Place == '1.4' && this.grid55[3].ModeGrid == ''){

            this.grid55[3].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 3
            this.CounterAllPlace++
            
          }else if (Place == '1.5' && this.grid55[4].ModeGrid == ''){

            this.grid55[4].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 4
            this.CounterAllPlace++
            
          }else if (Place == '2.1' && this.grid55[5].ModeGrid == ''){

            this.grid55[5].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 5
            this.CounterAllPlace++
            
          }else if (Place == '2.2' && this.grid55[6].ModeGrid == ''){

            this.grid55[6].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 6
            this.CounterAllPlace++
            
          }else if (Place == '2.3' && this.grid55[7].ModeGrid == ''){

            this.grid55[7].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 7
            this.CounterAllPlace++
            
          }else if (Place == '2.4' && this.grid55[8].ModeGrid == ''){

            this.grid55[8].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 8
            this.CounterAllPlace++
            
          }else if (Place == '2.5' && this.grid55[9].ModeGrid == ''){

            this.grid55[9].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 9
            this.CounterAllPlace++
            
          }else if (Place == '3.1' && this.grid55[10].ModeGrid == ''){

            this.grid55[10].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 10
            this.CounterAllPlace++
            
          }else if (Place == '3.2' && this.grid55[11].ModeGrid == ''){

            this.grid55[11].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 11
            this.CounterAllPlace++
            
          }else if (Place == '3.3' && this.grid55[12].ModeGrid == ''){

            this.grid55[12].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 12
            this.CounterAllPlace++
            
          }else if (Place == '3.4' && this.grid55[13].ModeGrid == ''){

            this.grid55[13].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 13
            this.CounterAllPlace++
            
          }else if (Place == '3.5' && this.grid55[14].ModeGrid == ''){

            this.grid55[14].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 14
            this.CounterAllPlace++
            
          }else if (Place == '4.1' && this.grid55[15].ModeGrid == ''){

            this.grid55[15].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 15
            this.CounterAllPlace++
            
          }else if (Place == '4.2' && this.grid55[16].ModeGrid == ''){

            this.grid55[16].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 16
            this.CounterAllPlace++
            
          }else if (Place == '4.3' && this.grid55[17].ModeGrid == ''){

            this.grid55[17].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 17
            this.CounterAllPlace++
            
          }else if (Place == '4.4' && this.grid55[18].ModeGrid == ''){

            this.grid55[18].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 18
            this.CounterAllPlace++
            
          }else if (Place == '4.5' && this.grid55[19].ModeGrid == ''){

            this.grid55[19].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 19
            this.CounterAllPlace++
            
          }else if (Place == '5.1' && this.grid55[20].ModeGrid == ''){

            this.grid55[20].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 20
            this.CounterAllPlace++
            
          }else if (Place == '5.2' && this.grid55[21].ModeGrid == ''){

            this.grid55[21].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 21
            this.CounterAllPlace++
            
          }else if (Place == '5.3' && this.grid55[22].ModeGrid == ''){

            this.grid55[22].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 22
            this.CounterAllPlace++
            
          }else if (Place == '5.4' && this.grid55[23].ModeGrid == ''){

            this.grid55[23].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 23
            this.CounterAllPlace++
            
          }else if (Place == '5.5' && this.grid55[24].ModeGrid == ''){

            this.grid55[24].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 24
            this.CounterAllPlace++
          }
          this.testWinPlayer5('one')
          
          this.MovePlayerNumberGame = 'Player 2 to Move'
          if (this.MovePlayer == 'twoMove' && this.mode == 'one' && this.CounterCopmuter != 13 && this.IsWinPlayerOne == false ){
            setTimeout(() => {   
              if (this.CounterAllPlace == 25){
                this.DrawShoeBox()
              }else {
                  this.TwoPlayerComputer5()
                  this.MovePlayerNumberGame = 'Player 1 to Move'
                this.CounterAllPlace++
              }
              this.testWinPlayer5('two')
            }, 500);
          }else {
            if (this.CounterAllPlace == 25 && this.IsWinPlayerOne == false ){
              this.DrawShoeBox()
            }
          }



        }else if (TypeGrid == 7){


          if (Place == '1.1' && this.grid77[0].ModeGrid == ""){
            
            this.grid77[0].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 0
            this.CounterAllPlace++
            
          }else if (Place == '1.2' && this.grid77[1].ModeGrid == ""){
            
            this.grid77[1].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 1
            this.CounterAllPlace++
          }else if (Place == '1.3' && this.grid77[2].ModeGrid == ""){
            
            this.grid77[2].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 2
            this.CounterAllPlace++
          }else if (Place == '1.4' && this.grid77[3].ModeGrid == ""){
            
            this.grid77[3].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 3
            this.CounterAllPlace++
          }else if (Place == '1.5' && this.grid77[4].ModeGrid == ""){
            
            this.grid77[4].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 4
            this.CounterAllPlace++
          }else if (Place == '1.6' && this.grid77[5].ModeGrid == ""){
            
            this.grid77[5].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 5
            this.CounterAllPlace++
          }else if (Place == '1.7' && this.grid77[6].ModeGrid == ""){
            
            this.grid77[6].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 6
            this.CounterAllPlace++
          }else if (Place == '2.1' && this.grid77[7].ModeGrid == ""){
            
            this.grid77[7].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 7
            this.CounterAllPlace++
          }else if (Place == '2.2' && this.grid77[8].ModeGrid == ""){
            
            this.grid77[8].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 8
            this.CounterAllPlace++
          }else if (Place == '2.3' && this.grid77[9].ModeGrid == ""){
            
            this.grid77[9].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 9
            this.CounterAllPlace++
          }else if (Place == '2.4' && this.grid77[10].ModeGrid == ""){
            
            this.grid77[10].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 10
            this.CounterAllPlace++
          }else if (Place == '2.5' && this.grid77[11].ModeGrid == ""){
            
            this.grid77[11].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 11
            this.CounterAllPlace++
          }else if (Place == '2.6' && this.grid77[12].ModeGrid == ""){
            
            this.grid77[12].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 12
            this.CounterAllPlace++
          }else if (Place == '2.7' && this.grid77[13].ModeGrid == ""){
            
            this.grid77[13].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 13
            this.CounterAllPlace++
          }else if (Place == '3.1' && this.grid77[14].ModeGrid == ""){
            
            this.grid77[14].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 14
            this.CounterAllPlace++
          }else if (Place == '3.2' && this.grid77[15].ModeGrid == ""){
            
            this.grid77[15].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 15
            this.CounterAllPlace++
          }else if (Place == '3.3' && this.grid77[16].ModeGrid == ""){
            
            this.grid77[16].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 16
            this.CounterAllPlace++
          }else if (Place == '3.4' && this.grid77[17].ModeGrid == ""){
            
            this.grid77[17].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 17
            this.CounterAllPlace++
          }else if (Place == '3.5' && this.grid77[18].ModeGrid == ""){
            
            this.grid77[18].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 18
            this.CounterAllPlace++
          }else if (Place == '3.6' && this.grid77[19].ModeGrid == ""){
            
            this.grid77[19].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 19
            this.CounterAllPlace++
          }else if (Place == '3.7' && this.grid77[20].ModeGrid == ""){
            
            this.grid77[20].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 20
            this.CounterAllPlace++
          }else if (Place == '4.1' && this.grid77[21].ModeGrid == ""){
            
            this.grid77[21].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 21
            this.CounterAllPlace++
          }else if (Place == '4.2' && this.grid77[22].ModeGrid == ""){
            
            this.grid77[22].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 22
            this.CounterAllPlace++
          }else if (Place == '4.3' && this.grid77[23].ModeGrid == ""){
            
            this.grid77[23].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 23
            this.CounterAllPlace++
          }else if (Place == '4.4' && this.grid77[24].ModeGrid == ""){
            
            this.grid77[24].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 24
            this.CounterAllPlace++
          }else if (Place == '4.5' && this.grid77[25].ModeGrid == ""){
            
            this.grid77[25].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 25
            this.CounterAllPlace++
          }else if (Place == '4.6' && this.grid77[26].ModeGrid == ""){
            
            this.grid77[26].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 26
            this.CounterAllPlace++
          }else if (Place == '4.7' && this.grid77[27].ModeGrid == ""){
            
            this.grid77[27].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 27
            this.CounterAllPlace++
          }else if (Place == '5.1' && this.grid77[28].ModeGrid == ""){
            
            this.grid77[28].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 28
            this.CounterAllPlace++
          }else if (Place == '5.2' && this.grid77[29].ModeGrid == ""){
            
            this.grid77[29].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 29
            this.CounterAllPlace++
          }else if (Place == '5.3' && this.grid77[30].ModeGrid == ""){
            
            this.grid77[30].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 30
            this.CounterAllPlace++
          }else if (Place == '5.4' && this.grid77[31].ModeGrid == ""){
            
            this.grid77[31].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 31
            this.CounterAllPlace++
          }else if (Place == '5.5' && this.grid77[32].ModeGrid == ""){
            
            this.grid77[32].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 32
            this.CounterAllPlace++
          }else if (Place == '5.6' && this.grid77[33].ModeGrid == ""){
            
            this.grid77[33].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 33
            this.CounterAllPlace++
          }else if (Place == '5.7' && this.grid77[34].ModeGrid == ""){
            
            this.grid77[34].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 34
            this.CounterAllPlace++
          }else if (Place == '6.1' && this.grid77[35].ModeGrid == ""){
            
            this.grid77[35].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 35
            this.CounterAllPlace++
          }else if (Place == '6.2' && this.grid77[36].ModeGrid == ""){
            
            this.grid77[36].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 36
            this.CounterAllPlace++
          }else if (Place == '6.3' && this.grid77[37].ModeGrid == ""){
            
            this.grid77[37].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 37
            this.CounterAllPlace++
          }else if (Place == '6.4' && this.grid77[38].ModeGrid == ""){
            
            this.grid77[38].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 38
            this.CounterAllPlace++
          }else if (Place == '6.5' && this.grid77[39].ModeGrid == ""){
            
            this.grid77[39].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame =39
            this.CounterAllPlace++
          }else if (Place == '6.6' && this.grid77[40].ModeGrid == ""){
            
            this.grid77[40].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 40
            this.CounterAllPlace++
          }else if (Place == '6.7' && this.grid77[41].ModeGrid == ""){
            
            this.grid77[41].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 41
            this.CounterAllPlace++
          }else if (Place == '7.1' && this.grid77[42].ModeGrid == ""){
            
            this.grid77[42].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 42
            this.CounterAllPlace++
          }else if (Place == '7.2' && this.grid77[43].ModeGrid == ""){
            
            this.grid77[43].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 43
            this.CounterAllPlace++
          }else if (Place == '7.3' && this.grid77[44].ModeGrid == ""){
            
            this.grid77[44].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 44
            this.CounterAllPlace++
          }else if (Place == '7.4' && this.grid77[45].ModeGrid == ""){
            
            this.grid77[45].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 45
            this.CounterAllPlace++
          }else if (Place == '7.5' && this.grid77[46].ModeGrid == ""){
            
            this.grid77[46].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 46
            this.CounterAllPlace++
          }else if (Place == '7.6' && this.grid77[47].ModeGrid == ""){
            
            this.grid77[47].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 47
            this.CounterAllPlace++
          }else if (Place == '7.7' && this.grid77[48].ModeGrid == ""){
            
            this.grid77[48].ModeGrid = 'one'
            this.MovePlayer = 'twoMove'
            this.lastIndexArryGame = 48
            this.CounterAllPlace++
            
          }

          this.testWinPlayer7('one')
          
          this.MovePlayerNumberGame = 'Player 2 to Move'
          if (this.MovePlayer == 'twoMove' && this.mode == 'one' && this.CounterCopmuter != 25 && this.IsWinPlayerOne == false ){
            setTimeout(() => {   
              if (this.CounterAllPlace == 49){
                this.DrawShoeBox()
              }else {
                  this.TwoPlayerComputer7()
                  this.MovePlayerNumberGame = 'Player 1 to Move'
                this.CounterAllPlace++
              }
              this.testWinPlayer7('two')
            }, 500);
          }else {
            if (this.CounterAllPlace == 25 && this.IsWinPlayerOne == false ){
              this.DrawShoeBox()
            }
          }

        }
        


      }else {
        
        if (TypeGrid == 3){
          if (Place == '1.1' && this.Grid33[0].ModeGrid == ''){
            this.Grid33[0].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 0
            this.CounterAllPlace++
          }else if (Place == '1.2' && this.Grid33[1].ModeGrid == ''){
            this.Grid33[1].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 1
            this.CounterAllPlace++
          }else if (Place == '1.3' && this.Grid33[2].ModeGrid == ''){
            this.Grid33[2].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 2
            this.CounterAllPlace++
          }else if (Place == '2.1' && this.Grid33[3].ModeGrid == ''){
            this.Grid33[3].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 3
            this.CounterAllPlace++
          }else if (Place == '2.2' && this.Grid33[4].ModeGrid == ''){
            this.Grid33[4].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 4
            this.CounterAllPlace++
          }else if (Place == '2.3' && this.Grid33[5].ModeGrid == ''){
            this.Grid33[5].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 5
            this.CounterAllPlace++
          }else if (Place == '3.1' && this.Grid33[6].ModeGrid == ''){
            this.Grid33[6].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 6
            this.CounterAllPlace++
          }else if (Place == '3.2' && this.Grid33[7].ModeGrid == ''){
            this.Grid33[7].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 7
            this.CounterAllPlace++
          }else if (Place == '3.3' && this.Grid33[8].ModeGrid == ''){
            this.Grid33[8].ModeGrid = 'two'
            this.MovePlayer = 'oneMove'
            this.lastIndexArryGame = 8
            this.CounterAllPlace++
  
          }

          this.testWinPlayer3('two')
          this.MovePlayerNumberGame = 'Player 1 to Move'


      }else if (TypeGrid == 5){

        if (Place == '1.1' && this.grid55[0].ModeGrid == ''){

          this.grid55[0].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 0
          this.CounterAllPlace++
          
        }else if (Place == '1.2' && this.grid55[1].ModeGrid == ''){

          this.grid55[1].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 1
          this.CounterAllPlace++
          
        }else if (Place == '1.3' && this.grid55[2].ModeGrid == ''){

          this.grid55[2].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 2
          this.CounterAllPlace++
          
        }else if (Place == '1.4' && this.grid55[3].ModeGrid == ''){

          this.grid55[3].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 3
          this.CounterAllPlace++
          
        }else if (Place == '1.5' && this.grid55[4].ModeGrid == ''){

          this.grid55[4].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 4
          this.CounterAllPlace++
          
        }else if (Place == '2.1' && this.grid55[5].ModeGrid == ''){

          this.grid55[5].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 5
          this.CounterAllPlace++
          
        }else if (Place == '2.2' && this.grid55[6].ModeGrid == ''){

          this.grid55[6].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 6
          this.CounterAllPlace++
          
        }else if (Place == '2.3' && this.grid55[7].ModeGrid == ''){

          this.grid55[7].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 7
          this.CounterAllPlace++
          
        }else if (Place == '2.4' && this.grid55[8].ModeGrid == ''){

          this.grid55[8].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 8
          this.CounterAllPlace++
          
        }else if (Place == '2.5' && this.grid55[9].ModeGrid == ''){

          this.grid55[9].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 9
          this.CounterAllPlace++
          
        }else if (Place == '3.1' && this.grid55[10].ModeGrid == ''){

          this.grid55[10].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 10
          this.CounterAllPlace++
          
        }else if (Place == '3.2' && this.grid55[11].ModeGrid == ''){

          this.grid55[11].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 11
          this.CounterAllPlace++
          
        }else if (Place == '3.3' && this.grid55[12].ModeGrid == ''){

          this.grid55[12].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 12
          this.CounterAllPlace++
          
        }else if (Place == '3.4' && this.grid55[13].ModeGrid == ''){

          this.grid55[13].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 13
          this.CounterAllPlace++
          
        }else if (Place == '3.5' && this.grid55[14].ModeGrid == ''){

          this.grid55[14].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 14
          this.CounterAllPlace++
          
        }else if (Place == '4.1' && this.grid55[15].ModeGrid == ''){

          this.grid55[15].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 15
          this.CounterAllPlace++
          
        }else if (Place == '4.2' && this.grid55[16].ModeGrid == ''){

          this.grid55[16].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 16
          this.CounterAllPlace++
          
        }else if (Place == '4.3' && this.grid55[17].ModeGrid == ''){

          this.grid55[17].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 17
          this.CounterAllPlace++
          
        }else if (Place == '4.4' && this.grid55[18].ModeGrid == ''){

          this.grid55[18].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 18
          this.CounterAllPlace++
          
        }else if (Place == '4.5' && this.grid55[19].ModeGrid == ''){

          this.grid55[19].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 19
          this.CounterAllPlace++
          
        }else if (Place == '5.1' && this.grid55[20].ModeGrid == ''){

          this.grid55[20].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 20
          this.CounterAllPlace++
          
        }else if (Place == '5.2' && this.grid55[21].ModeGrid == ''){

          this.grid55[21].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 21
          this.CounterAllPlace++
          
        }else if (Place == '5.3' && this.grid55[22].ModeGrid == ''){

          this.grid55[22].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 22
          this.CounterAllPlace++
          
        }else if (Place == '5.4' && this.grid55[23].ModeGrid == ''){

          this.grid55[23].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 23
          this.CounterAllPlace++
          
        }else if (Place == '5.5' && this.grid55[24].ModeGrid == ''){

          this.grid55[24].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 24
          this.CounterAllPlace++
        }
        this.MovePlayerNumberGame = 'Player 1 to Move'

        this.testWinPlayer5('two')

      }else if (TypeGrid == 7){

        
        if (Place == '1.1' && this.grid77[0].ModeGrid == ""){
            
          this.grid77[0].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 0
          this.CounterAllPlace++
          
        }else if (Place == '1.2' && this.grid77[1].ModeGrid == ""){
          
          this.grid77[1].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 1
          this.CounterAllPlace++
        }else if (Place == '1.3' && this.grid77[2].ModeGrid == ""){
          
          this.grid77[2].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 2
          this.CounterAllPlace++
        }else if (Place == '1.4' && this.grid77[3].ModeGrid == ""){
          
          this.grid77[3].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 3
          this.CounterAllPlace++
        }else if (Place == '1.5' && this.grid77[4].ModeGrid == ""){
          
          this.grid77[4].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 4
          this.CounterAllPlace++
        }else if (Place == '1.6' && this.grid77[5].ModeGrid == ""){
          
          this.grid77[5].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 5
          this.CounterAllPlace++
        }else if (Place == '1.7' && this.grid77[6].ModeGrid == ""){
          
          this.grid77[6].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 6
          this.CounterAllPlace++
        }else if (Place == '2.1' && this.grid77[7].ModeGrid == ""){
          
          this.grid77[7].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 7
          this.CounterAllPlace++
        }else if (Place == '2.2' && this.grid77[8].ModeGrid == ""){
          
          this.grid77[8].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 8
          this.CounterAllPlace++
        }else if (Place == '2.3' && this.grid77[9].ModeGrid == ""){
          
          this.grid77[9].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 9
          this.CounterAllPlace++
        }else if (Place == '2.4' && this.grid77[10].ModeGrid == ""){
          
          this.grid77[10].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 10
          this.CounterAllPlace++
        }else if (Place == '2.5' && this.grid77[11].ModeGrid == ""){
          
          this.grid77[11].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 11
          this.CounterAllPlace++
        }else if (Place == '2.6' && this.grid77[12].ModeGrid == ""){
          
          this.grid77[12].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 12
          this.CounterAllPlace++
        }else if (Place == '2.7' && this.grid77[13].ModeGrid == ""){
          
          this.grid77[13].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 13
          this.CounterAllPlace++
        }else if (Place == '3.1' && this.grid77[14].ModeGrid == ""){
          
          this.grid77[14].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 14
          this.CounterAllPlace++
        }else if (Place == '3.2' && this.grid77[15].ModeGrid == ""){
          
          this.grid77[15].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 15
          this.CounterAllPlace++
        }else if (Place == '3.3' && this.grid77[16].ModeGrid == ""){
          
          this.grid77[16].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 16
          this.CounterAllPlace++
        }else if (Place == '3.4' && this.grid77[17].ModeGrid == ""){
          
          this.grid77[17].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 17
          this.CounterAllPlace++
        }else if (Place == '3.5' && this.grid77[18].ModeGrid == ""){
          
          this.grid77[18].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 18
          this.CounterAllPlace++
        }else if (Place == '3.6' && this.grid77[19].ModeGrid == ""){
          
          this.grid77[19].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 19
          this.CounterAllPlace++
        }else if (Place == '3.7' && this.grid77[20].ModeGrid == ""){
          
          this.grid77[20].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 20
          this.CounterAllPlace++
        }else if (Place == '4.1' && this.grid77[21].ModeGrid == ""){
          
          this.grid77[21].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 21
          this.CounterAllPlace++
        }else if (Place == '4.2' && this.grid77[22].ModeGrid == ""){
          
          this.grid77[22].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 22
          this.CounterAllPlace++
        }else if (Place == '4.3' && this.grid77[23].ModeGrid == ""){
          
          this.grid77[23].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 23
          this.CounterAllPlace++
        }else if (Place == '4.4' && this.grid77[24].ModeGrid == ""){
          
          this.grid77[24].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 24
          this.CounterAllPlace++
        }else if (Place == '4.5' && this.grid77[25].ModeGrid == ""){
          
          this.grid77[25].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 25
          this.CounterAllPlace++
        }else if (Place == '4.6' && this.grid77[26].ModeGrid == ""){
          
          this.grid77[26].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 26
          this.CounterAllPlace++
        }else if (Place == '4.7' && this.grid77[27].ModeGrid == ""){
          
          this.grid77[27].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 27
          this.CounterAllPlace++
        }else if (Place == '5.1' && this.grid77[28].ModeGrid == ""){
          
          this.grid77[28].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 28
          this.CounterAllPlace++
        }else if (Place == '5.2' && this.grid77[29].ModeGrid == ""){
          
          this.grid77[29].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 29
          this.CounterAllPlace++
        }else if (Place == '5.3' && this.grid77[30].ModeGrid == ""){
          
          this.grid77[30].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 30
          this.CounterAllPlace++
        }else if (Place == '5.4' && this.grid77[31].ModeGrid == ""){
          
          this.grid77[31].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 31
          this.CounterAllPlace++
        }else if (Place == '5.5' && this.grid77[32].ModeGrid == ""){
          
          this.grid77[32].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 32
          this.CounterAllPlace++
        }else if (Place == '5.6' && this.grid77[33].ModeGrid == ""){
          
          this.grid77[33].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 33
          this.CounterAllPlace++
        }else if (Place == '5.7' && this.grid77[34].ModeGrid == ""){
          
          this.grid77[34].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 34
          this.CounterAllPlace++
        }else if (Place == '6.1' && this.grid77[35].ModeGrid == ""){
          
          this.grid77[35].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 35
          this.CounterAllPlace++
        }else if (Place == '6.2' && this.grid77[36].ModeGrid == ""){
          
          this.grid77[36].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 36
          this.CounterAllPlace++
        }else if (Place == '6.3' && this.grid77[37].ModeGrid == ""){
          
          this.grid77[37].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 37
          this.CounterAllPlace++
        }else if (Place == '6.4' && this.grid77[38].ModeGrid == ""){
          
          this.grid77[38].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 38
          this.CounterAllPlace++
        }else if (Place == '6.5' && this.grid77[39].ModeGrid == ""){
          
          this.grid77[39].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame =39
          this.CounterAllPlace++
        }else if (Place == '6.6' && this.grid77[40].ModeGrid == ""){
          
          this.grid77[40].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 40
          this.CounterAllPlace++
        }else if (Place == '6.7' && this.grid77[41].ModeGrid == ""){
          
          this.grid77[41].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 41
          this.CounterAllPlace++
        }else if (Place == '7.1' && this.grid77[42].ModeGrid == ""){
          
          this.grid77[42].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 42
          this.CounterAllPlace++
        }else if (Place == '7.2' && this.grid77[43].ModeGrid == ""){
          
          this.grid77[43].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 43
          this.CounterAllPlace++
        }else if (Place == '7.3' && this.grid77[44].ModeGrid == ""){
          
          this.grid77[44].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 44
          this.CounterAllPlace++
        }else if (Place == '7.4' && this.grid77[45].ModeGrid == ""){
          
          this.grid77[45].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 45
          this.CounterAllPlace++
        }else if (Place == '7.5' && this.grid77[46].ModeGrid == ""){
          
          this.grid77[46].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 46
          this.CounterAllPlace++
        }else if (Place == '7.6' && this.grid77[47].ModeGrid == ""){
          
          this.grid77[47].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 47
          this.CounterAllPlace++
        }else if (Place == '7.7' && this.grid77[48].ModeGrid == ""){
          
          this.grid77[48].ModeGrid = 'two'
          this.MovePlayer = 'oneMove'
          this.lastIndexArryGame = 48
          this.CounterAllPlace++
          
        }
        this.MovePlayerNumberGame = 'Player 1 to Move'
        this.testWinPlayer7('two')

      }
      }
    },

    TwoPlayerComputer (){
      if (this.CounterCopmuter == 0){
        this.RandomNumber = Math.floor(Math.random() *9)
        if (this.RandomNumber != this.lastIndexArryGame && this.Grid33[this.RandomNumber].ModeGrid == ''){
          this.Grid33[this.RandomNumber].ModeGrid = 'two'
          this.CounterCopmuter++

        }else{
          this.TwoPlayerComputer()
        }
      }else{
      this.PlacePlayerTwoWithWin()
      if (!this.ISwinPlayerTwo){
        if (this.lastIndexArryGame == 0){
          if (this.Grid33[1].ModeGrid == 'one'){
            if (this.Grid33[2].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[2].ModeGrid = 'two'
            }
          }else if (this.Grid33[2].ModeGrid == 'one'){
            if (this.Grid33[1].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[1].ModeGrid = 'two'
            }
          }else if (this.Grid33[3].ModeGrid == 'one'){
            if (this.Grid33[6].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[6].ModeGrid = 'two'
            }
          }else if (this.Grid33[6].ModeGrid == 'one'){
            if (this.Grid33[3].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[3].ModeGrid = 'two'
            }
          }else if (this.Grid33[8].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[8].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[8].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 1){
  
          if (this.Grid33[0].ModeGrid == 'one'){
            if (this.Grid33[2].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[2].ModeGrid = 'two'
            }
          }else if (this.Grid33[2].ModeGrid == 'one'){
            if (this.Grid33[0].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[0].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[7].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[7].ModeGrid = 'two'
            }
          }else if (this.Grid33[7].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 2){
          if (this.Grid33[0].ModeGrid == 'one'){
            if (this.Grid33[1].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[1].ModeGrid = 'two'
            }
          }else if (this.Grid33[1].ModeGrid == 'one'){
            if (this.Grid33[0].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[0].ModeGrid = 'two'
            }
          }else if (this.Grid33[5].ModeGrid == 'one'){
            if (this.Grid33[8].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[8].ModeGrid = 'two'
            }
          }else if (this.Grid33[8].ModeGrid == 'one'){
            if (this.Grid33[5].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[5].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[6].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[6].ModeGrid = 'two'
            }
          }else if (this.Grid33[6].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
          
        }else if (this.lastIndexArryGame == 3){
  
          if (this.Grid33[0].ModeGrid == 'one'){
            if (this.Grid33[6].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[6].ModeGrid = 'two'
            }
          }else if (this.Grid33[6].ModeGrid == 'one'){
            if (this.Grid33[0].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[0].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[5].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[5].ModeGrid = 'two'
            }
          }else if (this.Grid33[5].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 4){
  
          if (this.Grid33[5].ModeGrid == 'one'){
            if (this.Grid33[3].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[3].ModeGrid = 'two'
            }
          }else if (this.Grid33[1].ModeGrid == 'one'){
            if (this.Grid33[7].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[7].ModeGrid = 'two'
            }
          }else if (this.Grid33[7].ModeGrid == 'one'){
            if (this.Grid33[1].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[1].ModeGrid = 'two'
            }
          }else if (this.Grid33[3].ModeGrid == 'one'){
            if (this.Grid33[5].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[5].ModeGrid = 'two'
            }
          }else if (this.Grid33[8].ModeGrid == 'one'){
            if (this.Grid33[0].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[0].ModeGrid = 'two'
            }
          }else if (this.Grid33[0].ModeGrid == 'one'){
            if (this.Grid33[8].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[8].ModeGrid = 'two'
            }
          }else if (this.Grid33[2].ModeGrid == 'one'){
            if (this.Grid33[6].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[6].ModeGrid = 'two'
            }
          }else if (this.Grid33[6].ModeGrid == 'one'){
            if (this.Grid33[2].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[2].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 5){
  
          if (this.Grid33[2].ModeGrid == 'one'){
            if (this.Grid33[8].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[8].ModeGrid = 'two'
            }
          }else if (this.Grid33[8].ModeGrid == 'one'){
            if (this.Grid33[2].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[2].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[3].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[3].ModeGrid = 'two'
            }
          }else if (this.Grid33[3].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 6){
  
          if (this.Grid33[3].ModeGrid == 'one'){
            if (this.Grid33[5].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[5].ModeGrid = 'two'
            }
          }else if (this.Grid33[5].ModeGrid == 'one'){
            if (this.Grid33[3].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[3].ModeGrid = 'two'
            }
          }else if (this.Grid33[7].ModeGrid == 'one'){
            if (this.Grid33[8].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[8].ModeGrid = 'two'
            }
          }else if (this.Grid33[8].ModeGrid == 'one'){
            if (this.Grid33[7].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[7].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[2].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[2].ModeGrid = 'two'
            }
          }else if (this.Grid33[2].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 7){
  
          if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[1].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[1].ModeGrid = 'two'
            }
          }else if (this.Grid33[1].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }else if (this.Grid33[6].ModeGrid == 'one'){
            if (this.Grid33[8].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[8].ModeGrid = 'two'
            }
          }else if (this.Grid33[8].ModeGrid == 'one'){
            if (this.Grid33[6].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[6].ModeGrid = 'two'
            }
          }else {
            this.methodsifIsTrue()
          }
  
        }else if (this.lastIndexArryGame == 8){
  
          if (this.Grid33[5].ModeGrid == 'one'){
            if (this.Grid33[2].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[2].ModeGrid = 'two'
            }
          }else if (this.Grid33[2].ModeGrid == 'one'){
            if (this.Grid33[5].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[5].ModeGrid = 'two'
            }
          }else if (this.Grid33[7].ModeGrid == 'one'){
            if (this.Grid33[6].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[6].ModeGrid = 'two'
            }
          }else if (this.Grid33[6].ModeGrid == 'one'){
            if (this.Grid33[7].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[7].ModeGrid = 'two'
            }
          }else if (this.Grid33[4].ModeGrid == 'one'){
            if (this.Grid33[0].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[0].ModeGrid = 'two'
            }
          }else if (this.Grid33[0].ModeGrid == 'one'){
            if (this.Grid33[4].ModeGrid != ''){
              this.methodsifIsTrue()
            }else {
              this.Grid33[4].ModeGrid = 'two'
            }
          }
  
  
        }

      }
        this.CounterCopmuter++
      }
      this.MovePlayer = 'oneMove'
    },
    methodsifIsTrue(){
      if (this.RandomNumber == 0){

        if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'

        }
        
      }else if (this.RandomNumber == 1){
        
        if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two'
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'

        }
        
      }else if (this.RandomNumber == 2){
        
        if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'

        }
        
      }else if (this.RandomNumber == 3){

        if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two' 
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two' 
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two' 
        }else if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two' 
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two' 
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two' 
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two' 
        }
        
      }else if (this.RandomNumber == 4){

        if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two'
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'
        }
        
      }else if (this.RandomNumber == 5){

        if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }
        
      }else if (this.RandomNumber == 6){

        if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'
        }
        
      }else if (this.RandomNumber == 7){
        
        if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }else if (this.Grid33[8].ModeGrid == ""){
          this.Grid33[8].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two'
        }
        
      }else if (this.RandomNumber == 8){
        if (this.Grid33[7].ModeGrid == ""){
          this.Grid33[7].ModeGrid = 'two'
        }else if (this.Grid33[5].ModeGrid == ""){
          this.Grid33[5].ModeGrid = 'two'
        }else if (this.Grid33[4].ModeGrid == ""){
          this.Grid33[4].ModeGrid = 'two'
        }else if (this.Grid33[0].ModeGrid == ""){
          this.Grid33[0].ModeGrid = 'two'
        }else if (this.Grid33[1].ModeGrid == ""){
          this.Grid33[1].ModeGrid = 'two'
        }else if (this.Grid33[2].ModeGrid == ""){
          this.Grid33[2].ModeGrid = 'two'
        }else if (this.Grid33[3].ModeGrid == ""){
          this.Grid33[3].ModeGrid = 'two'
        }else if (this.Grid33[6].ModeGrid == ""){
          this.Grid33[6].ModeGrid = 'two'
        }
      }
    },
    
    testWinPlayer3 (Player){
        if (this.Grid33[0].ModeGrid == Player && this.Grid33[1].ModeGrid == Player && this.Grid33[2].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[3].ModeGrid == Player && this.Grid33[4].ModeGrid == Player && this.Grid33[5].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[6].ModeGrid == Player && this.Grid33[7].ModeGrid == Player && this.Grid33[8].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[0].ModeGrid == Player && this.Grid33[3].ModeGrid == Player && this.Grid33[6].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[1].ModeGrid == Player && this.Grid33[4].ModeGrid == Player && this.Grid33[7].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[2].ModeGrid == Player && this.Grid33[5].ModeGrid == Player && this.Grid33[8].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[0].ModeGrid == Player && this.Grid33[4].ModeGrid == Player && this.Grid33[8].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }else if (this.Grid33[2].ModeGrid == Player && this.Grid33[4].ModeGrid == Player && this.Grid33[6].ModeGrid == Player){
            this.WinShowPlayer(Player)
            this.IsWinPlayerOne = true
        }
    },
    PlacePlayerTwoWithWin (){
      if (this.Grid33[0].ModeGrid == 'two' && this.Grid33[1].ModeGrid == 'two' && this.Grid33[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[2].ModeGrid = 'two'
      }else if (this.Grid33[1].ModeGrid == 'two' && this.Grid33[2].ModeGrid == 'two' && this.Grid33[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[0].ModeGrid = 'two'
      }else if (this.Grid33[0].ModeGrid == 'two' && this.Grid33[2].ModeGrid == 'two' && this.Grid33[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[1].ModeGrid = 'two'
      }else if (this.Grid33[3].ModeGrid == 'two' && this.Grid33[4].ModeGrid == 'two' && this.Grid33[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[5].ModeGrid = 'two'
      }else if (this.Grid33[4].ModeGrid == 'two' && this.Grid33[5].ModeGrid == 'two' && this.Grid33[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[3].ModeGrid = 'two'
      }else if (this.Grid33[3].ModeGrid == 'two' && this.Grid33[5].ModeGrid == 'two' && this.Grid33[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[4].ModeGrid = 'two'
      }else if (this.Grid33[6].ModeGrid == 'two' && this.Grid33[7].ModeGrid == 'two' && this.Grid33[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[8].ModeGrid = 'two'
      }else if (this.Grid33[6].ModeGrid == 'two' && this.Grid33[8].ModeGrid == 'two' && this.Grid33[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[7].ModeGrid = 'two'
      }else if (this.Grid33[7].ModeGrid == 'two' && this.Grid33[8].ModeGrid == 'two' && this.Grid33[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[6].ModeGrid = 'two'
      }else if (this.Grid33[0].ModeGrid == 'two' && this.Grid33[3].ModeGrid == 'two' && this.Grid33[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[6].ModeGrid = 'two'
      }else if (this.Grid33[0].ModeGrid == 'two' && this.Grid33[6].ModeGrid == 'two' && this.Grid33[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[3].ModeGrid = 'two'
      }else if (this.Grid33[6].ModeGrid == 'two' && this.Grid33[3].ModeGrid == 'two' && this.Grid33[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[0].ModeGrid = 'two'
      }else if (this.Grid33[1].ModeGrid == 'two' && this.Grid33[4].ModeGrid == 'two' && this.Grid33[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[7].ModeGrid = 'two'
      }else if (this.Grid33[4].ModeGrid == 'two' && this.Grid33[7].ModeGrid == 'two' && this.Grid33[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[1].ModeGrid = 'two'
      }else if (this.Grid33[7].ModeGrid == 'two' && this.Grid33[1].ModeGrid == 'two' && this.Grid33[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[4].ModeGrid = 'two'
      }else if (this.Grid33[2].ModeGrid == 'two' && this.Grid33[5].ModeGrid == 'two' && this.Grid33[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[8].ModeGrid = 'two'
      }else if (this.Grid33[8].ModeGrid == 'two' && this.Grid33[5].ModeGrid == 'two' && this.Grid33[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[2].ModeGrid = 'two'
      }else if (this.Grid33[2].ModeGrid == 'two' && this.Grid33[8].ModeGrid == 'two' && this.Grid33[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[5].ModeGrid = 'two'
      }else if (this.Grid33[0].ModeGrid == 'two' && this.Grid33[4].ModeGrid == 'two' && this.Grid33[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[8].ModeGrid = 'two'
      }else if (this.Grid33[8].ModeGrid == 'two' && this.Grid33[4].ModeGrid == 'two' && this.Grid33[0].ModeGrid == ""){ 
        this.ISwinPlayerTwo = true
        this.Grid33[0].ModeGrid = 'two'
      }else if (this.Grid33[0].ModeGrid == 'two' && this.Grid33[8].ModeGrid == 'two' && this.Grid33[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[4].ModeGrid = 'two'
      }else if (this.Grid33[2].ModeGrid == 'two' && this.Grid33[4].ModeGrid == 'two' && this.Grid33[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[6].ModeGrid = 'two'
      }else if (this.Grid33[6].ModeGrid == 'two' && this.Grid33[4].ModeGrid == 'two' && this.Grid33[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[2].ModeGrid = 'two'
      }else if (this.Grid33[2].ModeGrid == 'two' && this.Grid33[6].ModeGrid == 'two' && this.Grid33[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.Grid33[4].ModeGrid = 'two'

      }
    },

    // 5×5
    testWinPlayer5 (Player){
      if (this.grid55[0].ModeGrid == Player && this.grid55[1].ModeGrid == Player && this.grid55[2].ModeGrid == Player && this.grid55[3].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[1].ModeGrid == Player && this.grid55[2].ModeGrid == Player && this.grid55[3].ModeGrid == Player && this.grid55[4].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[5].ModeGrid == Player && this.grid55[6].ModeGrid == Player && this.grid55[7].ModeGrid == Player && this.grid55[8].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[6].ModeGrid == Player && this.grid55[7].ModeGrid == Player && this.grid55[8].ModeGrid == Player && this.grid55[9].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[10].ModeGrid == Player && this.grid55[11].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[13].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[11].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[13].ModeGrid == Player && this.grid55[14].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[15].ModeGrid == Player && this.grid55[16].ModeGrid == Player && this.grid55[17].ModeGrid == Player && this.grid55[18].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[16].ModeGrid == Player && this.grid55[17].ModeGrid == Player && this.grid55[18].ModeGrid == Player && this.grid55[19].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[20].ModeGrid == Player && this.grid55[21].ModeGrid == Player && this.grid55[22].ModeGrid == Player && this.grid55[23].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[21].ModeGrid == Player && this.grid55[22].ModeGrid == Player && this.grid55[23].ModeGrid == Player && this.grid55[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[0].ModeGrid == Player && this.grid55[5].ModeGrid == Player && this.grid55[10].ModeGrid == Player && this.grid55[15].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[5].ModeGrid == Player && this.grid55[10].ModeGrid == Player && this.grid55[15].ModeGrid == Player && this.grid55[20].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[1].ModeGrid == Player && this.grid55[6].ModeGrid == Player && this.grid55[11].ModeGrid == Player && this.grid55[16].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[6].ModeGrid == Player && this.grid55[11].ModeGrid == Player && this.grid55[16].ModeGrid == Player && this.grid55[21].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[2].ModeGrid == Player && this.grid55[7].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[17].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[7].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[17].ModeGrid == Player && this.grid55[22].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[3].ModeGrid == Player && this.grid55[8].ModeGrid == Player && this.grid55[13].ModeGrid == Player && this.grid55[18].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[8].ModeGrid == Player && this.grid55[13].ModeGrid == Player && this.grid55[18].ModeGrid == Player && this.grid55[23].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[4].ModeGrid == Player && this.grid55[9].ModeGrid == Player && this.grid55[14].ModeGrid == Player && this.grid55[19].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[9].ModeGrid == Player && this.grid55[14].ModeGrid == Player && this.grid55[19].ModeGrid == Player && this.grid55[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[1].ModeGrid == Player && this.grid55[7].ModeGrid == Player && this.grid55[13].ModeGrid == Player && this.grid55[19].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[0].ModeGrid == Player && this.grid55[6].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[18].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[6].ModeGrid == Player && this.grid55[18].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[5].ModeGrid == Player && this.grid55[11].ModeGrid == Player && this.grid55[17].ModeGrid == Player && this.grid55[23].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[15].ModeGrid == Player && this.grid55[11].ModeGrid == Player && this.grid55[7].ModeGrid == Player && this.grid55[3].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[20].ModeGrid == Player && this.grid55[16].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[8].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[16].ModeGrid == Player && this.grid55[12].ModeGrid == Player && this.grid55[8].ModeGrid == Player && this.grid55[4].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid55[21].ModeGrid == Player && this.grid55[17].ModeGrid == Player && this.grid55[13].ModeGrid == Player && this.grid55[9].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true

      }
    },

    TwoPlayerComputer5(){
      if (this.CounterCopmuter == 0 ){

        this.RandomNumber = Math.floor(Math.random() * 25)
        if (this.RandomNumber != this.lastIndexArryGame && this.grid55[this.RandomNumber].ModeGrid == ''){
          this.grid55[this.RandomNumber].ModeGrid = 'two'
          this.CounterCopmuter++

        }else{
          this.TwoPlayerComputer5()
        }
        
      }else {

        this.PlaceAttackComputer5()
        if(!this.ISwinPlayerTwo){
          this.lastIndexArryGame5()
        }
        this.CounterCopmuter++

      }
      this.MovePlayer = 'oneMove'

    },

    PlaceAttackComputer5 (){
      if (this.grid55[1].ModeGrid == 'two' && this.grid55[2].ModeGrid == 'two' && this.grid55[3].ModeGrid == 'two' && this.grid55[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[0].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[2].ModeGrid == 'two' && this.grid55[3].ModeGrid == 'two' && this.grid55[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[1].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[1].ModeGrid == 'two' && this.grid55[3].ModeGrid == 'two' && this.grid55[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[2].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[1].ModeGrid == 'two' && this.grid55[2].ModeGrid == 'two' && this.grid55[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[3].ModeGrid = 'two'
      }else if (this.grid55[2].ModeGrid == 'two' && this.grid55[3].ModeGrid == 'two' && this.grid55[4].ModeGrid == 'two' && this.grid55[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[1].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[3].ModeGrid == 'two' && this.grid55[4].ModeGrid == 'two' && this.grid55[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[2].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[2].ModeGrid == 'two' && this.grid55[4].ModeGrid == 'two' && this.grid55[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[3].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[2].ModeGrid == 'two' && this.grid55[3].ModeGrid == 'two' && this.grid55[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[4].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[5].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[6].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[6].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[7].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[6].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[8].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[6].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[9].ModeGrid == 'two' && this.grid55[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[7].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[9].ModeGrid == 'two' && this.grid55[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[8].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[9].ModeGrid = 'two'
      }else if (this.grid55[11].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[10].ModeGrid = 'two'
      }else if (this.grid55[10].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[11].ModeGrid = 'two'
      }else if (this.grid55[10].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[10].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[13].ModeGrid = 'two'
      }else if (this.grid55[12].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[11].ModeGrid = 'two'
      }else if (this.grid55[11].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[11].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[13].ModeGrid = 'two'
      }else if (this.grid55[11].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[14].ModeGrid = 'two'
      }else if (this.grid55[16].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[15].ModeGrid = 'two'
      }else if (this.grid55[15].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[16].ModeGrid = 'two'
      }else if (this.grid55[15].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[17].ModeGrid = 'two'
      }else if (this.grid55[15].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[18].ModeGrid = 'two'
      }else if (this.grid55[17].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[16].ModeGrid = 'two'
      }else if (this.grid55[16].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[17].ModeGrid = 'two'
      }else if (this.grid55[16].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[18].ModeGrid = 'two'
      }else if (this.grid55[16].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[19].ModeGrid = 'two'
      }else if (this.grid55[21].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[20].ModeGrid = 'two'
      }else if (this.grid55[20].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[21].ModeGrid = 'two'
      }else if (this.grid55[20].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[22].ModeGrid = 'two'
      }else if (this.grid55[20].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[23].ModeGrid = 'two'
      }else if (this.grid55[22].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[21].ModeGrid = 'two'
      }else if (this.grid55[21].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[22].ModeGrid = 'two'
      }else if (this.grid55[21].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[23].ModeGrid = 'two'
      }else if (this.grid55[21].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[24].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[10].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[0].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[10].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[5].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[5].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[10].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[5].ModeGrid == 'two' && this.grid55[10].ModeGrid == 'two' && this.grid55[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[15].ModeGrid = 'two'
      }else if (this.grid55[10].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[20].ModeGrid == 'two' && this.grid55[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[5].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[20].ModeGrid == 'two' && this.grid55[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[10].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[10].ModeGrid == 'two' && this.grid55[20].ModeGrid == 'two' && this.grid55[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[15].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[10].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[20].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[1].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[6].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[6].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[11].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[6].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[16].ModeGrid = 'two'
      }else if (this.grid55[11].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[6].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[11].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[16].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[21].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[2].ModeGrid = 'two'
      }else if (this.grid55[2].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[7].ModeGrid = 'two'
      }else if (this.grid55[2].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[2].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[17].ModeGrid = 'two'
      }else if (this.grid55[12].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[7].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[22].ModeGrid == 'two' && this.grid55[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[17].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[22].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[3].ModeGrid = 'two'
      }else if (this.grid55[3].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[8].ModeGrid = 'two'
      }else if (this.grid55[3].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[13].ModeGrid = 'two'
      }else if (this.grid55[3].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[18].ModeGrid = 'two'
      }else if (this.grid55[13].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[8].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[13].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[18].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[23].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[4].ModeGrid = 'two'
      }else if (this.grid55[4].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[9].ModeGrid = 'two'
      }else if (this.grid55[4].ModeGrid == 'two' && this.grid55[9].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[14].ModeGrid = 'two'
      }else if (this.grid55[4].ModeGrid == 'two' && this.grid55[9].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[19].ModeGrid = 'two'
      }else if (this.grid55[14].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[9].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[14].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[19].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[14].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[24].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[3].ModeGrid = 'two'
      }else if (this.grid55[3].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[7].ModeGrid = 'two'
      }else if (this.grid55[3].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[15].ModeGrid == 'two' && this.grid55[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[11].ModeGrid = 'two'
      }else if (this.grid55[3].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[15].ModeGrid = 'two'
      }else if (this.grid55[13].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[9].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[13].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[21].ModeGrid == 'two' && this.grid55[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[17].ModeGrid = 'two'
      }else if (this.grid55[9].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[21].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[4].ModeGrid = 'two'
      }else if (this.grid55[4].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[8].ModeGrid = 'two'
      }else if (this.grid55[4].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[4].ModeGrid == 'two' && this.grid55[8].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[16].ModeGrid = 'two'
      }else if (this.grid55[12].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[20].ModeGrid == 'two' && this.grid55[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[8].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[20].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[20].ModeGrid == 'two' && this.grid55[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[16].ModeGrid = 'two'
      }else if (this.grid55[8].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[16].ModeGrid == 'two' && this.grid55[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[20].ModeGrid = 'two'
      }else if (this.grid55[7].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[1].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[7].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[19].ModeGrid == 'two' && this.grid55[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[13].ModeGrid = 'two'
      }else if (this.grid55[1].ModeGrid == 'two' && this.grid55[7].ModeGrid == 'two' && this.grid55[13].ModeGrid == 'two' && this.grid55[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[19].ModeGrid = 'two'
      }else if (this.grid55[11].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[5].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[11].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[23].ModeGrid == 'two' && this.grid55[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[17].ModeGrid = 'two'
      }else if (this.grid55[5].ModeGrid == 'two' && this.grid55[11].ModeGrid == 'two' && this.grid55[17].ModeGrid == 'two' && this.grid55[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[23].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[0].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[6].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[6].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[0].ModeGrid == 'two' && this.grid55[6].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[18].ModeGrid = 'two'
      }else if (this.grid55[12].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[6].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[12].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[24].ModeGrid == 'two' && this.grid55[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[18].ModeGrid = 'two'
      }else if (this.grid55[6].ModeGrid == 'two' && this.grid55[12].ModeGrid == 'two' && this.grid55[18].ModeGrid == 'two' && this.grid55[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid55[24].ModeGrid = 'two'
      }
    },
    lastIndexArryGame5(){
      if (this.lastIndexArryGame == 0){
        if (this.grid55[1].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[2].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[10].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }
      }else if (this.lastIndexArryGame == 1){

        if (this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[2].ModeGrid == 'one' && this.grid55[4].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

          
          
      }else if (this.lastIndexArryGame == 2){

        if (this.grid55[1].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[4].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[1].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[1].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 3){

        if (this.grid55[1].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[4].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 4){

        if (this.grid55[1].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[9].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 5){

        if (this.grid55[0].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[0].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[10].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 6){

        if (this.grid55[5].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 7){

        if (this.grid55[5].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[2].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[1].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[1].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 8){

        if (this.grid55[9].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 9){

        if (this.grid55[6].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[14].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 10){

        
        if (this.grid55[0].ModeGrid == 'one' && this.grid55[5].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[20].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 11){

        if (this.grid55[1].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[14].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[14].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[5].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 12){

        if (this.grid55[2].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[2].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[10].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[4].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[4].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[20].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 13){
        

        if (this.grid55[3].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[3].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[10].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 14){

        if (this.grid55[4].ModeGrid == 'one' && this.grid55[9].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[9].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[14].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[14].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 15){

        if (this.grid55[5].ModeGrid == 'one' && this.grid55[0].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[10].ModeGrid == 'one' && this.grid55[5].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[20].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 16){

        if (this.grid55[1].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[11].ModeGrid == 'one' && this.grid55[6].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[20].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 17){

        if (this.grid55[15].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[2].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[2].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[2].ModeGrid == ''){
          if (this.grid55[2].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[2].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[12].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[5].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 18){

        if (this.grid55[3].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[3].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[3].ModeGrid == ''){
          if (this.grid55[3].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[3].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[0].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[0].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[0].ModeGrid == ''){
          if (this.grid55[0].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[0].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }


      }else if (this.lastIndexArryGame == 19){

        if (this.grid55[4].ModeGrid == 'one' && this.grid55[9].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[4].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[4].ModeGrid == ''){
          if (this.grid55[4].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[4].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[14].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[7].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[1].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[1].ModeGrid == ''){
          if (this.grid55[1].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[1].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }
      }else if (this.lastIndexArryGame == 20){

        if (this.grid55[5].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[15].ModeGrid == ''){
          if (this.grid55[15].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[15].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[15].ModeGrid == 'one' && this.grid55[10].ModeGrid == ''){
          if (this.grid55[10].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[10].ModeGrid = 'two'
          }
        }else if (this.grid55[15].ModeGrid == 'one' && this.grid55[10].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 21){

        if (this.grid55[6].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[16].ModeGrid == ''){
          if (this.grid55[16].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[16].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[16].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[16].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 22){

        if (this.grid55[7].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[7].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[7].ModeGrid == ''){
          if (this.grid55[7].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[7].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 23){

        if (this.grid55[20].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[20].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[22].ModeGrid == 'one' && this.grid55[21].ModeGrid == 'one' && this.grid55[20].ModeGrid == ''){
          if (this.grid55[20].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[20].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[24].ModeGrid == ''){
          if (this.grid55[24].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[24].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[24].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[24].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[17].ModeGrid == ''){
          if (this.grid55[17].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[17].ModeGrid = 'two'
          }
        }else if (this.grid55[17].ModeGrid == 'one' && this.grid55[11].ModeGrid == 'one' && this.grid55[5].ModeGrid == ''){
          if (this.grid55[5].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[5].ModeGrid = 'two'
          }
        }else if (this.grid55[5].ModeGrid == 'one' && this.grid55[17].ModeGrid == 'one' && this.grid55[11].ModeGrid == ''){
          if (this.grid55[11].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[11].ModeGrid = 'two'
          }
        }else if (this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[8].ModeGrid == 'one' && this.grid55[13].ModeGrid == ''){
          if (this.grid55[13].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[13].ModeGrid = 'two'
          }
        }else if (this.grid55[13].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[8].ModeGrid == ''){
          if (this.grid55[8].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[8].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }

      }else if (this.lastIndexArryGame == 24){

        if (this.grid55[9].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[19].ModeGrid == ''){
          if (this.grid55[19].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[19].ModeGrid = 'two'
          }
        }else if (this.grid55[9].ModeGrid == 'one' && this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == ''){
          if (this.grid55[14].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[14].ModeGrid = 'two'
          }
        }else if (this.grid55[19].ModeGrid == 'one' && this.grid55[14].ModeGrid == 'one' && this.grid55[9].ModeGrid == ''){
          if (this.grid55[9].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[9].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[23].ModeGrid == ''){
          if (this.grid55[23].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[23].ModeGrid = 'two'
          }
        }else if (this.grid55[21].ModeGrid == 'one' && this.grid55[23].ModeGrid == 'one' && this.grid55[22].ModeGrid == ''){
          if (this.grid55[22].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[22].ModeGrid = 'two'
          }
        }else if (this.grid55[23].ModeGrid == 'one' && this.grid55[22].ModeGrid == 'one' && this.grid55[21].ModeGrid == ''){
          if (this.grid55[21].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[21].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[18].ModeGrid == ''){
          if (this.grid55[18].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[18].ModeGrid = 'two'
          }
        }else if (this.grid55[18].ModeGrid == 'one' && this.grid55[12].ModeGrid == 'one' && this.grid55[6].ModeGrid == ''){
          if (this.grid55[6].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[6].ModeGrid = 'two'
          }
        }else if (this.grid55[6].ModeGrid == 'one' && this.grid55[18].ModeGrid == 'one' && this.grid55[12].ModeGrid == ''){
          if (this.grid55[12].ModeGrid != ""){
            this.nullPlaceDeffend5()
          }else {
            this.grid55[12].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend5()
        }
      }
      this.MovePlayer = 'oneMove'
    },
    
    nullPlaceDeffend5(){
      if (this.RandomNumber == 0){

        if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){ 


          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 1){

        if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 2){

        if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 3){

        if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 4){

        if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'
        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 5){

        
        if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'
        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 6){

        if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'
        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'
        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 7){

        if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'
        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 8){

        
        if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'
        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 9){

                
        if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'
        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 10){

        if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 11){

        if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'
        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'
        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'
        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'
        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'
        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 12){

        if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'
        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'
        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 13){

        if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'
        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'
        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 14){

        if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'
        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'
        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }

      }else if (this.RandomNumber == 15){

        if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 16){

        if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 17){

        if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'
        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'
        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 18){

        if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 19){

        if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'
        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'
        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 20){

        if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 21){

        if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 22){

        if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'
        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 23){

        if (this.grid55[24].ModeGrid == ""){

          this.grid55[24].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 24){

        if (this.grid55[23].ModeGrid == ""){

          this.grid55[23].ModeGrid = 'two'

        }else if (this.grid55[19].ModeGrid == ""){

          this.grid55[19].ModeGrid = 'two'

        }else if (this.grid55[18].ModeGrid == ""){

          this.grid55[18].ModeGrid = 'two'

        }else if (this.grid55[22].ModeGrid == ""){

          this.grid55[22].ModeGrid = 'two'

        }else if (this.grid55[21].ModeGrid == ""){

          this.grid55[21].ModeGrid = 'two'

        }else if (this.grid55[20].ModeGrid == ""){

          this.grid55[20].ModeGrid = 'two'

        }else if (this.grid55[12].ModeGrid == ""){

          this.grid55[12].ModeGrid = 'two'

        }else if (this.grid55[6].ModeGrid == ""){

          this.grid55[6].ModeGrid = 'two'

        }else if (this.grid55[0].ModeGrid == ""){

          this.grid55[0].ModeGrid = 'two'

        }else if (this.grid55[14].ModeGrid == ""){

          this.grid55[14].ModeGrid = 'two'

        }else if (this.grid55[9].ModeGrid == ""){

          this.grid55[9].ModeGrid = 'two'

        }else if (this.grid55[4].ModeGrid == ""){

          this.grid55[4].ModeGrid = 'two'

        }else if (this.grid55[17].ModeGrid == ""){

          this.grid55[17].ModeGrid = 'two'

        }else if (this.grid55[16].ModeGrid == ""){

          this.grid55[16].ModeGrid = 'two'

        }else if (this.grid55[15].ModeGrid == ""){

          this.grid55[15].ModeGrid = 'two'

        }else if (this.grid55[10].ModeGrid == ""){

          this.grid55[10].ModeGrid = 'two'

        }else if (this.grid55[11].ModeGrid == ""){

          this.grid55[11].ModeGrid = 'two'

        }else if (this.grid55[13].ModeGrid == ""){

          this.grid55[13].ModeGrid = 'two'

        }else if (this.grid55[8].ModeGrid == ""){

          this.grid55[8].ModeGrid = 'two'

        }else if (this.grid55[7].ModeGrid == ""){

          this.grid55[7].ModeGrid = 'two'

        }else if (this.grid55[5].ModeGrid == ""){

          this.grid55[5].ModeGrid = 'two'

        }else if (this.grid55[1].ModeGrid == ""){

          this.grid55[1].ModeGrid = 'two'
        }else if (this.grid55[2].ModeGrid == ""){

          this.grid55[2].ModeGrid = 'two'
        }else if (this.grid55[3].ModeGrid == ""){

          this.grid55[3].ModeGrid = 'two'
        }


      }
    },

    // 7*7


    testWinPlayer7 (Player){
      if (this.grid77[0].ModeGrid == Player && this.grid77[1].ModeGrid == Player && this.grid77[2].ModeGrid == Player && this.grid77[3].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[1].ModeGrid == Player && this.grid77[2].ModeGrid == Player && this.grid77[3].ModeGrid == Player && this.grid77[4].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[3].ModeGrid == Player && this.grid77[4].ModeGrid == Player && this.grid77[5].ModeGrid == Player && this.grid77[6].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[2].ModeGrid == Player && this.grid77[3].ModeGrid == Player && this.grid77[4].ModeGrid == Player && this.grid77[5].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[3].ModeGrid == Player && this.grid77[4].ModeGrid == Player && this.grid77[5].ModeGrid == Player && this.grid77[6].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[7].ModeGrid == Player && this.grid77[8].ModeGrid == Player && this.grid77[9].ModeGrid == Player && this.grid77[10].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[8].ModeGrid == Player && this.grid77[9].ModeGrid == Player && this.grid77[10].ModeGrid == Player && this.grid77[11].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[9].ModeGrid == Player && this.grid77[10].ModeGrid == Player && this.grid77[11].ModeGrid == Player && this.grid77[12].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[10].ModeGrid == Player && this.grid77[11].ModeGrid == Player && this.grid77[12].ModeGrid == Player && this.grid77[13].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[14].ModeGrid == Player && this.grid77[15].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[17].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[15].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[18].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[16].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[19].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[17].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[19].ModeGrid == Player && this.grid77[20].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[21].ModeGrid == Player && this.grid77[22].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[22].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[25].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[23].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[26].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[24].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[26].ModeGrid == Player && this.grid77[27].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[28].ModeGrid == Player && this.grid77[29].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[31].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[29].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[32].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[30].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[33].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[31].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[33].ModeGrid == Player && this.grid77[34].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[35].ModeGrid == Player && this.grid77[36].ModeGrid == Player && this.grid77[37].ModeGrid == Player && this.grid77[38].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[15].ModeGrid == Player && this.grid77[22].ModeGrid == Player && this.grid77[29].ModeGrid == Player && this.grid77[36].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[36].ModeGrid == Player && this.grid77[37].ModeGrid == Player && this.grid77[38].ModeGrid == Player && this.grid77[39].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[37].ModeGrid == Player && this.grid77[38].ModeGrid == Player && this.grid77[39].ModeGrid == Player && this.grid77[40].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[38].ModeGrid == Player && this.grid77[39].ModeGrid == Player && this.grid77[40].ModeGrid == Player && this.grid77[41].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[42].ModeGrid == Player && this.grid77[43].ModeGrid == Player && this.grid77[44].ModeGrid == Player && this.grid77[45].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[43].ModeGrid == Player && this.grid77[44].ModeGrid == Player && this.grid77[45].ModeGrid == Player && this.grid77[46].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[44].ModeGrid == Player && this.grid77[45].ModeGrid == Player && this.grid77[46].ModeGrid == Player && this.grid77[47].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[45].ModeGrid == Player && this.grid77[46].ModeGrid == Player && this.grid77[47].ModeGrid == Player && this.grid77[48].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[0].ModeGrid == Player && this.grid77[7].ModeGrid == Player && this.grid77[14].ModeGrid == Player && this.grid77[21].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[7].ModeGrid == Player && this.grid77[14].ModeGrid == Player && this.grid77[21].ModeGrid == Player && this.grid77[28].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[14].ModeGrid == Player && this.grid77[21].ModeGrid == Player && this.grid77[28].ModeGrid == Player && this.grid77[35].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[21].ModeGrid == Player && this.grid77[28].ModeGrid == Player && this.grid77[35].ModeGrid == Player && this.grid77[42].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[1].ModeGrid == Player && this.grid77[8].ModeGrid == Player && this.grid77[15].ModeGrid == Player && this.grid77[22].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[8].ModeGrid == Player && this.grid77[15].ModeGrid == Player && this.grid77[22].ModeGrid == Player && this.grid77[29].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[15].ModeGrid == Player && this.grid77[22].ModeGrid == Player && this.grid77[29].ModeGrid == Player && this.grid77[31].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[22].ModeGrid == Player && this.grid77[29].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[43].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[2].ModeGrid == Player && this.grid77[9].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[23].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[9].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[30].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[16].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[37].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[23].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[37].ModeGrid == Player && this.grid77[44].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[3].ModeGrid == Player && this.grid77[10].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[10].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[31].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[17].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[38].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[24].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[38].ModeGrid == Player && this.grid77[45].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[4].ModeGrid == Player && this.grid77[11].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[25].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[11].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[32].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[18].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[39].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[25].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[39].ModeGrid == Player && this.grid77[46].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[5].ModeGrid == Player && this.grid77[12].ModeGrid == Player && this.grid77[19].ModeGrid == Player && this.grid77[26].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[12].ModeGrid == Player && this.grid77[19].ModeGrid == Player && this.grid77[26].ModeGrid == Player && this.grid77[33].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[19].ModeGrid == Player && this.grid77[26].ModeGrid == Player && this.grid77[33].ModeGrid == Player && this.grid77[40].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[26].ModeGrid == Player && this.grid77[33].ModeGrid == Player && this.grid77[40].ModeGrid == Player && this.grid77[47].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[6].ModeGrid == Player && this.grid77[13].ModeGrid == Player && this.grid77[20].ModeGrid == Player && this.grid77[27].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[13].ModeGrid == Player && this.grid77[20].ModeGrid == Player && this.grid77[27].ModeGrid == Player && this.grid77[34].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[20].ModeGrid == Player && this.grid77[27].ModeGrid == Player && this.grid77[34].ModeGrid == Player && this.grid77[41].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[27].ModeGrid == Player && this.grid77[34].ModeGrid == Player && this.grid77[41].ModeGrid == Player && this.grid77[48].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[3].ModeGrid == Player && this.grid77[11].ModeGrid == Player && this.grid77[19].ModeGrid == Player && this.grid77[27].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[2].ModeGrid == Player && this.grid77[10].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[26].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[10].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[26].ModeGrid == Player && this.grid77[34].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[1].ModeGrid == Player && this.grid77[9].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[25].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[9].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[33].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[17].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[33].ModeGrid == Player && this.grid77[41].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[0].ModeGrid == Player && this.grid77[8].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[8].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[32].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[16].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[40].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[24].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[40].ModeGrid == Player && this.grid77[48].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[7].ModeGrid == Player && this.grid77[15].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[31].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[15].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[39].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[23].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[39].ModeGrid == Player && this.grid77[47].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[14].ModeGrid == Player && this.grid77[22].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[38].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[22].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[38].ModeGrid == Player && this.grid77[46].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[21].ModeGrid == Player && this.grid77[29].ModeGrid == Player && this.grid77[37].ModeGrid == Player && this.grid77[45].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[27].ModeGrid == Player && this.grid77[33].ModeGrid == Player && this.grid77[39].ModeGrid == Player && this.grid77[45].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[20].ModeGrid == Player && this.grid77[26].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[38].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[26].ModeGrid == Player && this.grid77[32].ModeGrid == Player && this.grid77[38].ModeGrid == Player && this.grid77[44].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[13].ModeGrid == Player && this.grid77[19].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[31].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[19].ModeGrid == Player && this.grid77[25].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[37].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[25].ModeGrid == Player && this.grid77[31].ModeGrid == Player && this.grid77[37].ModeGrid == Player && this.grid77[43].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[6].ModeGrid == Player && this.grid77[12].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[24].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[12].ModeGrid == Player && this.grid77[18].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[30].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[18].ModeGrid == Player && this.grid77[24].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[36].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[24].ModeGrid == Player && this.grid77[30].ModeGrid == Player && this.grid77[36].ModeGrid == Player && this.grid77[42].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[5].ModeGrid == Player && this.grid77[11].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[23].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[11].ModeGrid == Player && this.grid77[17].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[29].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[17].ModeGrid == Player && this.grid77[23].ModeGrid == Player && this.grid77[29].ModeGrid == Player && this.grid77[35].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[4].ModeGrid == Player && this.grid77[10].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[22].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[10].ModeGrid == Player && this.grid77[16].ModeGrid == Player && this.grid77[22].ModeGrid == Player && this.grid77[28].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true
      }else if (this.grid77[3].ModeGrid == Player && this.grid77[9].ModeGrid == Player && this.grid77[15].ModeGrid == Player && this.grid77[21].ModeGrid == Player){
        this.WinShowPlayer(Player)
        this.IsWinPlayerOne = true

      }
    },

    TwoPlayerComputer7 (){
      if (this.CounterCopmuter == 0 ){

        this.RandomNumber = Math.floor(Math.random() * 25)
        if (this.RandomNumber != this.lastIndexArryGame && this.grid77[this.RandomNumber].ModeGrid == ''){
          this.grid77[this.RandomNumber].ModeGrid = 'two'
          this.CounterCopmuter++

        }else{
          this.TwoPlayerComputer7()
        }
        
      }else {

        this.PlaceAttackComputer7()
        if(!this.ISwinPlayerTwo){
          this.lastIndexArryGame7()
        }
        this.CounterCopmuter++

      }
      this.MovePlayer = 'oneMove'
    },

    PlaceAttackComputer7 (){

      if (this.grid77[1].ModeGrid == 'two' && this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[0].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[1].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[1].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[2].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[1].ModeGrid == 'two' && this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[1].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[2].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[2].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[4].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[5].ModeGrid == 'two' && this.grid77[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[2].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[5].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[5].ModeGrid == 'two' && this.grid77[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[4].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[5].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[5].ModeGrid == 'two' && this.grid77[6].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[5].ModeGrid == 'two' && this.grid77[6].ModeGrid == 'two' && this.grid77[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[4].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[6].ModeGrid == 'two' && this.grid77[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[5].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[4].ModeGrid == 'two' && this.grid77[5].ModeGrid == 'two' && this.grid77[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[6].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[7].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[8].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[8].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[8].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[8].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[12].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[13].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[13].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[13].ModeGrid == 'two' && this.grid77[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[12].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[13].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[14].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[20].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[29].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[28].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[28].ModeGrid = 'two'
      }else if (this.grid77[28].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[28].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[28].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[29].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[29].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[29].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[32].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[34].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[34].ModeGrid = 'two'
      }else if (this.grid77[36].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[35].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[35].ModeGrid = 'two'
      }else if (this.grid77[35].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[36].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[36].ModeGrid = 'two'
      }else if (this.grid77[35].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[35].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[36].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[36].ModeGrid = 'two'
      }else if (this.grid77[36].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[36].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[36].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[37].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[37].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[40].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[40].ModeGrid = 'two'
      }else if (this.grid77[40].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[38].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[40].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[40].ModeGrid = 'two'
      }else if (this.grid77[38].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[41].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[41].ModeGrid = 'two'
      }else if (this.grid77[43].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[42].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[42].ModeGrid = 'two'
      }else if (this.grid77[42].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[43].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[43].ModeGrid = 'two'
      }else if (this.grid77[42].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[44].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[44].ModeGrid = 'two'
      }else if (this.grid77[42].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }else if (this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[43].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[43].ModeGrid = 'two'
      }else if (this.grid77[43].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[44].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[44].ModeGrid = 'two'
      }else if (this.grid77[43].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }else if (this.grid77[43].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[46].ModeGrid = 'two'
      }else if (this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[44].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[44].ModeGrid = 'two'
      }else if (this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }else if (this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[46].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[46].ModeGrid = 'two'
      }else if (this.grid77[44].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[47].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[47].ModeGrid = 'two'
      }else if (this.grid77[46].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }else if (this.grid77[45].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[46].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[46].ModeGrid = 'two'
      }else if (this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[47].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[47].ModeGrid = 'two'
      }else if (this.grid77[45].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[48].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[48].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[0].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[7].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[7].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[14].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[7].ModeGrid == 'two' && this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[7].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[14].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[14].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[28].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[28].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[14].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[28].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[28].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[35].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[35].ModeGrid = 'two'
      }else if (this.grid77[28].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[28].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[28].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[35].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[35].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[42].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[42].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[1].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[8].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[8].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[8].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[8].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[36].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[36].ModeGrid = 'two'
      }else if (this.grid77[29].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[36].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[36].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[43].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[43].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[2].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[44].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[44].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[4].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[32].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[46].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[46].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[5].ModeGrid = 'two'
      }else if (this.grid77[5].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[12].ModeGrid = 'two'
      }else if (this.grid77[5].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[5].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[12].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[40].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[40].ModeGrid = 'two'
      }else if (this.grid77[33].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[40].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[40].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[47].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[47].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[6].ModeGrid = 'two'
      }else if (this.grid77[6].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[13].ModeGrid = 'two'
      }else if (this.grid77[6].ModeGrid == 'two' && this.grid77[13].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[20].ModeGrid = 'two'
      }else if (this.grid77[6].ModeGrid == 'two' && this.grid77[13].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[13].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[20].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[34].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[34].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[20].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[34].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[34].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[41].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[41].ModeGrid = 'two'
      }else if (this.grid77[34].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[34].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[34].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[41].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[41].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[48].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[48].ModeGrid = 'two'
      }else if (this.grid77[33].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[27].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[20].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[20].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[20].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[32].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[44].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[26].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[44].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[44].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[13].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[13].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[13].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[19].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[43].ModeGrid == 'two' && this.grid77[43].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[43].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[6].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[6].ModeGrid = 'two'
      }else if (this.grid77[6].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[12].ModeGrid = 'two'
      }else if (this.grid77[6].ModeGrid == 'two' && this.grid77[12].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[12].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[12].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[12].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[36].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[36].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[36].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[36].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[36].ModeGrid == 'two' && this.grid77[42].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[42].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[5].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[5].ModeGrid = 'two'
      }else if (this.grid77[5].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[5].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[5].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[35].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[35].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[35].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[4].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[4].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[4].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[28].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[28].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[28].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[21].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[2].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[2].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[2].ModeGrid == 'two' && this.grid77[10].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[18].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[10].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[10].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[18].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[18].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[34].ModeGrid == 'two' && this.grid77[26].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[26].ModeGrid = 'two'
      }else if (this.grid77[10].ModeGrid == 'two' && this.grid77[18].ModeGrid == 'two' && this.grid77[26].ModeGrid == 'two' && this.grid77[34].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[34].ModeGrid = 'two'
      }else if (this.grid77[11].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[3].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[3].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[11].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[11].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[27].ModeGrid == 'two' && this.grid77[19].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[19].ModeGrid = 'two'
      }else if (this.grid77[3].ModeGrid == 'two' && this.grid77[11].ModeGrid == 'two' && this.grid77[19].ModeGrid == 'two' && this.grid77[27].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[27].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[1].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[1].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[1].ModeGrid == 'two' && this.grid77[9].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[9].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[9].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[9].ModeGrid == 'two' && this.grid77[17].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[25].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[17].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[17].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[25].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[25].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[41].ModeGrid == 'two' && this.grid77[33].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[33].ModeGrid = 'two'
      }else if (this.grid77[17].ModeGrid == 'two' && this.grid77[25].ModeGrid == 'two' && this.grid77[33].ModeGrid == 'two' && this.grid77[41].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[41].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[0].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[0].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[8].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[8].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[0].ModeGrid == 'two' && this.grid77[8].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[8].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[8].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[8].ModeGrid == 'two' && this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[16].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[16].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[16].ModeGrid == 'two' && this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[40].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[40].ModeGrid = 'two'
      }else if (this.grid77[32].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[24].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[24].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[42].ModeGrid == 'two' && this.grid77[32].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[32].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[48].ModeGrid == 'two' && this.grid77[40].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[40].ModeGrid = 'two'
      }else if (this.grid77[24].ModeGrid == 'two' && this.grid77[32].ModeGrid == 'two' && this.grid77[40].ModeGrid == 'two' && this.grid77[48].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[48].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[7].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[7].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[7].ModeGrid == 'two' && this.grid77[15].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[15].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[15].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[15].ModeGrid == 'two' && this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[31].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[23].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[23].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[31].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[31].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[47].ModeGrid == 'two' && this.grid77[39].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[39].ModeGrid = 'two'
      }else if (this.grid77[23].ModeGrid == 'two' && this.grid77[31].ModeGrid == 'two' && this.grid77[39].ModeGrid == 'two' && this.grid77[47].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[47].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[14].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[14].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[14].ModeGrid == 'two' && this.grid77[22].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[30].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[22].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[22].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[30].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[30].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[46].ModeGrid == 'two' && this.grid77[38].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[38].ModeGrid = 'two'
      }else if (this.grid77[22].ModeGrid == 'two' && this.grid77[30].ModeGrid == 'two' && this.grid77[38].ModeGrid == 'two' && this.grid77[46].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[46].ModeGrid = 'two'
      }else if (this.grid77[29].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[21].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[21].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[29].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[29].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[45].ModeGrid == 'two' && this.grid77[37].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[37].ModeGrid = 'two'
      }else if (this.grid77[21].ModeGrid == 'two' && this.grid77[29].ModeGrid == 'two' && this.grid77[37].ModeGrid == 'two' && this.grid77[45].ModeGrid == ""){
        this.ISwinPlayerTwo = true
        this.grid77[45].ModeGrid = 'two'
      }

    },
    lastIndexArryGame7(){
      if (this.lastIndexArryGame == 0){

        if (this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
  
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 1){

        if (this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
  
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 2){

        if (this.grid77[0].ModeGrid == 'one' && this.grid77[1].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
  
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 3){

        if (this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
  
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[6].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 4){

        if (this.grid77[5].ModeGrid == 'one' && this.grid77[6].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
  
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[6].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[5].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[5].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 5){

        if (this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
  
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[6].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 6){

        if (this.grid77[3].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
  
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 7){

        if (this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
  
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[0].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 8){

        if (this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
  
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[1].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 9){

        
        if (this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
  
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 10){

        if (this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
  
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[6].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[4].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 11){

        if (this.grid77[18].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
  
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 12){

        if (this.grid77[19].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
  
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else{
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 13){

        if (this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 14){

        if (this.grid77[7].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }


      }else if (this.lastIndexArryGame == 15){

        if (this.grid77[22].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 16){

        if (this.grid77[23].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[2].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 17){

        if (this.grid77[24].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 18){

        if (this.grid77[25].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 19){

        if (this.grid77[26].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 20){

        if (this.grid77[27].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 21){

        if (this.grid77[14].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 22){

        if (this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 23){

        if (this.grid77[16].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[47].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 24){

        if (this.grid77[23].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[3].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[0].ModeGrid == ''){
          if (this.grid77[0].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[0].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[0].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[48].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[42].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 25){

        if (this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[4].ModeGrid == ''){
          if (this.grid77[4].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[4].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[4].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[1].ModeGrid == ''){
          if (this.grid77[1].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[1].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[1].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[41].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 26){

        
        if (this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[5].ModeGrid == ''){
          if (this.grid77[5].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[5].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[5].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[2].ModeGrid == ''){
          if (this.grid77[2].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[2].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[2].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 27){

        
        if (this.grid77[20].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[6].ModeGrid == ''){
          if (this.grid77[6].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[6].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[6].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[13].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[41].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[3].ModeGrid == ''){
          if (this.grid77[3].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[3].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[3].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 28){

        if (this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[7].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[10].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 29){

        if (this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[8].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[11].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 30){

        if (this.grid77[31].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[9].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[12].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 31){

        if (this.grid77[30].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[7].ModeGrid == ''){
          if (this.grid77[7].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[7].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[7].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[47].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 32){

        if (this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[11].ModeGrid == ''){
          if (this.grid77[11].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[11].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[11].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[8].ModeGrid == ''){
          if (this.grid77[8].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[8].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[8].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 33){

        if (this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[12].ModeGrid == ''){
          if (this.grid77[12].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[12].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[12].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[9].ModeGrid == ''){
          if (this.grid77[9].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[9].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[9].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }


      }else if (this.lastIndexArryGame == 34){

        if (this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[13].ModeGrid == ''){
          if (this.grid77[13].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[13].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[13].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[41].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[41].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[10].ModeGrid == ''){
          if (this.grid77[10].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[10].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[10].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }


      }else if (this.lastIndexArryGame == 35){

        if (this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[42].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }


      }else if (this.lastIndexArryGame == 36){

        if (this.grid77[39].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[42].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 37){

        if (this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[36].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 38){

        if (this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[47].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[20].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[14].ModeGrid == ''){
          if (this.grid77[14].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[14].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[14].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[14].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 39){

        if (this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[18].ModeGrid == ''){
          if (this.grid77[18].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[18].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[18].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[15].ModeGrid == ''){
          if (this.grid77[15].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[15].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[15].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[15].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 40){

        if (this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[19].ModeGrid == ''){
          if (this.grid77[19].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[19].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[19].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[47].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[35].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[41].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[16].ModeGrid == ''){
          if (this.grid77[16].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[16].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[16].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 41){

        if (this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[20].ModeGrid == ''){
          if (this.grid77[20].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[20].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[20].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[48].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[17].ModeGrid == ''){
          if (this.grid77[17].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[17].ModeGrid = 'two'
          }
        }else if (this.grid77[33].ModeGrid == 'one' && this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[17].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 42){

        if (this.grid77[35].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[35].ModeGrid == 'one' && this.grid77[28].ModeGrid == ''){
          if (this.grid77[28].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[28].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[28].ModeGrid == 'one' && this.grid77[35].ModeGrid == ''){
          if (this.grid77[35].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[35].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[30].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 43){

        if (this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[36].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[36].ModeGrid == ''){
          if (this.grid77[36].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[36].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[42].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[25].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 44){

        if (this.grid77[37].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[37].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[42].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[26].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 45){

        if (this.grid77[38].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[38].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else if (this.grid77[24].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else if (this.grid77[42].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[42].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[42].ModeGrid == ''){
          if (this.grid77[42].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[42].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[48].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[21].ModeGrid == ''){
          if (this.grid77[21].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[21].ModeGrid = 'two'
          }
        }else if (this.grid77[37].ModeGrid == 'one' && this.grid77[21].ModeGrid == 'one' && this.grid77[29].ModeGrid == ''){
          if (this.grid77[29].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[29].ModeGrid = 'two'
          }
        }else if (this.grid77[21].ModeGrid == 'one' && this.grid77[29].ModeGrid == 'one' && this.grid77[37].ModeGrid == ''){
          if (this.grid77[37].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[37].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 46){

        if (this.grid77[39].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[25].ModeGrid == ''){
          if (this.grid77[25].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[25].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else if (this.grid77[25].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == ''){
          if (this.grid77[43].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[43].ModeGrid = 'two'
          }
        }else if (this.grid77[43].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[43].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[48].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[47].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[22].ModeGrid == ''){
          if (this.grid77[22].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[22].ModeGrid = 'two'
          }
        }else if (this.grid77[38].ModeGrid == 'one' && this.grid77[22].ModeGrid == 'one' && this.grid77[30].ModeGrid == ''){
          if (this.grid77[30].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[30].ModeGrid = 'two'
          }
        }else if (this.grid77[22].ModeGrid == 'one' && this.grid77[30].ModeGrid == 'one' && this.grid77[38].ModeGrid == ''){
          if (this.grid77[38].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[38].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 47){

        if (this.grid77[40].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[26].ModeGrid == ''){
          if (this.grid77[26].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[26].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[40].ModeGrid == 'one' && this.grid77[33].ModeGrid == ''){
          if (this.grid77[33].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[33].ModeGrid = 'two'
          }
        }else if (this.grid77[26].ModeGrid == 'one' && this.grid77[33].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[44].ModeGrid == ''){
          if (this.grid77[44].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[44].ModeGrid = 'two'
          }
        }else if (this.grid77[44].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[48].ModeGrid == ''){
          if (this.grid77[48].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[48].ModeGrid = 'two'
          }
        }else if (this.grid77[48].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[39].ModeGrid == 'one' && this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == ''){
          if (this.grid77[23].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[23].ModeGrid = 'two'
          }
        }else if (this.grid77[31].ModeGrid == 'one' && this.grid77[23].ModeGrid == 'one' && this.grid77[39].ModeGrid == ''){
          if (this.grid77[39].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[39].ModeGrid = 'two'
          }
        }else if (this.grid77[23].ModeGrid == 'one' && this.grid77[39].ModeGrid == 'one' && this.grid77[31].ModeGrid == ''){
          if (this.grid77[31].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[31].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }

      }else if (this.lastIndexArryGame == 48){

        if (this.grid77[41].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[27].ModeGrid == ''){
          if (this.grid77[27].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[27].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[41].ModeGrid == 'one' && this.grid77[34].ModeGrid == ''){
          if (this.grid77[34].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[34].ModeGrid = 'two'
          }
        }else if (this.grid77[27].ModeGrid == 'one' && this.grid77[34].ModeGrid == 'one' && this.grid77[41].ModeGrid == ''){
          if (this.grid77[41].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[41].ModeGrid = 'two'
          }
        }else if (this.grid77[45].ModeGrid == 'one' && this.grid77[46].ModeGrid == 'one' && this.grid77[47].ModeGrid == ''){
          if (this.grid77[47].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[47].ModeGrid = 'two'
          }
        }else if (this.grid77[47].ModeGrid == 'one' && this.grid77[45].ModeGrid == 'one' && this.grid77[46].ModeGrid == ''){
          if (this.grid77[46].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[46].ModeGrid = 'two'
          }
        }else if (this.grid77[46].ModeGrid == 'one' && this.grid77[47].ModeGrid == 'one' && this.grid77[45].ModeGrid == ''){
          if (this.grid77[45].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[45].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == ''){
          if (this.grid77[24].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[24].ModeGrid = 'two'
          }
        }else if (this.grid77[32].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[40].ModeGrid == ''){
          if (this.grid77[40].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[40].ModeGrid = 'two'
          }
        }else if (this.grid77[40].ModeGrid == 'one' && this.grid77[24].ModeGrid == 'one' && this.grid77[32].ModeGrid == ''){
          if (this.grid77[32].ModeGrid != ""){
            this.nullPlaceDeffend7()
          }else {
            this.grid77[32].ModeGrid = 'two'
          }
        }else {
          this.nullPlaceDeffend7()
        }
      }

    },
    nullPlaceDeffend7 (){
      if (this.RandomNumber == 0){
        if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }

      }else if (this.RandomNumber == 1){

        if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 2){

        if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 3){

        if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 4){

        if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 5){

        if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 6){

        if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 7){

        if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 8){

        if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 9){

        if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 10){

        if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 11){

        if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 12){


        if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 13){

        if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 14){

        if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 15){

        if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 16){

        if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 17){

        if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 18){

        if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 19){

        if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 20){

        
        if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 21){

        if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 22){

        if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 23){

        if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 24){

        if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 25){

        if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 26){

        
        if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 27){

        if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 28){

        
        if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 29){

        if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 30){

        if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 31){

        if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 32){

        if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 33){

        if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 34){

        if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 35){

        if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }



      }else if (this.RandomNumber == 36){

        if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 37){

        if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }



      }else if (this.RandomNumber == 38){

        if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 39){

        if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 40){

        if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 41){

        if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 42){

        if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }



      }else if (this.RandomNumber == 43){

        if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 44){

        if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 45){

        if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 46){

        if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 47){

        if (this.grid77[48].ModeGrid == ""){
          this.grid77[48].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }


      }else if (this.RandomNumber == 48){

        if (this.grid77[47].ModeGrid == ""){
          this.grid77[47].ModeGrid = 'two'
        }else if (this.grid77[41].ModeGrid == ""){
          this.grid77[41].ModeGrid = 'two'
        }else if (this.grid77[40].ModeGrid == ""){
          this.grid77[40].ModeGrid = 'two'
        }else if (this.grid77[46].ModeGrid == ""){
          this.grid77[46].ModeGrid = 'two'
        }else if (this.grid77[45].ModeGrid == ""){
          this.grid77[45].ModeGrid = 'two'
        }else if (this.grid77[44].ModeGrid == ""){
          this.grid77[44].ModeGrid = 'two'
        }else if (this.grid77[43].ModeGrid == ""){
          this.grid77[43].ModeGrid = 'two'
        }else if (this.grid77[42].ModeGrid == ""){
          this.grid77[42].ModeGrid = 'two'
        }else if (this.grid77[34].ModeGrid == ""){
          this.grid77[34].ModeGrid = 'two'
        }else if (this.grid77[27].ModeGrid == ""){
          this.grid77[27].ModeGrid = 'two'
        }else if (this.grid77[20].ModeGrid == ""){
          this.grid77[20].ModeGrid = 'two'
        }else if (this.grid77[13].ModeGrid == ""){
          this.grid77[13].ModeGrid = 'two'
        }else if (this.grid77[6].ModeGrid == ""){
          this.grid77[6].ModeGrid = 'two'
        }else if (this.grid77[32].ModeGrid == ""){
          this.grid77[32].ModeGrid = 'two'
        }else if (this.grid77[24].ModeGrid == ""){
          this.grid77[24].ModeGrid = 'two'
        }else if (this.grid77[16].ModeGrid == ""){
          this.grid77[16].ModeGrid = 'two'
        }else if (this.grid77[8].ModeGrid == ""){
          this.grid77[8].ModeGrid = 'two'
        }else if (this.grid77[0].ModeGrid == ""){
          this.grid77[0].ModeGrid = 'two'
        }else if (this.grid77[1].ModeGrid == ""){
          this.grid77[1].ModeGrid = 'two'
        }else if (this.grid77[2].ModeGrid == ""){
          this.grid77[2].ModeGrid = 'two'
        }else if (this.grid77[3].ModeGrid == ""){
          this.grid77[3].ModeGrid = 'two'
        }else if (this.grid77[4].ModeGrid == ""){
          this.grid77[4].ModeGrid = 'two'
        }else if (this.grid77[5].ModeGrid == ""){
          this.grid77[5].ModeGrid = 'two'
        }else if (this.grid77[7].ModeGrid == ""){
          this.grid77[7].ModeGrid = 'two'
        }else if (this.grid77[9].ModeGrid == ""){
          this.grid77[9].ModeGrid = 'two'
        }else if (this.grid77[11].ModeGrid == ""){
          this.grid77[11].ModeGrid = 'two'
        }else if (this.grid77[10].ModeGrid == ""){
          this.grid77[10].ModeGrid = 'two'
        }else if (this.grid77[12].ModeGrid == ""){
          this.grid77[12].ModeGrid = 'two'
        }else if (this.grid77[14].ModeGrid == ""){
          this.grid77[14].ModeGrid = 'two'
        }else if (this.grid77[15].ModeGrid == ""){
          this.grid77[15].ModeGrid = 'two'
        }else if (this.grid77[17].ModeGrid == ""){
          this.grid77[17].ModeGrid = 'two'
        }else if (this.grid77[18].ModeGrid == ""){
          this.grid77[18].ModeGrid = 'two'
        }else if (this.grid77[19].ModeGrid == ""){
          this.grid77[19].ModeGrid = 'two'
        }else if (this.grid77[21].ModeGrid == ""){
          this.grid77[21].ModeGrid = 'two'
        }else if (this.grid77[22].ModeGrid == ""){
          this.grid77[22].ModeGrid = 'two'
        }else if (this.grid77[23].ModeGrid == ""){
          this.grid77[23].ModeGrid = 'two'
        }else if (this.grid77[25].ModeGrid == ""){
          this.grid77[25].ModeGrid = 'two'
        }else if (this.grid77[26].ModeGrid == ""){
          this.grid77[26].ModeGrid = 'two'
        }else if (this.grid77[28].ModeGrid == ""){
          this.grid77[28].ModeGrid = 'two'
        }else if (this.grid77[29].ModeGrid == ""){
          this.grid77[29].ModeGrid = 'two'
        }else if (this.grid77[30].ModeGrid == ""){
          this.grid77[30].ModeGrid = 'two'
        }else if (this.grid77[31].ModeGrid == ""){
          this.grid77[31].ModeGrid = 'two'
        }else if (this.grid77[33].ModeGrid == ""){
          this.grid77[33].ModeGrid = 'two'
        }else if (this.grid77[35].ModeGrid == ""){
          this.grid77[35].ModeGrid = 'two'
        }else if (this.grid77[36].ModeGrid == ""){
          this.grid77[36].ModeGrid = 'two'
        }else if (this.grid77[37].ModeGrid == ""){
          this.grid77[37].ModeGrid = 'two'
        }else if (this.grid77[38].ModeGrid == ""){
          this.grid77[38].ModeGrid = 'two'
        }else if (this.grid77[39].ModeGrid == ""){
          this.grid77[39].ModeGrid = 'two'
        }


      }
    },
  }
})