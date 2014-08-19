/**
 * Created by jyotikabanerjee on 08/08/14.
 */
function Queue(){
    this.data = [];
    this.front = -1;
    this.back = this.data.length - 1;


    this.enqueue = function (elem) {
        this.data[this.back+1] = elem;
        this.back++;
        if(this.front=== -1){
            this.front = 0;
        }
    };

    this.dequeue = function () {
        if(this.front === -1){
            console.log("Queue Underflow...");
            return null;
        }

        var temp = this.data[this.front];

        if(this.data.length === 1){
            this.front = -1;
        }

        this.data.shift();
        return temp;
    };

    this.print = function () {
        //var str;

        for(var i=0;i<this.data.length;i++){
            console.log(this.data[i]);
        }

        //console.log(str);
    };

    this.peek = function(){
        if(this.front === -1){
            console.log("Queue underflow...");
            return null;
        }
        return this.data[this.front];
    };

    this.isEmpty = function() {
      if(this.data.length === 0){
          return true;
      }
      else {
          return false;
      }
    }
}