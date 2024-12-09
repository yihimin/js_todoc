import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleNav from "../components/SimpleNav";
import { DataApiContext } from "../services/DataApiContext";
import PilsaComponent from "../components/PilsaComponent";

const PilsaPage = () => {
  const { id } = useParams();
  const dataApi = useContext(DataApiContext);

  const [book, setBook] = useState(null);
  const [pilsaData, setPilsaData] = useState(null);
  const [userInputs, setUserInputs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await dataApi.getBooks();
        const bookData = books.find((b) => b.id === parseInt(id)) || books[0];
        const pilsa = await dataApi.getSentencesByBookId(parseInt(id));

        setBook(bookData);
        setPilsaData(pilsa);
        if (pilsa && pilsa.texts) {
          setUserInputs(Array(pilsa.texts.length).fill(""));
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
        toast.error(
          "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
        );
      }
    };

    fetchData();
  }, [id, dataApi]);

  if (!book || !pilsaData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className="mb-6">
      <SimpleNav />
      <PilsaComponent
        pilsaData={pilsaData}
        userInputs={userInputs}
        setUserInputs={setUserInputs}
      />
    </div>
  );
};

export default PilsaPage;
