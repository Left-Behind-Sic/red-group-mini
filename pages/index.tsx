import axios from "axios";
import Home from "../app/components/screens/home/Home";
import { API_URL } from "../app/constants";
import { ILinks } from "../app/interfaces/ILinks";
import { IMe } from "../app/interfaces/IMe";

interface Props {
	links: ILinks[];
	me: IMe;
}

export default function HomePage({ links, me }: Props) {
	return <Home links={links} me={me} />;
}

export const getStaticProps = async () => {
	const links = await axios
		.get<ILinks[]>(`${API_URL}/links`)
		.then(({ data }) => data);
	const me = await axios.get<IMe>(`${API_URL}/me`).then(({ data }) => data);

	return {
		props: {
			links,
			me,
		},
		revalidate: 60,
	};
};
