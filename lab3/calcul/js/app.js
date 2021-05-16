let flag = true;
let Pi = Math.PI;
var n = 0;
Pi = Pi.toFixed(2);
var vue = new Vue({
    el: '#app',
    data: {
        result: '',
        operations: ['+','-','*','/'],
        numbers: [7,8,9,'(',4,5,6,')',1,2,3],
    },
    methods: {
        input: function(char){
            this.result = this.result.toString();
            this.result += char;
        },
        clean: function(){
            var exp = this.result;
            this.result = exp.slice(0, -1);
        },
        pi: function(){
            if(flag === true) {
                this.result = this.result.toString();
                this.result += Pi;
                flag = false}
        },
        allclean: function(){
            this.result = '';
            flag = true;
        },
        calc: function(){
            this.result = eval(this.result);
            this.result = this.result.toString();
        },
        
        point: function(){
            if(flag === true){
                this.result = this.result.toString();
                this.result += '.';
                flag = false}
        },
        op: function(char){
            flag = true;
            if(this.result.slice(-1) === '+' || this.result.slice(-1) === '-' || this.result.slice(-1) === '*' || this.result.slice(-1) === '/'){
                if (this.result.slice(-1) === '+')
                    this.result = this.result.slice(0, -1) + char;
                else if (this.result.slice(-1) === '-')
                    this.result = this.result.slice(0, -1) + char;
                else if (this.result.slice(-1) === '*')
                    this.result = this.result.slice(0, -1) + char;
                else if (this.result.slice(-1) === '/')
                    this.result = this.result.slice(0, -1) + char;
                else {
                    this.result = this.result.toString();
                    this.result += char;
                }  
            } else{
                this.result = this.result.toString();
                this.result += char;
            }
        },
        n: function(){
            if(this.result.slice(-1) === '+' || this.result.slice(-1) === '-' || this.result.slice(-1) === '*' || this.result.slice(-1) === '/' || this.result.slice(-1) === ''){
                this.result += '0.';
                flag = false;
            }
            else{
                this.result = this.result.toString();
                this.result += n;   
            }
        }
    }
})