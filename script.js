
const main1 = document.createElement("div");
        main1.setAttribute("id", "div1");
        document.body.appendChild(main1);

        const main2 = document.createElement("div");
        main2.setAttribute("id", "div2");
        document.body.appendChild(main2);

        const main3 = document.createElement("div");
        main3.setAttribute("id", "div3");
        document.body.appendChild(main3);

        const main4 = document.createElement("div");
        main4.setAttribute("id", "div4");
        document.body.appendChild(main4);

        const main5 = document.createElement("div");
        main5.setAttribute("id", "div5");
        document.body.appendChild(main5);

        const main6 = document.createElement("div");
        main6.setAttribute("id", "div6");
        document.body.appendChild(main6);

        const main7 = document.createElement("div");
        main7.setAttribute("id", "div7");
        document.body.appendChild(main7);

        const main8 = document.createElement("div");
        main8.setAttribute("id", "div8");
        document.body.appendChild(main8);

        const main9 = document.createElement("div");
        main9.setAttribute("id", "div9");
        document.body.appendChild(main9);

        const main10 = document.createElement("div");
        main10.setAttribute("id", "div10");
        document.body.appendChild(main10);

    
        

let myAsyncFunction = async () => {
    const response = await fetch("https://www.anapioficeandfire.com/api/books/1");
    
    let data = await response.json();
    return data;
  };
  myAsyncFunction()
    .then((data) => {
        console.log(data);
      let author1 = (data.authors);
      let name1 = (data.name);
      let isbn1 = (data.isbn);
      let nop1 = (data.numberOfPages);
      let publisher1 = (data.publisher) 
      let rdate1 = (data.released)
      let date = rdate1.slice(0,10);

      document.getElementById("div1").innerHTML += "<h3>Book Number 1<h3>";
      document.getElementById("div1").innerHTML += "<br>";
      document.getElementById("div1").innerHTML += `Name of the Book: ${name1}`;
      document.getElementById("div1").innerHTML += "<br><br>";
      document.getElementById("div1").innerHTML += `Author of the Book: ${author1}`;
      document.getElementById("div1").innerHTML += "<br><br>";
      document.getElementById("div1").innerHTML += `ISBN of the Book: ${isbn1}`;
      document.getElementById("div1").innerHTML += "<br><br>";
      document.getElementById("div1").innerHTML += `Number of Pages of the Book: ${nop1}`;
      document.getElementById("div1").innerHTML += "<br><br>";
      document.getElementById("div1").innerHTML += `Publisher: ${publisher1}`;
      document.getElementById("div1").innerHTML += "<br><br>";
      document.getElementById("div1").innerHTML += `Released date: ${date}`;
      document.getElementById("div1").innerHTML += "<br><br>";
      document.getElementById("div1").innerHTML += `Character Names are: `;

      let url = ["https://www.anapioficeandfire.com/api/characters/2", "https://www.anapioficeandfire.com/api/characters/12", "https://www.anapioficeandfire.com/api/characters/13", "https://www.anapioficeandfire.com/api/characters/16", "https://www.anapioficeandfire.com/api/characters/20"]

url.forEach((element) => {
    
    let charfun = async () => {
        const response = await fetch(element);
        
        let data = await response.json();
        return data;
      };
      charfun()
        .then((data) => {
            console.log(data);
          
          document.getElementById("div1").innerHTML += `${data.name}, `;
        })

        .catch((err) => {
            console.log("rejected", err.message);
          });
     
})
// document.getElementById("div1").innerHTML += "<br><br>";
      
    })
    .catch((err) => {
      console.log("rejected", err.message);
    });

    

