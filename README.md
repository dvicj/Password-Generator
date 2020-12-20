# Password Generator Starter Code
Please visit my completed webpage at:  https://dvicj.github.io/Password-Generator/

![demo](https://github.com/dvicj/Password-Generator/blob/master/Develop/password-gen-demo.gif)

Hello again, and welcome to my README! This is for my Week 3 Challenge, which was to use JavaScript to create a random password generator. I learned a lot while doing this, and I am happy to be able to share my experience with you. 

Based on the job ticket/ user story, the client wanted their password generator to:

	- prompt for password length, between 8 and 128 characters 

	- have the option to choose if the password had: special characters, numbers, lowercase letters and uppercase letters. The password was to be created based on the criteria the user chose. 

<br>
	
Secure passwords are extremely important at protecting your online privacy. If JavaScript code can quickly prepare a password based on specific criteria, why should any human have to make one up for themselves? 

Features: 


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Learning](#learning)
* [License](#license)


## Installation

There is no installation required. All files must remain in the position in which they are saved to ensure that all links, styles and photos function properly. 

Below are examples of the links for the CSS style sheet and the images used in this webpage. 

![style sheet relative path](https://github.com/dvicj/Horiseon-Accessibility/blob/main/style%20sheet%20relative%20path.PNG)

![image relative path](https://github.com/dvicj/Horiseon-Accessibility/blob/main/image%20relative%20path.PNG)

## Usage
Here are some user experience highlights from my page: 

    - when the user clicks on the "Generate Password" button, a window prompt will appear asking them how many characters they would like their password to be. They are to enter a number between 8 and 128. 
    - a series of window confirms will appear, asking the user if they want to have special characters, numbers, lowercase and/or uppercase letters. The user does not have to pick all of the options, but they need to pick atleast one! 
    - once all of the questions have been confirmed (or denied), the randomly generated password will appear in the text box. The user simply has to copy and paste the password where they need it. 

## Credits
These are some sources I used to help me along:

- [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)

- [JavaScript Array concat Method](https://www.w3schools.com/jsref/jsref_concat_array.asp)

- [JavaScript Array push Method](https://www.w3schools.com/jsref/jsref_push.asp)


## Learning
Here are the highlights of what I learned and issues I had while writing this code.

1. I went into this project WAY too confident. I was never under the impression that I fully understood JavaScript or anything, but I thought I would be able to figure things out. Well, 10 hours later and I feel I barely scratched the surface. I tend to overthink things, and if you look through my past commits, you'll see that I was just making way too many arguments, functions, variables etc. that I just ended up severely confusing myself. 

2. I had a hard time with objects vs. strings vs. numbers this time around. I had to keep using "typeof" in the console log to make sure that I wasn't trying to multiply a string with a number, or and object with a string. NEWS ALERT: That's what I did like 100 times. 

3. My # issue I had with this project was trying to get the password length to be what the user inputted. That took me about 3-4 hours of trial and error before I finally found something that worked for me.

4. After 8 + hours of trying to write the js code from scratch, I relied HEAVILY on the starter code given to us. I tried to change things as much as I could to make better sense to me. I am not confident in my work with JavaScript at this point, and I really look forward to learning more. 

Below is an image of the notes I took a few days ago when I first was thinking about this challenge. My basic ideas stayed the same. 

![password notes](https://github.com/dvicj/Password-Generator/blob/master/Develop/password%20generator%20notes.PNG)


## License

MIT License

Copyright (c) 2020 Devin Jones 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



