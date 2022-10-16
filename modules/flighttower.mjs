import {EventEmitter} from 'events'
// import { setTimeout } from 'timers/promises'
import { Flight } from "./flight.mjs"
import dayjs from 'dayjs'
import { platform } from 'os'
dayjs().format()
import marker from '@ajar/marker'; 

export default function(){
    return 'space'
}
export class FlightTower extends EventEmitter{
    flightCount = 0
    flightsDestinations = []
    
    constructor(flightCount,flightsDestinations){
        super()
        this.flightCount = flightCount
        this.flightsDestinations = flightsDestinations}

        get flightCount(){return this.flightCount}
        set flightCount(value){throw new Error('Read only property')}

        get flightsDestinations(){return this.flightsDestinations}
        set flightsDestinations(value){this.unique(value)}

      unique(destination){ //check if destination is already in array
        if (this.flightsDestinations.includes(destination) === false){
            this.flightsDestinations.push(destination)
        }
       
     }
     flightdepart(){ // count all flight
        this.flightCount +=1
        return this.flightCount
     }
     summary(){ // console summary of number of flight and the unique destinatios
        marker.blue(`\nTotal of ${this.flightCount} flights has departed`)
        marker.green(`The flights landed on those unique destinations: ${this.flightsDestinations}`)
     }
    createFlights(arr){ // departs all flight
        for (var flight =0; flight < arr.length; flight++){
            let newFlight = new Flight(arr[flight].number,arr[flight].origin,arr[flight].destination)
            newFlight.depart()
            newFlight.on(`ARRIVED`,(number, origin, destination,departed, arrived) =>{marker.cyan(`Flight number:"${number}, origin:${origin}, destination: ${destination}, time departed: ${departed}, time landed: ${arrived},`)})
            this.flightdepart()
        this.unique(arr[flight].destination)
        };
        setTimeout(()=>this.summary(),10000);
    }

}
