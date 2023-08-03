import React from "react";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

var hello: string = "hello";

let waves: number = 2;

const wavedAt: boolean = true;

let greetings: string[] = [];

const [greet, setGreet] = useState<string>("");

function helloMom() {
  greetings.push(hello);
  waves++;
  setGreet("yes");
}

const moreGreetings = async (): Promise<void> => {
  try {
    helloMom();
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.code as string);
    }
  }
};

export const Component: React.FC = () => {
  return (
    <div className="flex w-auto flex-col text-green-400">
      <div className="flex w-auto flex-col text-green-400">
        <h1>Hello World</h1>
      </div>
      <div className="flex w-auto flex-col text-green-400">
        <input type="text" placeholder="Hello" />
      </div>
    </div>
  );
};
