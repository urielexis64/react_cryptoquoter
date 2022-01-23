import styled from "@emotion/styled";

const Container = styled.div`
	color: #fff;
	font-family: "Lato", sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-top: 2rem;
`;

const Image = styled.img`
	width: 120px;
	display: block;
`;

const Text = styled.p`
	font-size: 16px;
	span {
		font-weight: 700;
	}
`;
const Price = styled.p`
	font-size: 24px;
	span {
		font-weight: 700;
	}
`;

const Result = ({result}) => {
	const {PRICE, LOWDAY, HIGHDAY, IMAGEURL, LASTUPDATE, CHANGEPCT24HOUR} = result;

	return (
		<Container>
			<Image src={`https://www.cryptocompare.com/${IMAGEURL}`} alt='imagen crypto' />
			<div>
				<Price>
					Price: <span>{PRICE}</span>
				</Price>
				<Text>
					High Day Price: <span>{HIGHDAY}</span>
				</Text>
				<Text>
					Low Day Price: <span>{LOWDAY}</span>
				</Text>
				<Text>
					Variation Last 24 hours: <span>{CHANGEPCT24HOUR}</span>
				</Text>
				<Text>
					Last Update: <span>{LASTUPDATE}</span>
				</Text>
			</div>
		</Container>
	);
};

export default Result;
