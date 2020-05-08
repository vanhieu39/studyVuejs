<template>
	<div id="app">
		<div class="wrapper clearfix">
            <Player
            v-bind:scoresPlayer="scoresPlayer"
            v-bind:activePlayer="activePlayer"
            v-bind:currentScore="currentScore"
            />
            <Control 
            v-on:handleNewGame="handleNewGame"
            v-on:handleRollDice="handleRollDice"
            />
            <Dices
            :dices="dices"
            />
            <PopupRule
            :isOpenPopup="isOpenPopup"
            v-on:handleConfirm="handleConfirm"
            />
        </div>
	</div>
</template>

<script>

import Player from "./components/Player"
import Control from './components/Control'
import Dices from './components/Dices'
import PopupRule from './components/PopupRule'

export default {
	name: 'app',
	data () {
		return {
            isPlaying:false,
            isOpenPopup:false,
            activePlayer:0,
            scoresPlayer:[13,30],
            currentScore:30,
            dices:[2,5]
		}
	},
	components: {
        Player,
        Control,
        Dices,
        PopupRule
    },
    methods:{
        handleRollDice(){
            console.log("app.vue")
            if(this.isPlaying){
                //xoay xúc sắc
                //Math.random(): 0 ->1
                
            }else{
                alert("Vui lòng nhấn vào nút NewGame")
            }
        },
        handleNewGame(){
            console.log("handleNewGame app.vue")
            this.isOpenPopup = true;
        },
        handleConfirm(){
            this.isPlaying=true;
            this.isOpenPopup=false;
            this.activePlayer=0;
            this.scoresPlayer=[0,0];
            this.currentScore=0;
            this.dices=[1,1]
        },
       
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(/public/assets/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}


</style>
