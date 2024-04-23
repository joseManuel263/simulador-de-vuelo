AFRAME.registerComponent("game-play",{
    schema:{
        elementId: {type: "string", default: "#ring1"},
    },
    update: function(){
        this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId);

        element.addEventListener("collide", (e) => {
            if(elementId.includes("#ring")){
                console.log(elementId+": collision");
            }
            else if(elementId.includes("#hurdle")) {
                console.log("bird: collision");
            }
        });
    },
});