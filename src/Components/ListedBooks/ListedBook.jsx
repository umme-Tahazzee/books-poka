import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router-dom";
import { getStoreReadList } from "../../Utility/addDbTo";
import { useState, useEffect } from "react";
import Book from "../Book/Book";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const [value, setValue] = React.useState("one"); // initialize state

  const handleChange = (event, newValue) => {
    setValue(newValue); // update the selected tab
  };

  return (
    <Tabs className="font-sans">
      <TabList>
        <Tab>Read List</Tab>
        <Tab>Wish List</Tab>
      </TabList>

      <TabPanel>
        <h2 className="text-2xl">Books I read: {readList.length}</h2>
        {
          readList.map((book)=> <Book key={book.bookId} book={book} /> )
        }
      </TabPanel>
      <TabPanel>
        <h2 className="text-2xl">My wish list</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ListedBook;
