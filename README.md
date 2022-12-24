# Final Java Web Project
Front end


# What is this project
This project was done for our final work in our Java Web class

## Description

This website is a sort of dictionnary where information was gathered (quickly not professionally) and put together. 

There is a list of countries and a page to answer questions. 

The questions page is composed of a component that displays it and in the component there is a verify button that tells you if you answered correctly or not. In the contries page there is two button on each country component, one of them brings you to a 'details' page with an interactive map and the others to the quiz page but with only questions that are for that country.

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
The componend ScrollToTop is used to remedy the proble of starting in the middle of the page.

# Running the project

To run the project you simply need to download node module for this react app. And then start my backend code (we use intellij) and run it on port 8080.
Since the package.json is still there you do not need to redownload the libraries used.


# Challenges 

The main problem I encountered was trying to edit what country the question relates to, it is the only part of my project that I failed at. But I am convince that with a bit more time I would have succeeded.

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

A waekness to this array shuffler is explained here : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/18650169#18650169

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
