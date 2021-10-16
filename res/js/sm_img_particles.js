
tsParticles.load('tsparticles', {

            background: {
                color: {
                    value: "transparent"
                },
            },

            interactivity: {
                events: {
                  detectsOn: "window",
                  onClick: {
                    enable: false,
                    mode: "push"
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: true,
                        force: 200,
                        smooth: 10,
                    }
                  },
                  resize: true,
                },
                // modes: {
                //   bubble: {
                //     distance: 400,
                //     duration: 2,
                //     opacity: 0.8,
                //     size: 40
                //   },
                //   grab: {
                //     distance: 400
                //   }
                // }
            },
            fpsLimit: 60,

            particles: {
                color: {
                  value: "transparent"
                },
                collusions: {
                    enable: true,
                },
                // links: {
                //   color: {
                //     value: "#000"
                //   },
                //   distance: 150,
                //   opacity: 0.4
                // },
                move: {
                //   attract: {
                //     rotate: {
                //       x: 600,
                //       y: 1200
                //     }
                //   },
                  direction: 'none',
                  outMode: 'bounce',
                  enable: true,
                  random: true,
                  speed: 0.7,
                  straight: false
                //   outModes: {
                //     bottom: "out",
                //     left: "out",
                //     right: "out",
                //     top: "out"
                //   },
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 100,
                  },
                  value: 6
                },
                opacity: {
                  random: {
                    enable: true
                  },
                  value: {
                    min: 0.6,
                    max: 1
                  },
                //   animation: {
                //     enable: false,
                //     speed: 1,
                //     minimumValue: 0.2
                //   }
                },
                rotate: {
                  random: {
                    enable: true
                  },
                  animation: {
                    enable: true,
                    speed: 2
                  },
                  direction: "random"
                },
                shape: {
                    options: {
                        // character: {
                        //   fill: false,
                        //   font: "Verdana",
                        //   style: "",
                        //   value: "*",
                        //   weight: 400
                        // },
                        // char: {
                        //   fill: false,
                        //   font: "Verdana",
                        //   style: "",
                        //   value: "*",
                        //   weight: 400
                        // },
                        // polygon: {
                        //   sides: 5
                        // },
                        // star: {
                        //   sides: 5
                        // },
                        image: [
                            {
                                src: "res/js/tsparticle_imgs/Education_bacteria.png",
                                width: 32,
                                height: 32
                            },
                            {
                                src: "res/js/tsparticle_imgs/Education_protein.png",
                                width: 32,
                                height: 32
                            },
                            {
                                src: "res/js/tsparticle_imgs/Education_Scissors.png",
                                width: 32,
                                height: 32
                            },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//apple.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//avocado.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//banana.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//berries.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//cherry.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//grapes.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//lemon.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//orange.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//peach.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//pear.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//pepper.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//plum.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//star.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//strawberry.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//watermelon.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//watermelon_slice.png",
                        //     width: 32,
                        //     height: 32
                        //   }
                        ],
                        // images: [
                        //   {
                        //     src: "https://particles.js.org/images/fruits//apple.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//avocado.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//banana.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//berries.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//cherry.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//grapes.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//lemon.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//orange.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//peach.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//pear.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//pepper.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//plum.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//star.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//strawberry.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//watermelon.png",
                        //     width: 32,
                        //     height: 32
                        //   },
                        //   {
                        //     src: "https://particles.js.org/images/fruits//watermelon_slice.png",
                        //     width: 32,
                        //     height: 32
                        //   }
                        // ]
                      },
                      type: "image"
                    },
                    // 32
                // NACHALO  
                size: {
                    value: 12,
                    animation: {
                      speed: 30,
                      minimumValue: 0.1
                    }
                  },
                  stroke: {
                    color: {
                      value: "#000000",
                      animation: {
                        h: {
                          count: 0,
                          enable: false,
                          offset: 0,
                          speed: 1,
                          sync: true
                        },
                        s: {
                          count: 0,
                          enable: false,
                          offset: 0,
                          speed: 1,
                          sync: true
                        },
                        l: {
                          count: 0,
                          enable: false,
                          offset: 0,
                          speed: 1,
                          sync: true
                        }
                      }
                    }
                  }
              }
        })

const particles = tsParticles.domItem(0)
particles.play
