import axios from 'axios';
import { useState } from 'react';
import Modal from '../components/Modal';

const Store = ({ data }) => {
  let itemList = data;

  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0);

  const onModalAlert = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <Modal onOpenAlert={onModalAlert} id={id} />}
      <section>
        <h1 className="tracking-wider pt-6 pr-6	pb-8 uppercase text-indigo-600 text-3xl	font-sans mt-4 pl-9">
          EAT
        </h1>
        <div className="flex h-1 pt-0 pr-9 pl-9">
          <div className="bg-indigo-600 flex-1 w-3"></div>
          <div className="w-3"></div>
          <div className="bg-indigo-600 flex-1 w-3"></div>
        </div>
      </section>

      <section className="mb-8 mt-12 max-w-full">
        <div className="container my-0 mx-auto">
          <h1 className="tracking-wider pt-6 pr-6	pb-8 uppercase text-black-700 text-3xl	font-sans mt-4 pl-9">
            EAT
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {itemList.map((content) => {
              return (
                <img
                  key={content.id}
                  src={content.image}
                  className="w-40 h-40 object-cover rounded-md"
                  alt="image"
                  onClick={() => {
                    setId(content.id);
                    setModal(!modal);
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:9000/stores`);
  const data = response.data;

  return { props: { data } };
};

export default Store;
