1) What is the difference between var, let, and const?
var  পুরোনো, function scope এ কাজ করে, আবার declare করা যায়, re-assign করা যায়।
let  আধুনিক, block scope এ কাজ করে, আবার declare করা যায় না, তবে re-assign করা যায়।
const  block scope, declare করার পর মান পরিবর্তন করা যায় না।
 তাই এখন সাধারণত let বা const ব্যবহার করা হয়।

2) What is the difference between map(), forEach(), and filter()?
map()  একটা array কে নতুন array তে রূপান্তর করে (প্রতিটা element modify করা যায়)।
forEach()  শুধু লুপ চালায়, নতুন array রিটার্ন করে না।
filter()  শর্ত অনুযায়ী element বাছাই করে নতুন array দেয়।

3) What are arrow functions in ES6?
Function লেখার ছোট syntax।
নিজের this নেই, parent এর this নেয়।
const add = (a, b) => a + b;

4) How does destructuring assignment work in ES6?
Destructuring মানে হলো array বা object থেকে সরাসরি মান আলাদা করে নেওয়া।
আগে আলাদা করে এক এক করে access করতে হতো, এখন ছোট করে করা যায়।


5) Explain template literals in ES6. How are they different from string concatenation?
Template literals হলো backtick (`) দিয়ে লেখা string।
এতে variable বা expression সরাসরি ${ } এর ভেতরে বসানো যায়।