interface Initializer {
    initialize: () => Promise<boolean>;
  }
  
  export default Initializer;