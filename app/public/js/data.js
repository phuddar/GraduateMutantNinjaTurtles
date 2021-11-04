const SomeApp = {
    data() {
      return {
          refs: {},
          curID: [],
          games: []

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
              console.log(this.games);
          })
          .catch( (err) => {
              console.error(err);
          });
        }
    },
    created() {
        this.getRefData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#refereeGame');