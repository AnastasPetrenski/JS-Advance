const vehicleMixin = {
    set (name, value) {
      this[name] = value;
    },
  
    get (name) {
      return this[name];
    },
    
    speed: 0,
    
    accelerate () {
      this.speed += 2;
      console.log(`accelerated: ${this.speed}`);
    },
    
    brake () {
      this.speed -= 4;
      console.log(`braking: ${this.speed}`);
    }
  };
  
  const lamboShell = { colour: 'orange', speed: 0 };
  // combines both objects into one
  let lambo = Object.assign({}, lamboShell, vehicleMixin);
  // the lambo can now accelerate
  lambo.accelerate();
  
  // colour is not truly private can be accessed directly via lambo.colour
  console.log(lambo.get('colour'));
  
  lambo.colour = 'silver'; // will change value potentially breaking the state
  


  //======================================//
  const Engine = {
    accelerate (speed, incrementSpeed) {
      return speed + incrementSpeed;
    },
    decelerate (speed, decrementSpeed) {
      return speed - decrementSpeed;
    }
  }
  
  const Breaks = {
    stop(speed) {
      if(speed > 0) this.stop(speed - 3);
      
      return 0;
    }
  }
  
  const Design = {
    colour: 'Orange',
    model: 'Huracan Spyder'
  };
  
  const Lambo = function(Design, Engine, Breaks){
    const design = Object.create(Design);
    const engine = Object.create(Engine);
    const breaks = Object.create(Breaks);
    const props = {
      speed: 0,
      colour: design.colour,
      model: design.model
    };
    
    return {
      set (name, value) {
        props[name] = value;
      },
  
      get (name) {
        return props[name];
      },
      
      log (name) {
        console.log(`${name}: ${props[name]}`)
      },
      
      slowDown() {
        props.speed = engine.decelerate(props.speed, 3);
      },
      
      speedUp() {
        props.speed = engine.accelerate(props.speed, 3);
      },
      
      stop(){
        props.speed = breaks.stop(props.speed);
      }
    }
  };
  
  lambo = Lambo(Design, Engine, Breaks);
  lambo.speedUp();
  lambo.log('speed'); //-> 3
  lambo.slowDown();
  lambo.log('speed'); //-> 0
  
  lambo.log('colour'); //-> orange
  // we can change the colour
  lambo.set('colour', 'black');
  // see it has changed
  lambo.log('colour'); //-> black
  