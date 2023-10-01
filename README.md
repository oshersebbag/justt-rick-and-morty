# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Solution

In this Hone assignment I've used React, typscript, Material ui, Axios Hooks to provide my solution.

at first we render our header and menu, using MUI tabs I've build the desired "look" from figma and I render our serch bars according to the users choice, with a default value of "browse" (or SearchName).

### SearchName
using UseAxios hook we fire a fetch request and showing the first 20 charchters to the user (same for user who search for empty string)
useAxios allows us to handle different states of our request - loading, error and data
we render the status with our prebuilt VisualStatus components (for error, loadind, fallback)
and data is rendered according to the assignment requiremnments in the CharactersTable component.

### SearchId
at first we indicate that the user needs to search for an Id using the SearchToView VisualStatu component,
using UseAxios hook we fire a fetch request for a specific Id, and we don't allow empty string.
as SearchName useAxios allows us to use - loading, error and data.
and data is rendered according to the assignment requiremnments in the CharacterCard component.

### CharactersTable

CharactersTable is our main component to display query data from "browse", I styled the table from the figma requirenment and allowed sorting by Id, collapsable CharacterCard component, defined a height for the table for cases in which the user gets many results (scrolling will show), and if we check if the Data recived from our search has only 1, we pre-open the collapsable component.
to allow individual collapsable I've created the table's Row in a different component using it's own "open"<boolean> state.

### Contact me

for any question im here!

mail: osher.sebbag@tikalk.com
phone: +972528468462


