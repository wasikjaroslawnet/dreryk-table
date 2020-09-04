This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description of the task

- [x] The user wants to view text data in tabular form.
- [x] The table should consist of from one header row and multiple data rows.
- [x] The columns in the table have a specific width.
- [x] The columns may not fit on the screen and user will want to use a horizontal scroll.
- [x] The last column of data is some kind of summary of a given row and the user wants it to be always visible
  - [x] The column is not subject to the rules of horizontal shifting and does not obscure the other columns
  - [x] If the table fits completely into the screen, the column behaves like the other columns and is an integral part of table.
- [ ] After clicking on the table header, the data are sorted alphabetically by the values in the clicked column.
  - [ ] The operation is performed by animating the appearance of sorted data.

## Technical requirements

- Create react app
- TypeScript
- Styled components

- The table component should take as parameters:
  - [ ] column configuration - each column is described by the displayed name and width
  - [ ] data - text, static data, which are displayed in individual table cells

## How to start application

You must have node.js installed.

In the project directory, you can run:

### `yarn`

Install all the dependencies needed to run the project.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
