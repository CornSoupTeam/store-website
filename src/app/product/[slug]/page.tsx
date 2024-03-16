
export default function Example() {

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6">
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl my-4">[11.25~] 크리스마스 기념 이모지 🎄</h1>
            
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            

              />
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900 font-bold">10,000포인트</p>

            <form >
              
              <div>
                {/* <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div> */}
                </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                구매하기
              </button>
            </form>
          </div>

          <div className="mt-4 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <h3 className="text-xl font-medium text-gray-900">해당 상품은 현재 구매가 불가능합니다.</h3>


          </div>
        </div>
      </div>
    </div>
  )
}
