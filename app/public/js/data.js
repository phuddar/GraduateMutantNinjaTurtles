const SomeApp = {
    data() {
      return {
          refs: {},
          curID: [],
          games: [],
          weather: {},
          current: {},
          feed: {}

      }
    },
    computed: {},
    methods: {
        getRefData(){
            fetch('/api/refs/')
          .then( response => response.json() )
          .then( (responseJson) => {
              //console.log(responseJson);
              this.refs = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
        },
        selectRef(i){
            this.curID = i;
            //console.log(this.curID);
            this.generateGame(this.curID);
        },
        generateGame(i){
        console.log("Fetching game data for:", i.Referee_ID);
           fetch('/api/games/?ref=' + i.Referee_ID)
        //fetch('/api/games/')
          .then( response => response.json() )
          .then( (responseJson) => {
              
              this.games = responseJson;
            //   console.log(this.games);
          })
          .catch( (err) => {
              console.error(err);
          });
        },
        getWeather(){
            fetch(`https://api.weatherapi.com/v1/current.json?key=1a7ba1d83faf49828d405436210511&q=London&aqi=no`)
            .then( response => response.json() )
            .then( (responseJson) => {
                // console.log(responseJson);
                this.weather = responseJson;
                // console.log(this.weather.current.condition.icon);
                
            })
            .catch( (err) => {
                console.error(err);
            })
          },
          getTwitter(){
            fetch(`https://www.thesportsdb.com/api/v1/json/1/searchfilename.php?e=English_Premier_League`)
            .then( response => response.json() )
            .then( (responseJson) => {
                //console.log(responseJson);
                this.feed = responseJson.event;
                console.log(this.feed)
                console.log('here!');
                console.log(this.feed.strThumb);
                
            })
            .catch( (err) => {
                console.error(err);
            })
          }
    },
    created() {
        this.getRefData();
        this.getWeather();
        this.getTwitter();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#refereeGame');