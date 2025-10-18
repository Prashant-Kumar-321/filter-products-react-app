import products from "./db/products";
import Product from "./components/Product";
import filterReducer from "./reducers/filterReducer";
import { useReducer } from "react";

const App = () => {
	const initialFilterState = {
		price: 0,
		discount: 0,
		rating: 0,
	}

	const [filters, dispatch] = useReducer(filterReducer, initialFilterState)

	const handlePriceChange = event =>{
		const action = {
			type: 'PRICE',
			payload: Number(event.target.value)
		}

		dispatch(action)
	}

	const handleDiscountChange = event =>{
		const action = {
			type: 'DISCOUNT',
			payload: Number(event.target.value)
		}

		dispatch(action)
	}

	const handleRatingChange = event =>{
		const action = {
			type: 'RATING',
			payload: Number(event.target.value)
		}

		dispatch(action)
	}

	const getFilteredProduct = () => {
		const priceFilteredProducts = filters.price > 0 ? products.filter(({price}) => price <= filters.price) : products

		const discountFilteredProducts = filters.discount > 0 ? priceFilteredProducts.filter(({discount})=>discount >= filters.discount) : priceFilteredProducts

		const ratingFilteredProducts = filters.rating > 0 ? discountFilteredProducts.filter(({rating})=>rating >= filters.rating) : discountFilteredProducts

		return ratingFilteredProducts
	}


	return (
		<div className="p-8">
			
			{/* Filter container */}
			<div className="space-y-5">

				<h2  className="font-bold text-2xl">
					Product Filters
				</h2>

				{/* Filters */}
				<div className="flex gap-5 items-center">

					{/* Price filter container */}
					<div className="flex flex-col gap-3">
						<h3
							className="font-bold text-2xl"
						>
							Price:
						</h3>

						<input 
							onChange={handlePriceChange}
							type="text" 
							name="price" 
							id="price"
							placeholder="Price" 
							className="border-[1px] border-gray-400 rounded-md outline-none px-2 py-1"
						/>
					</div>

					{/* Discount filter container */}
					<div
						className="flex flex-col gap-3"
					>
						<h3
							className="font-bold text-2xl"
						>Discount:</h3>
						<input 
							onChange={handleDiscountChange}
							type="text" 
							name="discount" 
							id="price" 
							placeholder="Discount"
							className="border-[1px] border-gray-400 rounded-md outline-none px-2 py-1"
						/>

					</div>

					{/* Rating filter container */}
					<div className="flex flex-col gap-3">
						<h3	className="font-bold text-2xl">
							Rating:
						</h3>

						<input 
							onChange={handleRatingChange}
							type="text" 
							name="rating" 
							id="price" 
							placeholder="Rating"
							className="border-[1px] border-gray-400 rounded-md outline-none px-2 py-1"
						/>
					</div>
				</div>

			</div>

			{/* Products */}

			<section
				className="mt-10 grid grid-cols-4 gap-5"
			>
				{
					getFilteredProduct().map(product => (
						<Product key={product.id} product={product} />
					))
				}
			</section>


		</div>
	);
};


export default App;
