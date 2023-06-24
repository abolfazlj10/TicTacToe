<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore()
</script>
<style>
@import url(../assets/style/GameStyle.css);
@import url(../assets/style/all.css);
@import url(../assets/style/RespansiveFrameGame.css);
</style>

<template>
<div :class="[(store.infoBodyStyle ? 'FilterBody' : '') || (store.ShoeMoodalWin ? 'FilterBody' : '') || (store.ShowModalDraw ? 'FilterBody' : '')]" class="container">
    <div class="Frame">
        <!-- Home Gmae (Start) -->
        <div class="StartGame" v-show="store.LevelUserHome">
            <div class="btnTool d-grid">
                <button @click="store.infoShow(true)" class="Tool"><i class="fa-solid fa-info"></i></button>
                <div class="Sounds">
                    <button @click="store.IsPlayedSoung()" class="Tool"  v-html="(store.PlayedSound) ? store.TagPlaySound : store.TagNoPlaySound "></button>
                </div>
            </div>
            <div class="Text-Welcoms">
                <p>Game</p>
                <h1>Tic Tac Toe</h1>
                <p>Start</p>
            </div>
            <div class="btnStart">
                <button @click="store.ChoseGridPlayerOne1" class="BtnNumberPlayer">1 Player</button>
                <br>
                <button @click="store.ChoseGridPlayerOne2" class="BtnNumberPlayer">2 Players</button>
            </div>
        </div>
        <!-- Chose Grid  -->
        <div class="choseGrid" v-show="store.LevelUserChoseGird">
            <div class="Titr">
                <hr class="colorHr">
                <h2 class="ChooseAgridColor">Choose a Grid</h2>
                <hr class="colorHr">
            </div>
            <div class="SelectGrid">
                <div @click="store.GamePlay3OnePlayer" class="ItemsSelectGrid m-1">
                    <div class="titrNumber">
                        3×3
                    </div>
                    <div class="GridItem3">
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                        <div class="BorderColorChoseGrid3"></div>
                    </div>
                </div>
                <div @click="store.GamePlay5OnePlayer" class="ItemsSelectGrid m-1">
                    <div class="titrNumber">
                        5×5
                    </div>
                    <div class="GridItem5">
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                        <div class="BorderColorChoseGrid5"></div>
                    </div>
                </div>
                <div @click="store.GamePlay7OnePlayer" class="ItemsSelectGrid m-1">
                    <div class="titrNumber">
                        7×7
                    </div>
                    <div class="GridItem7">
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                        <div class="BorderColorChoseGrid7"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Open Game One Player 3×3  -->
        <div class="GamePlay3" v-show="store.GamePlay3">
            <div class="IconBtnTitr">
                <div class="TitrGamePlay">Tic Tac Toe</div>
                <div class="btnSoundExit">
                    <button @click="store.IsPlayedSoung()" class="Tool mx-1"  v-html="(store.PlayedSound) ? store.TagPlaySound : store.TagNoPlaySound "></button>
                    <button @click="store.ComeHomeAndEndGame(9)" class="Tool"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="NumberPlayerMove">{{store.MovePlayerNumberGame}} <hr></div>
            <div class="GridPlay3">
                <div @click="store.StartGame('1.1' , 3)" v-html="[(store.Grid33[0].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[0].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('1.2' , 3)" v-html="[(store.Grid33[1].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[1].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('1.3' , 3)" v-html="[(store.Grid33[2].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[2].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('2.1' , 3)" v-html="[(store.Grid33[3].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[3].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('2.2' , 3)" v-html="[(store.Grid33[4].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[4].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('2.3' , 3)" v-html="[(store.Grid33[5].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[5].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('3.1' , 3)" v-html="[(store.Grid33[6].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[6].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('3.2' , 3)" v-html="[(store.Grid33[7].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[7].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
                <div @click="store.StartGame('3.3' , 3)" v-html="[(store.Grid33[8].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.Grid33[8].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]"  class="ItemsGridPlay3"></div>
            </div>
            <div class="NumberPlace mt-3">
                <hr class="colorHr">
                <p>
                    {{store.PlaceNumberWithWin}}
                </p>
            </div>
        </div>
        <!-- Open Game One Player 5×5  -->
        <div class="GamePlay3" v-show="store.GamePlay5">
            <div class="IconBtnTitr">
                <div class="TitrGamePlay">Tic Tac Toe</div>
                <div class="btnSoundExit">
                    <button @click="store.IsPlayedSoung()" class="Tool mx-1"  v-html="(store.PlayedSound) ? store.TagPlaySound : store.TagNoPlaySound "></button>
                    <button @click="store.ComeHomeAndEndGame(25)" class="Tool"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="NumberPlayerMove">{{store.MovePlayerNumberGame}} <hr></div>
            <div class="GridPlay5">
                <div @click="store.StartGame('1.1' , 5)" v-html="[(store.grid55[0].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[0].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('1.2' , 5)" v-html="[(store.grid55[1].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[1].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('1.3' , 5)" v-html="[(store.grid55[2].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[2].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('1.4' , 5)" v-html="[(store.grid55[3].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[3].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('1.5' , 5)" v-html="[(store.grid55[4].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[4].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('2.1' , 5)" v-html="[(store.grid55[5].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[5].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('2.2' , 5)" v-html="[(store.grid55[6].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[6].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('2.3' , 5)" v-html="[(store.grid55[7].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[7].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('2.4' , 5)" v-html="[(store.grid55[8].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[8].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('2.5' , 5)" v-html="[(store.grid55[9].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[9].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('3.1' , 5)" v-html="[(store.grid55[10].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[10].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('3.2' , 5)" v-html="[(store.grid55[11].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[11].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('3.3' , 5)" v-html="[(store.grid55[12].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[12].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('3.4' , 5)" v-html="[(store.grid55[13].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[13].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('3.5' , 5)" v-html="[(store.grid55[14].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[14].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('4.1' , 5)" v-html="[(store.grid55[15].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[15].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('4.2' , 5)" v-html="[(store.grid55[16].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[16].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('4.3' , 5)" v-html="[(store.grid55[17].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[17].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('4.4' , 5)" v-html="[(store.grid55[18].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[18].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('4.5' , 5)" v-html="[(store.grid55[19].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[19].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('5.1' , 5)" v-html="[(store.grid55[20].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[20].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('5.2' , 5)" v-html="[(store.grid55[21].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[21].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('5.3' , 5)" v-html="[(store.grid55[22].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[22].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('5.4' , 5)" v-html="[(store.grid55[23].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[23].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
                <div @click="store.StartGame('5.5' , 5)" v-html="[(store.grid55[24].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid55[24].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay5"></div>
            </div>
            <div class="NumberPlace mt-3">
                <p>
                    {{store.PlaceNumberWithWin}}
                </p>
            </div>
        </div>
        <!-- Open Game One Player 7×7  -->
        <div class="GamePlay3" v-show="store.GamePlay7">
            <div class="IconBtnTitr">
                <div class="TitrGamePlay">Tic Tac Toe</div>
                <div class="btnSoundExit">
                    <button @click="store.IsPlayedSoung()" class="Tool mx-1"  v-html="(store.PlayedSound) ? store.TagPlaySound : store.TagNoPlaySound "></button>
                    <button @click="store.ComeHomeAndEndGame(49)" class="Tool"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="NumberPlayerMove">{{store.MovePlayerNumberGame}} <hr></div>
            <div class="GridPlay7">
                <div @click="store.StartGame('1.1' , 7)" v-html="[(store.grid77[0].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[0].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('1.2' , 7)" v-html="[(store.grid77[1].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[1].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('1.3' , 7)" v-html="[(store.grid77[2].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[2].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('1.4' , 7)" v-html="[(store.grid77[3].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[3].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('1.5' , 7)" v-html="[(store.grid77[4].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[4].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('1.6' , 7)" v-html="[(store.grid77[5].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[5].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('1.7' , 7)" v-html="[(store.grid77[6].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[6].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.1' , 7)" v-html="[(store.grid77[7].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[7].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.2' , 7)" v-html="[(store.grid77[8].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[8].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.3' , 7)" v-html="[(store.grid77[9].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[9].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.4' , 7)" v-html="[(store.grid77[10].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[10].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.5' , 7)" v-html="[(store.grid77[11].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[11].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.6' , 7)" v-html="[(store.grid77[12].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[12].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('2.7' , 7)" v-html="[(store.grid77[13].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[13].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.1' , 7)" v-html="[(store.grid77[14].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[14].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.2' , 7)" v-html="[(store.grid77[15].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[15].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.3' , 7)" v-html="[(store.grid77[16].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[16].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.4' , 7)" v-html="[(store.grid77[17].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[17].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.5' , 7)" v-html="[(store.grid77[18].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[18].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.6' , 7)" v-html="[(store.grid77[19].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[19].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('3.7' , 7)" v-html="[(store.grid77[20].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[20].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.1' , 7)" v-html="[(store.grid77[21].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[21].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.2' , 7)" v-html="[(store.grid77[22].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[22].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.3' , 7)" v-html="[(store.grid77[23].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[23].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.4' , 7)" v-html="[(store.grid77[24].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[24].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.5' , 7)" v-html="[(store.grid77[25].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[25].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.6' , 7)" v-html="[(store.grid77[26].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[26].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('4.7' , 7)" v-html="[(store.grid77[27].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[27].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.1' , 7)" v-html="[(store.grid77[28].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[28].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.2' , 7)" v-html="[(store.grid77[29].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[29].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.3' , 7)" v-html="[(store.grid77[30].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[30].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.4' , 7)" v-html="[(store.grid77[31].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[31].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.5' , 7)" v-html="[(store.grid77[32].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[32].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.6' , 7)" v-html="[(store.grid77[33].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[33].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('5.7' , 7)" v-html="[(store.grid77[34].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[34].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.1' , 7)" v-html="[(store.grid77[35].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[35].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.2' , 7)" v-html="[(store.grid77[36].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[36].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.3' , 7)" v-html="[(store.grid77[37].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[37].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.4' , 7)" v-html="[(store.grid77[38].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[38].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.5' , 7)" v-html="[(store.grid77[39].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[39].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.6' , 7)" v-html="[(store.grid77[40].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[40].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('6.7' , 7)" v-html="[(store.grid77[41].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[41].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.1' , 7)" v-html="[(store.grid77[42].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[42].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.2' , 7)" v-html="[(store.grid77[43].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[43].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.3' , 7)" v-html="[(store.grid77[44].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[44].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.4' , 7)" v-html="[(store.grid77[45].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[45].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.5' , 7)" v-html="[(store.grid77[46].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[46].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.6' , 7)" v-html="[(store.grid77[47].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[47].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
                <div @click="store.StartGame('7.7' , 7)" v-html="[(store.grid77[48].ModeGrid == 'one' ? store.tagPlayerOne : '') || (store.grid77[48].ModeGrid == 'two' ? store.tagPlatyerTwo : '')]" class="ItemsGridPlay7"></div>
            </div>
            <div class="NumberPlace mt-3">
                <p>
                    {{store.PlaceNumberWithWin}}
                </p>
            </div>
        </div>

    </div>
