# Final Java Web Project
Front end


# What is this project
This project was done for our final work in our Java Web class

## Description

This website is a sort of dictionary where information was gathered (quickly not professionally) and put together. 

There is a list of countries and a page to answer questions. 

The questions page is composed of a component that displays it and, in the component, there is a verify button that tells you if you answered correctly or not. In the countries page there is two buttons on each country component, one of them brings you to a 'details' page with an interactive map and the others to the quiz page but with only questions that are for that country.

# Technologies 
This project is based on React a technology created by Meta. 

It uses react router (https://reactrouter.com/en/main)
As well as TimeAgo (https://github.com/nmn/react-timeago) and React Simple Maps (https://www.react-simple-maps.io/) 

Spring Boot was used for the backend which can be seen here (https://github.com/DylanBrass/CountriesWebsiteProject/blob/master/README.md)

These are all the important files : 

![image](https://user-images.githubusercontent.com/71225455/209422515-f22ed540-4226-4599-a39d-30cd794f9f36.png)

We can see that for router I had to create the pages folder and all of these pages are linked with the index.js which the code ressembles this :
```jsx   
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="EditPage" element={<EditPage />} />
          <Route path="Countries" element={<Countries />} />
          <Route path="mapPage" element={<MapPage />} />
          <Route path="CreateQuestion" element={<CreateQuestionPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   ```
   
The components folder contains the map library previously mentioned, how I display my questions and my countries


The last one is more interesting because it is a fix that I needed because of the large amount o text I had. 
The component ScrollToTop is used to remedy the problem of starting in the middle of the page.

# Running the project

To run the project you simply need to download node module for this react app. And then start my backend code (we use intellij) and run it on port 8080.
Since the package.json is still there you do not need to redownload the libraries used.


# Challenges 

The main problem I encountered was trying to edit what country the question relates to, it is the only part of my project that I failed at. But I am convinced that with a bit more time I would have succeeded.

Other problems that were solved are :

#### The randomisation of the questions 

I used this algorithm :
```jsx
      const getMultipleRandom = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, num);
    }
```
This sorts the array then randomises it 

A weakness to this array shuffler is explained here : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/18650169#18650169

But I still decided to use it because of it's simplicity and the realtive size of my project.
    
#### The randomisation of the answers 

This is the algorithm I ended using : 

```jsx
const shuffle = (array) => {
        if (verify == false) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        return array;
    }

```

My if statement is to make sure that the question was not answered correcty otherwise this is a common shuffling algorithm for arrays


#### The scrollToTop

Here is the previously mentionned fix to the page rendering in the middle of my huge block of text

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
};

export default ScrollToTop;
```

# Design

The pages follow the same structure

If a page requires a certain component to be repeated it is created as a component, as we see with CountryDisplay and QuestionDisplay.

Otherwise everything is in the pages folder.

The exception to this is the libraries that require a lot of code such as the map, because it is quite big I decided to put it as a component for ease of reading the code and for modifying it. 

ScrollToTop is a component, so it is created as such. 

Index.js is used simply for routing and Home.jsx is set as my index so that when the page is loaded it's where the user starts.

The back end was done with spring boot and can be found in the link given above...
We are using the H2 Database.


### Home page 
![image](https://user-images.githubusercontent.com/71225455/209448735-4ab2e801-5ffa-4e12-99f1-7b5485780764.png)

This page is simply to inform the user the goal and functions of this website


### The quiz page


This is where the user answers questions, for now it's five question picked at random 

![image](https://user-images.githubusercontent.com/71225455/209448781-35ac11b2-7705-4fb4-8df5-0b5f5b4ad810.png)


Here is a example of the question block :
![image](https://user-images.githubusercontent.com/71225455/209448790-6602400c-3441-4a26-8a7a-f96d471e4f07.png)

The questions are easy, but can be made much harder !


On mobile the questions look like this : 

![image](https://user-images.githubusercontent.com/71225455/209449168-a88337b3-d120-405a-a61b-2c71a18c0186.png)

### The countries page


This is where the user can search and look at countries quick overview :

The countries each have their square : 

![image](https://user-images.githubusercontent.com/71225455/209448981-da1a55ce-ee69-4412-9571-e921bcacb288.png)

![image](https://user-images.githubusercontent.com/71225455/209448991-c797ba01-3de2-45cc-a61a-1f705de6a977.png)

![image](https://user-images.githubusercontent.com/71225455/209448997-ac99926c-9fce-4a9b-8d80-d01e3ce46120.png)

![image](https://user-images.githubusercontent.com/71225455/209448999-f53eedd5-8fb4-4118-9aed-170902588ae4.png)


The two buttons bring you to the quiz age that will only have question about that country and the first one brings you to the Map Page described below

On Mobile :

![image](https://user-images.githubusercontent.com/71225455/209449009-2db11538-b01a-4bcb-b0e8-9dc7007e6d4f.png)

![image](https://user-images.githubusercontent.com/71225455/209449015-340d1dfa-bb17-4b7c-aa9c-25804e667723.png)



# Map Page


On desktop :

![image](https://user-images.githubusercontent.com/71225455/209449135-a4c81415-b2aa-4c4f-adb6-46b2cdc2887e.png)


![image](https://user-images.githubusercontent.com/71225455/209449142-8c0df536-a165-4045-bdb2-2add5e7cb012.png)


On mobile : 

![image](https://user-images.githubusercontent.com/71225455/209449150-899739a9-c487-4d45-9fd8-dabb3649e1d6.png)


# Create a question page 

It is a simple form to not throw too much info at the user : 
![image](https://user-images.githubusercontent.com/71225455/209449199-c074cac7-5ff6-481f-a233-fc022cc699d1.png)


Even works on small screens or mobile !

![image](https://user-images.githubusercontent.com/71225455/209449271-a9dfed82-c6e5-4798-b339-f205393ad58f.png)


# Edit page

On desktop :

![image](https://user-images.githubusercontent.com/71225455/209449306-81b1a32f-eadb-4b42-b751-d01c3c69b8de.png)


On mobile :

![image](https://user-images.githubusercontent.com/71225455/209449292-33250336-9323-49db-88b7-c218b017cde7.png)
