import axios from 'axios';

const Home = (props) => {
  let itemList = props.data;

  return (
    <>
      <section className="containe mb-8 mt-24 border-b border-gray-200">
        <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-indigo-500">
          This is a list of restaurants introduced in the Michelin Guide.
        </h5>
      </section>
      {itemList.map((data) => {
        return <div>${data.image}</div>;
      })}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:9000/stores`);
  const data = response.data;

  return { props: { data } };
};

export default Home;
