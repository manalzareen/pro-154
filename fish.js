AFRAME.registerComponent("water-fishes", {
    init: function () {
         for (i = 1; i <= 20; i++) {
              var id = `fish${i}`

              var posX = (Math.random() * 3000 + (-1000));
              var posY = (Math.random() * 2 + (-1));
              var posZ = (Math.random() * 3000 + -1000);

              var position = { x: posX, y: posY, z: posZ };
      
              this.waterfish(id,position)

         }
    },
    waterfish: (id, position) => {

         var isandEl = document.querySelector("#island");
         var fishEl = document.createElement("a-entity");
         fishEl.setAttribute("gltf-model", "./assets/models/orange_fish/scene.gltf");

         fishEl.setAttribute("animation-mixer", {})          
         fishEl.setAttribute("id",id)
         fishEl.setAttribute("position",position)
         fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

         islandEl.appendChild(fishEl)


    }
})