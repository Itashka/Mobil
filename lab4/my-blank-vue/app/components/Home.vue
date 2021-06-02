<template>
    <Page  class="app">
     <ActionBar class='header' title="Calculator"/>
         <GridLayout class="keyboard" columns="*, *, *, *" rows="*, *, *, *, *, *, *">
            <Label textWrap="true" class="result" v-model="result" row="0" col="0" colSpan="4"/>/>
            <Button  class="btn act" text="AC" @tap="AllClean()" row="1" col="0" colSpan="2"/>
            <Button  class="btn act" text="C" @tap="Clean()" row="1" col="2" colSpan="2"/>
            <Button  class="btn oper" text="(" @tap="Input('(')" row="2" col="0"/>
            <Button  class="btn oper" text=")" @tap="Input(')')" row="2" col="1"/>
            <Button  class="btn oper" text="/" @tap="Input('/')" row="2" col="2"/>
            <Button  class="btn" text="7" @tap="Input('7')" row="3" col="0"/>
            <Button  class="btn" text="8" @tap="Input('8')" row="3" col="1"/>
            <Button  class="btn" text="9" @tap="Input('9')" row="3" col="2"/>
            <Button  class="btn oper" text="*" @tap="Input('*')" row="2" col="3"/>
            <Button  class="btn" text="4" @tap="Input('4')" row="4" col="0"/>
            <Button  class="btn" text="5" @tap="Input('5')" row="4" col="1"/>
            <Button  class="btn" text="6" @tap="Input('6')" row="4" col="2"/>
            <Button  class="btn oper" text="-" @tap="Input('-')" row="3" col="3"/>
            <Button  class="btn" text="1" @tap="Input('1')" row="5" col="0"/>
            <Button  class="btn" text="2" @tap="Input('2')" row="5" col="1"/>
            <Button  class="btn" text="3" @tap="Input('3')" row="5" col="2"/>
            <Button  class="btn oper" text="+" @tap="Input('+')" row="4" col="3"/>
            <Button  class="btn" text="0" @tap="Input('0')" row="6" col="0" colSpan="2"/>
            <Button  class="btn" text="." @tap="Input('.')" row="6" col="2"/>
            <Button  class="btn calc" text="=" @tap="calc()" row="5" rowSpan="2" col="3"/>
         </GridLayout>
    </Page>
</template>

<script >
    let InError = 'Ошибка ввода';
    let flag = true;
    export default  {
    data() {
        return {
            result: '',
      }
    },
    methods:{
            Input: function(char){
                this.result = this.result.toString();
                if (this.result === InError){
                    this.result = '';
                }
                if (char === '+' || char === '-' || char === '*' || char === '/'){
                    flag = true;
                    if (this.result.slice(-1) === '+')
                        this.result = this.result.slice(0, -1) + char;
                    else if (this.result.slice(-1) === '-')
                        this.result = this.result.slice(0, -1) + char;
                    else if (this.result.slice(-1) === '*')
                        this.result = this.result.slice(0, -1) + char;
                    else if (this.result.slice(-1) === '/')
                        this.result = this.result.slice(0, -1) + char;
                    else {
                        this.result += char;
                    }
                }
                else if(char === '.' && flag === true){
                    flag = false;
                    this.result += char;
                }
                else if (   char === '(' || char === ')' || char === '1' ||
                            char === '2' || char === '3' || char === '4' ||
                            char === '5' || char === '6' || char === '7' ||
                            char === '8' || char === '9'){
                    this.result += char;
                }
                else if (char === '0'){
                    if (this.result.slice(-1) === '+' || this.result.slice(-1) === '-' || this.result.slice(-1) === '*' || this.result.slice(-1) === '/' || this.result.slice(-1) === ''){
                        this.result += '0.';
                        flag = false;
                    }else{
                        this.result += char;
                }}
            },
            calc: function(){
                try{
                    this.result = eval(this.result);
                    if (isNaN(this.result)) {
                        throw new InError();
                  }
                }
                catch{
                    this.result = 'Ошибка ввода';
                }
            },

            AllClean: function(){
                this.result = ''
                flag = true;
            },
            Clean: function(){
                var exp = this.result;
                this.result = exp.slice(0, -1);
            }
    }
  }
</script>

<style scoped>
    .header{
        background-color: #000;
        color: #fff;
    }
    .app{
        background-color: #defdfd;
    }
    .result{
        text-align: right;
        font-size: 28px;
        overflow-wrap: break-word;
        color: #000;
    }
    .btn{
        background-color: rgb(140, 255, 236);;
        color: #000;
        border: solid;
        border-width: 2px;
        border-color: #000;
        width: 420px;
        height: 420px;
    }
    .btn[text="AC"]{
        width: 1260px;
    }
    .btn[text="C"]{
        width: 1260px;
    }
    .btn[text='0']{
        width: 840px;
    }
    .btn[text='=']{
        height: 840px;
    }
    .btn:active {
        background-color: rgb(234, 253, 127);
    }
    .act {
        background-color:rgb(42, 210, 252);
    }
    .oper {
        background-color:rgb(204, 205, 206);
    }
    .calc {
        background-color:rgb(238, 129, 147);
    }
</style>
