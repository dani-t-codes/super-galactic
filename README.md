# Application name "Super Galactic Age Calculator"

#### Test Driven Development & Environments with Javascript Practice for Epicodus, 11.13.20

#### By Danielle Thompson

## Description
While a solar year lasts 365 on planet Earth, no planet in our solar system shares the same solar year length. This application determines both a user's age and life expectancy for Earth, Mercury, Venus, Mars, and Jupiter. 

Life expectancy is calculated based on death probabilities according to Farr's death rate method: qx = Mx / (Bx + (Mx/2)) where Mx = number of deaths at age of x to under x+1 years in the reported period; Bx = average population aged x to under x+1 in the base period; qx = death probability from age x to x+1. Relevant demographic data includes: 
* Current age
* Calendar year
* Country
* Region (according to ISARE recommendations) 
* Gender
* Age group
* Socio-economic status

Additional factors to consider for calculating death rates could include weight, height, education level, marital status, retirement status, annual income, frequency of exercise, general health, smoker/non-smoker status, alcoholic beverages per week 

## Technologies used
* _Javascript_
* _Bootstrap_
* _jQuery_
* _node.js_ 
* _webpack_

## Color theme
* _#2E3C8C (Med-dark blue)_
* _#CEF2F2 (Light blue)_
* _#F2600C (Orange)_
* _#590202 (Burnt red)_
* _#0D0D0D (Black)_

## Installation requirements
###### For Mac Users
* _Access Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Ensure Homebrew packages are run with this line of code: `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._
* _Now, install Node.js through Homebrew with the following command: `brew install node`._
* _Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher)._

###### For Windows Users
* _Open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Determine whether you have 32-bit or 64-bit Windows by following these (instructions)[https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running]._
* _Go to (Git Bash)[https://gitforwindows.org/], click on the "Download" button, and download the corresponding exe file from the Git for Windows site._
* _Follow the instructions in the set up menu._
* _Once you have Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/super-galactic], click the "Fork" button in the upper right hand corner of the page, and clone this application with the following command:`git clone https://github.com/dani-t-codes/super-galactic`._
* _Go to the (Node.js website)[https://nodejs.org/en/download/] and download the appropriate source code for your Windows operating system._ 

###### For Both Mac & Windows systems
* _Once the project has been cloned to your computer, open index.html in your web browser of choice, either by double-clicking the file icon inside the project folder, or by opening File>Open File>"index.html" from the super-galactic folder that you cloned onto your computer._

### Setup Instructions
* TODO
* _List setup instructions_
* _Clearly & simply here_
* _So that anyone who uses your app_
* _Will be able to reproduce the app fxns, etc._

_{Q's to ask in setup: Do person using an app need to run a server? How should they set up my databases? Is there other code this app depends on? Etc.}_

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5500 | Homepage with user input form |
| **Program Gathers User Input** | User input: "hopes" | Output: "dreams" |
| **Program Removes Spaces from User Input**| User Input: "hope hope" | Output: "hopehope" |
| **Program Removes Punctuation from User Input**| Input: "h*o@pe  /h#o**p'e" | Output: "hopehope" |
| **Program Assigns Characters Numeric Values** | Input: "hope" | Output: "4 1 6 2" |
| **Program Sums Character Values**| Input: "4 1 6 2" | Page Displays: 13 |

### Tests

## (Optional) Known bugs

_{I am Danielle's *bug* that needs fixing. I might impact this app by doing xyz. But you can do abc to get around me. Can do future fix me plz!}_

### Legal, or License 

_MIT_ Copyright (c) 2020 **_Danielle Thompson_**