</div>
    <div :class="(store.infoBodyStyle) ? 'ShowInfoModal' : '' " class="informationModal">
        <div class="BtnCloseInfo">
            <button @click="store.infoShow(false)" class="Tool"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <p>
            Developer Team :<a href="http://exPersian.ir" target="_blank"> exPersian</a>
        </p>
    </div>
    <div :class="(store.ShoeMoodalWin) ? 'SHowWinModal' : ''"  class="WinBox">
        <div class="PlayerInfoWin">
            <i v-show="(store.WhiWinPlayer == 'one')" class="fa-solid fa-xmark colorXmarkTag"></i>
            <i v-show="(store.WhiWinPlayer == 'two')" class="fa-regular fa-circle colorCircleTag"></i>
            <p v-show="(store.WhiWinPlayer == 'one')">PLAYER 1 WINS!!!</p>
            <p v-show="(store.WhiWinPlayer == 'two')">PLAYER 2 WINS!!!</p>
        </div>
        <div class="BtnPlayAginWin">
            <button @click="store.CloseBoxWin">PLAY AGAIN</button>
        </div>
</div>
<div class="WinBox" :class="(store.ShowModalDraw)? 'SHowWinModal': '' ">
    <p style="text-align:center; margin-top:10px;">DRAW!!!</p>
    <div class="BtnPlayAginWin">
        <button @click="store.CloseBoxDraw">PLAY AGAIN</button>
    </div>
</div>
<audio id="soundClick">
    <source src="../assets/sound/ff.mp3" type="audio/mpeg">
</audio>
<audio id="SoundDanger">
    <source src="../assets/sound/154947909.mp3" type="audio/mpeg">
</audio>
<audio id="SoundWin">
    <source src="../assets/sound/mixkit-quick-win-video-game-notification-269.mp3" type="audio/mpeg">
</audio>
</template>