<template>
    <Page>
        <ActionBar title="Бесполезный органайзер"/>
            <StackLayout>
                <Button class="button" @tap="calCul()" text="Калькулейтед"/>
                <Button class="button" @tap="toDo()" text="Тудушка :)"/>
                <Button class="button" @tap="Animeshka()" text="Анимешка"/>
                <Button class="button" @tap="about()" text="Автор"/>
                <Button class="button" @tap="closeApp()" text="Покинуть этот мир"/>
            </StackLayout>
    </Page>
</template>

<script >
import CalCul from './CalCul';
import ToDO from './ToDo';
import Animeshka from './Animeshka';
import * as application from "@nativescript/core/application";

  export default {
    methods:{
      calCul: function(event){
        this.$showModal(CalCul, {
          fullscreen: true,
        })
      },
      toDo: function(event){
        this.$showModal(ToDO, {
          fullscreen: true,
        })
      },
      Animeshka: function(event){
        this.$showModal(Animeshka, {
          fullscreen: true,
        })
      },
      about() {
        alert(({
          title: "Потратил на это время:",
          message: "Проскуряков Богдан - 1192б",
          okButtonText: "Press F to Pay Respects"
        }));
      },
      closeApp() {
        if (application.android) {
          application.android.foregroundActivity.finish();
        } else {
          exit(0);
        }
      }
    }
  }
</script>

<style>
  ActionBar {
      background-color: #d1fccf;
      color: black;
      text-align: center;
      font-size: 250px;
      height: 80xp;
  }
  Page {
      background-color: #d1fccf;
  }
  .button {
      vertical-align: center;
      text-align: center;
      color:rgb(166, 0, 216);
      background-color: #beffbb;
      font-size: 25px;
      width: 100%;
      height: 100xp;
      border-radius: 200%;
      border: #d1fccf;
      
  }
  .button:active{
      background-color: rgb(234, 253, 127);
  }
</style>