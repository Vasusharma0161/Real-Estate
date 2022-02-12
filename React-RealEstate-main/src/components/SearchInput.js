import React from 'react';
import axios from 'axios';
import Search from './Search';

function Random(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rand=Random(0, 4);
let quote = ["i1.jpeg", "i2.jpeg","i3.jpeg", "i4.jpeg","i5.jpeg"];

function SearchInput(prop) {
    console.log(prop.try)
    return (<>
        <div className="mt-24"><img src={quote[rand]} className="mx-auto w-10/12 h-96 rounded-2xl shadow-2xl m-0 p-0 bg-cover" alt="" /></div>
        </>);
}
export default SearchInput;