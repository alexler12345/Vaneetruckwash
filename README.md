### hi this is a project that i am doing for credits in my computer sience class the website is at https://vaneetruckwash.net

if you want to help out please email me at Alex.holley761@gmail.com 

# How to build:

## In home directory:

### Quick start:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install 22
git clone https://github.com/alexler12345/Vaneetruckwash.git
cd Vaneetruckwash
npm install
npm run build
npm start
```
this will start on localhost:3000

## Full guide

MUST INSTALL NODE.JS 
as this is a nextjs build nodejs is needed to do that go to https://nodejs.org/en/download 

1.) download file with 
```
git clone https://github.com/alexler12345/Vaneetruckwash.git
```
2.) cd to directory
```
cd Vaneetruckwash
```
3.) install
```
npm install
```
4.) make sure time is set to Amarican Edmontion with this command
```
sudo dpkg-reconfigure tzdata
```
5.) build
```
npm run build
```
6.) enter google api key for google calender and google calender id

7.) run dev/run production
```
npm run dev
```
or 
```
npm run start
```

## In root directoy:

MUST INSTALL NODE.JS 
as this is a nextjs build nodejs is needed to do that go to https://nodejs.org/en/download
to install in root install node in home directory then if using Ubuntu:
```
sudo apt install npm
```

1.) download file with 
```
sudo git clone https://github.com/alexler12345/Vaneetruckwash.git
```
2.) cd to directory
```
cd Vaneetruckwash
```
3.) install
```
sudo npm install
```
4.) make sure time is set to Amarican Edmontion with this command
```
sudo dpkg-reconfigure tzdata
```
5.) build
```
sudo npm run build
```
6.) enter google api key for google calender and google calender id

7.) run dev/run production
```
sudo npm run dev
```
or 
```
sudo npm run start
```
 