// **************************************************************

    let myAsyncFunction2 = async () => {
        const response = await fetch("https://www.anapioficeandfire.com/api/books/2");
        
        let data = await response.json();
        return data;
      };
      myAsyncFunction2()
        .then((data) => {
            console.log(data);
          let author2 = (data.authors);
          let name2 = (data.name);
          let isbn2 = (data.isbn);
          let nop2 = (data.numberOfPages);
          let publisher2 = (data.publisher) 
          let rdate2 = (data.released)
          let date2 = rdate2.slice(0,10);
    
          document.getElementById("div2").innerHTML += "<h3>Book Number 2<h3>";
          document.getElementById("div2").innerHTML += "<br>";
          document.getElementById("div2").innerHTML += `Name of the Book: ${name2}`;
          document.getElementById("div2").innerHTML += "<br><br>";
          document.getElementById("div2").innerHTML += `Author of the Book: ${author2}`;
          document.getElementById("div2").innerHTML += "<br><br>";
          document.getElementById("div2").innerHTML += `ISBN of the Book: ${isbn2}`;
          document.getElementById("div2").innerHTML += "<br><br>";
          document.getElementById("div2").innerHTML += `Number of Pages of the Book: ${nop2}`;
          document.getElementById("div2").innerHTML += "<br><br>";
          document.getElementById("div2").innerHTML += `Publisher: ${publisher2}`;
          document.getElementById("div2").innerHTML += "<br><br>";
          document.getElementById("div2").innerHTML += `Released date: ${date2}`;
          document.getElementById("div2").innerHTML += "<br><br>";
          document.getElementById("div2").innerHTML += `Character Names are: `

          let url1 = ["https://www.anapioficeandfire.com/api/characters/2", "https://www.anapioficeandfire.com/api/characters/12", "https://www.anapioficeandfire.com/api/characters/13", "https://www.anapioficeandfire.com/api/characters/16", "https://www.anapioficeandfire.com/api/characters/20"]

url1.forEach((element) => {
    
    let charfun = async () => {
        const response = await fetch(element);
        
        let data = await response.json();
        return data;
      };
      charfun()
        .then((data) => {
            console.log(data);
          
          document.getElementById("div2").innerHTML += `${data.name}, `;
        })

        .catch((err) => {
            console.log("rejected", err.message);
          });
          
        })

    })
        .catch((err) => {
          console.log("rejected", err.message);
        });


// *******************************************************************

        let myAsyncFunction3 = async () => {
            const response = await fetch("https://www.anapioficeandfire.com/api/books/3");
            
            let data = await response.json();
            return data;
          };
          myAsyncFunction3()
            .then((data) => {
                console.log(data);
              let author3 = (data.authors);
              let name3 = (data.name);
              let isbn3 = (data.isbn);
              let nop3 = (data.numberOfPages);
              let publisher3 = (data.publisher) 
              let rdate3 = (data.released)
              let date3 = rdate3.slice(0,10);
        
              document.getElementById("div3").innerHTML += "<h3>Book Number 3<h3>";
              document.getElementById("div3").innerHTML += "<br>";
              document.getElementById("div3").innerHTML += `Name of the Book: ${name3}`;
              document.getElementById("div3").innerHTML += "<br><br>";
              document.getElementById("div3").innerHTML += `Author of the Book: ${author3}`;
              document.getElementById("div3").innerHTML += "<br><br>";
              document.getElementById("div3").innerHTML += `ISBN of the Book: ${isbn3}`;
              document.getElementById("div3").innerHTML += "<br><br>";
              document.getElementById("div3").innerHTML += `Number of Pages of the Book: ${nop3}`;
              document.getElementById("div3").innerHTML += "<br><br>";
              document.getElementById("div3").innerHTML += `Publisher: ${publisher3}`;
              document.getElementById("div3").innerHTML += "<br><br>";
              document.getElementById("div3").innerHTML += `Released date: ${date3}`;
              document.getElementById("div3").innerHTML += "<br><br>";
              document.getElementById("div3").innerHTML += `Character Names are: `;

              let url = ["https://www.anapioficeandfire.com/api/characters/2", "https://www.anapioficeandfire.com/api/characters/35", "https://www.anapioficeandfire.com/api/characters/31", "https://www.anapioficeandfire.com/api/characters/12", "https://www.anapioficeandfire.com/api/characters/13"]

              url.forEach((element) => {
                  
                  let charfun = async () => {
                      const response = await fetch(element);
                      
                      let data = await response.json();
                      return data;
                    };
                    charfun()
                      .then((data) => {
                          console.log(data);
                        
                        document.getElementById("div3").innerHTML += `${data.name}, `;
                      })
              
                      .catch((err) => {
                          console.log("rejected", err.message);
                        });
   
            })

        })
            .catch((err) => {
              console.log("rejected", err.message);
            });



            // *****************************************************

            let myAsyncFunction4 = async () => {
                const response = await fetch("https://www.anapioficeandfire.com/api/books/4");
                
                let data = await response.json();
                return data;
              };
              myAsyncFunction4()
                .then((data) => {
                    console.log(data);
                  let author4 = (data.authors);
                  let name4 = (data.name);
                  let isbn4 = (data.isbn);
                  let nop4 = (data.numberOfPages);
                  let publisher4 = (data.publisher) 
                  let rdate4 = (data.released)
                  let date4 = rdate4.slice(0,10);
            
                  document.getElementById("div4").innerHTML += "<h3>Book Number 4<h3>";
                  document.getElementById("div4").innerHTML += "<br>";
                  document.getElementById("div4").innerHTML += `Name of the Book: ${name4}`;
                  document.getElementById("div4").innerHTML += "<br><br>";
                  document.getElementById("div4").innerHTML += `Author of the Book: ${author4}`;
                  document.getElementById("div4").innerHTML += "<br><br>";
                  document.getElementById("div4").innerHTML += `ISBN of the Book: ${isbn4}`;
                  document.getElementById("div4").innerHTML += "<br><br>";
                  document.getElementById("div4").innerHTML += `Number of Pages of the Book: ${nop4}`;
                  document.getElementById("div4").innerHTML += "<br><br>";
                  document.getElementById("div4").innerHTML += `Publisher: ${publisher4}`;
                  document.getElementById("div4").innerHTML += "<br><br>";
                  document.getElementById("div4").innerHTML += `Released date: ${date4}`;
                  document.getElementById("div4").innerHTML += "<br><br>";
                  document.getElementById("div4").innerHTML += `Character Names are: `;

                  let url = ["https://www.anapioficeandfire.com/api/characters/29", "https://www.anapioficeandfire.com/api/characters/38", "https://www.anapioficeandfire.com/api/characters/40", "https://www.anapioficeandfire.com/api/characters/41", "https://www.anapioficeandfire.com/api/characters/46"]
 
                  url.forEach((element) => {
                  
                    let charfun = async () => {
                        const response = await fetch(element);
                        
                        let data = await response.json();
                        return data;
                      };
                      charfun()
                        .then((data) => {
                            console.log(data);
                          
                          document.getElementById("div4").innerHTML += `${data.name}, `;
                        })
                
                        .catch((err) => {
                            console.log("rejected", err.message);
                          });
     
              })

      
                })
                .catch((err) => {
                  console.log("rejected", err.message);
                });

