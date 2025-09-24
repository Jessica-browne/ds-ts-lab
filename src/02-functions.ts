import { friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

var i = 0;

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(f : Friend) : string {
    if (i <= 1) {
     f.age += 1 
     i++
    }
    return `${f.name} is now ${f.age}`
 }
console.log(older(friends[0]))
console.log(allOlder(friends))
