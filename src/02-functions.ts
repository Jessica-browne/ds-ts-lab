import { friends, colleagues } from './01-basics'
import {Friend, Colleague } from './myTypes'



function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends : Friend[]): string[] {
const result: string[] = [];
     for(let i = 0; i < friends.length; i++) {
          friends[i].age +=1;
          result.push(`${friends[i].name} is now ${friends[i].age}`);
     }
     return result;
}

//console.log(older(friends[0]))
//console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name :string, department: string, email: string) : void {
           const currentHigh = highestExtension(cs)
           const newHigh =  currentHigh.contact.extension +1;
           const newColleague: Colleague = {
               name: name,
               department: department,
               contact: {
                    email: email,
                    extension: newHigh, 
               } 
           };
     cs.push(newColleague);   
     }

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


