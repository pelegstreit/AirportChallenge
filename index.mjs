import {Flight}  from "./modules/flight.mjs";
import {FlightTower} from './modules/flighttower.mjs'
import all_data from './flights.json' assert {type:"json"}
import { setTimeout } from 'timers/promises'
import { assert } from "console";
import { type } from "os";

let myFlightTower = new FlightTower(0,[])
const allFlightsArr = all_data.flights
myFlightTower.createFlights(allFlightsArr)


