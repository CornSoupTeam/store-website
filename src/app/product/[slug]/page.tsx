import { useParams } from 'next/navigation'
import { headers } from "next/headers"

export type ProductType = {
  name: string;
  price: number;
  imgurl: string;
  count: number;
  text: string;
};
type Params = {
  slug: string
}
export async function getData(id : number) {
  
  const res = await fetch(
    `http://localhost:3000/api/product/${id}`, {cache: "no-cache"}
  );
  
  const data = await res.json();
  // console.log(data); // 데이터 확인용 로그
  console.log(data.resultArray)

  return data.resultArray;
}

export default async function Example(context: { params: Params }) {
  const id = context.params.slug;
  const response: ProductType[] = await getData(Number(id))
  
  if (!Array.isArray(response)) {
    console.error('데이터가 배열 형태가 아닙니다.');
    return null;
  }

// ...
const handleClick = async () => {
  try {
  const GET = await fetch(("api/projects"), {
    method: "GET",
    headers: headers()
  })
  const data = await GET.json()
      // Update state with response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="bg-white min-h-screen">
                  {response.map((product, index) => (
  <div key={index} className="p-6">
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl my-4">{product.name}</h1>
        <img src={product.imgurl} />
      </div>

      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <p className="text-3xl tracking-tight text-gray-900 font-bold">{product.price}</p>
        <form>
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
        <h3 className="text-xl font-medium text-gray-900">{product.text}</h3>
      </div>
    </div>
  </div>
))}


    </div>
  )
}
