let angle = 0
        let r
        let wave = []
        let slider
        function setup(){
            createCanvas(600,400)
            slider = createSlider(1,50,25)
            slider.size(window.innerWidth/2)
        }
        function draw(){
            background(0)
            textSize(20)
            text(`n = ${slider.value()}`,50,50)
            translate(200,200)
            // translate(200,2*r)
            //fill(255)
            let x = 0
            let y = 0
            for(let i=0;i<slider.value();i++){
                let prevx = x
                let prevy = y
                let n = i*2+1
                r = 50*(4/(n*PI))
                x += r*cos(n*angle)
                y += r*sin(n*angle)
                noFill()
                stroke(255,100)
                circle(prevx,prevy,2*r)
                fill(255)
                line(prevx,prevy,x,y)
                circle(x,y,3)
                // noFill()
                // circle(x,y,r)
                //fill(255)
                //line(x,y,150,y)
                //translate(150,y)
            }
            line(x,y,150,y)
            wave.unshift(y)
            stroke(255)
            beginShape()
            noFill()
            for(let p=0;p<wave.length;p++){
                // circle(p+150,wave[p],2)
                vertex(p+150,wave[p])
            }
            endShape()
            if(wave.length >200){
                wave.pop()
            }

            angle += 0.05
        }