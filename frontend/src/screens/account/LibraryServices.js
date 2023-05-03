import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { Header, Message, Spinner } from "../../components";
import { FaChevronDown } from "react-icons/fa";
import "./styles.css";
import useBooksJournalsHook from "../../api/books";

const LibraryServices = () => {
  const { getBooks } = useBooksJournalsHook({});
  const { data, isLoading, isError, error } = getBooks;
  const [booksData, setBooksData] = useState([]);
  const [filteredBooksData, setFilteredBooksData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [bookName, setBookName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      setBooksData(data.data);
    }
  }, [isLoading, data]);

  const handleSelectChange = (event) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
  };

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const onSearch = () => {
    const filteredBooks = booksData.filter((book) => {
      if (
        selectedOptions.length > 0 &&
        !selectedOptions.includes(book.bookType)
      ) {
        return false;
      }

      if (
        bookName !== "" &&
        !book.bookDetails.toLowerCase().includes(bookName.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    setFilteredBooksData(filteredBooks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Library Services</title>
        <meta property="og:title" content="Library Services" key="title" />
      </Helmet>
      {isError && <Message variant="danger">{error}</Message>}
      <Header heading="Library Services" showCollapse={true} rightText="Note: All e-books and hard copies available at The Great University are free for enrolled students">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-4">
              <div className="form-group">
                <div className="form-group d-flex justify-content-between">
                  <label htmlFor="multi-select" className="form-label">
                    Select multiple options
                  </label>
                  <span className=" border-0">
                    <FaChevronDown />
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <select
                      className="form-control"
                      id="multi-select"
                      multiple
                      onChange={handleSelectChange}
                    >
                      <option value="Books">Books</option>
                      <option value="Journals">Journals</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control "
                id="name"
                placeholder="Enter your search word"
                value={bookName}
                onChange={handleBookNameChange}
              />
              <div className="form-group text-center mt-3">
                <button
                  onClick={onSearch}
                  type="submit"
                  className="btn btn-primary bg-skyBlue mb-5"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Header heading="Results" showCollapse={true} showHeading={false}>
        <div className="container results">
          <div className="row justify-content-md-center">
            <div className="col-md-8 border-skyblue p-3">
              {filteredBooksData?.map((book, i) => (
                <div key={i} onClick={()=>setSelectedBook(book._id)} className={`bookItem ${selectedBook === book._id  && "bg-warning bg-gradient"} p-2`}>
                  <p className="text-skyBlue fs-7 fw-bold">{book.bookType}</p>
                  <p className="fs-7 fw-bold s">{book.bookDetails}</p>
                  <p className="fs-7 fw-bold">{book.subject}</p>
                </div>
              ))}
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 border-skyblue p-3">
              <p className="text-skyBlue fs-7 fw-bold pb-4">
                Rent Selected Item
              </p>
              <div className="d-flex flex-direction">
                <div className="w-50 pr-1">
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    dateFormat="MM-dd-yyyy"
                    isClearable
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    todayButton="Today"
                  />
                </div>
                <div className="w-50 pl-1">
                  <DatePicker
                    className="form-control"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="End Date"
                    dateFormat="MM-dd-yyyy"
                    isClearable
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    todayButton="Today"
                  />
                </div>
              </div>
              <div className="form-group text-center mt-3">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary bg-skyBlue mb-5"
                >
                  Rent
                </button>
              </div>
              {success && (
                <div className="text-center">
                  <p className="text-success font-italic">Success!!</p>
                  <p className="text-success font-italic">
                    Please collect your book from the library
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default LibraryServices;
