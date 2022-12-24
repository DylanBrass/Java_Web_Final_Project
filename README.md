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