// ***************************************************

                let myAsyncFunction5 = async () => {
                    const response = await fetch("https://www.anapioficeandfire.com/api/books/5");
                    
                    let data = await response.json();
                    return data;
                  };
                  myAsyncFunction5()
                    .then((data) => {
                        console.log(data);
                      let author5 = (data.authors);
                      let name5 = (data.name);
                      let isbn5 = (data.isbn);
                      let nop5 = (data.numberOfPages);
                      let publisher5 = (data.publisher) 
                      let rdate5 = (data.released)
                      let date5 = rdate5.slice(0,10);
                
                      document.getElementById("div5").innerHTML += "<h3>Book Number 5<h3>";
                      document.getElementById("div5").innerHTML += "<br>";
                      document.getElementById("div5").innerHTML += `Name of the Book: ${name5}`;
                      document.getElementById("div5").innerHTML += "<br><br>";
                      document.getElementById("div5").innerHTML += `Author of the Book: ${author5}`;
                      document.getElementById("div5").innerHTML += "<br><br>";
                      document.getElementById("div5").innerHTML += `ISBN of the Book: ${isbn5}`;
                      document.getElementById("div5").innerHTML += "<br><br>";
                      document.getElementById("div5").innerHTML += `Number of Pages of the Book: ${nop5}`;
                      document.getElementById("div5").innerHTML += "<br><br>";
                      document.getElementById("div5").innerHTML += `Publisher: ${publisher5}`;
                      document.getElementById("div5").innerHTML += "<br><br>";
                      document.getElementById("div5").innerHTML += `Released date: ${date5}`;
                      document.getElementById("div5").innerHTML += "<br><br>";
                      document.getElementById("div5").innerHTML += `Character Names are: `;

                      let url = ["https://www.anapioficeandfire.com/api/characters/21", "https://www.anapioficeandfire.com/api/characters/22", "https://www.anapioficeandfire.com/api/characters/24", "https://www.anapioficeandfire.com/api/characters/25", "https://www.anapioficeandfire.com/api/characters/26"]
 
                      url.forEach((element) => {
                      
                        let charfun = async () => {
                            const response = await fetch(element);
                            
                            let data = await response.json();
                            return data;
                          };
                          charfun()
                            .then((data) => {
                                console.log(data);
                              
                              document.getElementById("div5").innerHTML += `${data.name}, `;
                            })
                    
                            .catch((err) => {
                                console.log("rejected", err.message);
                              });
         
                  })


                      
                    })
                    .catch((err) => {
                      console.log("rejected", err.message);
                    });

