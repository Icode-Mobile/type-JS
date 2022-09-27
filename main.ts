interface DataProps {
  name: string;
  age: number;
}

function myFunction({ name, age }: DataProps) {
  console.log(typeof name, typeof age);
}
myFunction({ name: 'Caio Cosenza', age: 20 });
