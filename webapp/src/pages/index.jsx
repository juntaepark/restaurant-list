const Home = () => {
  return (
    <>
      <section className="container mb-8 mt-12 max-w-full">
        <img src="c-main-image.jpeg" className="max-w-full h-auto" alt="..." />
      </section>
      <section className="container max-w-full mb-8 mt-12 text-center">
        <div className="mb-6">
          <h1 className="text-3xl	text-indigo-400 mb-8">
            STREET YOUTH CULTURE{' '}
          </h1>
          <p className="text-sm	mb-12">
            200개의 컨테이너로 구성된 국내 최대 컨테이너 팝업 쇼핑몰
            커먼그라운드에서는
            <br />
            색다른 쇼핑의 재미와 다양한 미식 브랜드들을 만나보실 수 있습니다.
            <br />
            젊고 유니크한 CULTURE를 향유하는 YOUTH를 위한 복합문화공간,
            <br />
            커먼그라운드에서 기존의 쇼핑몰에서 느낄 수 없었던 다채로운 즐거움을
            경험해보세요.
          </p>
        </div>
      </section>
      <section className="max-w-full mt-12 text-gray-500 text-sm bg-gray-100">
        <div className="container flex m-auto justify-center items-center p-6	text-right">
          <div className="p-6">
            <img
              src="c-main-culture.png"
              className="max-w-full h-auto"
              alt="culture"
            />
            <p className="mt-4">CULTURE</p>
          </div>
          <div className="p-6">
            <img
              src="c-main-select-shop.png"
              className="max-w-full h-auto"
              alt="select-shop"
            />
            <p className="mt-4">SELECT SHOP</p>
          </div>
          <div className="p-6">
            <img
              src="c-main-shop-cafe.png"
              className="max-w-full h-auto"
              alt="shop-cafe"
            />
            <p className="mt-4">CAFE & RESTAURANTS</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
