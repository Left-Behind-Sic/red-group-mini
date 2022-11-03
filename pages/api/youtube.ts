import { NextApiRequest, NextApiResponse } from "next";

const getString = (initialText: string, start: string, end: string) => {
	const from = initialText.indexOf(start);
	const to = initialText.indexOf(end);

	return initialText.substring(from, to).replace(start, "");
};

const parseFirstVideo = async (name: string) => {
	const data = await fetch(`https://www.youtube.com/c/${name}/videos`);
	const result = await data.text();

	const title = getString(
		result,
		'"title":{"runs":[{"text":"',
		'"}],"accessibility":'
	);

	const videoId = getString(
		result,
		'"gridVideoRenderer":{"videoId":"',
		'","thumbnail":'
	);

	const thumbnail = getString(result, '{"thumbnails":[{"url":"', '","width"');

	return { title, videoId, thumbnail };
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const result = [
		await parseFirstVideo("REDGroup"),
		await parseFirstVideo("MaxShushval"),
	];
	res.status(200).json(result);
}
