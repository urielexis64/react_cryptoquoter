import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import CryptoImage from "./img/imagen-criptos.png";
import Form from "./components/Form";
import Result from "./components/Result";

const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Image = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`;

const Heading = styled.h1`
	font-family: "Lato", sans-serif;
	color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after {
		content: "";
		display: block;
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
		margin: 10px auto 0 auto;
	}
`;

function App() {
	const [currencies, setCurrencies] = useState({});
	const [result, setResult] = useState({});

	useEffect(() => {
		if (Object.keys(currencies).length) {
			const quoteCrypto = async () => {
				const {currency, cryptocurrency} = currencies;
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
				const res = await fetch(url);
				const data = await res.json();

				setResult(data.DISPLAY[cryptocurrency][currency]);
			};

			quoteCrypto();
		}
	}, [currencies]);

	return (
		<Container>
			<Image src={CryptoImage} alt='imagen criptomonedas' />
			<div>
				<Heading>Trade cryptocurrencies instantly</Heading>
				<Form setCurrencies={setCurrencies} />
				{Object.keys(result).length && <Result result={result} />}
			</div>
		</Container>
	);
}

export default App;