// ******************************************************************

                    let myAsyncFunction6 = async () => {
                        const response = await fetch("https://www.anapioficeandfire.com/api/books/6");
                        
                        let data = await response.json();
                        return data;
                      };
                      myAsyncFunction6()
                        .then((data) => {
                            console.log(data);
                          let author6 = (data.authors);
                          let name6 = (data.name);
                          let isbn6 = (data.isbn);
                          let nop6 = (data.numberOfPages);
                          let publisher6 = (data.publisher) 
                          let rdate6 = (data.released)
                          let date6 = rdate6.slice(0,10);
                    
                          document.getElementById("div6").innerHTML += "<h3>Book Number 6<h3>";
                          document.getElementById("div6").innerHTML += "<br>";
                          document.getElementById("div6").innerHTML += `Name of the Book: ${name6}`;
                          document.getElementById("div6").innerHTML += "<br><br>";
                          document.getElementById("div6").innerHTML += `Author of the Book: ${author6}`;
                          document.getElementById("div6").innerHTML += "<br><br>";
                          document.getElementById("div6").innerHTML += `ISBN of the Book: ${isbn6}`;
                          document.getElementById("div6").innerHTML += "<br><br>";
                          document.getElementById("div6").innerHTML += `Number of Pages of the Book: ${nop6}`;
                          document.getElementById("div6").innerHTML += "<br><br>";
                          document.getElementById("div6").innerHTML += `Publisher: ${publisher6}`;
                          document.getElementById("div6").innerHTML += "<br><br>";
                          document.getElementById("div6").innerHTML += `Released date: ${date6}`;
                          document.getElementById("div6").innerHTML += "<br><br>";
                          document.getElementById("div6").innerHTML += `Character Names are: `;

                          let url = ["https://www.anapioficeandfire.com/api/characters/46", "https://www.anapioficeandfire.com/api/characters/47", "https://www.anapioficeandfire.com/api/characters/48", "https://www.anapioficeandfire.com/api/characters/50", "https://www.anapioficeandfire.com/api/characters/54"] 
                          
                          url.forEach((element) => {
                      
                            let charfun = async () => {
                                const response = await fetch(element);
                                
                                let data = await response.json();
                                return data;
                              };
                              charfun()
                                .then((data) => {
                                    console.log(data);
                                  
                                  document.getElementById("div6").innerHTML += `${data.name}, `;
                                })
                        
                                .catch((err) => {
                                    console.log("rejected", err.message);
                                  });
             
                      })
                          
                        })
                        .catch((err) => {
                          console.log("rejected", err.message);
                        });

// *******************************************************************

                        let myAsyncFunction7 = async () => {
                            const response = await fetch("https://www.anapioficeandfire.com/api/books/7");
                            
                            let data = await response.json();
                            return data;
                          };
                          myAsyncFunction7()
                            .then((data) => {
                                console.log(data);
                              let author7 = (data.authors);
                              let name7 = (data.name);
                              let isbn7 = (data.isbn);
                              let nop7 = (data.numberOfPages);
                              let publisher7 = (data.publisher) 
                              let rdate7 = (data.released)
                              let date7 = rdate7.slice(0,10);
                        
                              document.getElementById("div7").innerHTML += "<h3>Book Number 7<h3>";
                              document.getElementById("div7").innerHTML += "<br>";
                              document.getElementById("div7").innerHTML += `Name of the Book: ${name7}`;
                              document.getElementById("div7").innerHTML += "<br><br>";
                              document.getElementById("div7").innerHTML += `Author of the Book: ${author7}`;
                              document.getElementById("div7").innerHTML += "<br><br>";
                              document.getElementById("div7").innerHTML += `ISBN of the Book: ${isbn7}`;
                              document.getElementById("div7").innerHTML += "<br><br>";
                              document.getElementById("div7").innerHTML += `Number of Pages of the Book: ${nop7}`;
                              document.getElementById("div7").innerHTML += "<br><br>";
                              document.getElementById("div7").innerHTML += `Publisher: ${publisher7}`;
                              document.getElementById("div7").innerHTML += "<br><br>";
                              document.getElementById("div7").innerHTML += `Released date: ${date7}`;
                              document.getElementById("div7").innerHTML += "<br><br>";
                              document.getElementById("div7").innerHTML += `Character Names are: `;

                              let url = ["https://www.anapioficeandfire.com/api/characters/46", "https://www.anapioficeandfire.com/api/characters/30", "https://www.anapioficeandfire.com/api/characters/35", "https://www.anapioficeandfire.com/api/characters/38", "https://www.anapioficeandfire.com/api/characters/41"] 
                          
                              url.forEach((element) => {
                          
                                let charfun = async () => {
                                    const response = await fetch(element);
                                    
                                    let data = await response.json();
                                    return data;
                                  };
                                  charfun()
                                    .then((data) => {
                                        console.log(data);
                                      
                                      document.getElementById("div7").innerHTML += `${data.name}, `;
                                    })
                            
                                    .catch((err) => {
                                        console.log("rejected", err.message);
                                      });
                 
                          })
                              
                            })
                            .catch((err) => {
                              console.log("rejected", err.message);
                            });

