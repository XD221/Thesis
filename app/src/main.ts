
//var message_element = document.getElementById('message') as HTMLElement
//message_element.innerHTML = "Eeeh!!!";
//console.log("Eeeehh!");

const { enable3d, Scene3D, Canvas } = ENABLE3D

      class MainScene extends Scene3D {
        constructor() {
          super({ key: 'MainScene' })
        }

        init() {
          this.accessThirdDimension()
        }

        create() {
          this.third.warpSpeed()
          this.third.physics.add.box()
        }
      }

      const config = {
        type: Phaser.WEBGL,
        transparent: true,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: window.innerWidth * Math.max(1, window.devicePixelRatio / 2),
          height: window.innerHeight * Math.max(1, window.devicePixelRatio / 2)
        },
        scene: [MainScene],
        ...Canvas()
      }

      window.addEventListener('load', () => {
        enable3d(() => new Phaser.Game(config)).withPhysics('/lib/ammo/kripken')
      })