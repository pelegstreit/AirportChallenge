import {EventEmitter} from 'events'
import dayjs from 'dayjs'
dayjs().format()

export default function(){
    return 'space'
}
export class Flight extends EventEmitter{
    #number = null
    #origin = null
    #destination= null
    #departed = -1
    #arrived = -1
    constructor(number,origin,destination){  
        super()
        this.#number = number
        this.#origin = origin
        this.#destination = destination
    }

    get number(){return this.#number}
    set number(value){this.#number = value}

    get origin(){return this.#origin}
    set origin(value){this.#origin = value}

    get destination(){return this.#destination}
    set destination(value){this.#destination = value}

    get departed(){return this.#departed}
    set departed(value){throw new Error('Read only property')}

    get arrived(){return this.#arrived}
    set arrived(value){throw new Error('Read only property')}
#arrive(){// create event of arrival time with all flight data
        let landtime = dayjs().format('HH:mm:ss')
        this.#arrived = landtime
        this.emit(`ARRIVED`, this.#number, this.#origin, this.#destination,this.#departed, this.#arrived)
    } 

    depart(){ // depart the selected flight
        var now = dayjs().format('HH:mm:ss')
        this.#departed = now
        let randDealy = Math.floor(Math.random() * 5000) + 1000
     setTimeout(()=>this.#arrive(),randDealy); 
    }  
}