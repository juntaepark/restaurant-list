import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Modal = ({ id, onOpenAlert }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:9000/stores/${id}`);
      setItem(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="modal fixed flex items-center justify-center inset-0 w-full h-full bg-gray-100/60 overflow-y-auto overflow-x-hidden">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={onOpenAlert}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="flex items-center p-6 space-y-6">
              <img
                src={item.image}
                className="w-50 h-60 object-cover rounded-md"
                alt="image"
              />
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 whitespace-pre-wrap	">
                {item.description && item.description}
                <br />
                {item.url && (
                  <a className="text-blue-700" href={item.url} target="_blank">
                    홈페이지 바로가기
                  </a>
                )}
              </p>
              //{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
