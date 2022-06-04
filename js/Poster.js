AFRAME.registerComponent("comic-poster", {
    init:function(){
        this.posterContainer = this.el
        this.posterCards()
    },

    posterCards:function(){
        const postersRef = [
            {
                id:"spider-man",
                title:"Spider Man",
                url:"./assets/spider-man.jpg"
            },
            {
                id:"captain-america",
                title:"Captain America",
                url:"./assets/captain-america.jpg"
            },
            {
                id:"iron-man",
                title:"Iron Man",
                url:"./assets/iron-man.jpg"
            },
            {
                id:"super-man",
                title:"Super Man",
                url:"./assets/super-man.jpg"
            },
        ];

        let previousXPosition = -60

        for(var item of postersRef){
            const posX = previousXPosition + 25
            const posY = 20
            const posZ = -40
            const position = { x : posX, y : posY, z : posZ}
            previousXPosition = posX

            //Border Element
            const borderEl = this.createBorder(position, item.id)

            //Poster Element 
            const poster = this.createPoster(item)
            borderEl.appendChild(poster)

            this.posterContainer.appendChild(borderEl)
        }
    },

    createBorder: function(position, id) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 22,
          height: 30,
        });
    
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", { color: "#fff" })
    
        return entityEl;
    },

    createPoster: function(item) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 20,
          height: 28
        });
    
        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 })
        entityEl.setAttribute("material", { src: item.url })
    
        return entityEl
    },
})