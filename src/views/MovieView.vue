<template>
    <NavigatorComponent pageName="Catalogue">
        <ContentHeader name="Movies"/>
        <div class="flex justify-start flex-col gap-y-3 px-10 ">
            <ContentComponent v-for="i in 10"/>
        </div>
        <div class="btn-group flex justify-center mt-10 mb-7">
            <button class="btn">«</button>
            <button class="btn">Page 1</button>
            <button class="btn">»</button>
        </div>
    </NavigatorComponent>
</template>
<script setup lang="ts">
import NavigatorComponent from '../components/NavigatorComponent.vue';
import ContentHeader from '../components/ContentHeader.vue';
import ContentComponent from '../components/ContentComponent.vue';
import { Movie, MPA_Rating } from '@prisma/client';

 let re: Movie = {
    title: 'test',
    dateReleased: new Date(),
    mpaRating: MPA_Rating.GEN,
    categories: [],
    description: 'test',
    avgScore: 0, 
    coverImage: 'test',
    id: "1",
    duration: 0,
}
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  name: string = "Bee";
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: {new () : A}): A {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag);
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
// type NameOrId<T extends number | string> = 
function createLabel<T>(idOrName: T): T extends number ? IdLabel: NameLabel {
  throw "unimplemented";
}
// createLabel("typescript").name // type of NameLabel
// createLabel<number>(1).id // type of IdLabel
// createLabel<Movie>(re).name // type of IdLabel
type World = "Movie" | "Series" | "Book";
type Greeting = `Review for ${World}`;
let greeting: Greeting = "Review for Book";

type EventPropType<T> = {
  on<Key extends string & keyof T>(eventName: `${Key}Changed`, callback: (newValue: T[Key]) => void ): void;
};

function makeWatched<T>(obj: T,t: EventPropType<T>): T & EventPropType<T> {
  return {
    ...obj,
    ...t,
  } as T & EventPropType<T>;
}

let t: EventPropType<Movie> = {
  on<Key extends string & keyof Movie>(eventName: `${Key}Changed`, callback: (newValue: Movie[Key]) => void ): void {

  },
};

let something = makeWatched(re,t);

something.on("mpaRatingChanged", (newValue) => {
  console.log(newValue);
});
something.title = "new title";
// person.target.value = "test";
// console.log(person.target.value);
// console.log(t.target.value);


// let p = {
//   name: "John",
//   age: 20,
//   watched: false,
// };

// function run(v: keyof typeof p){
//   console.log(v);
// }

// run("name");
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
};

</script>
