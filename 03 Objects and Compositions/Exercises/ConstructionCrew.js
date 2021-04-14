function drinkWater(obj){
    if (obj.dizziness) {
        let water = obj.weight * 0.1 * obj.experience;
        obj.levelOfhydrated += water;
        obj.dizziness = false;
    }

    console.log(obj);
}

drinkWater({weight: 80,
    experience: 1,
    levelOfhydrated: 0,
    dizziness: true})

drinkWater({weight: 120,
    experience: 20,
    levelOfhydrated: 200,
    dizziness: true})