// ******************************************************************************

    
                            let myAsyncFunction8 = async () => {
                                const response = await fetch("https://www.anapioficeandfire.com/api/books/8");
                                
                                let data = await response.json();
                                return data;
                              };
                              myAsyncFunction8()
                                .then((data) => {
                                    console.log(data);
                                  let author8 = (data.authors);
                                  let name8 = (data.name);
                                  let isbn8 = (data.isbn);
                                  let nop8 = (data.numberOfPages);
                                  let publisher8 = (data.publisher) 
                                  let rdate8 = (data.released)
                                  let date8 = rdate8.slice(0,10);
                            
                                  document.getElementById("div8").innerHTML += "<h3>Book Number 8<h3>";
                                  document.getElementById("div8").innerHTML += "<br>";
                                  document.getElementById("div8").innerHTML += `Name of the Book: ${name8}`;
                                  document.getElementById("div8").innerHTML += "<br><br>";
                                  document.getElementById("div8").innerHTML += `Author of the Book: ${author8}`;
                                  document.getElementById("div8").innerHTML += "<br><br>";
                                  document.getElementById("div8").innerHTML += `ISBN of the Book: ${isbn8}`;
                                  document.getElementById("div8").innerHTML += "<br><br>";
                                  document.getElementById("div8").innerHTML += `Number of Pages of the Book: ${nop8}`;
                                  document.getElementById("div8").innerHTML += "<br><br>";
                                  document.getElementById("div8").innerHTML += `Publisher: ${publisher8}`;
                                  document.getElementById("div8").innerHTML += "<br><br>";
                                  document.getElementById("div8").innerHTML += `Released date: ${date8}`;
                                  document.getElementById("div8").innerHTML += "<br><br>";
                                  document.getElementById("div8").innerHTML += `Character Names are: `;

                                  let url = ["https://www.anapioficeandfire.com/api/characters/21", "https://www.anapioficeandfire.com/api/characters/22", "https://www.anapioficeandfire.com/api/characters/24", "https://www.anapioficeandfire.com/api/characters/25", "https://www.anapioficeandfire.com/api/characters/26"] 
                          
                                  url.forEach((element) => {
                              
                                    let charfun = async () => {
                                        const response = await fetch(element);
                                        
                                        let data = await response.json();
                                        return data;
                                      };
                                      charfun()
                                        .then((data) => {
                                            console.log(data);
                                          
                                          document.getElementById("div8").innerHTML += `${data.name}, `;
                                        })
                                
                                        .catch((err) => {
                                            console.log("rejected", err.message);
                                          });
                     
                              })
                                  
                                })
                                .catch((err) => {
                                  console.log("rejected", err.message);
                                });

