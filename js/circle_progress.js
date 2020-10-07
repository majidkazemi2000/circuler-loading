class Draw{
    strokeColor = "black";
    textColor = "black";
    backgroundColor = "lightgray";
    lineWidth = 10;
    time = 2000;
    delay = 0;
    constructor(strokeColor,backgroundColor,textColor,lineWidth,time,delay) {
        this.strokeColor = strokeColor;
        this.textColor = textColor;
        this.lineWidth = lineWidth;
        this.time = time;
        this.delay = delay;
        this.backgroundColor = backgroundColor;

        var canvas = document.getElementById("progress-canvas");
        var ctx = canvas.getContext("2d");
        var t = time/20;
        var s = 1.5;
        var counter = 0;


        ctx.beginPath();
        ctx.arc(100, 75, 50,0, 2*Math.PI);
        ctx.strokeStyle = backgroundColor;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        setTimeout(function () {
            var timer = setInterval(function () {
                ctx.beginPath();
                ctx.arc(100, 75, 50, 1.5*Math.PI, s*Math.PI);
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = lineWidth;
                ctx.stroke();
                if (s >= 3.5){
                    clearInterval(timer)
                }
                ctx.clearRect(75,60,60,30);
                ctx.font = "20px Arial";
                ctx.fillStyle = textColor;
                ctx.fillText(counter + "%",77,82,60);
                s+=.1;
                counter += 5;
            },t);
        },delay);
    }

}
/////////////////////////////////////////////
// Create By Majid kazemi 2020
// Git Hub ==> www.github.com/majidkazemi2000
/////////////////////////////////////////////