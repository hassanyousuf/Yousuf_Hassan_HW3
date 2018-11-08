
         //----------------------------------------------------------------------------------------------------------------------------------------
                
                
                
                
                
                
                
         //work in firefox to look at code. chrome doesn't allow in some situations
                
                
                
                
                
        //  initial movement
                
        //  TweenMax.to("#topBun", 5, {y:2500});//good
                
        //  the 5 is the time frame and the y is the direction and distance 
                
        //  TweenMax.to("#sauce", 5,{y:2300});
                
        //  TweenMax.to("#micogreens", 5,{y:3350});
                
        //  TweenMax.to("#friendOnions", 5,{y:2300});
                
        //  TweenMax.to("#tomato", 5,{y:2250});
                
        //  TweenMax.to("#pickles", 5,{y:2200});
                
        //  TweenMax.to("#cheese", 5,{y:2150});
                
        //  TweenMax.to("#burger", 5,{y:210});
                
        //  TweenMax.to("#lettuce", 5,{y:150});
                
        //  TweenMax.to("#mayo", 5,{y:350});
                
        //  TweenMax.to("#bottomBun",1 ,{y:100, scale:0,opacity:0,ease: Elastic.easein.config(1, 0.3
                
        //  TweenMax.to("#headerText", ,{y:});
                
        //  TweenMax.to("#tray", ,{y:});
                
        //       )});
                
        //  TweenMax.to("#", ,{y:});
                
        //  TweenMax.to("#", ,{y:});
                
                
                
                
                
                
                
                
                
         // interactivity with each element
                
                
                
         TweenMax.staggerFrom(".testing", 1, {y:100, scale:0,opacity:0,ease: Elastic.easeOut.config(1, 0.3)}, 1);
                
                
                
                
                
         //animation is going to start with the logo , then the board will appear right underneath and the ingredients will stack ontop of it filling the place and pushing it down
                
                
                
                

                // abi made this so taht all the item drop together.
         
                TweenMax.staggerFrom(".svg",1, {y:-500}, 0.4);
                
                // --------------------------tween max done --------------------------------

                function fetchData() {
                    //this.id gives you id of box that you've clicked on 
                    fetch(`./includes/connect.php?nameID=${this.id}`)
                    //convert it into object
                    .then (res => res.json())
                    //pass it to start of the dataset
                    .then (data => {
                        
                        console.log(this);
                        console.log(data);
                        parseImgData(data[0]);
                        this.removeEventListener("click", fetchData);
                    })
                    //show error message in case of error
                    .catch(function(error) {
            
                        console.error(error);
                    });




            // bringing header info from database
            
            const    = document.querySelector("#");

                function addingPromoText(){
    
                    fetch(`./includes/connect.php`)
                    .then(res => res.json())
                    .then(data => {
                        // just to check data is coming or not
                        // console.log(data[0]);
                
                        // divided data into different feilds
                        // const {promo_id, promo_title, promo_label, promo_text} = data[0]
                        const {ID, header, paragraph} = data[0]
                        // assigned html data to page
                        document.querySelector("#ID"). textContent = ID;
                        document.querySelector("#header").textContent = heading;
                        document.querySelector("#paragraph").textContent = paragraph;
                    })
                    .catch(function(error){
                        console.error(error);
                    });
                
         // variables
                
                
                
         var _topB = document.querySelector("#topBun");
                
                
                
         var _sau = document.querySelector("#sauce");
                
                
                
         var _microG = document.querySelector("#microGreens");
                
                
                
         var _friedO = document.querySelector("#friedOnions");
                
                
                
         var _toma = document.querySelector("#tomato");
                
                
                
         var _pick = document.querySelector("#pickle");
                
                
                
         var _chee = document.querySelector("#cheese");
                
                
                
         var _burg = document.querySelector("#burger");
                
                
                
         var _lett = document.querySelector("#lettuce");
                
                
                
         var _may = document.querySelector("#mayo");
                
                
                
         var _bottomB = document.querySelector("#bottomBun");
                
                                        
                
          var _tray = document.querySelector("#platter");
                                                        
                                                        
                                                        
                                                        
// listener for ingredients to show text

 _topB.addEventListener("mouseover", animate_topB);
 _topB.addEventListener("mouseout", unanimate_topB);

 _sau.addEventListener("mouseover", animate_sau);
 _sau.addEventListener("mouseout", unanimate_sau);

 _microG.addEventListener("mouseover", animate_microG);
 _microG.addEventListener("mouseout", unanimate_microG);
 
 _friedO.addEventListener("mouseover", animate_friedO);
 _friedO.addEventListener("mouseout", unanimate_friedO);
 
 _toma.addEventListener("mouseover", animate_toma);
 _toma.addEventListener("mouseout", unanimate_toma);
 
 _pick.addEventListener("mouseover", animate_pick);
 _pick.addEventListener("mouseout", unanimate_pick);
 
 _chee.addEventListener("mouseover", animate_chee);
 _chee.addEventListener("mouseout", unanimate_chee);
 
 _burg.addEventListener("mouseover", animate_burg);
 _burg.addEventListener("mouseout", unanimate_burg);
 
 _lett.addEventListener("mouseover", animate_lett);
 _lett.addEventListener("mouseout", unanimate_lett);
 
 _may.addEventListener("mouseover", animate_may);
 _may.addEventListener("mouseout", unanimate_may);
 
 _bottomB.addEventListener("mouseover", animate_bottomB);
 _bottomB.addEventListener("mouseout", unanimate_bottomB);
 
 _tray.addEventListener("mouseover", animate_tray);
 _tray.addEventListener("mouseout", unanimate_tray);





 // ---------------------- this is how i connect the php table stuff----------------- (car build example)
 
    //grab the car button
    const cars = document.querySelectorAll('.data-ref');
    function fetchData() {
        // fetch(`./includes/connect.php?carModel=${this.id}`)
        //dont need this like cuz i have one id so one table
        .then(res => res.json())
        .then(data => {
            console.log(data);
            db_infographic(data[0]);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function db_infographic(tbl_content) {
        debugger;
        // take the database data and put it on the page
        const { ID, heading } = h2
        const { ID, paragraph } = paragraph
        // take the database data and put it on the page
        document.querySelector("#logo").textContent = _logo;
        document.querySelector("#topBun").textContent = _topB;
        document.querySelector("#sauce").textContent = _sau;
        document.querySelector("#microGreens").textContent = _micgroG;
        document.querySelector("#friedOnions").textContent = _friedO;
        document.querySelector("#tomato").textContent = _toma;
        document.querySelector("#pickles").textContent = _pick;
        document.querySelector("#cheese").textContent = _chee;
        document.querySelector("#burger").textContent = _burg;
        document.querySelector("#lettuce").textContent = _lett;
        document.querySelector("#mayo").textContent = _may;
        document.querySelector("#bootomBun").textContent = _bottomB;
        document.querySelector("#tray").textContent = _tray;

    };



    // function parseCarData(car) {
    //     debugger;
    //     // take the database data and put it on the page
    //     const { modelName, pricing, modelDetails } = car
    //     // take the database data and put it on the page
    //     document.querySelector(".modelName").textContent = modelName;
    //     document.querySelector(".priceInfo").textContent = pricing;
    //     document.querySelector(".modelDetails").textContent = modelDetails;
    // };

    // cars.forEach(car => car.addEventListener("click", fetchData));

   