// ***************************************************************************

                                let myAsyncFunction9 = async () => {
                                const response = await fetch("https://www.anapioficeandfire.com/api/books/9");
                                
                                let data = await response.json();
                                return data;
                              };
                              myAsyncFunction9()
                                .then((data) => {
                                    console.log(data);
                                  let author9 = (data.authors);
                                  let name9 = (data.name);
                                  let isbn9 = (data.isbn);
                                  let nop9 = (data.numberOfPages);
                                  let publisher9 = (data.publisher) 
                                  let rdate9 = (data.released)
                                  let date9 = rdate9.slice(0,10);
                            
                                  document.getElementById("div9").innerHTML += "<h3>Book Number 9<h3>";
                                  document.getElementById("div9").innerHTML += "<br>";
                                  document.getElementById("div9").innerHTML += `Name of the Book: ${name9}`;
                                  document.getElementById("div9").innerHTML += "<br><br>";
                                  document.getElementById("div9").innerHTML += `Author of the Book: ${author9}`;
                                  document.getElementById("div9").innerHTML += "<br><br>";
                                  document.getElementById("div9").innerHTML += `ISBN of the Book: ${isbn9}`;
                                  document.getElementById("div9").innerHTML += "<br><br>";
                                  document.getElementById("div9").innerHTML += `Number of Pages of the Book: ${nop9}`;
                                  document.getElementById("div9").innerHTML += "<br><br>";
                                  document.getElementById("div9").innerHTML += `Publisher: ${publisher9}`;
                                  document.getElementById("div9").innerHTML += "<br><br>";
                                  document.getElementById("div9").innerHTML += `Released date: ${date9}`;
                                  document.getElementById("div9").innerHTML += "<br><br>";
                                  document.getElementById("div9").innerHTML += `Character Names are: `;

                                  let url = ["https://www.anapioficeandfire.com/api/characters/33", "https://www.anapioficeandfire.com/api/characters/38", "https://www.anapioficeandfire.com/api/characters/39", "https://www.anapioficeandfire.com/api/characters/40", "https://www.anapioficeandfire.com/api/characters/48"] 
                          
                                  url.forEach((element) => {
                              
                                    let charfun = async () => {
                                        const response = await fetch(element);
                                        
                                        let data = await response.json();
                                        return data;
                                      };
                                      charfun()
                                        .then((data) => {
                                            console.log(data);
                                          
                                          document.getElementById("div9").innerHTML += `${data.name}, `;
                                        })
                                
                                        .catch((err) => {
                                            console.log("rejected", err.message);
                                          });
                     
                              })

                                  
                                })
                                .catch((err) => {
                                  console.log("rejected", err.message);
                                });

// ***********************************************************


                                let myAsyncFunction10 = async () => {
                                    const response = await fetch("https://www.anapioficeandfire.com/api/books/10");
                                    
                                    let data = await response.json();
                                    return data;
                                  };
                                  myAsyncFunction10()
                                    .then((data) => {
                                        console.log(data);
                                      let author10 = (data.authors);
                                      let name10 = (data.name);
                                      let isbn10 = (data.isbn);
                                      let nop10 = (data.numberOfPages);
                                      let publisher10 = (data.publisher) 
                                      let rdate10 = (data.released)
                                      let date10 = rdate10.slice(0,10);
                                
                                      document.getElementById("div10").innerHTML += "<h3>Book Number 10<h3>";
                                      document.getElementById("div10").innerHTML += "<br>";
                                      document.getElementById("div10").innerHTML += `Name of the Book: ${name10}`;
                                      document.getElementById("div10").innerHTML += "<br><br>";
                                      document.getElementById("div10").innerHTML += `Author of the Book: ${author10}`;
                                      document.getElementById("div10").innerHTML += "<br><br>";
                                      document.getElementById("div10").innerHTML += `ISBN of the Book: ${isbn10}`;
                                      document.getElementById("div10").innerHTML += "<br><br>";
                                      document.getElementById("div10").innerHTML += `Number of Pages of the Book: ${nop10}`;
                                      document.getElementById("div10").innerHTML += "<br><br>";
                                      document.getElementById("div10").innerHTML += `Publisher: ${publisher10}`;
                                      document.getElementById("div10").innerHTML += "<br><br>";
                                      document.getElementById("div10").innerHTML += `Released date: ${date10}`;
                                      document.getElementById("div10").innerHTML += "<br><br>";
                                      document.getElementById("div10").innerHTML += `Character Names are: `;

                                      let url = ["https://www.anapioficeandfire.com/api/characters/39", "https://www.anapioficeandfire.com/api/characters/40", "https://www.anapioficeandfire.com/api/characters/49", "https://www.anapioficeandfire.com/api/characters/55", "https://www.anapioficeandfire.com/api/characters/76"] 
                          
                                      url.forEach((element) => {
                                  
                                        let charfun = async () => {
                                            const response = await fetch(element);
                                            
                                            let data = await response.json();
                                            return data;
                                          };
                                          charfun()
                                            .then((data) => {
                                                console.log(data);
                                              
                                              document.getElementById("div10").innerHTML += `${data.name}, `;
                                            })
                                    
                                            .catch((err) => {
                                                console.log("rejected", err.message);
                                              });
                         
                                  })
                                      
                                    })
                                    .catch((err) => {
                                      console.log("rejected", err.message);
                                    });


// Characters******************************************

