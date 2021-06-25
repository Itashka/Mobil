<template>
    <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
        <StackLayout>
          <StackLayout>
            <label class="header">Аниме инфо</label>
          </StackLayout>
          <StackLayout>
            <label>Anime id:                             {{this.id}}</label>
            <label>___________________________________________________________________</label>
            <label>Anime code:                           {{this.code}}</label>
            <label>___________________________________________________________________</label>
            <label textWrap="true">Русское название:                     {{this.names.ru}}</label>
            <label>___________________________________________________________________</label>
            <label textWrap="true">Английское название:                  {{this.names.en}}</label>
            <label>___________________________________________________________________</label>
            <label>Статус:                               {{this.status.string}}</label>
            <label>___________________________________________________________________</label>
            <label>Тип и продолжительность:              {{this.type.full_string}}</label>
            <label>___________________________________________________________________</label>
            <label textWrap="true">Жанр:                 {{this.genres}}</label>
            <label>___________________________________________________________________</label>
            <label textWrap="true">Описание:             {{this.description}}</label>
            
          </StackLayout> 
          <StackLayout>
            <TextField class="input" v-model="id" hint="Тут пиши id своего аниме :3"  @returnPress= "Anime()"/>
            <Button class="Search" text='Вызвать аниме грузовик' @tap= "Output()"/>
          </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script >
import { Http } from '@nativescript/core'
import * as ApplicationSettings from '@nativescript/core/application-settings';
  export default {
    data() {
      return {
        id: '',
        code: '',
        names: {
            ru: '',
            en: '',
        },
        status: {
            string: '',
        },
        type: {
            full_string: '',
        },
        genres: '',
        description: '',
      }
    },
    methods: {
      Anime() {
        if(this.id != ''){
          this.msg = this.id
          console.log(this.id)}
      },
      Output (){
        Http.getString('https://api.anilibria.tv/v2/getTitle?id=' + this.id)
            .then(
            (result) => {
                this.result = JSON.parse(result)
                this.id = this.result.id
                this.code = this.result.code
                this.names = this.result.names 
                this.status = this.result.status
                this.type = this.result.type
                this.genres = this.result.genres
                this.description = this.result.description
                console.log(this.result)
            }
            )
      } 
    }
  }
</script>

<style scoped>
    .header{
        background-color: #d1fccf;
        color: black;
        border: 30%;
        height: 100px;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
    StackLayout{
      background-color: #d1fccf;
      color:rgb(166, 0, 216);
      overflow-y: auto;
    }
    label {
        
        color: rgb(166, 0, 216);
        font-size: 12px;
    }
    .text{
      text-align: center;
    }
    .Search{
      border-radius: 30%;
      height: 10%;
      width: 60%;
    }
</style>