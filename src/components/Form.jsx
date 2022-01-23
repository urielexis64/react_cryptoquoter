import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import {currencies} from "../data/currencies";

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.2s;
	margin-top: 30px;

	&:hover {
		background-color: #7a7bfe;
	}
`;

const Form = () => {
	const [cryptos, setCryptos] = useState([]);
	const [currency, SelectCurrency] = useSelectCurrency("Select your currency", currencies);
	const [cryptocurrency, SelectCryptocurrency] = useSelectCurrency(
		"Select your cryptocurrency",
		cryptos
	);

	useEffect(() => {
		const getAPI = async () => {
			const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);

			const cryptos = data.Data.map((crypto) => ({
				id: crypto.CoinInfo.Name,
				name: crypto.CoinInfo.FullName,
			}));

			setCryptos(cryptos);
		};
		getAPI();
	}, []);

	return (
		<form>
			<SelectCurrency />
			<SelectCryptocurrency />
			<InputSubmit type='submit' value='Quote' />
		</form>
	);
};

export default Form;
