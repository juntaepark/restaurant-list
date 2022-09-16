import axios from 'axios';

const Store = ({ data }) => {
  let itemList = data;

  return (
    <>
      <div>
        <h1 className="tracking-wider pt-0 pr-7	pb-6 uppercase text-indigo-600 text-3xl	font-sans mt-2 pl-9">
          EAT
        </h1>
        <div class="flex h-1 pt-0 pr-9 pl-9">
          <div className="bg-indigo-600 flex-1 w-3"></div>
          <div className="w-3"></div>
          <div className="bg-indigo-600 flex-1 w-3"></div>
        </div>
      </div>
      <div className="grid">
        {itemList.map((data) => {
          return <div>${data.image}</div>;
        })}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:9000/stores`);
  const data = response.data;

  return { props: { data } };
};

export default Store;
